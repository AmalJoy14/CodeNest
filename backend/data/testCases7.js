const testCases7 = {
    "delete-the-middle-node-of-a-linked-list": [
        { "id": 1, "input": "1\n5\n", "output": "\n" },
        { "id": 2, "input": "2\n2 1\n", "output": "2\n" },
        { "id": 3, "input": "3\n1 3 1\n", "output": "1 1\n" },
        { "id": 4, "input": "4\n1 2 3 4\n", "output": "1 2 4\n" },
        { "id": 5, "input": "5\n1 2 3 4 5\n", "output": "1 2 4 5\n" },
        { "id": 6, "input": "6\n1 2 3 4 5 6\n", "output": "1 2 3 5 6\n" },
        { "id": 7, "input": "7\n1 3 4 7 1 2 6\n", "output": "1 3 4 1 2 6\n" },
        { "id": 8, "input": "8\n1 2 3 4 5 6 7 8\n", "output": "1 2 3 4 6 7 8\n" },
        { "id": 9, "input": "9\n9 8 7 6 5 4 3 2 1\n", "output": "9 8 7 6 4 3 2 1\n" },
        { "id": 10, "input": "10\n1 1 2 2 3 3 4 4 5 5\n", "output": "1 1 2 2 3 4 4 5 5\n" },
        { "id": 11, "input": "5\n1 1 1 1 1\n", "output": "1 1 1 1\n" },
        { "id": 12, "input": "6\n10 20 30 40 50 60\n", "output": "10 20 30 50 60\n" },
        { "id": 13, "input": "6\n60 50 40 30 20 10\n", "output": "60 50 40 20 10\n" },
        { "id": 14, "input": "7\n5 3 8 2 7 4 9\n", "output": "5 3 8 7 4 9\n" },
        { "id": 15, "input": "8\n1 2 1 2 1 2 1 2\n", "output": "1 2 1 2 2 1 2\n" },
        { "id": 16, "input": "1\n100000\n", "output": "\n" },
        { "id": 17, "input": "2\n100000 100000\n", "output": "100000\n" },
        { "id": 18, "input": "11\n3 1 4 1 5 9 2 6 5 3 5\n", "output": "3 1 4 1 5 2 6 5 3 5\n" },
        {
            "id": 19,
            "input": "100000\n" + "1 ".repeat(50000) + "0 " + "1 ".repeat(49999) + "\n",
            "output": "1 ".repeat(50000) + "1 ".repeat(49999) + "\n"
        }
    ],
    "odd-even-linked-list": [
        {
            id: 1,
            input: "5\n1 2 3 4 5\n",
            output: "1 3 5 2 4\n"
        },
        {
            id: 2,
            input: "7\n2 1 3 5 6 4 7\n",
            output: "2 3 6 7 1 5 4\n"
        },
        {
            id: 3,
            input: "4\n1 3 5 7\n",
            output: "1 5 3 7\n"
        },
        {
            id: 4,
            input: "4\n2 4 6 8\n",
            output: "2 6 4 8\n"
        },
        {
            id: 5,
            input: "6\n10 -1 8 7 6 2\n",
            output: "10 8 6 -1 7 2\n"
        },
        {
            id: 6,
            input: "1\n42\n",
            output: "42\n"
        },
        {
            id: 7,
            input: "0\n\n",
            output: "\n"
        },
        {
            id: 8,
            input: "10\n100 200 300 400 500 600 700 800 900 1000\n",
            output: "100 300 500 700 900 200 400 600 800 1000\n"
        },
        {
            id: 9,
            input: "9\n-5 -4 -3 -2 -1 0 1 2 3\n",
            output: "-5 -3 -1 1 3 -4 -2 0 2\n"
        },
        {
            id: 10,
            input: "8\n5 10 15 20 25 30 35 40\n",
            output: "5 15 25 35 10 20 30 40\n"
        },
        {
            id: 11,
            input: "10000\n" + "0 1 ".repeat(5000) + "\n",
            output: "0 ".repeat(5000) + "1 ".repeat(5000).trim() + "\n"
        }
    ],
    "reverse-linked-list": [
        { id: 1, input: "5\n1 2 3 4 5\n", output: "5 4 3 2 1\n" },
        { id: 2, input: "2\n1 2\n", output: "2 1\n" },
        { id: 3, input: "0\n\n", output: "\n" },
        { id: 4, input: "1\n0\n", output: "0\n" },
        { id: 5, input: "5\n-1 -2 -3 -4 -5\n", output: "-5 -4 -3 -2 -1\n" },
        { id: 6, input: "5\n5 4 3 2 1\n", output: "1 2 3 4 5\n" },
        { id: 7, input: "1\n100\n", output: "100\n" },
        { id: 8, input: "11\n-5000 -4000 -3000 -2000 -1000 0 1000 2000 3000 4000 5000\n", output: "5000 4000 3000 2000 1000 0 -1000 -2000 -3000 -4000 -5000\n" },
        { id: 9, input: "8\n1 1 1 1 1 1 1 1\n", output: "1 1 1 1 1 1 1 1\n" },
        { id: 10, input: "6\n3 6 9 12 15 18\n", output: "18 15 12 9 6 3\n" },
        { id: 11, input: "5\n7 7 7 7 7\n", output: "7 7 7 7 7\n" },
        { id: 12, input: "6\n1 1000 2000 3000 4000 5000\n", output: "5000 4000 3000 2000 1000 1\n" },
        { id: 13, input: "5\n5000 4000 3000 2000 1000\n", output: "1000 2000 3000 4000 5000\n" },
        { id: 14, input: "6\n-1 -1000 -2000 -3000 -4000 -5000\n", output: "-5000 -4000 -3000 -2000 -1000 -1\n" },
        { id: 15, input: "1\n42\n", output: "42\n" },
        { id: 16, input: "9\n9 8 7 6 5 4 3 2 1\n", output: "1 2 3 4 5 6 7 8 9\n" },
        { id: 17, input: "5000\n" + Array.from({length:5000}, (_, i) => i + 1).join(" ") + "\n", output: Array.from({length: 5000}, (_, i) => 5000 - i).join(" ") + "\n" },
        { id: 18, input: "4\n5000 -5000 5000 -5000\n", output: "-5000 5000 -5000 5000\n" }
    ]

}
export default testCases7;