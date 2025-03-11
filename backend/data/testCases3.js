const testCases3 = {
  "maximum-average-subarray-i": [
    {
      id: 1,
      input: "6\n1 12 -5 -6 50 3\n4\n",
      output: "12.75000\n"
    },
    {
      id: 2,
      input: "1\n5\n1\n",
      output: "5.00000\n"
    },
    {
      id: 3,
      input: "4\n3 1 4 2\n1\n",
      output: "4.00000\n"
    },
    {
      id: 4,
      input: "4\n1 2 3 4\n4\n",
      output: "2.50000\n"
    },
    {
      id: 5,
      input: "4\n5 5 5 5\n2\n",
      output: "5.00000\n"
    },
    {
      id: 6,
      input: "4\n10 3 2 1\n2\n",
      output: "6.50000\n"
    },
    {
      id: 7,
      input: "4\n1 2 3 10\n2\n",
      output: "6.50000\n"
    },
    {
      id: 8,
      input: "4\n-5 -3 -2 -4\n2\n",
      output: "-2.50000\n"
    },
    {
      id: 9,
      input: "5\n1 -2 3 -4 5\n3\n",
      output: "1.33333\n"
    },
    {
      id: 10,
      input: "5\n10000 10000 10000 10000 10000\n5\n",
      output: "10000.00000\n"
    },
    {
      id: 11,
      input: "3\n-10 -1 -20\n2\n",
      output: "-5.50000\n"
    },
    {
      id: 12,
      input: "1\n-10000\n1\n",
      output: "-10000.00000\n"
    },
    {
      id: 13,
      input: "5\n1 2 3 4 5\n3\n",
      output: "4.00000\n"
    },
    {
      id: 14,
      input: "3\n2 3 1\n2\n",
      output: "2.50000\n"
    },
    {
      id: 15,
      input: "3\n10000 10000 -10000\n2\n",
      output: "10000.00000\n"
    },
    {
      id: 16,
      input: "5\n4 0 0 0 5\n2\n",
      output: "2.50000\n"
    },
    {
      id: 17,
      input: "100000\n" + "10000 ".repeat(100000) + "\n100000\n",
      output: "10000.00000\n"
    },
    {
      id: 18,
      input: "100000\n" + "-10000 ".repeat(100000) + "\n100000\n",
      output: "-10000.00000\n"
    },
    {
      id: 19,
      input: "100000\n" + "10000 ".repeat(100000) + "\n10000\n",
      output: "10000.00000"
    },
    {
      id: 20,
      input: "93\n8860 -853 6534 4477 -4589 8646 -6155 -5577 -1656 -5779 -2619 -8604 -1358 -8009 4983 7063 3104 -1560 4080 2763 5616 -2375 2848 1394 -7173 -5225 -8244 -809 8025 -4072 -4391 -9579 1407 6700 2421 -6685 5481 -1732 -8892 -6645 3077 3287 -4149 8701 -4393 -9070 -1777 2237 -3253 -506 -4931 -7366 -8132 5406 -6300 -275 -1908 67 3569 1433 -7262 -437 8303 4498 -379 3054 -6285 4203 6908 4433 3077 2288 9733 -8067 3007 9725 9669 1362 -2561 -4225 5442 -9006 -429 160 -9234 -4444 3586 -5711 -9506 -79 -4418 -4348 -5891\n93",
      output: "-594.58065"
    }
  ],
  "maximum-number-of-vowels-in-a-substring-of-given-length": [
    {
      id: 1,
      input: "abciiidef\n3\n",
      output: "3\n"
    },
    {
      id: 2,
      input: "aeiou\n2\n",
      output: "2\n"
    },
    {
      id: 3,
      input: "leetcode\n3\n",
      output: "2\n"
    },
    {
      id: 4,
      input: "aeioua\n6\n",
      output: "6\n"
    },
    {
      id: 5,
      input: "bcdfg\n3\n",
      output: "0\n"
    },
    {
      id: 6,
      input: "aei\n1\n",
      output: "1\n"
    },
    {
      id: 7,
      input: "aaabbb\n3\n",
      output: "3\n"
    },
    {
      id: 8,
      input: "bbbaaa\n3\n",
      output: "3\n"
    },
    {
      id: 9,
      input: "abc\n1\n",
      output: "1\n"
    },
    {
      id: 10,
      input: "abcde\n5\n",
      output: "2\n"
    },
    {
      id: 11,
      input: "xyzaxyz\n3\n",
      output: "1\n"
    },
    {
      id: 12,
      input: "aXaXaX\n2\n",
      output: "1\n"
    },
    {
      id: 13,
      input: "aaabaaa\n3\n",
      output: "3\n"
    },
    {
      id: 14,
      input: "a\n1\n",
      output: "1\n"
    },
    {
      id: 15,
      input: "b\n1\n",
      output: "0\n"
    },
    {
      id: 16,
      input: "aaaaabbbbb\n5\n",
      output: "5\n"
    },
    {
      id: 17,
      input: "m".repeat(50000) + "aza" + "m".repeat(50000) + "\n3\n",
      output: "2\n"
    },
    {
      id: 18,
      input: "weallloveyou\n7\n",
      output: "4\n"
    },
    {
      id: 19,
      input: "aeiou".repeat(20000) + "\n100000\n",
      output: "100000\n"
    },
    {
      id: 20,
      input: "z".repeat(99999) + "a" + "\n105\n",
      output: "1\n"
    }
  ],
  "max-consecutive-ones-iii": [
    {
      id: 1,
      input: "11\n1 1 1 0 0 0 1 1 1 1 0\n2\n",
      output: "6\n"
    },
    {
      id: 2,
      input: "19\n0 0 1 1 0 0 1 1 1 0 1 1 0 0 0 1 1 1 1\n3\n",
      output: "10\n"
    },
    {
      id: 3,
      input: "4\n0 0 0 0\n2\n",
      output: "2\n"
    },
    {
      id: 4,
      input: "6\n1 0 1 1 0 1\n0\n",
      output: "2\n"
    },
    {
      id: 5,
      input: "5\n0 0 1 1 0\n3\n",
      output: "5\n"
    },
    {
      id: 6,
      input: "11\n1 1 1 0 0 0 1 1 1 1 0\n2\n",
      output: "6\n"
    },
    {
      id: 7,
      input: "19\n0 0 1 1 0 0 1 1 1 0 1 1 0 0 0 1 1 1 1\n3\n",
      output: "10\n"
    },
    {
      id: 8,
      input: "100000\n" + Array(100000).fill(0).join(' ') + "\n100000\n",
      output: "100000\n"
    },
    {
      id: 9,
      input: "100000\n" + Array(100000).fill(1).join(' ') + "\n0\n",
      output: "100000\n"
    },
    {
      id: 10,
      input: "100000\n" + Array(50000).fill(0).concat(Array(50000).fill(1)).join(' ') + "\n49999\n",
      output: "99999\n"
    },
    {
      id: 11,
      input: "4\n0 0 0 1\n4\n",
      output: "4\n"
    },
    {
      id: 12,
      input: "4\n1 1 1 1\n4\n",
      output: "4\n"
    }
  ],

  "longest-subarray-of-1's-after-deleting-one-element":
    [
      {
        id: 1,
        input: "1\n1\n",
        output: "0\n"
      },
      {
        id: 2,
        input: "1\n0\n",
        output: "0\n"
      },
      {
        id: 3,
        input: "3\n1 1 1\n",
        output: "2\n"
      },
      {
        id: 4,
        input: "4\n1 1 0 1\n",
        output: "3\n"
      },
      {
        id: 5,
        input: "9\n0 1 1 1 0 1 1 0 1\n",
        output: "5\n"
      },
      {
        id: 6,
        input: "3\n0 0 0\n",
        output: "0\n"
      },
      {
        id: 7,
        input: "6\n1 0 1 1 0 1\n",
        output: "3\n"
      },
      {
        id: 8,
        input: "5\n1 1 0 1 1\n",
        output: "4\n"
      },
      {
        id: 9,
        input: "7\n1 0 1 0 1 0 1\n",
        output: "2\n"
      },
      {
        id: 10,
        input: "10000\n" + "1 ".repeat(9999) + "1\n",
        output: "9999\n"
      },
      {
        id: 11,
        input: "10000\n" + "1 0 ".repeat(5000).trim() + "\n",
        output: "2\n"
      },
      {
        id: 12,
        input: "7\n1 1 1 0 1 1 1\n",
        output: "6\n"
      },
      {
        id: 13,
        input: "8\n1 0 1 1 1 0 1 1\n",
        output: "5\n"
      },
      {
        id: 14,
        input: "4\n1 1 0 1\n",
        output: "3\n"
      },
      {
        id: 15,
        input: "9\n0 1 1 1 0 1 1 0 1\n",
        output: "5\n"
      },
      {
        id: 16,
        input: "3\n1 1 1\n",
        output: "2\n"
      },
      {
        id: 17,
        input: "100000\n" + "1 ".repeat(99999) + "0\n",
        output: "99999\n"
      },
      {
        id: 18,
        input: "100000\n" + "0 ".repeat(99999) + "1\n",
        output: "1\n"
      },
      {
        id: 19,
        input: "100000\n" + "1 ".repeat(50000) + "0 " + "1 ".repeat(49999) + "\n",
        output: "99999\n"
      }

    ]
}

export default testCases3;