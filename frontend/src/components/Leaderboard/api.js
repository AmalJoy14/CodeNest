import Axios from 'axios';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";


export async function fetchLeaderboardData(platform) {
  try {
    let url = "";
    
    if (platform === "LeetCode") {
      url = `${BACKEND_URL}/leaderboard/leetcode`; 
    } else if (platform === "Codeforces") {
      url = `${BACKEND_URL}/leaderboard/codeforces`;
    } 
    else if(platform === "CodeNest"){
      url = `${BACKEND_URL}/leaderboard/codenest`;
    }
    else {
      throw new Error("Unsupported platform");
    }

    const response = await Axios.get(url, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    throw error;
  }
}

  
  