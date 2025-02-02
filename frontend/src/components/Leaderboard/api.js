import Axios from 'axios';

export async function fetchLeaderboardData(platform) {
  try {
    let url = "";
    
    if (platform === "LeetCode") {
      url = "http://localhost:3000/leaderboard/leetcode"; 
    } else if (platform === "Codeforces") {
      url = "http://localhost:3000/leaderboard/codeforces";
    } 
    else if(platform === "CodeNest"){
      url = "http://localhost:3000/leaderboard/codenest";
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

  
  