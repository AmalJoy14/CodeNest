export async function fetchLeaderboardData(platform) {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
  
    // Generate mock data
    return Array.from({ length: 10 }, (_, i) => ({
      username: `${platform.toLowerCase()}_user_${i + 1}`,
      contestRating: Math.floor(Math.random() * 1000) + 1000,
      problemsSolved: Math.floor(Math.random() * 500) + 100,
    }))
  }
  
  