import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user', 
    required: true 
  }, 

  title: { 
    type: String, 
    required: true 
  },

  content: { 
    type: String, 
    required: true 
  }, 

  likes: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user'
  }],
  dislikes: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user'
  }],

  comments: [{
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'user', 
      required: true 
    }, 

    content: { 
      type: String, 
      required: true 
    }, 

    date: { 
      type: Date, 
      default: Date.now 
    } 
  }],

  dateCreated: { 
    type: Date, 
    default: Date.now 
  }
});

const Post = mongoose.model('post', postSchema, 'post');

export default Post;
