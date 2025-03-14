const testCases10 = {

    "last-stone-weight": [
        {
            "id": 1,
            "input": "6\n2 7 4 1 8 1\n",
            "output": "1\n"
        },
        {
            "id": 2,
            "input": "1\n1\n",
            "output": "1\n"
        },
        {
            "id": 3,
            "input": "2\n5 5\n",
            "output": "0\n"
        },
        {
            "id": 4,
            "input": "3\n10 4 6\n",
            "output": "0\n"
        },
        {
            "id": 5,
            "input": "4\n2 2 3 3\n",
            "output": "0\n"
        },
        {
            "id": 6,
            "input": "5\n10 3 7 2 5\n",
            "output": "1\n"
        },
        {
            "id": 7,
            "input": "6\n8 3 5 1 9 6\n",
            "output": "0\n"
        },
        {
            "id": 8,
            "input": "7\n30 15 20 25 10 5 40\n",
            "output": "5\n"
        },
        {
            "id": 9,
            "input": "10\n50 24 13 33 48 22 37 40 15 10\n",
            "output": "0\n"
        },
        {
            "id": 10,
            "input": "30\n" + Array.from({ length: 30 }, (_, i) => i + 1).join(" ") + "\n",
            "output": "1\n"
        }
    ],
    "kth-largest-element-in-an-array": [
  {
    "id": 1,
    "input": "6\n3 2 1 5 6 4\n2\n",
    "output": "5\n"
  },
  {
    "id": 2,
    "input": "9\n3 2 3 1 2 4 5 5 6\n4\n",
    "output": "4\n"
  },
  {
    "id": 3,
    "input": "1\n7\n1\n",
    "output": "7\n"
  },
  {
    "id": 4,
    "input": "5\n10 9 8 7 6\n5\n",
    "output": "6\n"
  },
  {
    "id": 5,
    "input": "5\n6 7 8 9 10\n1\n",
    "output": "10\n"
  },
  {
    "id": 6,
    "input": "7\n4 4 4 4 4 4 4\n3\n",
    "output": "4\n"
  },
  {
    "id": 7,
    "input": "10\n-1 -2 -3 -4 -5 -6 -7 -8 -9 -10\n3\n",
    "output": "-3\n"
  },
  {
    "id": 8,
    "input": "10\n10 9 8 7 6 5 4 3 2 1\n10\n",
    "output": "1\n"
  },
  {
    "id": 9,
    "input": "10\n1 2 3 4 5 6 7 8 9 10\n10\n",
    "output": "1\n"
  },
  {
    "id": 10,
    "input": "10\n5 5 5 5 5 5 5 5 5 5\n5\n",
    "output": "5\n"
  },
  {
    "id": 11,
    "input": "10\n10000 9999 9998 9997 9996 9995 9994 9993 9992 9991\n4\n",
    "output": "9997\n"
  },
  {
    "id": 12,
    "input": "10\n-10000 -9999 -9998 -9997 -9996 -9995 -9994 -9993 -9992 -9991\n7\n",
    "output": "-9997\n"
  },
  {
    "id": 13,
    "input": "100000\n" + Array.from({ length: 100000 }, (_, i) => 100000 - i).join(" ") + "\n50000\n",
    "output": "50001\n"
  }  
],
"total-cost-to-hire-k-workers": [
  {
    id: 1,
    input: "9\n17 12 10 2 7 2 11 20 8\n3\n4\n",
    output: "11\n"
  },
  {
    id: 2,
    input: "4\n1 2 4 1\n3\n3\n",
    output: "4\n"
  },
  {
    id: 3,
    input: "5\n5 5 5 5 5\n5\n2\n",
    output: "25\n"
  },
  {
    id: 4,
    input: "8\n1 100 1 100 1 100 1 100\n4\n2\n",
    output: "103\n"
  },
  {
    id: 5,
    input: "10\n10 20 30 40 50 60 70 80 90 100\n3\n5\n",
    output: "60\n"
  },
  {
    id: 6,
    input: `100000\n${"100000 ".repeat(100000).trim()}\n100000\n50000\n`,
    output: "10000000000\n"
  },
  {
    id: 7,
    input: `100000\n${Array.from({ length: 100000 }, (_, i) => i + 1).join(" ")}\n50000\n100000\n`,
    output: "1250025000\n"
  }
]


}

export default testCases10;