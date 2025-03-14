const testCases11 = {
    "guess-number-higher-or-lower": [
        {
            id: 1,
            input: "10\n6\n",
            output: "6\n"
        },
        {
            id: 2,
            input: "1\n1\n",
            output: "1\n"
        },
        {
            id: 3,
            input: "2\n1\n",
            output: "1\n"
        },
        {
            id: 4,
            input: "2\n2\n",
            output: "2\n"
        },
        {
            id: 5,
            input: "1000\n500\n",
            output: "500\n"
        },
        {
            id: 6,
            input: "1000\n1\n",
            output: "1\n"
        },
        {
            id: 7,
            input: "1000\n1000\n",
            output: "1000\n"
        },
        {
            id: 8,
            input: "999\n499\n",
            output: "499\n"
        },
        {
            id: 9,
            input: "999\n998\n",
            output: "998\n"
        },
        {
            id: 10,
            input: "2147483647\n1073741823\n",
            output: "1073741823\n"
        }
    ],
    
    "koko-eating-bananas": [
        { "id": 1, "input": "4\n3 6 7 11\n8\n", "output": "4\n" },
        { "id": 2, "input": "5\n30 11 23 4 20\n5\n", "output": "30\n" },
        { "id": 3, "input": "5\n30 11 23 4 20\n6\n", "output": "23\n" },
        { "id": 4, "input": "1\n1000000000\n1000000000\n", "output": "1\n" },
        { "id": 5, "input": "3\n1 1 1\n3\n", "output": "1\n" },
        { "id": 6, "input": "6\n1 2 3 4 5 6\n7\n", "output": "5\n" },
        { "id": 7, "input": "6\n1 2 3 4 5 6\n6\n", "output": "6\n" },
        { "id": 8, "input": "5\n100 200 300 400 500\n10\n", "output": "200\n" },
        { "id": 9, "input": "5\n100 200 300 400 500\n5\n", "output": "500\n" },
        {
            id: 10,
            input: `10000\n${Array(10000).fill(1000000000).join(" ")}\n1000000000\n`,
            output: "10000\n"
        }
    ]
}

export default testCases11;