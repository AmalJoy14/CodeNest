const testCases5 = {
    "unique-number-of-occurrences": [
        {
            "id": 1,
            "input": "6\n1 2 2 1 1 3\n",
            "output": "true\n"
        },
        {
            "id": 2,
            "input": "2\n1 2\n",
            "output": "false\n"
        },
        {
            "id": 3,
            "input": "10\n-3 0 1 -3 1 1 1 -3 10 0\n",
            "output": "true\n"
        },
        {
            "id": 4,
            "input": "1\n5\n",
            "output": "true\n"
        },
        {
            "id": 5,
            "input": "3\n2 2 2\n",
            "output": "true\n"
        },
        {
            "id": 6,
            "input": "3\n1 2 3\n",
            "output": "false\n"
        },
        {
            "id": 7,
            "input": "2\n1 1\n",
            "output": "true\n"
        },
        {
            "id": 8,
            "input": "4\n1 1 2 2\n",
            "output": "false\n"
        },
        {
            "id": 9,
            "input": "6\n1 2 2 3 3 3\n",
            "output": "true\n"
        },
        {
            "id": 10,
            "input": "7\n1 1 2 2 3 3 3\n",
            "output": "false\n"
        },
        {
            "id": 11,
            "input": "5\n0 0 -1 -1 -1\n",
            "output": "true\n"
        },
        {
            "id": 12,
            "input": "3\n1000 -1000 1000\n",
            "output": "true\n"
        },
        {
            "id": 13,
            "input": "5\n5 5 5 5 5\n",
            "output": "true\n"
        },
        {
            "id": 14,
            "input": "4\n1 2 3 4\n",
            "output": "false\n"
        },
        {
            "id": 15,
            "input": "5\n1 1 2 3 4\n",
            "output": "false\n"
        },
        {
            "id": 16,
            "input": "6\n5 5 5 4 4 3\n",
            "output": "true\n"
        },
        {
            "id": 17,
            "input": "4\n1000 -1000 1000 -1000\n",
            "output": "false\n"
        },
        {
            "id": 18,
            "input": "1000\n" + "1 ".repeat(500) + "2 ".repeat(500) + "\n",
            "output": "false\n"
        },
        {
            "id": 19,
            "input": "4\n1 1 2 2\n",
            "output": "false\n"
        },
        {
            "id": 20,
            "input": "10\n1 2 2 3 3 3 4 4 4 4\n",
            "output": "true\n"
        }
    ],
    "determine-if-two-strings-are-close": [
        { id: 1, input: "abc\nbca\n", output: "true\n" },
        { id: 2, input: "a\naa\n", output: "false\n" },
        { id: 3, input: "cabbba\nabbccc\n", output: "true\n" },
        { id: 4, input: "a\na\n", output: "true\n" },
        { id: 5, input: "a\nb\n", output: "false\n" },
        { id: 6, input: "abbccc\naabccc\n", output: "true\n" },
        { id: 7, input: "a".repeat(50000) + "b".repeat(50000) + "\n" + "b".repeat(50000) + "a".repeat(50000) + "\n", output: "true\n" },
        { id: 8, input: "a".repeat(100000) + "\n" + "b".repeat(100000) + "\n", output: "false\n" },
        { id: 9, input: "aaabbc\nabbbca\n", output: "true\n" },
        { id: 10, input: "aaa\naaa\n", output: "true\n" },
        { id: 11, input: "aabbbcccc\nccccbbbaa\n", output: "true\n" },
        { id: 12, input: "abbccc\naabbcc\n", output: "false\n" },
        { id: 13, input: "abc\nabd\n", output: "false\n" },
        { id: 14, input: "abcdefghijklmnopqrstuvwxyz\nzyxwvutsrqponmlkjihgfedcba\n", output: "true\n" },
        { id: 15, input: "abbcccdddde\naaaabcccdde\n", output: "true\n" },
        { id: 16, input: "zzzyyyxxx\nxxxzzzyyy\n", output: "true\n" },
        { id: 17, input: "abbc\nabcc\n", output: "true\n" },
        { id: 18, input: "aabb\nabcc\n", output: "false\n" }
    ]


}
export default testCases5;