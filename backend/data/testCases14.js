const testCases14 = {
    "unique-paths": [
        { "id": 1, "input": "1 1\n", "output": "1\n" },
        { "id": 2, "input": "2 2\n", "output": "2\n" },
        { "id": 3, "input": "3 3\n", "output": "6\n" },
        { "id": 4, "input": "3 7\n", "output": "28\n" },
        { "id": 5, "input": "3 2\n", "output": "3\n" },
        { "id": 6, "input": "7 3\n", "output": "28\n" },
        { "id": 7, "input": "10 10\n", "output": "48620\n" },
        { "id": 8, "input": "15 15\n", "output": "40116600\n" },
        { "id": 9, "input": "1 100\n", "output": "1\n" },
        { "id": 10, "input": "17 17\n", "output": "601080390\n" },
        { "id": 11, "input": "5 5\n", "output": "70\n" },
        { "id": 12, "input": "10 5\n", "output": "715\n" },
        { "id": 13, "input": "12 8\n", "output": "31824\n" }
    ],
    "edit-distance": [

        {
            "id": 1,
            "input": "horse\nros\n",
            "output": "3\n"
        },
        {
            "id": 2,
            "input": "intention\nexecution\n",
            "output": "5\n"
        },
        {
            "id": 3,
            "input": "\n\n",
            "output": "0\n"
        },
        {
            "id": 4,
            "input": "abc\ndefghi\n",
            "output": "6\n"
        },
        {
            "id": 5,
            "input": "leet\ncode\n",
            "output": "4\n"
        },
        {
            "id": 6,
            "input": "azertyqsdfghqwerty\nazertyjklmqwerty\n",
            "output": "6\n"
        },
        {
            "id": 7,
            "input": "aaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaav\n",
            "output": "8\n"
        },
        {
            "id": 8,
            "input": "aaayuio\nhjklaaa\n",
            "output": "7\n"
        },
        {
            "id": 9,
            "input": "pneumonoultramicroscopicsilicovolcanoconiosis\npneumonoconiosis\n",
            "output": "29\n"
        },
        {
            "id": 10,
            "input": "a".repeat(500) + "\n" + "b".repeat(500) + "\n",
            "output": "500\n"
        }

    ]

}
export default testCases14;