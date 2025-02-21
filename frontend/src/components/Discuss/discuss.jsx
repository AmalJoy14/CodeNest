import { useState , useEffect} from "react"
import Header from "../Header"
import Footer from "../Footer"
import styles from "./discuss.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp , faThumbsDown , faComment , faUser} from "@fortawesome/free-regular-svg-icons"
import { faPlus , faTrash , faPaperPlane , faCaretDown , faCaretUp , faCalendarDays, faThumbsUp as faThumbsUpSolid , faThumbsDown as faThumbsDownSolid} from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import axios from 'axios';
import Loader from "../loader";
import noProfileImage from "../../assets/noProfileImage.png";

export default function DiscussPage() {
  
  const [showNewTopicForm, setShowNewTopicForm] = useState(false)
  const [newTopicTitle, setNewTopicTitle] = useState("")
  const [newTopicContent, setNewTopicContent] = useState("")
  const [discussions, setDiscussions] = useState([])
  const [expandedPost, setExpandedPost] = useState(null);
  const [expandedComment, setExpandedComment] = useState(false);
  const [userId, setUserId] = useState(null);
  const [newCommentContent, setNewCommentContent] = useState("");
  const [commentingPostId, setCommentingPostId] = useState(null);
  const [userImages, setUserImages] = useState({});

  const toggleExpand = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const fetchDiscussions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/discuss/getPosts', { withCredentials: true });
      setDiscussions(response.data.posts);
      setUserId(response.data.userId); 
    } catch (error) {
      console.error("Error fetching discussions:", error);
    }
  };
  
  
  useEffect(() => {
    fetchDiscussions();
  }, []);

  const fetchUserImage = async (userId) => {
    if (userImages[userId]) return; // Avoid duplicate requests
  
    try {
      const response = await axios.get(`http://localhost:3000/discuss/${userId}/getImage`, {
        withCredentials: true,
      });
      setUserImages((prev) => ({ ...prev, [userId]: response.data.imageUrl }));
    } catch (error) {
      console.error("Error fetching user image:", error);
      setUserImages((prev) => ({ ...prev, [userId]: null })); // Fallback if failed
    }
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const commentDate = new Date(date);
    const diffMs = now - commentDate;
  
    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    return `${minutes} min${minutes > 1 ? 's' : ''} ago`;
  };
  
  useEffect(() => {
    discussions.forEach(post => {
      post.comments.forEach(comment => fetchUserImage(comment.userId?._id));
    });
  }, [discussions]);

  const handleLike = async (postId) => {
    try {
      await axios.post(`http://localhost:3000/discuss/${postId}/like`, {}, { withCredentials: true });
      setDiscussions((prevDiscussions) =>
        prevDiscussions.map((post) =>
          post._id === postId
            ? {
                ...post,
                likes: post.likes.includes(userId)
                  ? post.likes.filter((id) => id !== userId)
                  : [...post.likes, userId],
                dislikes: post.dislikes.filter((id) => id !== userId), 
              }
            : post
        )
      );
    } catch (error) {
      console.error("Error while liking post:", error);
    }
  };
  
  const handleDislike = async (postId) => {
    try {
      await axios.post(`http://localhost:3000/discuss/${postId}/dislike`, {}, { withCredentials: true });
      setDiscussions((prevDiscussions) =>
        prevDiscussions.map((post) =>
          post._id === postId
            ? {
                ...post,
                dislikes: post.dislikes.includes(userId)
                  ? post.dislikes.filter((id) => id !== userId)
                  : [...post.dislikes, userId],
                likes: post.likes.filter((id) => id !== userId), // Remove like if exists
              }
            : post
        )
      );
    } catch (error) {
      console.error("Error while disliking post:", error);
    }
  };

  const handleCommentSubmit = async (postId) => {
    if (!newCommentContent.trim()) return;
  
    try {
      const response = await axios.post(
        `http://localhost:3000/discuss/${postId}/comment`,
        { content: newCommentContent },
        { withCredentials: true }
      );
  
      if (response.status === 200) {
        setNewCommentContent("");
        fetchDiscussions();
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };


  const handleNewTopic = async (e) => {
    e.preventDefault();

    if (newTopicTitle.trim() && newTopicContent.trim()) {
      try {
        const response = await axios.post('http://localhost:3000/discuss/createPost',{title: newTopicTitle, content: newTopicContent},{ withCredentials: true});

        if (response.status === 200) {
          setNewTopicTitle("");
          setNewTopicContent("");
          setShowNewTopicForm(false);
          fetchDiscussions();
        } else {
          console.error("Failed to create post");
        }
      } catch (error) {
        console.error("Error while creating post:", error);
      }
    }
  };

  if (!discussions) return <Loader/>;

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Discuss</h1>
        <div className={styles.newTopicSection}>

            <button onClick={() => setShowNewTopicForm(!showNewTopicForm)} className={styles.btnPrimary}>
            <FontAwesomeIcon icon={showNewTopicForm ? faTrash : faPlus} />
            </button>
          {showNewTopicForm  && (
            <motion.form
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onSubmit={handleNewTopic}
              className={styles.newTopicForm}
            >
                <input
                  type="text"
                  placeholder="Enter topic title ..."
                  value={newTopicTitle}
                  onChange={(e) => setNewTopicTitle(e.target.value)}
                  required
                  className={styles.input}
                />
                <textarea
                  placeholder="Enter content ..."
                  value={newTopicContent}
                  onChange={(e) => setNewTopicContent(e.target.value)}
                  required
                  className={styles.textarea}
                />
                <div className={styles.formButtons}>
                  <button type="button" onClick={() => setShowNewTopicForm(false)} className={`${styles.btnSecondary} ${styles.btn}`}>
                    Cancel
                  </button>
                  <button type="submit" className={`${styles.submit} ${styles.btn}`}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </div>
            </motion.form>
          )}
        </div>
        <div className={styles.discussionBox}>
          <ul className={styles.discussionList}>
            {discussions.map((post) => {
              const index = post.content.indexOf("\n", post.content.indexOf("\n") + 1);
              const cutoff = index !== -1 && index < 70 ? index : 70;

              const hasLiked = post.likes.some((id) => id === userId);
              const hasDisliked = post.dislikes.some((id) => id === userId);

              return ( 
              <li key={post._id}  className={styles.discussionItem}>
                <div className={styles.discussionContentBox}>
                  <div onClick={() => expandedPost !== post._id && (toggleExpand(post._id), setExpandedComment(false))}>
                    <h3 className={styles.discussionTitle}>{post.title}</h3>
                    <p className={styles.discussionContent}>
                      {expandedPost === post._id
                        ? post.content 
                        : post.content.substring(0, cutoff) + (cutoff < post.content.length ? "..." : "")}
                    </p>
                  </div>

                  {expandedPost !== post._id && (
                    <div className={styles.discussionDetails}>
                      <span style={{ minWidth: '150px', display: 'inline-block' }} className={styles.detailItem}>By {post.userId?.username || "Unknown"}</span>
                      <span className={styles.detailItem}>{post.comments.length} comments</span>
                      <span>{post.likes.length - post.dislikes.length} upvotes</span>
                      <p className={styles.createdDateBox}>
                        <FontAwesomeIcon icon={faCalendarDays} />{new Date(post.dateCreated).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                  )}
                  {expandedPost === post._id && (
                    <div>
                      <div className={styles.selectedPostOptions}>                    
                        <div className={styles.voteSection}>
                          <button onClick={() => handleLike(post._id)} className={hasLiked ? styles.activeLike : styles.upvoteBtn}><FontAwesomeIcon icon={hasLiked ? faThumbsUpSolid : faThumbsUp} /><p>{ post.likes.length}</p></button> 
                          <button onClick={() => handleDislike(post._id)} className={hasDisliked ? styles.activeDislike : styles.downvoteBtn}><FontAwesomeIcon icon={hasDisliked ? faThumbsDownSolid : faThumbsDown} /><p>{ post.dislikes.length}</p></button>
                        </div>
                        <button onClick={() => setExpandedComment((prev) => !prev)} className={styles.commentBtn}><FontAwesomeIcon icon={faComment} /><p>{ post.comments.length}</p></button>
                        <p style={{ minWidth: '150px' }} className={styles.selectedUserBox}>
                          <FontAwesomeIcon icon={faUser} />{post.userId?.username || "Unknown"}
                        </p>
                        <p className={styles.createdDateBox}>
                          <FontAwesomeIcon icon={faCalendarDays} />{new Date(post.dateCreated).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                      </div>
                      {expandedComment && (
                      <div className={styles.commentSectionContainer}>
                        <div className={styles.commentSection}>
                          <div className={styles.commentInputBox}>
                            <textarea type="text" placeholder="Enter comment ..." value={commentingPostId === post._id ? newCommentContent : ""} onChange={(e) => { setCommentingPostId(post._id); setNewCommentContent(e.target.value); }} className={styles.commentInput} />
                            <div className={styles.commentButtons}>
                              <button onClick={() => setExpandedComment((prev) => !prev)} className={styles.commentCancelBtn}>Cancel</button>
                              <button onClick={() => handleCommentSubmit(post._id)} className={styles.commentBoxBtn}>
                                Comment
                              </button>
                            </div>
                          </div>
                        </div>
                        <ul>
                        {post.comments.slice().reverse().map((comment) => (
                          <li key={comment._id} className={styles.commentItem}>
                            <div className={styles.avatar}>
                              <img
                                src={userImages[comment.userId?._id] || noProfileImage}
                                onError={(e) => (e.target.src = noProfileImage)}
                                className={styles.avatarImage}
                                alt="User Avatar"
                              />
                            </div>
                            <strong>{comment.userId?.username || "Unknown"}</strong>
                            <p>{comment.content}</p>
                            <div className={styles.daysAgo}>{formatTimeAgo(comment.date)}</div>
                          </li>
                        ))}
                        </ul>
                      </div>
                      )}
                    </div>                
                  )}
                </div>
                <div className={styles.viewDiscussion}>
                  <button onClick={() => {toggleExpand(post._id); setExpandedComment(false)}} className={styles.caretDown}><FontAwesomeIcon className={styles.caretIcon} style={{ filter: "drop-shadow(1.95px 2.95px 2.8px rgba(0, 0, 1, 0.35))" }} icon={expandedPost === post._id ? faCaretUp : faCaretDown} /></button>
                </div>
              </li>
            )})}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
