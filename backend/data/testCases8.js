const testCases8 = {
    "maximum-depth-of-binary-tree": [
  {
    id: 1,
    input: "3 9 20 null null 15 7\n",
    output: "3\n"
  },
  {
    id: 2,
    input: "1 null 2\n",
    output: "2\n"
  },
  {
    id: 3,
    input: "1\n",
    output: "1\n"
  },
  {
    id: 4,
    input: "null\n",
    output: "0\n"
  },
  {
    id: 5,
    input: "10 5 15 3 7 13 20 1 null 6 8 null null 18 25\n",
    output: "4\n"
  },
  {
    id: 6,
    input: "1 2 null 3 null 4 null 5\n",
    output: "5\n"
  },
  {
    id: 7,
    input: "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15\n",
    output: "4\n"
  },
  {
    id: 8,
    input: "5 null 6 null 7 null 8 null 9\n",
    output: "5\n"
  },
  {
    id: 9,
    input: "1 2 3 4 5 null 6 7 null null null null 8\n",
    output: "4\n"
  },
  {
    id: 10,
    input: "10 20 30 40 50 60 70 80 90 100 110 120 130 140 150\n",
    output: "4\n"
  },
  {
    id: 11,
    input: "1 " + Array.from({length: 10000 - 2}, (_, i) => `${i + 2} null`).join(" ") + " 10000\n",
    output: "10000\n"
  }
],
"leaf-similar-trees": [
  {
    id: 1,
    input: "3 5 1 6 2 9 8 null null 7 4\n3 5 1 6 7 4 2 null null null null null null 9 8\n",
    output: "true\n"
  },
  {
    id: 2,
    input: "1 2 3\n1 3 2\n",
    output: "false\n"
  },
  {
    id: 3,
    input: "1\n1\n",
    output: "true\n"
  },
  {
    id: 4,
    input: "1\n2\n",
    output: "false\n"
  },
  {
    id: 5,
    input: "1 2 null 3 null 4\n1 null 2 null 3 null 4\n",
    output: "true\n"
  },
  {
    id: 6,
    input: "1 2 3\n1 2 3\n",
    output: "true\n"
  },
  {
    id: 7,
    input: "1 2 3\n1 3 2\n",
    output: "false\n"
  },
  {
    id: 8,
    input: "1 2 3 4 5 6 7\n1 2 3 4 5 6 7\n",
    output: "true\n"
  },
  {
    id: 9,
    input: "1 2 3 4 null 5 6\n1 2 3 null 4 5 6\n",
    output: "true\n"
  },
  {
    id: 10,
    input: "1 2 3 4 5\n1 2 3 4 5\n",
    output: "true\n"
  },
  {
    id: 11,
    input: "1 2 3 null 4 null 5 6 null null 7\n1 2 3 null 4 null 5 6 null null 7\n",
    output: "true\n"
  },
  {
    id: 12,
    input: "1 2 3 4 5 6 7\n1 2 3 4 null null 5\n",
    output: "false\n"
  },
],
"count-good-nodes-in-binary-tree": [
  {
    id: 1,
    input: "3 1 4 3 null 1 5\n",
    output: "4\n"
  },
  {
    id: 2,
    input: "3 3 null 4 2\n",
    output: "3\n"
  },
  {
    id: 3,
    input: "1\n",
    output: "1\n"
  },
  {
    id: 4,
    input: "2 1 3\n",
    output: "2\n"
  },
  {
    id: 5,
    input: "10 5 15 3 7 null 18\n",
    output: "3\n"
  },
  {
    id: 6,
    input: "-1 -2 -3 -4 -5 -6 -7\n",
    output: "1\n"
  },
  {
    id: 7,
    input: "1 null 2 null 3 null 4 null 5\n",
    output: "5\n"
  },
  {
    id: 8,
    input: "10 20 30 40 50 60 70\n",
    output: "7\n"
  },
  {
    id: 9,
    input: "3 3 3 3 3 3 3\n",
    output: "7\n"
  },
  {
    id: 10,
    input: "8 3 10 1 6 null 14 null null 4 7 13\n",
    output: "3\n"
  },
  {
    id: 11,
    input: "-10 -20 -30 -40 -50 -60 -70\n",
    output: "1\n"
  },
  {
    id: 12,
    input: "1 2 3 4 5 6 7 8 9 10\n",
    output: "10\n"
  },
  {
    id: 13,
    input: "100 50 150 25 75 125 175\n",
    output: "3\n"
  },
  {
    id: 14,
    input: "1 " + Array.from({length: 100000 - 1}, (_, i) => `${i + 2} null`).join(" ") + "\n",
    output: "100000\n"
  }
]
}
export default testCases8;