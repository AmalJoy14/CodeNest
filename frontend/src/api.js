export async function fetchLeaderboardData(platform) {
    // Fetch data from backend
  
    // Generate mock data
    return Array.from({ length: 10 }, (_, i) => ({
      fullname: `${platform} User ${i + 1}`,
      username: `${platform.toLowerCase()}_user_${i + 1}`,
      contestRating: Math.floor(Math.random() * 1000) + 1000,
      problemsSolved: Math.floor(Math.random() * 500) + 100,
    }))
  }
  
  