"use client"

import { useState } from "react"
import CodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import styles from "./QuestionPage.module.css"

const sampleQuestion = {
  title: "Two Sum",
  difficulty: "Easy",
  acceptanceRate: "47.5%",
  description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.`,
  defaultCode: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    
}`,
  testCases: [
    {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
  ],
}

export default function QuestionPage() {
  const [code, setCode] = useState(sampleQuestion.defaultCode)
  const [testResults, setTestResults] = useState(null)

  const handleCodeChange = (value) => {
    setCode(value)
  }

  const handleRunCode = () => {
    // Implement code execution logic here
    console.log("Running code:", code)
    setTestResults({
      status: "success",
      output: "[0,1]",
      runtime: "76 ms",
      memory: "42.1 MB",
    })
  }

  const handleSubmit = () => {
    // Implement submission logic here
    console.log("Submitting code:", code)
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.problemHeader}>
          <h1 className={styles.title}>{sampleQuestion.title}</h1>
          <span className={`${styles.difficulty} ${styles[sampleQuestion.difficulty]}`}>
            {sampleQuestion.difficulty}
          </span>
          <span className={styles.acceptanceRate}>Acceptance Rate: {sampleQuestion.acceptanceRate}</span>
        </div>

        <div className={styles.description}>{sampleQuestion.description}</div>

        <div className={styles.testcaseSection}>
          <h3 className={styles.testcaseHeader}>Example Test Cases:</h3>
          {sampleQuestion.testCases.map((testCase, index) => (
            <div key={index} className={styles.testcaseContent}>
              <div className={styles.testcaseItem}>
                <div className={styles.testcaseLabel}>Input:</div>
                <div className={styles.testcaseValue}>{testCase.input}</div>
              </div>
              <div className={styles.testcaseItem}>
                <div className={styles.testcaseLabel}>Output:</div>
                <div className={styles.testcaseValue}>{testCase.output}</div>
              </div>
              {testCase.explanation && (
                <div className={styles.testcaseItem}>
                  <div className={styles.testcaseLabel}>Explanation:</div>
                  <div className={styles.testcaseValue}>{testCase.explanation}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.buttonContainer}>
          <button className={`${styles.button} ${styles.runButton}`} onClick={handleRunCode}>
            Run Code
          </button>
          <button className={`${styles.button} ${styles.submitButton}`} onClick={handleSubmit}>
            Submit
          </button>
        </div>

        <div className={styles.editorContainer}>
          <CodeMirror
            value={code}
            height="100%"
            theme="dark"
            extensions={[javascript({ jsx: true })]}
            onChange={handleCodeChange}
            options={{
              lineNumbers: true,
              mode: "javascript",
              theme: "material",
              lineWrapping: true,
              smartIndent: true,
              lint: true,
            }}
          />
        </div>

        {testResults && (
          <div className={styles.testcaseSection}>
            <h3 className={styles.testcaseHeader}>Test Results:</h3>
            <div className={styles.testcaseContent}>
              <div className={styles.testcaseItem}>
                <div className={styles.testcaseLabel}>Status:</div>
                <div className={styles.testcaseValue}>{testResults.status}</div>
              </div>
              <div className={styles.testcaseItem}>
                <div className={styles.testcaseLabel}>Output:</div>
                <div className={styles.testcaseValue}>{testResults.output}</div>
              </div>
              <div className={styles.testcaseItem}>
                <div className={styles.testcaseLabel}>Runtime:</div>
                <div className={styles.testcaseValue}>{testResults.runtime}</div>
              </div>
              <div className={styles.testcaseItem}>
                <div className={styles.testcaseLabel}>Memory:</div>
                <div className={styles.testcaseValue}>{testResults.memory}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

