const testCases2 = {
    "move-zeroes": [
        {
            id: 1,
            input: "5\n0 1 0 3 12\n",
            output: "1 3 12 0 0\n"
        },
        {
            id: 2,
            input: "1\n0\n",
            output: "0\n"
        },
        {
            id: 3,
            input: "6\n0 0 1 2 3 4\n",
            output: "1 2 3 4 0 0\n"
        },
        {
            id: 4,
            input: "7\n1 2 0 0 3 4 5\n",
            output: "1 2 3 4 5 0 0\n"
        },
        {
            id: 5,
            input: "3\n0 0 0\n",
            output: "0 0 0\n"
        },
        {
            id: 6,
            input: "4\n4 3 2 1\n",
            output: "4 3 2 1\n"
        },
        {
            id: 7,
            input: "10\n1 0 2 0 3 0 4 0 5 0\n",
            output: "1 2 3 4 5 0 0 0 0 0\n"
        },
        {
            id: 8,
            input: "2\n0 1\n",
            output: "1 0\n"
        },
        {
            id: 9,
            input: "2\n1 0\n",
            output: "1 0\n"
        },
        {
            id: 10,
            input: "5\n5 4 3 2 1\n",
            output: "5 4 3 2 1\n"
        },
        {
            id: 11,
            input: "20\n0 5 0 4 0 3 0 2 0 1 6 7 0 8 9 0 10 11 12 0\n",
            output: "5 4 3 2 1 6 7 8 9 10 11 12 0 0 0 0 0 0 0 0\n"
        },
        {
            id: 12,
            input: "10\n1 0 2 0 3 0 4 0 5 0\n",
            output: "1 2 3 4 5 0 0 0 0 0\n"
        },
        {
            id: 13,
            input: "10\n1 2 3 4 5 6 7 8 9 10\n",
            output: "1 2 3 4 5 6 7 8 9 10\n"
        },
        {
            id: 14,
            input: "10\n0 0 0 0 0 0 0 0 0 0\n",
            output: "0 0 0 0 0 0 0 0 0 0\n"
        },
        {
            id: 15,
            input: "12\n-1 0 3 0 -2 0 5 6 0 -7 8 0\n",
            output: "-1 3 -2 5 6 -7 8 0 0 0 0 0\n"
        },
        {
            id: 16,
            input: "20\n1 0 0 2 0 3 0 0 4 5 6 0 7 8 0 9 10 0 11 12\n",
            output: "1 2 3 4 5 6 7 8 9 10 11 12 0 0 0 0 0 0 0 0\n"
        },
        {
            id: 17,
            input: "15\n0 0 1 1 1 0 0 0 2 2 2 2 0 0 3\n",
            output: "1 1 1 2 2 2 2 3 0 0 0 0 0 0 0\n"
        },
        {
            id: 18,
            input: "8\n0 0 0 5 6 7 8 9\n",
            output: "5 6 7 8 9 0 0 0\n"
        },
        {
            id: 19,
            input: "6\n1 2 3 4 5 0\n",
            output: "1 2 3 4 5 0\n"
        },
        {
            id: 20,
            input: "10000\n" + "0 ".repeat(5000) + "1 ".repeat(5000) + "\n",
            output: "1 ".repeat(5000) + "0 ".repeat(4999) + "0\n"
        }
    ],
    "is-subsequence": [
        {
            id: 1,
            input: "abc\nahbgdc\n",
            output: "true\n"
        },
        {
            id: 2,
            input: "axc\nahbgdc\n",
            output: "false\n"
        },
        {
            id: 3,
            input: "ace\nabcde\n",
            output: "true\n"
        },
        {
            id: 4,
            input: "aec\nabcde\n",
            output: "false\n"
        },
        {
            id: 5,
            input: "abc\nabc\n",
            output: "true\n"
        },
        {
            id: 6,
            input: "abcd\nabc\n",
            output: "false\n"
        },
        {
            id: 7,
            input: "a\na\n",
            output: "true\n"
        },
        {
            id: 8,
            input: "z\nabcdefghijklmnopqrstuvwxyz\n",
            output: "true\n"
        },
        {
            id: 9,
            input: "abcdefgh\nzyxwvutsrqponmlkjihgfedcba\n",
            output: "false\n"
        },
        {
            id: 10,
            input: "\nabc\n",
            output: "true\n"
        },
        {
            id: 11,
            input: "a".repeat(100) + "\n" + "b".repeat(9900) + "a".repeat(100) + "\n",
            output: "true\n"
        },
        {
            id: 12,
            input: "z".repeat(100) + "\n" + "abcdefghijklmnopqrstuvwxyz".repeat(100) + "\n",
            output: "true\n"
        },
        {
            id: 13,
            input: "z".repeat(100) + "\n" + "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy".repeat(99) + "\n",
            output: "false\n"
        }
    ],
    "container-with-most-water": [
        {
            id: 1,
            input: "9\n1 8 6 2 5 4 8 3 7\n",
            output: "49\n"
        },
        {
            id: 2,
            input: "2\n1 1\n",
            output: "1\n"
        },
        {
            id: 3,
            input: "3\n1 2 1\n",
            output: "2\n"
        },
        {
            id: 4,
            input: "4\n1 2 4 3\n",
            output: "4\n"
        },
        {
            id: 5,
            input: "7\n1 3 2 5 25 24 5\n",
            output: "24\n"
        },
        {
            id: 6,
            input: "7\n2 3 4 5 18 17 6\n",
            output: "17\n"
        },
        {
            id: 7,
            input: "9\n7 10 6 2 5 4 8 3 7\n",
            output: "56\n"
        },
        {
            id: 8,
            input: "5\n5 4 3 2 1\n",
            output: "6\n"
        },
        {
            id: 9,
            input: "100000\n" + "1 ".repeat(100000) + "\n",
            output: "99999\n"
        },
        {
            id: 10,
            input: "4002\n" + "1 ".repeat(2000) + "10000 10000" + "1 ".repeat(2000) + "\n",
            output: "10000\n"
        }
    ],
    "max-number-of-k-sum-pairs": [
        {
          id: 1,
          input: "4\n1 2 3 4\n5\n",
          output: "2\n"
        },
        {
          id: 2,
          input: "5\n3 1 3 4 3\n6\n",
          output: "1\n"
        },
        {
            id: 3,
            input:"20\n2 5 4 4 1 3 4 4 1 4 4 1 2 1 2 2 3 2 4 2\n3\n",
            output:"4\n"
        },
        {
            id: 4,
            input: "4\n2 2 2 2\n4\n",
            output: "2\n"
        },
        {
            id: 5,
            input: "3\n2 2 2\n4\n",
            output: "1\n"
        },
        {
            id: 6,
            input: "3\n1 2 3\n10\n",
            output: "0\n"
        },
        {
            id: 7,
            input: "5\n5 5 5 5 5\n10\n",
            output: "2\n"
        },
        {
            id: 8,
            input: "6\n1 999999999 1 999999999 1 999999999\n1000000000\n",
            output: "3\n"
        },
        {
            id: 9,
            input: "3\n1 1 2\n3\n",
            output: "1\n"
        },
        {
            id: 10,
            input: "2\n1000000000 1000000000\n2000000000\n",
            output: "1\n"
        },
        {
            id: 11,
            input: "1\n5\n5\n",
            output: "0\n"
        },
        {
            id: 12,
            input: "2\n1 1\n2\n",
            output: "1\n"
        },
        {
            id: 13,
            input: "2\n1 2\n4\n",
            output: "0\n"
        },
        {
            id: 14,
            input: "5\n3 3 2 1 1\n4\n",
            output: "2\n"
        },
        {
            id: 15,
            input: "100000\n" + "1 ".repeat(100000).trim() + "\n2\n",
            output: "50000\n"
        }
    ]
}

export default testCases2;