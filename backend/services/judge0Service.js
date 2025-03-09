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
    const apiKey = process.env.JUDGE0_API_KEY; 

    if (!testCases[problemId] || !Array.isArray(testCases[problemId])) {
      throw new Error(`No test cases found for problemId: ${problemId}`);
    }

    // Prepare submissions for batch request
    const submissions = testCases[problemId].map(({ input, output } ) => ({
      source_code: code,
      language_id: languageMapping[language],
      stdin: input,
      expected_output : output,
      cpu_time_limit: 1,
      memory_limit: 262144,
    }));

    const {data} = await axios.post(
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

    const tokens = data.map((item) => item.token);


    return await pollJudge0Results(tokens, apiKey);
}


async function pollJudge0Results(tokens, apiKey) {
  while (true) {
    await new Promise((res) => setTimeout(res, 1000)); 

    const response = await axios.get(
      `${JUDGE0_API_URL}/batch?tokens=${tokens.join(",")}&base64_encoded=false`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          "X-RapidAPI-Key": apiKey,
        },
      }
    );
    console.log(response.headers);

    if (response.data.submissions.every((res) => res.status.id >= 3)) return response.data; 
  }
}
