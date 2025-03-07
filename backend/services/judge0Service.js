import axios from "axios";
import testCases from "../data/testCases.js";

const JUDGE0_API_URL = "https://judge0-ce.p.rapidapi.com/submissions";

const languageMapping = {
  javascript: 63,
  python: 71,
  cpp: 54,
  java: 62,
  go: 60,
  rust: 73,
};

export async function submitCodeToJudge0(code, language , problemId) {
  try {
    const apiKey = process.env.JUDGE0_API_KEY; 

    if (!testCases[problemId] || !Array.isArray(testCases[problemId])) {
      throw new Error(`No test cases found for problemId: ${problemId}`);
    }

    // Prepare submissions for batch request
    const submissions = testCases[problemId].map(({ input, output }) => ({
      source_code: code,
      language_id: languageMapping[language],
      stdin: input,
      expected_output : output,
      cpu_time_limit: 1,
      memory_limit: 65536,
    }));

    const submitResponse = await axios.post(
      `${JUDGE0_API_URL}/batch?base64_encoded=false&wait=true`,
      {submissions },
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          "X-RapidAPI-Key": apiKey, 
        },
      }
    );

    const tokens = submitResponse.data.map((item) => item.token);
    
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds

    // Fetch all results in **one API call** (Judge0 allows batch fetching)
    const resultsResponse = await axios.get(
      `${JUDGE0_API_URL}/batch?tokens=${tokens.join(",")}&base64_encoded=false`,
      {
        headers: {
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          "X-RapidAPI-Key": apiKey,
        },
      }
    );

    return resultsResponse.data;
  } catch (error) {
    console.error("Judge0 API error:", error );
    return null;
  }
}
