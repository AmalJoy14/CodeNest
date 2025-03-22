const topicsData = [
  {
    id: 1,
    title: "Array&String",
    total: 9,
    problems: [
      {
        id: 1,
        title: "Merge Strings Alternately",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/LECWOvTo-Sc",
        description: `You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.\n\nReturn the merged string.`,
        testCases: [
          {
            example: 1,
            input: 'word1 = "abc", word2 = "pqr"',
            output: '"apbqcr"',
            explanation: `The merged string will be merged as so:\nword1:  a   b   c\nword2:    p   q   r\nmerged: a p b q c r`
          },
          {
            example: 2,
            input: 'word1 = "ab", word2 = "pqrs"',
            output: '"apbqrs"',
            explanation: `Since word2 is longer, its remaining characters are appended at the end:\nword1:  a   b \nword2:    p   q   r   s\nmerged: a p b q   r   s`,
          },
          {
            example: 3,
            input: 'word1 = "abcd", word2 = "pq"',
            output: '"apbqcd"',
            explanation: `Since word1 is longer, its remaining characters are appended at the end:\nword1:  a   b   c   d\nword2:    p   q \nmerged: a p b q c   d`,
          }
        ],
        constraints: [
          "1 <= word1.length, word2.length <= 100",
          "word1 and word2 consist of lowercase English letters."
        ],
        defaultCode: ``,
      },


      {
        id: 2,
        title: "Greatest Common Divisor of Strings",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/i5I_wrbUdzM",
        description: `For two strings s and t, we say "t divides s" if and only if s = t + t + ... + t (i.e., t is concatenated with itself one or more times).\n\nGiven two strings str1 and str2, return the largest string x such that x divides both str1 and str2.`,
        testCases: [
          {
            example: 1,
            input: 'str1 = "ABCABC", str2 = "ABC"',
            output: '"ABC"',
            explanation: `Since "ABC" is repeated in str1 and str2, it is the greatest common divisor of both.`
          },
          {
            example: 2,
            input: 'str1 = "ABABAB", str2 = "ABAB"',
            output: '"AB"',
            explanation: `Since "AB" is the largest repeating pattern common in both str1 and str2, it is the greatest common divisor.`
          },
          {
            example: 3,
            input: 'str1 = "LEET", str2 = "CODE"',
            output: '""',
            explanation: `There is no common repeating substring between "LEET" and "CODE", so the result is an empty string.`
          }
        ],
        constraints: [
          "1 <= str1.length, str2.length <= 1000",
          "str1 and str2 consist of English uppercase letters."
        ],
        defaultCode: ``
      },


      {
        id: 3,
        title: "Kids With the Greatest Number of Candies",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/xBpYKQzjjnM",
        description: `There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.\n\nReturn a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.\n\nNote that multiple kids can have the greatest number of candies.`,
        testCases: [
          {
            example: 1,
            input: "candies = [2,3,5,1,3], extraCandies = 3",
            output: "[true,true,true,false,true]",
            explanation: `If you give all extraCandies to:\n- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.\n- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.\n- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.\n- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.\n- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.`
          },
          {
            example: 2,
            input: "candies = [4,2,1,1,2], extraCandies = 1",
            output: "[true,false,false,false,false]",
            explanation: `There is only 1 extra candy.\nKid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.`
          },
          {
            example: 3,
            input: "candies = [12,1,12], extraCandies = 10",
            output: "[true,false,true]",
            explanation: `Kid 1 and Kid 3 already have the maximum candies. Even with extra candies, Kid 2 cannot reach their count.`
          }
        ],
        constraints: [
          "n == candies.length",
          "2 <= n <= 100",
          "1 <= candies[i] <= 100",
          "1 <= extraCandies <= 50"
        ],
        defaultCode: `Sample Input :\n5\n2 3 5 1 3\n3\n\nSample Output :\ntrue true true false true`
      },

      {
        id: 4,
        title: "Can Place Flowers",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/ZGxqqjljpUI",
        description: `You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.\n\nGiven an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.`,
        testCases: [
          {
            example: 1,
            input: "flowerbed = [1,0,0,0,1], n = 1",
            output: "true",
            explanation: `A flower can be planted at index 2 without violating the rule:\nflowerbed: [1, 0, 0, 0, 1]\n                  ↑\nUpdated:  [1, 0, 1, 0, 1]`
          },
          {
            example: 2,
            input: "flowerbed = [1,0,0,0,1], n = 2",
            output: "false",
            explanation: `Only one flower can be planted, but two are needed:\nflowerbed: [1, 0, 0, 0, 1]\n                  ↑\nUpdated:  [1, 0, 1, 0, 1] (only one flower planted)`
          }
        ],
        constraints: [
          "1 <= flowerbed.length <= 2 * 10^4",
          "flowerbed[i] is 0 or 1.",
          "There are no two adjacent flowers in flowerbed.",
          "0 <= n <= flowerbed.length"
        ],
        defaultCode: `Sample Input :\n5\n1 0 0 0 1\n1\n\nSample Output :\ntrue`
      },

      {
        id: 5,
        title: "Reverse Vowels of a String",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/94RdOzbXvHM",
        description: `Given a string s, reverse only all the vowels in the string and return it.\n\nThe vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.`,
        testCases: [
          {
            example: 1,
            input: 's = "IceCreAm"',
            output: '"AceCreIm"',
            explanation: `The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".`
          },
          {
            example: 2,
            input: 's = "leetcode"',
            output: '"leotcede"',
            explanation: `The vowels in s are ['e', 'e', 'o', 'e']. On reversing the vowels, s becomes "leotcede".`
          }
        ],
        constraints: [
          "1 <= s.length <= 3 * 10^5",
          "s consists of printable ASCII characters."
        ],
        defaultCode: ``
      },

      {
        id: 6,
        title: "Reverse Words in a String",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/-ggUxN7bFjU",
        description: `Given an input string s, reverse the order of the words.\n\nA word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.\n\nReturn a string of the words in reverse order concatenated by a single space.\n\nNote that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.`,
        testCases: [
          {
            example: 1,
            input: 's = "the sky is blue"',
            output: '"blue is sky the"',
            explanation: `The words are reversed in order while maintaining a single space between them.`
          },
          {
            example: 2,
            input: 's = "  hello world  "',
            output: '"world hello"',
            explanation: `The leading and trailing spaces are removed, and words are reversed.`
          },
          {
            example: 3,
            input: 's = "a good   example"',
            output: '"example good a"',
            explanation: `Multiple spaces between words are reduced to a single space in the reversed string.`
          }
        ],
        constraints: [
          "1 <= s.length <= 10^4",
          "s contains English letters (upper-case and lower-case), digits, and spaces ' '.",
          "There is at least one word in s."
        ],
        defaultCode: ``
      },

      {
        id: 7,
        title: "Product of Array Except Self",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/bNvIQI2wAjk",
        description: `Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].\n\nThe product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.\n\nYou must write an algorithm that runs in O(n) time and without using the division operation.`,
        testCases: [
          {
            example: 1,
            input: "nums = [1,2,3,4]",
            output: "[24,12,8,6]",
            explanation: `Each index contains the product of all elements except itself: 
            - answer[0] = 2 * 3 * 4 = 24
            - answer[1] = 1 * 3 * 4 = 12
            - answer[2] = 1 * 2 * 4 = 8
            - answer[3] = 1 * 2 * 3 = 6`
          },
          {
            example: 2,
            input: "nums = [-1,1,0,-3,3]",
            output: "[0,0,9,0,0]",
            explanation: `Since nums[2] is 0, all other products that include nums[2] become 0.`
          }
        ],
        constraints: [
          "2 <= nums.length <= 10^5",
          "-30 <= nums[i] <= 30",
          "The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer."
        ],
        defaultCode: `Sample Input:\n4\n1 2 3 4\n\nSample Output:\n24 12 8 6`
      },

      {
        id: 8,
        title: "Increasing Triplet Subsequence",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/yEFlGWOVH8g",
        description: `Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exist, return false.`,
        testCases: [
          {
            example: 1,
            input: "nums = [1,2,3,4,5]",
            output: "true",
            explanation: `Any triplet where i < j < k is valid since all elements are in increasing order.`
          },
          {
            example: 2,
            input: "nums = [5,4,3,2,1]",
            output: "false",
            explanation: `No such triplet exists because all elements are in decreasing order.`
          },
          {
            example: 3,
            input: "nums = [2,1,5,0,4,6]",
            output: "true",
            explanation: `The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.`
          }
        ],
        constraints: [
          "1 <= nums.length <= 5 * 10^5",
          "-2^31 <= nums[i] <= 2^31 - 1"
        ],
        defaultCode: `Sample Input:\n5\n1 2 3 4 5\n\nSample Output:\ntrue`
      },

      {
        id: 9,
        title: "String Compression",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/cAB15h6-sWA?si=wZ8TApx-Wt7PvnJC",
        description: `Given an array of characters chars, compress it using the following algorithm:\n\n- Begin with an empty string s.\n- For each group of consecutive repeating characters in chars:\n  - If the group's length is 1, append the character to s.\n  - Otherwise, append the character followed by the group's length.\n\n Note that group lengths that are 10 or longer will be split into multiple characters in chars.\n\nAfter modifying the input array, return its new length.\n\nYou must write an algorithm that uses only constant extra space.`,
        testCases: [
          {
            example: 1,
            input: 'chars = ["a","a","b","b","c","c","c"]',
            output: 'Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]',
            explanation: `The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".`
          },
          {
            example: 2,
            input: 'chars = ["a"]',
            output: 'Return 1, and the first character of the input array should be: ["a"]',
            explanation: `The only group is "a", which remains uncompressed since it's a single character.`
          },
          {
            example: 3,
            input: 'chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]',
            output: 'Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"]',
            explanation: `The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".`
          }
        ],
        constraints: [
          "1 <= chars.length <= 2000",
          "chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol."
        ],
        defaultCode: `Sample Input: 7\na a b b c c c\n\nSample Output: 6`
      }

    ]
  },
  {
    id: 2,
    title: "Two Pointers",
    total: 4,
    problems: [
      {
        id: 1,
        title: "Move Zeroes",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/aayNRwUN3Do",
        description: `Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.\n\nYou must do this in-place without making a copy of the array.`,
        testCases: [
          {
            example: 1,
            input: "nums = [0,1,0,3,12]",
            output: "[1,3,12,0,0]",
            explanation: `The zeros are moved to the end while keeping the non-zero elements in their original order.`
          },
          {
            example: 2,
            input: "nums = [0]",
            output: "[0]",
            explanation: `Since there is only one element and it's zero, no changes are needed.`
          }
        ],
        constraints: [
          "1 <= nums.length <= 10⁴",
          "-2³¹ <= nums[i] <= 2³¹ - 1"
        ],
        defaultCode: `Sample Input :\n5\n0 1 0 3 12\n\nSample Output:\n1 3 12 0 0`
      },

      {
        id: 2,
        title: "Is Subsequence",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/99RVfqklbCE",
        description: `Given two strings s and t, return true if s is a subsequence of t, or false otherwise.\n\nA subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.`,
        testCases: [
          {
            example: 1,
            input: 's = "abc", t = "ahbgdc"',
            output: "true",
            explanation: `"abc" appears in "ahbgdc" in the correct order.`
          },
          {
            example: 2,
            input: 's = "axc", t = "ahbgdc"',
            output: "false",
            explanation: `"axc" does not appear in "ahbgdc" while maintaining order.`
          }
        ],
        constraints: [
          "0 <= s.length <= 100",
          "0 <= t.length <= 10⁴",
          "s and t consist only of lowercase English letters."
        ],
        defaultCode: ``
      },


      {
        id: 3,
        title: "Container With Most Water",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/UuiTKBwPgAo",
        description: `You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\n\nReturn the maximum amount of water a container can store.\n\nNotice that you may not slant the container.`,
        testCases: [
          {
            example: 1,
            image: "https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg",
            input: "height = [1,8,6,2,5,4,8,3,7]",
            output: "49",
            explanation: `The lines at index 1 (height 8) and index 8 (height 7) form the container with the maximum area: min(8, 7) * (8 - 1) = 7 * 7 = 49.`
          },
          {
            example: 2,
            input: "height = [1,1]",
            output: "1",
            explanation: `The only possible container is formed by the two lines with height 1 each. The area is min(1, 1) * (1 - 0) = 1 * 1 = 1.`
          }
        ],
        constraints: [
          "n == height.length",
          "2 <= n <= 10⁵",
          "0 <= height[i] <= 10⁴"
        ],
        defaultCode: ``
      },

      {
        id: 4,
        title: "Max Number of K-Sum Pairs",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/FevSHchkCeo?si=ktLm47cxTUzbSEia",
        description: `You are given an integer array nums and an integer k.\n\nIn one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.\n\nReturn the maximum number of operations you can perform on the array.`,
        testCases: [
          {
            example: 1,
            input: "nums = [1,2,3,4], k = 5",
            output: "2",
            explanation: `Starting with nums = [1,2,3,4]:\n- Remove numbers 1 and 4, then nums = [2,3]\n- Remove numbers 2 and 3, then nums = []\nThere are no more pairs that sum up to 5, hence a total of 2 operations.`
          },
          {
            example: 2,
            input: "nums = [3,1,3,4,3], k = 6",
            output: "1",
            explanation: `Starting with nums = [3,1,3,4,3]:\n- Remove the first two 3's, then nums = [1,4,3]\nThere are no more pairs that sum up to 6, hence a total of 1 operation.`
          }
        ],
        constraints: [
          "1 <= nums.length <= 10⁵",
          "1 <= nums[i] <= 10⁹",
          "1 <= k <= 10⁹"
        ],
        defaultCode: `Sample Input:\n4\n1 2 3 4\n5\n\nSample Output: \n2`
      }
    ]
  },
  {
    id: 3,
    title: "Sliding Window",
    total: 4,
    problems: [
      {
        id: 1,
        title: "Maximum Average Subarray I",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/UdUUnoiLkPg?si=NBADDgA7vwm09y_y",
        description: `You are given an integer array nums consisting of n elements, and an integer k.\n\nFind a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10⁻⁵ will be accepted.`,
        testCases: [
          {
            example: 1,
            input: "nums = [1,12,-5,-6,50,3], k = 4",
            output: "12.75000",
            explanation: `Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75.`
          },
          {
            example: 2,
            input: "nums = [5], k = 1",
            output: "5.00000",
            explanation: `Since there is only one element, the maximum average is simply 5.`
          }
        ],
        constraints: [
          "1 <= n <= 10⁵",
          "1 <= k <= n",
          "-10⁴ <= nums[i] <= 10⁴"
        ],
        defaultCode: `Sample Input:\n6\n1 12 -5 -6 50 3\n4\n\nSample Output: \n12.75000`
      },

      {
        id: 2,
        title: "Maximum Number of Vowels in a Substring of Given Length",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/kEfPSzgL-Ss",
        description: `Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.\n\nVowel letters in English are 'a', 'e', 'i', 'o', and 'u'.`,
        testCases: [
          {
            example: 1,
            input: "s = 'abciiidef', k = 3",
            output: "3",
            explanation: `The substring 'iii' contains 3 vowel letters.`
          },
          {
            example: 2,
            input: "s = 'aeiou', k = 2",
            output: "2",
            explanation: `Any substring of length 2 contains 2 vowels.`
          },
          {
            example: 3,
            input: "s = 'leetcode', k = 3",
            output: "2",
            explanation: `Substrings 'lee', 'eet', and 'ode' each contain 2 vowels.`
          }
        ],
        constraints: [
          "1 <= s.length <= 10⁵",
          "s consists of lowercase English letters.",
          "1 <= k <= s.length"
        ],
        defaultCode: `Sample Input: \nabciiidef\n3\n\nSample Output: \n3`
      },

      {
        id: 3,
        title: "Max Consecutive Ones III",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/3E4JBHSLpYk",
        description: `Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.`,
        testCases: [
          {
            example: 1,
            input: "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2",
            output: "6",
            explanation: `Flipping two 0s gives: [1,1,1,0,0,1,1,1,1,1,1].`
          },
          {
            example: 2,
            input: "nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3",
            output: "10",
            explanation: `Flipping three 0s gives: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1].`
          }
        ],
        constraints: [
          "1 <= nums.length <= 10⁵",
          "nums[i] is either 0 or 1.",
          "0 <= k <= nums.length"
        ],
        defaultCode: `Sample Input:\n11\n1 1 1 0 0 0 1 1 1 1 0\n2\n\nSample Output:\n6`
      },

      {
        id: 4,
        title: "Longest Subarray of 1's After Deleting One Element",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/AmtU7Qe0QZU",
        description: `Given a binary array nums, you should delete one element from it. Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.`,
        testCases: [
          {
            example: 1,
            input: "nums = [1,1,0,1]",
            output: "3",
            explanation: `Deleting the number at index 2 results in [1,1,1], which contains 3 ones.`
          },
          {
            example: 2,
            input: "nums = [0,1,1,1,0,1,1,0,1]",
            output: "5",
            explanation: `Deleting the number at index 4 results in [0,1,1,1,1,1,0,1], where the longest subarray of 1's is 5.`
          },
          {
            example: 3,
            input: "nums = [1,1,1]",
            output: "2",
            explanation: `You must delete one element, so the longest subarray is of length 2.`
          }
        ],
        constraints: [
          "1 <= nums.length <= 10⁵",
          "nums[i] is either 0 or 1."
        ],
        defaultCode: `Sample Input:\n4\n1 1 0 1\n\nSample Output:\n3`
      }

    ]
  },
  {
    id: 4,
    title: "Prefix Sum",
    total: 2,
    problems: [
      {
        id: 1,
        title: "Find the Highest Altitude",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/Q6oU9wdaaF4",
        description: `There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with an altitude of 0.\n\nYou are given an integer array gain of length n, where gain[i] is the net gain in altitude between points i and i + 1 for all (0 <= i < n). Return the highest altitude reached during the trip.`,
        testCases: [
          {
            example: 1,
            input: "gain = [-5,1,5,0,-7]",
            output: "1",
            explanation: `The altitudes are [0,-5,-4,1,1,-6]. The highest altitude reached is 1.`
          },
          {
            example: 2,
            input: "gain = [-4,-3,-2,-1,4,3,2]",
            output: "0",
            explanation: `The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest altitude reached is 0.`
          }
        ],
        constraints: [
          "n == gain.length",
          "1 <= n <= 100",
          "-100 <= gain[i] <= 100"
        ],
        defaultCode: `Sample Input:\n5\n-5 1 5 0 -7\n\nSample Output:\n1`
      },

      {
        id: 2,
        title: "Find Pivot Index",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/u89i60lYx8U",
        description: `Given an array of integers nums, calculate the pivot index of this array.\n\nThe pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the right of the index.\n\nIf the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.\n\nReturn the leftmost pivot index. If no such index exists, return -1.`,
        testCases: [
          {
            example: 1,
            input: "nums = [1,7,3,6,5,6]",
            output: "3",
            explanation: `The pivot index is 3.\nLeft sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11\nRight sum = nums[4] + nums[5] = 5 + 6 = 11.`
          },
          {
            example: 2,
            input: "nums = [1,2,3]",
            output: "-1",
            explanation: `There is no index that satisfies the conditions in the problem statement.`
          },
          {
            example: 3,
            input: "nums = [2,1,-1]",
            output: "0",
            explanation: `The pivot index is 0.\nLeft sum = 0 (no elements to the left of index 0)\nRight sum = nums[1] + nums[2] = 1 + (-1) = 0.`
          }
        ],
        constraints: [
          "1 <= nums.length <= 10⁴",
          "-1000 <= nums[i] <= 1000"
        ],
        defaultCode: `Sample Input:\n6\n1 7 3 6 5 6\n\nSample Output:\n3`
      }
    ]
  },
  {
    id: 5,
    title: "Hash Map & Set",
    total: 2,
    problems: [
      {
        id: 1,
        title: "Unique Number of Occurrences",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/vuYlOjpqxXs",
        description: `Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.`,
        testCases: [
          {
            example: 1,
            input: "arr = [1,2,2,1,1,3]",
            output: "true",
            explanation: `The value 1 has 3 occurrences, 2 has 2, and 3 has 1. No two values have the same number of occurrences.`
          },
          {
            example: 2,
            input: "arr = [1,2]",
            output: "false"
          },
          {
            example: 3,
            input: "arr = [-3,0,1,-3,1,1,1,-3,10,0]",
            output: "true"
          }
        ],
        constraints: [
          "1 <= arr.length <= 1000",
          "-1000 <= arr[i] <= 1000"
        ],
        defaultCode: `Sample Input: \n6\n1 2 2 1 1 3\n\nSample Output: \ntrue`
      },

      {
        id: 2,
        title: "Determine if Two Strings Are Close",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/aNfMQ4qMBes",
        description: "Two strings are considered close if you can attain one from the other using the following operations:\n   1. Swap any two existing characters. (e.g., 'abcde' -> 'aecdb')\n   2. Transform every occurrence of one existing character into another existing character and vice versa. (e.g., 'aacabb' -> 'bbcbaa')\n\nYou can use the operations on either string as many times as necessary.\n\nGiven two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.",
        testCases: [
          {
            example: 1,
            input: "word1 = 'abc', word2 = 'bca'",
            output: "true",
            explanation: "You can attain word2 from word1 in 2 operations.\nApply Operation 1: 'abc' -> 'acb'\nApply Operation 1: 'acb' -> 'bca'"
          },
          {
            example: 2,
            input: "word1 = 'a', word2 = 'aa'",
            output: "false",
            explanation: "It is impossible to attain word2 from word1, or vice versa, in any number of operations."
          },
          {
            example: 3,
            input: "word1 = 'cabbba', word2 = 'abbccc'",
            output: "true",
            explanation: "You can attain word2 from word1 in 3 operations.\nApply Operation 1: 'cabbba' -> 'caabbb'\nApply Operation 2: 'caabbb' -> 'baaccc'\nApply Operation 2: 'baaccc' -> 'abbccc'"
          }
        ],
        constraints: [
          "1 <= word1.length, word2.length <= 10⁵",
          "word1 and word2 contain only lowercase English letters."
        ],
        defaultCode: ""
      },

    ]
  },
  {
    id: 6,
    title: "Stack",
    total: 3,
    problems: [
      {
        id: 1,
        title: "Valid Parentheses",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/WTzjTskDFMg",
        description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.`,
        testCases: [
          {
            example: 1,
            input: "s = \"()\"",
            output: "true",
            explanation: `The parentheses are balanced and properly closed.`
          },
          {
            example: 2,
            input: "s = \"()[]{}\"",
            output: "true",
            explanation: `Each type of bracket is opened and closed correctly.`
          },
          {
            example: 3,
            input: "s = \"(]\"",
            output: "false",
            explanation: `The '(' is not closed by the correct corresponding bracket.`
          },
          {
            example: 4,
            input: "s = \"([])\"",
            output: "true",
            explanation: `Brackets are nested properly in the correct order.`
          }
        ],
        constraints: [
          "1 <= s.length <= 10⁴",
          "s consists of parentheses only '()[]{}'."
        ],
        defaultCode: ``
      },

      {
        id: 2,
        title: "Evaluate Reverse Polish Notation",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/iu0082c4HDE",
        description: `You are given an array of strings tokens that represents an arithmetic expression in Reverse Polish Notation.\n\nEvaluate the expression. Return an integer that represents the value of the expression.\n\nNote that:\n- The valid operators are '+', '-', '*', and '/'.\n- Each operand may be an integer or another expression.\n- The division between two integers always truncates toward zero.\n- There will not be any division by zero.\n- The input represents a valid arithmetic expression in reverse polish notation.\n- The answer and all the intermediate calculations can be represented in a 32-bit integer.`,
        testCases: [
          {
            example: 1,
            input: "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]",
            output: "9",
            explanation: `((2 + 1) * 3) = 9`
          },
          {
            example: 2,
            input: "tokens = [\"4\",\"13\",\"5\",\"/\",\"+\"]",
            output: "6",
            explanation: `(4 + (13 / 5)) = 6`
          },
          {
            example: 3,
            input: "tokens = [\"10\",\"6\",\"9\",\"3\",\"+\",\"-11\",\"*\",\"/\",\"*\",\"17\",\"+\",\"5\",\"+\"]",
            output: "22",
            explanation: `((10 * (6 / ((9 + 3) * -11))) + 17) + 5 = ((10 * (6 / (12 * -11))) + 17) + 5 = ((10 * (6 / -132)) + 17) + 5 = ((10 * 0) + 17) + 5 = (0 + 17) + 5 = 17 + 5 = 22`
          }
        ],
        constraints: [
          "1 <= tokens.length <= 10⁴",
          "tokens[i] is either an operator: \"+\", \"-\", \"*\", or \"/\", or an integer in the range [-200, 200]."
        ],
        defaultCode: "Sample Input: \n5\n2 1 + 3 *\n\nSample Output: \n9"
      },

      {
        id: 3,
        title: "Decode String",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/qB0zZpBJlh8",
        description: `Given an encoded string, return its decoded string.\n\nThe encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. k is always a positive integer.\n\nYou may assume the input string is always valid with well-formed brackets and no extra white spaces. The original data does not contain digits, and digits are only for repeat numbers k (e.g., there will not be input like 3a or 2[4]).\n\nThe test cases ensure that the output length will never exceed 10⁵.`,
        testCases: [
          {
            example: 1,
            input: "s = \"3[a]2[bc]\"",
            output: "\"aaabcbc\"",
            explanation: `Expanding 3[a] gives 'aaa', and expanding 2[bc] gives 'bcbc'. The final result is 'aaabcbc'.`
          },
          {
            example: 2,
            input: "s = \"3[a2[c]]\"",
            output: "\"accaccacc\"",
            explanation: `Expanding inner '2[c]' gives 'cc', then expanding '3[a cc]' results in 'accaccacc'.`
          },
          {
            example: 3,
            input: "s = \"2[abc]3[cd]ef\"",
            output: "\"abcabccdcdcdef\"",
            explanation: `Expanding 2[abc] gives 'abcabc' and expanding 3[cd] gives 'cdcdcd', then adding 'ef' results in 'abcabccdcdcdef'.`
          }
        ],
        constraints: [
          "1 <= s.length <= 30",
          "s consists of lowercase English letters, digits, and square brackets '[]'.",
          "s is guaranteed to be a valid input.",
          "All integers in s are in the range [1, 300]."
        ],
        defaultCode: ``
      }

    ]
  },
  {
    id: 7,
    title: "Linked List",
    total: 3,
    problems: [
      {
        id: 1,
        title: "Delete the Middle Node of a Linked List",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/WT0O4TTjyNc",
        description: `You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.\n\nThe middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.\n\nFor n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.`,
        testCases: [
          {
            example: 1,
            image: "https://assets.leetcode.com/uploads/2021/11/16/eg1drawio.png",
            input: "head = [1,3,4,7,1,2,6]",
            output: "[1,3,4,1,2,6]",
            explanation: `Since n = 7, node 3 with value 7 is the middle node, which is removed, resulting in [1,3,4,1,2,6].`
          },
          {
            example: 2,
            input: "head = [1,2,3,4]",
            output: "[1,2,4]",
            explanation: `For n = 4, node 2 with value 3 is the middle node, which is removed, resulting in [1,2,4].`
          },
          {
            example: 3,
            input: "head = [2,1]",
            output: "[2]",
            explanation: `For n = 2, node 1 with value 1 is the middle node, which is removed, leaving [2].`
          }
        ],
        constraints: [
          "The number of nodes in the list is in the range [1, 10⁵].",
          "1 <= Node.val <= 10⁵"
        ],
        defaultCode: "Sample Input: \n7\n1 3 4 7 1 2 6\n\nSample Output: \n1 3 4 1 2 6"
      },

      {
        id: 2,
        title: "Odd Even Linked List",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/k52H4XP5_pk",
        description: `Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.\n\nThe first node is considered odd, and the second node is even, and so on.\n\nNote that the relative order inside both the even and odd groups should remain as it was in the input.\n\nYou must solve the problem in O(1) extra space complexity and O(n) time complexity.`,
        testCases: [
          {
            example: 1,
            image: "https://assets.leetcode.com/uploads/2021/03/10/oddeven-linked-list.jpg",
            input: "head = [1,2,3,4,5]",
            output: "[1,3,5,2,4]",
            explanation: `In the input list [1,2,3,4,5], nodes at odd indices (1, 3, 5) are grouped together first, followed by the nodes at even indices (2, 4).`
          },
          {
            example: 2,
            image: "https://assets.leetcode.com/uploads/2021/03/10/oddeven2-linked-list.jpg",
            input: "head = [2,1,3,5,6,4,7]",
            output: "[2,3,6,7,1,5,4]",
            explanation: `In the input list [2,1,3,5,6,4,7], nodes at odd indices (2, 3, 6, 7) are grouped together first, followed by nodes at even indices (1, 5, 4).`
          }
        ],
        constraints: [
          "The number of nodes in the linked list is in the range [0, 10⁴].",
          "-10⁶ <= Node.val <= 10⁶"
        ],
        defaultCode: "Sample Input: \n5\n1 2 3 4 5\n\nSample Output: \n1 3 5 2 4"
      },

      {
        id: 3,
        title: "Reverse Linked List",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/G0_I-ZF0S38",
        description: `Given the head of a singly linked list, reverse the list, and return the reversed list.`,
        testCases: [
          {
            example: 1,
            input: "head = [1,2,3,4,5]",
            output: "[5,4,3,2,1]",
            explanation: `In the input list [1,2,3,4,5], after reversing, the list becomes [5,4,3,2,1].`
          },
          {
            example: 2,
            input: "head = [1,2]",
            output: "[2,1]",
            explanation: `In the input list [1,2], after reversing, the list becomes [2,1].`
          },
          {
            example: 3,
            input: "head = []",
            output: "[]",
            explanation: `In the input list [], no reversal is needed, the list remains empty.`
          }
        ],
        constraints: [
          "The number of nodes in the list is in the range [0, 5000].",
          "-5000 <= Node.val <= 5000"
        ],
        defaultCode: "Sample Input: \n5\n1 2 3 4 5\n\nSample Output: \n5 4 3 2 1"
      },

    ]
  },
  {
    id: 8,
    title: "Binary Tree",
    total: 3,
    problems: [
      {
        id: 1,
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/hTM3phVI6YQ",
        description: `Given the root of a binary tree, return its maximum depth.\n\nA binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.`,
        testCases: [
          {
            example: 1,
            image: "https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg",
            input: "root = [3,9,20,null,null,15,7]",
            output: "3",
            explanation: `The longest path is from root 3 → 20 → 7, which has a depth of 3.`
          },
          {
            example: 2,
            input: "root = [1,null,2]",
            output: "2",
            explanation: `The longest path is from root 1 → 2, which has a depth of 2.`
          }
        ],
        constraints: [
          "The number of nodes in the tree is in the range [0, 10⁴].",
          "-100 <= Node.val <= 100"
        ],
        defaultCode: `Sample Input:\n3 9 20 null null 15 7\n\nSample Output:\n3`
      },

      {
        id: 2,
        title: "Leaf-Similar Trees",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/Nr8dbnL0_cM",
        description: `Consider all the leaves of a binary tree. From left to right order, the values of those leaves form a leaf value sequence.\n\nTwo binary trees are considered leaf-similar if their leaf value sequence is the same.\n\nReturn true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.`,
        testCases: [
          {
            example: 1,
            image: "https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-1.jpg",
            input: "root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]",
            output: "true",
            explanation: `Both trees have the leaf sequence (6, 7, 4, 9, 8). Since they match, the output is true.`
          },
          {
            example: 2,
            image: "https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-2.jpg",
            input: "root1 = [1,2,3], root2 = [1,3,2]",
            output: "false",
            explanation: `Tree 1 has the leaf sequence [2,3], while Tree 2 has [3,2]. Since they are different, the output is false.`
          }
        ],
        constraints: [
          "The number of nodes in each tree will be in the range [1, 200].",
          "Both of the given trees will have values in the range [0, 200]."
        ],
        defaultCode: `Sample Input:\n3 5 1 6 2 9 8 null null 7 4\n3 5 1 6 7 4 2 null null null null null null 9 8\n\nSample Output:\ntrue`
      },

      {
        id: 3,
        title: "Count Good Nodes in Binary Tree",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/7cp5imvDzl4",
        description: `Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.\n\nReturn the number of good nodes in the binary tree.`,
        testCases: [
          {
            example: 1,
            image: "https://assets.leetcode.com/uploads/2020/04/02/test_sample_1.png",
            input: "root = [3,1,4,3,null,1,5]",
            output: "4",
            explanation: `Nodes in blue are good.\n- Root Node (3) is always a good node.\n- Node 4 -> (3,4) is the maximum value in the path starting from the root.\n- Node 5 -> (3,4,5) is the maximum value in the path.\n- Node 3 -> (3,1,3) is the maximum value in the path.`
          },
          {
            example: 2,
            image: "https://assets.leetcode.com/uploads/2020/04/02/test_sample_2.png",
            input: "root = [3,3,null,4,2]",
            output: "3",
            explanation: `Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.`
          },
          {
            example: 3,
            input: "root = [1]",
            output: "1",
            explanation: `Root is considered as good.`
          }
        ],
        constraints: [
          "The number of nodes in the binary tree is in the range [1, 10^5].",
          "Each node's value is between [-10^4, 10^4]."
        ],
        defaultCode: `Sample Input:\n3 1 4 3 null 1 5\n\nSample Output:\n4`
      },
    ]
  },


  {
    id: 9,
    title: "Graphs",
    total: 3,
    problems: [
      {
        id: 1,
        title: "Keys and Rooms",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/Rz_-Kx0LN-E",
        description: `There are n rooms labeled from 0 to n - 1, and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.\n\nWhen you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock other rooms.\n\nGiven an array rooms where rooms[i] represents the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.`,
        testCases: [
          {
            example: 1,
            input: "rooms = [[1],[2],[3],[]]",
            output: "true",
            explanation: `We visit room 0 and pick up key 1.\nWe then visit room 1 and pick up key 2.\nWe then visit room 2 and pick up key 3.\nWe then visit room 3.\nSince we were able to visit every room, we return true.`
          },
          {
            example: 2,
            input: "rooms = [[1,3],[3,0,1],[2],[0]]",
            output: "false",
            explanation: `We cannot enter room number 2 since the only key that unlocks it is inside that room.`
          }
        ],
        constraints: [
          "n == rooms.length.",
          "2 <= n <= 1000.",
          "0 <= rooms[i].length <= 1000.",
          "1 <= sum(rooms[i].length) <= 3000.",
          "0 <= rooms[i][j] < n.",
          "All the values of rooms[i] are unique."
        ],
        defaultCode: `Sample Input:\n4\n1 3\n3 0 1\n2\n0\n\nSample Output:\nfalse`
      },

      {
        id: 2,
        title: "Number of Provinces",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/UgBcBFRatDU",
        description: `There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.\n\nA province is a group of directly or indirectly connected cities and no other cities outside of the group.\n\nYou are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.\n\nReturn the total number of provinces.`,
        testCases: [
          {
            example: 1,
            image: "https://assets.leetcode.com/uploads/2020/12/24/graph1.jpg",
            input: "isConnected = [[1,1,0],[1,1,0],[0,0,1]]",
            output: "2",
            explanation: `There are two provinces: {0,1} and {2}.`
          },
          {
            example: 2,
            image: "https://assets.leetcode.com/uploads/2020/12/24/graph2.jpg",
            input: "isConnected = [[1,0,0],[0,1,0],[0,0,1]]",
            output: "3",
            explanation: `Each city is isolated, forming three separate provinces.`
          }
        ],
        constraints: [
          "1 <= n <= 200.",
          "n == isConnected.length.",
          "n == isConnected[i].length.",
          "isConnected[i][j] is 1 or 0.",
          "isConnected[i][i] == 1.",
          "isConnected[i][j] == isConnected[j][i]."
        ],
        defaultCode: `Sample Input:\n3\n1 1 0\n1 1 0\n0 0 1\n\nSample Output:\n2`
      },

      {
        id: 3,
        title: "Rotting Oranges",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/y704fEOx0s0",
        description: `You are given an m x n grid where each cell can have one of three values:\n\n- 0 representing an empty cell,\n- 1 representing a fresh orange, or\n- 2 representing a rotten orange.\n\nEvery minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.\n\nReturn the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.`,
        testCases: [
          {
            example: 1,
            image: "https://assets.leetcode.com/uploads/2019/02/16/oranges.png",
            input: `grid = [[2,1,1],[1,1,0],[0,1,1]]`,
            output: "4",
            explanation: `In 4 minutes, all fresh oranges become rotten.`
          },
          {
            example: 2,
            input: `grid = [[2,1,1],[0,1,1],[1,0,1]]`,
            output: "-1",
            explanation: `The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.`
          },
          {
            example: 3,
            input: `grid = [[0,2]]`,
            output: "0",
            explanation: `Since there are already no fresh oranges at minute 0, the answer is just 0.`
          }
        ],
        constraints: [
          "m == grid.length",
          "n == grid[i].length",
          "1 <= m, n <= 10",
          "grid[i][j] is 0, 1, or 2."
        ],
        defaultCode: `Sample Input:\n3 3\n2 1 1\n1 1 0\n0 1 1\n\nSample Output:\n4`
      }

    ]
  },
  {
    id: 10,
    title: "Heap",
    total: 3,
    problems: [
      {
        id: 1,
        title: "Last Stone Weight",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/B-QCq79-Vfw",
        description: `You are given an array of integers stones where stones[i] is the weight of the ith stone.\n\nWe are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:\n\n- If x == y, both stones are destroyed.\n- If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.\n\nAt the end of the game, there is at most one stone left.\n\nReturn the weight of the last remaining stone. If there are no stones left, return 0.`,
        testCases: [
          {
            example: 1,
            input: "stones = [2,7,4,1,8,1]",
            output: "1",
            explanation: `We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,\n\nwe combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,\n\nwe combine 2 and 1 to get 1 so the array converts to [1,1,1] then,\n\nwe combine 1 and 1 to get 0 so the array converts to [1].`
          },
          {
            example: 2,
            input: "stones = [1]",
            output: "1",
          }
        ],
        constraints: [
          "1 <= stones.length <= 30",
          "1 <= stones[i] <= 1000"
        ],
        defaultCode: "Sample Input: \n6\n2 7 4 1 8 1\n\nSample Output: \n1"
      },

      {
        id: 2,
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/XEmy13g1Qxc",
        description: `Given an integer array nums and an integer k, return the kth largest element in the array.\n\nNote that it is the kth largest element in the sorted order, not the kth distinct element.\n\nCan you solve it without sorting?`,
        testCases: [
          {
            example: 1,
            input: `nums = [3,2,1,5,6,4], k = 2`,
            output: "5",
          },
          {
            example: 2,
            input: `nums = [3,2,3,1,2,4,5,5,6], k = 4`,
            output: "4",
          }
        ],
        constraints: [
          "1 <= k <= nums.length <= 10^5",
          "-10^4 <= nums[i] <= 10^4"
        ],
        defaultCode: `Sample Input:\n6\n3 2 1 5 6 4\n2\n\nSample Output:\n5`
      },

      {
        id: 3,
        title: "Total Cost to Hire K Workers",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/T2NiuToVFBU",
        description: "You are given a 0-indexed integer array costs where costs[i] is the cost of hiring the ith worker.\n\nYou are also given two integers k and candidates. We want to hire exactly k workers according to the following rules:\n\n- You will run k sessions and hire exactly one worker in each session.\n- In each hiring session, choose the worker with the lowest cost from either the first candidates workers or the last candidates workers. Break the tie by the smallest index.\n- If there are fewer than candidates workers remaining, choose the worker with the lowest cost among them. Break the tie by the smallest index.\n- A worker can only be chosen once.\n\nReturn the total cost to hire exactly k workers.",
        testCases: [
          {
            example: 1,
            input: "costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4",
            output: "11",
            explanation: "We hire 3 workers in total. The total cost is initially 0.\n\n- In the first hiring round we choose the worker from [17,12,10,2,7,2,11,20,8]. The lowest cost is 2, and we break the tie by the smallest index, which is 3. The total cost = 0 + 2 = 2.\n- In the second hiring round we choose the worker from [17,12,10,7,2,11,20,8]. The lowest cost is 2 (index 4). The total cost = 2 + 2 = 4.\n- In the third hiring round we choose the worker from [17,12,10,7,11,20,8]. The lowest cost is 7 (index 3). The total cost = 4 + 7 = 11.\n\nThe total hiring cost is 11."
          },
          {
            example: 2,
            input: "costs = [1,2,4,1], k = 3, candidates = 3",
            output: "4",
            explanation: "We hire 3 workers in total. The total cost is initially 0.\n\n- In the first hiring round we choose the worker from [1,2,4,1]. The lowest cost is 1, and we break the tie by the smallest index, which is 0. The total cost = 0 + 1 = 1.\n- In the second hiring round we choose the worker from [2,4,1]. The lowest cost is 1 (index 2). The total cost = 1 + 1 = 2.\n- In the third hiring round there are less than three candidates. We choose the worker from the remaining workers [2,4]. The lowest cost is 2 (index 0). The total cost = 2 + 2 = 4.\n\nThe total hiring cost is 4."
          }
        ],
        constraints: [
          "1 <= costs.length <= 100000",
          "1 <= costs[i] <= 100000",
          "1 <= k, candidates <= costs.length"
        ],
        defaultCode: "Sample Input: \n9\n17 12 10 2 7 2 11 20 8\n3\n4\n\nSample Output: \n11"
      }

    ]
  },
  {
    id: 11,
    title: "Binary Search",
    total: 2,
    problems: [
      {
        id: 1,
        title: "Guess Number Higher or Lower",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/xW4QsTtaCa4",
        description: "We are playing the Guess Game. The game is as follows:\n\nI pick a number from 1 to n. You have to guess which number I picked.\n\nEvery time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.\n\nYou call a pre-defined API int guess(int num), which returns three possible results:\n\n- -1: Your guess is higher than the number I picked (i.e. num > pick).\n- 1: Your guess is lower than the number I picked (i.e. num < pick).\n- 0: Your guess is equal to the number I picked (i.e. num == pick).\n\nReturn the number that I picked.",
        testCases: [
          {
            example: 1,
            input: "n = 10, pick = 6",
            output: "6"
          },
          {
            example: 2,
            input: "n = 1, pick = 1",
            output: "1"
          },
          {
            example: 3,
            input: "n = 2, pick = 1",
            output: "1"
          }
        ],
        constraints: [
          "1 <= n <= 2³¹ - 1",
          "1 <= pick <= n"
        ],
        defaultCode: ""
      },

      {
        id: 2,
        title: "Koko Eating Bananas",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/U2SozAs9RzA",
        description: "Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.\n\nKoko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.\n\nKoko likes to eat slowly but still wants to finish eating all the bananas before the guards return.\n\nReturn the minimum integer k such that she can eat all the bananas within h hours.",
        testCases: [
          {
            example: 1,
            input: "piles = [3,6,7,11], h = 8",
            output: "4",
          },
          {
            example: 2,
            input: "piles = [30,11,23,4,20], h = 5",
            output: "30",
          },
          {
            example: 3,
            input: "piles = [30,11,23,4,20], h = 6",
            output: "23",
          }
        ],
        constraints: [
          "1 <= piles.length <= 10⁴",
          "piles.length <= h <= 10⁹",
          "1 <= piles[i] <= 10⁹"
        ],
        defaultCode: "Sample Input: \n4\n3 6 7 11\n8\n\nSample Output: \n4"
      }
    ],
  },
  {
    id: 12,
    title: "Backtracking",
    total: 2,
    problems: [

      {
        id: 1,
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/0snEunUacZY",
        image: " https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png",
        description: `Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.\n\nA mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.`,
        testCases: [
          {
            example: 1,
            input: "digits = \"23\"",
            output: '["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]',
            explanation: `Digit '2' maps to ['a', 'b', 'c'], and digit '3' maps to ['d', 'e', 'f']. Combining all possible choices results in the output.`
          },
          {
            example: 2,
            input: "digits = \"\"",
            output: '[]',
            explanation: `An empty input means there are no digits to map, so the output is an empty list.`
          },
          {
            example: 3,
            input: "digits = \"2\"",
            output: '["a", "b", "c"]',
            explanation: `Digit '2' maps to ['a', 'b', 'c'], so these are the only possible combinations.`
          }
        ],
        constraints: [
          "0 <= digits.length <= 4",
          "digits[i] is a digit in the range ['2', '9']."
        ],
        defaultCode: "Sample Input: \n23\n\nSample Output: \nad ae af bd be bf cd ce cf"
      },

      {
        id: 2,
        title: "Combination Sum III",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/_xCNCpmr00Y",
        description: `Find all valid combinations of k numbers that sum up to n such that the following conditions are true:\n\n- Only numbers 1 through 9 are used.\n- Each number is used at most once.\n\nReturn a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.`,
        testCases: [
          {
            example: 1,
            input: "k = 3, n = 7",
            output: '[[1,2,4]]',
            explanation: `1 + 2 + 4 = 7\nThere are no other valid combinations.`
          },
          {
            example: 2,
            input: "k = 3, n = 9",
            output: '[[1,2,6],[1,3,5],[2,3,4]]',
            explanation: `1 + 2 + 6 = 9\n1 + 3 + 5 = 9\n2 + 3 + 4 = 9\nThere are no other valid combinations.`
          },
          {
            example: 3,
            input: "k = 4, n = 1",
            output: '[]',
            explanation: `There are no valid combinations.\nUsing 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combinations.`
          }
        ],
        constraints: [
          "2 <= k <= 9",
          "1 <= n <= 60"
        ],
        defaultCode: "Sample Input: \n3 7\n\nSample Output: \n1 2 4"
      }

    ]
  },
  {
    id: 13,
    title: "DP - 1D",
    total: 3,
    problems: [
      {
        id: 1,
        title: "N-th Tribonacci Number",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/3lpNp5Ojvrw",
        description: `The Tribonacci sequence Tₙ is defined as follows:\n\nT₀ = 0, T₁ = 1, T₂ = 1, and Tₙ₊₃ = Tₙ + Tₙ₊₁ + Tₙ₊₂ for n ≥ 0.\n\nGiven n, return the value of Tₙ.`,
        testCases: [
          {
            example: 1,
            input: "n = 4",
            output: "4",
            explanation: `T₃ = 0 + 1 + 1 = 2\nT₄ = 1 + 1 + 2 = 4`
          },
          {
            example: 2,
            input: "n = 25",
            output: "1389537",
            explanation: `Standard Tribonacci calculation up to T₂₅.`
          }
        ],
        constraints: [
          "0 <= n <= 37",
          "The answer is guaranteed to fit within a 32-bit integer, i.e., answer <= 2³¹ - 1."
        ],
        defaultCode: ""
      },

      {
        id: 2,
        title: "Min Cost Climbing Stairs",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/ktmzAZWkEZ0",
        description: `You are given an integer array cost where cost[i] is the cost of iᵗʰ step on a staircase. Once you pay the cost, you can either climb one or two steps.\n\nYou can either start from the step with index 0, or the step with index 1.\n\nReturn the minimum cost to reach the top of the floor.`,
        testCases: [
          {
            example: 1,
            input: "cost = [10,15,20]",
            output: "15",
            explanation: `You will start at index 1.\n- Pay 15 and climb two steps to reach the top.\nThe total cost is 15.`
          },
          {
            example: 2,
            input: "cost = [1,100,1,1,1,100,1,1,100,1]",
            output: "6",
            explanation: `You will start at index 0.\n- Pay 1 and climb two steps to reach index 2.\n- Pay 1 and climb two steps to reach index 4.\n- Pay 1 and climb two steps to reach index 6.\n- Pay 1 and climb one step to reach index 7.\n- Pay 1 and climb two steps to reach index 9.\n- Pay 1 and climb one step to reach the top.\nThe total cost is 6.`
          }
        ],
        constraints: [
          "2 <= cost.length <= 1000",
          "0 <= cost[i] <= 999"
        ],
        defaultCode: "Sample Input: \n3\n10 15 20\n\nSample Output: \n15"
      },

      {
        id: 3,
        title: "House Robber",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/73r3KWiEvyk",
        description: `You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, but the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected, and it will automatically contact the police if two adjacent houses are broken into on the same night.\n\nGiven an integer array nums representing the amount of money in each house, return the maximum amount of money you can rob tonight without alerting the police.`,
        testCases: [
          {
            example: 1,
            input: "nums = [1,2,3,1]",
            output: "4",
            explanation: `Rob house 1 (money = 1) and then rob house 3 (money = 3).\nTotal amount you can rob = 1 + 3 = 4.`
          },
          {
            example: 2,
            input: "nums = [2,7,9,3,1]",
            output: "12",
            explanation: `Rob house 1 (money = 2), rob house 3 (money = 9), and rob house 5 (money = 1).\nTotal amount you can rob = 2 + 9 + 1 = 12.`
          }
        ],
        constraints: [
          "1 <= nums.length <= 100",
          "0 <= nums[i] <= 400"
        ],
        defaultCode: "Sample Input: \n4\n1 2 3 1\n\nSample Output: \n4"
      },

    ]
  },
  {
    id: 14,
    title: "DP - Multidimensional",
    total: 2,
    problems: [
      {
        id: 1,
        title: "Unique Paths",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/IlEsdxuD4lY",
        description: `There is a robot on an m × n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.\n\nGiven the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.\n\nThe test cases are generated so that the answer will be less than or equal to 2 × 10⁹.`,
        testCases: [
          {
            example: 1,
            image: "https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png",
            input: "m = 3, n = 7",
            output: "28",
            explanation: "There are 28 different ways for the robot to reach the bottom-right corner."
          },
          {
            example: 2,
            input: "m = 3, n = 2",
            output: "3",
            explanation: `From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:\n1. Right → Down → Down\n2. Down → Down → Right\n3. Down → Right → Down`
          }
        ],
        constraints: [
          "1 <= m, n <= 100"
        ],
        defaultCode: ""
      },

      
      {
        id: 2,
        title: "Edit Distance",
        difficulty: "Hard",
        solutionLink: "https://www.youtube.com/embed/XYi2-LPrwm4",
        description: `Given two strings word₁ and word₂, return the minimum number of operations required to convert word₁ to word₂.\n\nYou have the following three operations permitted on a word:\n- Insert a character\n- Delete a character\n- Replace a character`,
        testCases: [
          {
            example: 1,
            input: "word₁ = 'horse', word₂ = 'ros'",
            output: "3",
            explanation: `horse → rorse (replace 'h' with 'r')\nrorse → rose (remove 'r')\nrose → ros (remove 'e')`
          },
          {
            example: 2,
            input: "word₁ = 'intention', word₂ = 'execution'",
            output: "5",
            explanation: `intention → inention (remove 't')\ninention → enention (replace 'i' with 'e')\nenention → exention (replace 'n' with 'x')\nexention → exection (replace 'n' with 'c')\nexection → execution (insert 'u')`
          }
        ],
        constraints: [
          "0 ≤ word₁.length, word₂.length ≤ 500",
          "word₁ and word₂ consist of lowercase English letters."
        ],
        defaultCode: ""
      }

    ]
  },
  {
    id: 15,
    title: "Bit Manipulation",
    total: 3,
    problems: [
      {
        id: 1,
        title: "Counting Bits",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/RyBM56RIWrM",
        description: "Given an integer n, return an array ans of length n + 1 such that for each i (0 ≤ i ≤ n), ans[i] is the number of 1's in the binary representation of i.",
        testCases: [
          {
            example: 1,
            input: "n = 2",
            output: "[0,1,1]",
            explanation: "0 → 0\n1 → 1\n2 → 10"
          },
          {
            example: 2,
            input: "n = 5",
            output: "[0,1,1,2,1,2]",
            explanation: "0 → 0\n1 → 1\n2 → 10\n3 → 11\n4 → 100\n5 → 101"
          }
        ],
        constraints: [
          "0 ≤ n ≤ 10⁵"
        ],
        defaultCode: "Sample Input: \n2\n\nSample Output: \n0 1 1"
      },

      {
        id: 2,
        title: "Single Number",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/qMPX1AOa83k",
        description: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.\n\nYou must implement a solution with a linear runtime complexity and use only constant extra space.",
        testCases: [
          {
            example: 1,
            input: "nums = [2,2,1]",
            output: "1"
          },
          {
            example: 2,
            input: "nums = [4,1,2,1,2]",
            output: "4"
          },
          {
            example: 3,
            input: "nums = [1]",
            output: "1"
          }
        ],
        constraints: [
          "1 ≤ nums.length ≤ 3 × 10⁴ + 1",
          "-3 × 10⁴ ≤ nums[i] ≤ 3 × 10⁴",
          "Each element in the array appears twice except for one element which appears only once."
        ],
        defaultCode: "Sample Input: \n3\n2 2 1\n\nSample Output: \n1"
      },

      {
        id: 3,
        title: "Minimum Flips to Make a OR b Equal to c",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/GLCJIXStcMk",
        description: "Given three positive numbers a, b, and c, return the minimum flips required in some bits of a and b to make (a OR b == c). (bitwise OR operation).\n\nA flip operation consists of changing any single bit from 1 to 0 or from 0 to 1 in their binary representation.",
        testCases: [
          {
            example: 1,
            image: "https://assets.leetcode.com/uploads/2020/01/06/sample_3_1676.png",
            input: "a = 2, b = 6, c = 5",
            output: "3",
            explanation: "After flips a = 1, b = 4, c = 5 such that (a OR b == c)."
          },
          {
            example: 2,
            input: "a = 4, b = 2, c = 7",
            output: "1"
          },
          {
            example: 3,
            input: "a = 1, b = 2, c = 3",
            output: "0"
          }
        ],
        constraints: [
          "1 ≤ a ≤ 10⁹",
          "1 ≤ b ≤ 10⁹",
          "1 ≤ c ≤ 10⁹"
        ],
        defaultCode: ""
      }
    ]
  },

];

export default topicsData;
