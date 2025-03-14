const testCases6 = {
    "valid-parentheses": [
        {
            "id": 1,
            "input": "()\n",
            "output": "true\n"
        },
        {
            "id": 2,
            "input": "()[]{}\n",
            "output": "true\n"
        },
        {
            "id": 3,
            "input": "(]\n",
            "output": "false\n"
        },
        {
            "id": 4,
            "input": "([])\n",
            "output": "true\n"
        },
        {
            "id": 5,
            "input": "{[()]}\n",
            "output": "true\n"
        },
        {
            "id": 6,
            "input": "{[(])}\n",
            "output": "false\n"
        },
        {
            "id": 7,
            "input": "[\n",
            "output": "false\n"
        },
        {
            "id": 8,
            "input": "]\n",
            "output": "false\n"
        },
        {
            "id": 9,
            "input": "{}[]()((({{{}}})))\n",
            "output": "true\n"
        },
        {
            "id": 10,
            "input": "(((((((((({{{{{{{{{{[[[[[[[[[[()]]]]]]]]]]}}}}}}}}}}))))))))))\n",
            "output": "true\n"
        },
        {
            "id": 11,
            "input": "(((((((((({{{{{{{{{{[[[[[[[[[]]]]]]]]]]}}}}}}}}}}))))))))))\n",
            "output": "false\n"
        },
        {
            "id": 12,
            "input": "(".repeat(5000) + ")".repeat(5000) + "\n",
            "output": "true\n"
        },
        {
            "id": 13,
            "input": "(".repeat(5000) + ")".repeat(4999) + "\n",
            "output": "false\n"
        },
        {
            "id": 14,
            "input": "(".repeat(1000) + "[".repeat(1000) + "{".repeat(1000) + "}".repeat(1000) + "]".repeat(1000) + ")".repeat(1000) + "\n",
            "output": "true\n"
        },
        {
            "id": 15,
            "input": "(".repeat(1000) + "[".repeat(1000) + "{".repeat(1000) + "}".repeat(1001) + "]".repeat(1000) + ")".repeat(1000) + "\n",
            "output": "false\n"
        }

    ],
    "evaluate-reverse-polish-notation": [
        { "id": 1, "input": "5\n2 1 + 3 *\n", "output": "9\n" },
        { "id": 2, "input": "5\n4 13 5 / +\n", "output": "6\n" },
        { "id": 3, "input": "13\n10 6 9 3 + -11 * / * 17 + 5 +\n", "output": "22\n" },
        { "id": 4, "input": "3\n5 1 -\n", "output": "4\n" },
        { "id": 5, "input": "5\n3 4 * 2 -\n", "output": "10\n" },
        { "id": 6, "input": "7\n8 2 / 3 - 4 +\n", "output": "5\n" },
        { "id": 7, "input": "7\n100 -10 * 5 + 2 /\n", "output": "-497\n" },
        { "id": 8, "input": "9\n200 200 + 200 - 200 * 200 /\n", "output": "200\n" },
        { "id": 9, "input": "5\n-2 -3 * 6 +\n", "output": "12\n" },
        { "id": 10, "input": "7\n10 5 -2 * + 3 /\n", "output": "0\n" },
        {
            id: 11,
            input: "9999\n" + "1 ".repeat(5000).trim() + " " + "+ ".repeat(4999).trim() + "\n",
            output: "5000\n"
        },
        {
            id: 12,
            input: "9999\n" + "1 ".repeat(5000).trim() + " " + "* ".repeat(4999).trim() + "\n",
            output: "1\n"
        },
    ],
    "decode-string": [
  {
    id: 1,
    input: "3[a]2[bc]\n",
    output: "aaabcbc\n"
  },
  {
    id: 2,
    input: "3[a2[c]]\n",
    output: "accaccacc\n"
  },
  {
    id: 3,
    input: "2[abc]3[cd]ef\n",
    output: "abcabccdcdcdef\n"
  },
  {
    id: 4,
    input: "10[a]\n",
    output: "aaaaaaaaaa\n"
  },
  {
    id: 5,
    input: "2[3[b]a]\n",
    output: "bbbabbba\n"
  },
  {
    id: 6,
    input: "100[z]\n",
    output: "" + "z".repeat(100) + "\n"
  },
  {
    id: 7,
    input: "3[a2[b4[f]c]]\n",
    output: "abffffcbffffcabffffcbffffcabffffcbffffc\n"
  },
  {
    id: 8,
    input: "2[ab3[c2[d]e]f]\n",
    output: "abcddecddecddefabcddecddecddef\n"
  },
  {
    id: 9,
    input: "1[a300[b]]\n",
    output: "" + "a" + "b".repeat(300) + "\n"
  },
  {
    id: 10,
    input: "3[a2[b3[c]d]e]\n",
    output: "abcccdbcccdeabcccdbcccdeabcccdbcccde\n"
  },
  {
    id: 11,
    input: "5[shot]10[3[a2[b3[c]d]e]ad]\n",
    output: "shotshotshotshotshotabcccdbcccdeabcccdbcccdeabcccdbcccdeadabcccdbcccdeabcccdbcccdeabcccdbcccdeadabcccdbcccdeabcccdbcccdeabcccdbcccdeadabcccdbcccdeabcccdbcccdeabcccdbcccdeadabcccdbcccdeabcccdbcccdeabcccdbcccdeadabcccdbcccdeabcccdbcccdeabcccdbcccdeadabcccdbcccdeabcccdbcccdeabcccdbcccdeadabcccdbcccdeabcccdbcccdeabcccdbcccdeadabcccdbcccdeabcccdbcccdeabcccdbcccdeadabcccdbcccdeabcccdbcccdeabcccdbcccdead\n"
  }
]


}

export default testCases6;