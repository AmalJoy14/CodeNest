const testCases9 = {
  "keys-and-rooms": [
    {
      id: 1,
      input: "4\n1\n2\n3\n\n",
      output: "true\n"
    },
    {
      id: 2,
      input: "4\n1 3\n3 0 1\n2\n0\n",
      output: "false\n"
    },
    {
      id: 3,
      input: "2\n1\n\n",
      output: "true\n"
    },
    {
      id: 4,
      input: "2\n\n\n",
      output: "false\n"
    },
    {
      id: 5,
      input: "3\n1\n\n\n",
      output: "false\n"
    },
    {
      id: 6,
      input: "4\n1 2\n2\n3\n\n",
      output: "true\n"
    },
    {
      id: 7,
      input: "2\n1\n0\n",
      output: "true\n"
    },
    {
      id: 8,
      input: "4\n1 2\n3\n3\n\n",
      output: "true\n"
    },
    {
      id: 9,
      input: "3\n1\n2\n0\n",
      output: "true\n"
    },
    {
      id: 10,
      input: "4\n1\n3\n\n\n",
      output: "false\n"
    },
    {
      id: 11,
      input: "3\n2\n\n1\n",
      output: "true\n"
    },
    {
      "id": 12,
      "input": "20\n\n1 15 18\n16\n2 3 9 11 17 5\n15 19 8 12 14\n10 1 6\n12 9 11\n\n7\n13\n3\n16 2\n4\n18 13\n7 17\n6\n14 4\n5\n8 19\n10\n",
      "output": "false\n"
    },
    {
      "id": 13,
      "input": "1000\n" + Array.from({ length: 1000 }, (_, i) => {
        if (i === 0) {
          return "1 2 3 4";
        } else if (i < 999) {
          return (i + 1) + " " + ((i + 100) % 1000) + " " + ((i + 200) % 1000);
        } else {
          return (((i) + 100) % 1000) + " " + (((i) + 200) % 1000);
        }
      }).join("\n") + "\n",
      "output": "true\n"
    }


  ],
  "number-of-provinces": [
    {
      "id": 1,
      "input": "3\n1 1 0\n1 1 0\n0 0 1\n",
      "output": "2\n"
    },
    {
      "id": 2,
      "input": "3\n1 0 0\n0 1 0\n0 0 1\n",
      "output": "3\n"
    },
    {
      "id": 3,
      "input": "3\n1 1 1\n1 1 1\n1 1 1\n",
      "output": "1\n"
    },
    {
      "id": 4,
      "input": "4\n1 0 1 0\n0 1 0 0\n1 0 1 1\n0 0 1 1\n",
      "output": "2\n"
    },
    {
      "id": 5,
      "input": "5\n1 1 0 0 1\n1 1 0 1 0\n0 0 1 0 0\n0 1 0 1 0\n1 0 0 0 1\n",
      "output": "2\n"
    },
    {
      "id": 6,
      "input": "6\n1 0 1 0 0 0\n0 1 0 1 0 0\n1 0 1 0 0 0\n0 1 0 1 1 0\n0 0 0 1 1 1\n0 0 0 0 1 1\n",
      "output": "2\n"
    },
    {
      "id": 7,
      "input": "4\n1 0 0 0\n0 1 0 0\n0 0 1 1\n0 0 1 1\n",
      "output": "3\n"
    },
    {
      "id": 8,
      "input": "4\n1 1 0 1\n1 1 1 0\n0 1 1 1\n1 0 1 1\n",
      "output": "1\n"
    },
    {
      "id": 9,
      "input": "6\n1 1 0 0 0 1\n1 1 0 1 0 0\n0 0 1 0 1 0\n0 1 0 1 1 0\n0 0 1 1 1 1\n1 0 0 0 1 1\n",
      "output": "1\n"
    },
    {
      "id": 10,
      "input": "10\n1 0 0 0 0 0 0 0 0 1\n0 1 0 1 0 0 0 0 1 0\n0 0 1 0 1 0 0 1 0 0\n0 1 0 1 0 0 0 0 0 0\n0 0 1 0 1 0 1 0 0 0\n0 0 0 0 0 1 0 0 1 0\n0 0 0 0 1 0 1 0 0 0\n0 0 1 0 0 0 0 1 0 0\n0 0 0 0 0 1 0 0 1 0\n1 0 0 0 0 0 0 0 0 1\n",
      "output": "3\n"
    },
    {
      "id": 11,
      "input": "200\n" + Array.from({ length: 200 }, (_, i) =>
        Array.from({ length: 200 }, (_, j) =>
          i === j || i + 1 === j || j + 1 === i ? "1" : "0"
        ).join(" ")
      ).join("\n") +
        "\n",
      "output": "1\n"
    }
  ],
  "rotting-oranges": [
    {
      "id": 1,
      "input": "3 3\n2 1 1\n1 1 0\n0 1 1\n",
      "output": "4\n"
    },
    {
      "id": 2,
      "input": "3 3\n2 1 1\n0 1 1\n1 0 1\n",
      "output": "-1\n"
    },
    {
      "id": 3,
      "input": "1 2\n0 2\n",
      "output": "0\n"
    },
    {
      "id": 4,
      "input": "1 1\n1\n",
      "output": "-1\n"
    },
    {
      "id": 5,
      "input": "1 1\n2\n",
      "output": "0\n"
    },
    {
      "id": 6,
      "input": "2 3\n0 0 0\n0 0 0\n",
      "output": "0\n"
    },
    {
      "id": 7,
      "input": "2 2\n2 1\n1 1\n",
      "output": "2\n"
    },
    {
      "id": 8,
      "input": "10 10\n2 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n",
      "output": "18\n"
    },
    {
      "id": 9,
      "input": "3 3\n2 1 1\n0 1 0\n1 0 1\n",
      "output": "-1\n"
    },
    {
      "id": 10,
      "input": "3 3\n2 2 2\n2 2 2\n2 2 2\n",
      "output": "0\n"
    },
    {
      "id": 11,
      "input": "10 10\n2 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n",
      "output": "18\n"
    },
    {
      "id": 12,
      "input": "10 10\n2 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n0 0 0 0 0 0 0 0 0 0\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n1 1 1 1 1 1 1 1 1 1\n",
      "output": "-1\n"
    }
  ]



}
export default testCases9;