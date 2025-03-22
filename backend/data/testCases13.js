const testCases13 = {
    "n-th-tribonacci-number": [
        {
            id: 1,
            input: "0\n",
            output: "0\n"
        },
        {
            id: 2,
            input: "1\n",
            output: "1\n"
        },
        {
            id: 3,
            input: "2\n",
            output: "1\n"
        },
        {
            id: 4,
            input: "3\n",
            output: "2\n"
        },
        {
            id: 5,
            input: "4\n",
            output: "4\n"
        },
        {
            id: 6,
            input: "5\n",
            output: "7\n"
        },
        {
            id: 7,
            input: "10\n",
            output: "149\n"
        },
        {
            id: 8,
            input: "20\n",
            output: "66012\n"
        },
        {
            id: 9,
            input: "25\n",
            output: "1389537\n"
        },
        {
            id: 10,
            input: "37\n",
            output: "2082876103\n"
        }
    ],

    "min-cost-climbing-stairs": [
        { "id": 1, "input": "3\n10 15 20\n", "output": "15\n" },
        { "id": 2, "input": "10\n1 100 1 1 1 100 1 1 100 1\n", "output": "6\n" },
        { "id": 3, "input": "2\n0 0\n", "output": "0\n" },
        { "id": 4, "input": "2\n10 15\n", "output": "10\n" },
        { "id": 5, "input": "5\n0 0 0 0 0\n", "output": "0\n" },
        { "id": 6, "input": "6\n10 15 20 25 30 35\n", "output": "60\n" },
        { "id": 7, "input": "4\n1 2 2 1\n", "output": "3\n" },
        { "id": 8, "input": "6\n10 5 10 5 10 5\n", "output": "15\n" },
        { "id": 9, "input": "7\n2 2 1 3 4 2 2\n", "output": "7\n" },
        { "id": 10, "input": "8\n3 3 4 4 5 5 6 6\n", "output": "18\n" },
        {
            id: 11,
            input: "1000\n" + Array(1000).fill("1").join(" ") + "\n",
            output: "500\n"
        },
        {
            id: 12,
            input: "1000\n" + Array(1000).fill("0").join(" ") + "\n",
            output: "0\n"
        }
    ],

    "house-robber": [
        { "id": 1, "input": "4\n1 2 3 1\n", "output": "4\n" },
        { "id": 2, "input": "5\n2 7 9 3 1\n", "output": "12\n" },
        { "id": 3, "input": "1\n5\n", "output": "5\n" },
        { "id": 4, "input": "2\n2 3\n", "output": "3\n" },
        { "id": 5, "input": "5\n10 1 10 1 10\n", "output": "30\n" },
        { "id": 6, "input": "4\n400 300 200 100\n", "output": "600\n" },
        { "id": 7, "input": "5\n0 0 0 0 0\n", "output": "0\n" },
        { "id": 8, "input": "7\n100 1 1 100 1 1 100\n", "output": "300\n" },
        { "id": 9, "input": "5\n50 150 50 150 50\n", "output": "300\n" },
        { "id": 10, "input": "10\n1 2 3 4 5 6 7 8 9 10\n", "output": "30\n" },
        {
            id: 11,
            input: `100\n${Array.from({ length: 100 }, (_, i) => (i * 4) % 401).join(" ")}\n`,
            output: "10000\n"
        },
        {
            id: 12,
            input: `100\n${Array.from({ length: 100 }, (_, i) => 400 - (i % 2) * 399).join(" ")}\n`,
            output: "20000\n"
        }
    ]


}

export default testCases13;