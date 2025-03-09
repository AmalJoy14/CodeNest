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
        solutionLink: "https://www.youtube.com/embed/LECWOvTo-Sc" ,
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
        defaultCode: ``
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
        defaultCode: ``
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
        defaultCode: ``
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
        defaultCode: ``
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
        defaultCode: ``
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
        defaultCode: ``
      }      
    ]
  },
  {
    id: 5,
    title: "Hash Map & Set",
    total: 4,
    problems: [
      {
        id: 1,
        title: "Find the Difference of Two Arrays",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/a4wqKR-znBE",
        description: `Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:\n\n- answer[0] is a list of all distinct integers in nums1 which are not present in nums2.\n- answer[1] is a list of all distinct integers in nums2 which are not present in nums1.\n\nNote that the integers in the lists may be returned in any order.`,
        testCases: [
          {
            example: 1,
            input: "nums1 = [1,2,3], nums2 = [2,4,6]",
            output: "[[1,3],[4,6]]",
            explanation: `For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].\nFor nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums1. Therefore, answer[1] = [4,6].`
          },
          {
            example: 2,
            input: "nums1 = [1,2,3,3], nums2 = [1,1,2,2]",
            output: "[[3],[]]",
            explanation: `For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].\nEvery integer in nums2 is present in nums1. Therefore, answer[1] = [].`
          }
        ],
        constraints: [
          "1 <= nums1.length, nums2.length <= 1000",
          "-1000 <= nums1[i], nums2[i] <= 1000"
        ],
        defaultCode: ``
      },
      
      {
        id: 2,
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
        defaultCode: ``
      },

      {
        id: 3,
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
      {
        id: 4,
        title: "Equal Row and Column Pairs",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/dDmyczX6bFc",
        description: "Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.\nA row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).",
        testCases: [
          {
            example: 1,
            image: "https://assets.leetcode.com/uploads/2022/06/01/ex1.jpg",
            input: "grid = [[3,2,1],[1,7,6],[2,7,7]]",
            output: "1",
            explanation: "There is 1 equal row and column pair:\n- (Row 2, Column 1): [2,7,7]"
          },
          {
            example: 2,
            image: "https://assets.leetcode.com/uploads/2022/06/01/ex2.jpg",
            input: "grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]",
            output: "3",
            explanation: "There are 3 equal row and column pairs:\n- (Row 0, Column 0): [3,1,2,2]\n- (Row 2, Column 2): [2,4,2,2]\n- (Row 3, Column 2): [2,4,2,2]"
          }
        ],
        constraints: [
          "n == grid.length == grid[i].length",
          "1 <= n <= 200",
          "1 <= grid[i][j] <= 10⁵"
        ],
        defaultCode: ""
      }      
      
    ]
  },
  {
    id: 6,
    title: "Stack",
    total: 5,
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
        defaultCode: ""
      },
      

      {
        id: 3,
        title: "Removing Stars From a String",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/pRyFZIaKegA",
        description: "You are given a string s, which contains stars '*'.\nIn one operation, you can:\n1. Choose a star in s.\n2. Remove the closest non-star character to its left, as well as remove the star itself.\nReturn the string after all stars have been removed.\n\nNote:\n- The input will be generated such that the operation is always possible.\n- It can be shown that the resulting string will always be unique.",
        testCases: [
          {
            example: 1,
            input: 's = "leet**cod*e"',
            output: '"lecoe"',
            explanation: "Performing the removals from left to right:\n- The closest character to the 1st star is 't' in 'leet**cod*e'. s becomes 'lee*cod*e'.\n- The closest character to the 2nd star is 'e' in 'lee*cod*e'. s becomes 'lecod*e'.\n- The closest character to the 3rd star is 'd' in 'lecod*e'. s becomes 'lecoe'.\nThere are no more stars, so we return 'lecoe'."
          },
          {
            example: 2,
            input: 's = "erase*****"',
            output: '""',
            explanation: "The entire string is removed, so we return an empty string."
          }
        ],
        constraints: [
          "1 <= s.length <= 10⁵",
          "s consists of lowercase English letters and stars '*'.",
          "The operation above can be performed on s."
        ],
        defaultCode: ""
      },

      {
        id: 4,
        title: "Asteroid Collision",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/LN7KjRszjk4",
        description: "We are given an array asteroids of integers representing asteroids in a row. The indices of the asteroids in the array represent their relative position in space.\n\nFor each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.\n\nFind out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.",
        testCases: [
          {
            example: 1,
            input: "asteroids = [5,10,-5]",
            output: "[5,10]",
            explanation: "The 10 and -5 collide resulting in 10. The 5 and 10 never collide."
          },
          {
            example: 2,
            input: "asteroids = [8,-8]",
            output: "[]",
            explanation: "The 8 and -8 collide exploding each other."
          },
          {
            example: 3,
            input: "asteroids = [10,2,-5]",
            output: "[10]",
            explanation: "The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10."
          }
        ],
        constraints: [
          "2 <= asteroids.length <= 10⁴",
          "-1000 <= asteroids[i] <= 1000",
          "asteroids[i] != 0"
        ],
        defaultCode: ""
      },

      {
        id: 5,
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
    total: 4,
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
            image:"https://assets.leetcode.com/uploads/2021/11/16/eg1drawio.png",
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
        defaultCode: ""
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
        defaultCode: ""
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
        defaultCode: ""
      },

      {
        id: 4,
        title: "Maximum Twin Sum of a Linked List",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/doj95MelfSA",
        description: `In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.\n\nFor example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.\nThe twin sum is defined as the sum of a node and its twin.\n\nGiven the head of a linked list with even length, return the maximum twin sum of the linked list.`,
        testCases: [
          {
            example: 1,
            image:"https://assets.leetcode.com/uploads/2021/12/03/eg1drawio.png",
            input: "head = [5,4,2,1]",
            output: "6",
            explanation: `Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.\nThere are no other nodes with twins in the linked list.\nThus, the maximum twin sum of the linked list is 6.`
          },
          {
            example: 2,
            image:"https://assets.leetcode.com/uploads/2021/12/03/eg2drawio.png",
            input: "head = [4,2,2,3]",
            output: "7",
            explanation: `The nodes with twins present in this linked list are:\n- Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.\n- Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.\nThus, the maximum twin sum of the linked list is max(7, 4) = 7.`
          },
          {
            example: 3,
            input: "head = [1,100000]",
            output: "100001",
            explanation: `There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.`
          }
        ],
        constraints: [
          "The number of nodes in the list is an even integer in the range [2, 10⁵].",
          "1 <= Node.val <= 10⁵"
        ],
        defaultCode: ""
      }
      
    ]
  },
  {
    id: 8,
    title: "Binary Tree - DFS",
    total: 5,
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
            image : "https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg",
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
        defaultCode: ``
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
            image :"https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-2.jpg",
            input: "root1 = [1,2,3], root2 = [1,3,2]",
            output: "false",
            explanation: `Tree 1 has the leaf sequence [2,3], while Tree 2 has [3,2]. Since they are different, the output is false.`
          }
        ],
        constraints: [
          "The number of nodes in each tree will be in the range [1, 200].",
          "Both of the given trees will have values in the range [0, 200]."
        ],
        defaultCode: ``
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
            image : "https://assets.leetcode.com/uploads/2020/04/02/test_sample_1.png",
            input: "root = [3,1,4,3,null,1,5]",
            output: "4",
            explanation: `Nodes in blue are good.\n- Root Node (3) is always a good node.\n- Node 4 -> (3,4) is the maximum value in the path starting from the root.\n- Node 5 -> (3,4,5) is the maximum value in the path.\n- Node 3 -> (3,1,3) is the maximum value in the path.`
          },
          {
            example: 2,
            image : "https://assets.leetcode.com/uploads/2020/04/02/test_sample_2.png",
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
        defaultCode: ``
      },

      {
        id: 4,
        title: "Path Sum III",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/6jYxwdwjwKg",
        description: `Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.\n\nThe path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).`,
        testCases: [
          {
            example: 1,
            image : "https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg",
            input: "root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8",
            output: "3",
            explanation: "The paths that sum to 8 are shown."
          },
          {
            example: 2,
            input: "root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22",
            output: "3",
            explanation: "The paths that sum to 22 are shown."
          }
        ],
        constraints: [
          "The number of nodes in the tree is in the range [0, 1000].",
          "-10⁹ <= Node.val <= 10⁹.",
          "-1000 <= targetSum <= 1000."
        ],
        defaultCode: ``
      },
      
      {
        id: 5,
        title: "Longest ZigZag Path in a Binary Tree",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/hbzdyIlvBKI",
        description: `You are given the root of a binary tree.\n\nA ZigZag path for a binary tree is defined as follows:\n- Choose any node in the binary tree and a direction (right or left).\n- If the current direction is right, move to the right child of the current node; otherwise, move to the left child.\n- Change the direction from right to left or from left to right.\n- Repeat the second and third steps until you can't move in the tree.\n\nZigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).\n\nReturn the longest ZigZag path contained in that tree.`,
        testCases: [
          {
            example: 1,
            image : "https://assets.leetcode.com/uploads/2020/01/22/sample_1_1702.png",
            input: "root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]",
            output: "3",
            explanation: "Longest ZigZag path in blue nodes (right -> left -> right)."
          },
          {
            example: 2,
            image : "https://assets.leetcode.com/uploads/2020/01/22/sample_2_1702.png",
            input: "root = [1,1,1,null,1,null,null,1,1,null,1]",
            output: "4",
            explanation: "Longest ZigZag path in blue nodes (left -> right -> left -> right)."
          },
          {
            example: 3,
            input: "root = [1]",
            output: "0",
            explanation: "A single node has a length of 0."
          }
        ],
        constraints: [
          "The number of nodes in the tree is in the range [1, 5 × 10⁴].",
          "1 <= Node.val <= 100."
        ],
        defaultCode: ``
      },
      
      {
        id: 6,
        title: "Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/gs2LMfuOR9k",
        description: `Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.\n\nAccording to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”`,
        testCases: [
          {
            example: 1,
            image : "https://assets.leetcode.com/uploads/2018/12/14/binarytree.png",
            input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
            output: "3",
            explanation: "The LCA of nodes 5 and 1 is 3."
          },
          {
            example: 2,
            image : "https://assets.leetcode.com/uploads/2018/12/14/binarytree.png",
            input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4",
            output: "5",
            explanation: "The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition."
          },
          {
            example: 3,
            input: "root = [1,2], p = 1, q = 2",
            output: "1",
            explanation: "The LCA of nodes 1 and 2 is 1."
          }
        ],
        constraints: [
          "The number of nodes in the tree is in the range [2, 10⁵].",
          "-10⁹ <= Node.val <= 10⁹.",
          "All Node.val are unique.",
          "p != q.",
          "p and q will exist in the tree."
        ],
        defaultCode: ``
      }      
    ]
  },
  {
    id: 9,
    title: "Binary Tree - BFS",
    total: 2,
    problems: [
      {
        id: 1,
        title: "Binary Tree Right Side View",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/d4zLyf32e3I",
        description: `Given the root of a binary tree, imagine yourself standing on the right side of it. Return the values of the nodes you can see ordered from top to bottom.`,
        testCases: [
          {
            example: 1,
            image :"https://assets.leetcode.com/uploads/2024/11/24/tmpd5jn43fs-1.png",
            input: "root = [1,2,3,null,5,null,4]",
            output: "[1,3,4]",
            explanation: ""
          },
          {
            example: 2,
            image : "https://assets.leetcode.com/uploads/2024/11/24/tmpkpe40xeh-1.png",
            input: "root = [1,2,3,4,null,null,null,5]",
            output: "[1,3,4,5]",
            explanation: ""
          },
          {
            example: 3,
            input: "root = [1,null,3]",
            output: "[1,3]",
            explanation: ""
          },
          {
            example: 4,
            input: "root = []",
            output: "[]",
            explanation: ""
          }
        ],
        constraints: [
          "The number of nodes in the tree is in the range [0, 100].",
          "-100 <= Node.val <= 100."
        ],
        defaultCode: ``
      },
      
      {
        id: 2,
        title: "Maximum Level Sum of a Binary Tree",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/7CgPNyJZ0xM",
        description: `Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.\n\nReturn the smallest level x such that the sum of all the values of nodes at level x is maximal.`,
        testCases: [
          {
            example: 1,
            image : "https://assets.leetcode.com/uploads/2019/05/03/capture.JPG",
            input: "root = [1,7,0,7,-8,null,null]",
            output: "2",
            explanation: "Level 1 sum = 1.\nLevel 2 sum = 7 + 0 = 7.\nLevel 3 sum = 7 + (-8) = -1.\nSo we return the level with the maximum sum, which is level 2."
          },
          {
            example: 2,
            image : "",
            input: "root = [989,null,10250,98693,-89388,null,null,null,-32127]",
            output: "2",
            explanation: ""
          }
        ],
        constraints: [
          "The number of nodes in the tree is in the range [1, 10⁴].",
          "-10⁵ <= Node.val <= 10⁵."
        ],
        defaultCode: ``
      }
      
    ]
  },
  {
    id: 10,
    title: "Binary Search Tree",
    total: 2,
    problems: [
      {
        id: 1,
        title: "Search in a Binary Search Tree",
        difficulty: "Easy",
        solutionLink: "https://www.youtube.com/embed/Lr2oxJlnLMM",
        description: `You are given the root of a binary search tree (BST) and an integer val.\n\nFind the node in the BST where the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.`,
        testCases: [
          {
            example: 1,
            image : "https://assets.leetcode.com/uploads/2021/01/12/tree1.jpg",
            input: "root = [4,2,7,1,3], val = 2",
            output: "[2,1,3]",
          },
          {
            example: 2,
            image : "https://assets.leetcode.com/uploads/2021/01/12/tree2.jpg",
            input: "root = [4,2,7,1,3], val = 5",
            output: "[]",
          }
        ],
        constraints: [
          "The number of nodes in the tree is in the range [1, 5000].",
          "1 <= Node.val <= 10⁷.",
          "root is a binary search tree.",
          "1 <= val <= 10⁷."
        ],
        defaultCode: ``
      },

      {
        id: 2,
        title: "Delete Node in a BST",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/LFzAoJJt92M",
        description: `Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.\n\nBasically, the deletion can be divided into two stages:\n\n1. Search for a node to remove.\n2. If the node is found, delete the node.`,
        testCases: [
          {
            example: 1,
            image: "https://assets.leetcode.com/uploads/2020/09/04/del_node_1.jpg",
            input: "root = [5,3,6,2,4,null,7], key = 3",
            output: "[5,4,6,2,null,null,7]",
            explanation: `The key to delete is 3. The node with value 3 is found and removed. Since it has two children, we replace it with its in-order successor (4).`
          },
          {
            example: 2,
            image : "https://assets.leetcode.com/uploads/2020/09/04/del_node_supp.jpg",
            input: "root = [5,3,6,2,4,null,7], key = 0",
            output: "[5,3,6,2,4,null,7]",
            explanation: `The tree does not contain a node with value 0, so no changes are made.`
          },
          {
            example: 3,
            input: "root = [], key = 0",
            output: "[]",
            explanation: `The tree is empty, so there is nothing to delete.`
          }
        ],
        constraints: [
          "The number of nodes in the tree is in the range [0, 10⁴].",
          "-10⁵ <= Node.val <= 10⁵.",
          "Each node has a unique value.",
          "root is a valid binary search tree.",
          "-10⁵ <= key <= 10⁵."
        ],
        defaultCode: ``
      }
      
    ]
  },
  {
    id: 11,
    title: "Graphs - DFS",
    total: 4,
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
        defaultCode: ``
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
            image : "https://assets.leetcode.com/uploads/2020/12/24/graph1.jpg",
            input: "isConnected = [[1,1,0],[1,1,0],[0,0,1]]",
            output: "2",
            explanation: `There are two provinces: {0,1} and {2}.`
          },
          {
            example: 2,
            image : "https://assets.leetcode.com/uploads/2020/12/24/graph2.jpg",
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
        defaultCode: ``
      },
      
      {
        id: 3,
        title: "Reorder Routes to Make All Paths Lead to the City Zero",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/m17yOR5_PpI",
        description: `There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network forms a tree). Last year, the ministry of transport decided to orient the roads in one direction because they are too narrow.\n\nRoads are represented by connections where connections[i] = [a_i, b_i] represents a road from city a_i to city b_i.\n\nThis year, there will be a big event in the capital (city 0), and many people want to travel to this city.\n\nYour task consists of reorienting some roads such that each city can visit city 0. Return the minimum number of edges changed.\n\nIt's guaranteed that each city can reach city 0 after reordering.`,
        testCases: [
          {
            example: 1,
            image : "https://assets.leetcode.com/uploads/2020/05/13/sample_1_1819.png",
            input: "n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]",
            output: "3",
            explanation: `Change the direction of 3 edges to ensure all cities can reach city 0.`
          },
          {
            example: 2,
            image : "https://assets.leetcode.com/uploads/2020/05/13/sample_2_1819.png",
            input: "n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]",
            output: "2",
            explanation: `Change the direction of 2 edges to ensure all cities can reach city 0.`
          },
          {
            example: 3,
            input: "n = 3, connections = [[1,0],[2,0]]",
            output: "0",
            explanation: `No edges need to be changed since all cities can already reach city 0.`
          }
        ],
        constraints: [
          "2 <= n <= 5 * 10⁴.",
          "connections.length == n - 1.",
          "connections[i].length == 2.",
          "0 <= a_i, b_i <= n - 1.",
          "a_i != b_i."
        ],
        defaultCode: ``
      },

      {
        id: 4,
        title: "Evaluate Division",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/Uei1fwDoyKk",
        description: `You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [A_i, B_i] and values[i] represent the equation A_i / B_i = values[i]. Each A_i or B_i is a string that represents a single variable.\n\nYou are also given some queries, where queries[j] = [C_j, D_j] represents the j-th query where you must find the answer for C_j / D_j = ?.\n\nReturn the answers to all queries. If a single answer cannot be determined, return -1.0.\n\nNote:\n- The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.\n- The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.`,
        testCases: [
          {
            example: 1,
            input: `equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]`,
            output: "[6.00000,0.50000,-1.00000,1.00000,-1.00000]",
            explanation: `Given: a / b = 2.0, b / c = 3.0\nQueries:\n- a / c = 6.0\n- b / a = 0.5\n- a / e is undefined => -1.0\n- a / a = 1.0\n- x / x is undefined => -1.0`
          },
          {
            example: 2,
            input: `equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]`,
            output: "[3.75000,0.40000,5.00000,0.20000]",
            explanation: `Using the given ratios:\n- a / c = a / b * b / c = 1.5 * 2.5 = 3.75\n- c / b = 1 / (b / c) = 1 / 2.5 = 0.4\n- bc / cd = 5.0\n- cd / bc = 1 / 5.0 = 0.2`
          },
          {
            example: 3,
            input: `equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]`,
            output: "[0.50000,2.00000,-1.00000,-1.00000]",
            explanation: `Given a / b = 0.5:\n- a / b = 0.5\n- b / a = 1 / 0.5 = 2.0\n- a / c is undefined => -1.0\n- x / y is undefined => -1.0`
          }
        ],
        constraints: [
          "1 <= equations.length <= 20.",
          "equations[i].length == 2.",
          "1 <= A_i.length, B_i.length <= 5.",
          "values.length == equations.length.",
          "0.0 < values[i] <= 20.0.",
          "1 <= queries.length <= 20.",
          "queries[i].length == 2.",
          "1 <= C_j.length, D_j.length <= 5.",
          "A_i, B_i, C_j, D_j consist of lowercase English letters and digits."
        ],
        defaultCode: ``
      }
      
    ]
  },
  {
    id: 12,
    title: "Graphs - BFS",
    total: 2,
    problems: [
      {
        id: 1,
        title: "Nearest Exit from Entrance in Maze",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/9a1QRrLICQ0",
        description: `You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.\n\nIn one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.\n\nReturn the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.`,
        testCases: [
          {
            example: 1,
            image :"https://assets.leetcode.com/uploads/2021/06/04/nearest1-grid.jpg",
            input: `maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]`,
            output: "1",
            explanation: `There are 3 exits in this maze at [1,0], [0,2], and [2,3].\nInitially, you are at the entrance cell [1,2].\n- You can reach [1,0] by moving 2 steps left.\n- You can reach [0,2] by moving 1 step up.\nIt is impossible to reach [2,3] from the entrance.\nThus, the nearest exit is [0,2], which is 1 step away.`
          },
          {
            example: 2,
            image : "https://assets.leetcode.com/uploads/2021/06/04/nearesr2-grid.jpg",
            input: `maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]`,
            output: "2",
            explanation: `There is 1 exit in this maze at [1,2].\n[1,0] does not count as an exit since it is the entrance cell.\nInitially, you are at the entrance cell [1,0].\n- You can reach [1,2] by moving 2 steps right.\nThus, the nearest exit is [1,2], which is 2 steps away.`
          },
          {
            example: 3,
            image : "https://assets.leetcode.com/uploads/2021/06/04/nearest3-grid.jpg",
            input: `maze = [[".","+"]], entrance = [0,0]`,
            output: "-1",
            explanation: `There are no exits in this maze.`
          }
        ],
        constraints: [
          "maze.length == m",
          "maze[i].length == n",
          "1 <= m, n <= 100",
          "maze[i][j] is either '.' or '+'.",
          "entrance.length == 2",
          "0 <= entrancerow < m",
          "0 <= entrancecol < n",
          "entrance will always be an empty cell."
        ],
        defaultCode: ``
      },

      {
        id: 2,
        title: "Rotting Oranges",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/y704fEOx0s0",
        description: `You are given an m x n grid where each cell can have one of three values:\n\n- 0 representing an empty cell,\n- 1 representing a fresh orange, or\n- 2 representing a rotten orange.\n\nEvery minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.\n\nReturn the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.`,
        testCases: [
          {
            example: 1,
            image : "https://assets.leetcode.com/uploads/2019/02/16/oranges.png",
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
        defaultCode: ``
      }
      
    ]
  },
  {
    id: 13,
    title: "Heap",
    total: 4,
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
        defaultCode: ""
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
        defaultCode: ``
      },

      
      {
        id: 3,
        title: "Maximum Subsequence Score",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/ax1DKi5lJwk",
        description: "You are given two 0-indexed integer arrays nums1 and nums2 of equal length n and a positive integer k. You must choose a subsequence of indices from nums1 of length k.\n\nFor chosen indices i0, i1, ..., ik - 1, your score is defined as:\n\n- The sum of the selected elements from nums1 multiplied with the minimum of the selected elements from nums2.\n\n- It can be defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0], nums2[i1], ..., nums2[ik - 1]).\n\nReturn the maximum possible score.\n\nA subsequence of indices of an array is a set that can be derived from the set {0, 1, ..., n-1} by deleting some or no elements.",
        testCases: [
          {
            example: 1,
            input: "nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3",
            output: "12",
            explanation: "The four possible subsequence scores are:\n\n- We choose the indices 0, 1, and 2 with score = (1+3+3) * min(2,1,3) = 7.\n- We choose the indices 0, 1, and 3 with score = (1+3+2) * min(2,1,4) = 6.\n- We choose the indices 0, 2, and 3 with score = (1+3+2) * min(2,3,4) = 12.\n- We choose the indices 1, 2, and 3 with score = (3+3+2) * min(1,3,4) = 8.\n\nTherefore, we return the max score, which is 12."
          },
          {
            example: 2,
            input: "nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1",
            output: "30",
            explanation: "Choosing index 2 is optimal:\n\nnums1[2] * nums2[2] = 3 * 10 = 30 is the maximum possible score."
          }
        ],
        constraints: [
          "n == nums1.length == nums2.length",
          "1 <= n <= 100000",
          "0 <= nums1[i], nums2[i] <= 100000",
          "1 <= k <= n"
        ],
        defaultCode: ""
      },
      

      {
        id: 4,
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
        defaultCode: ""
      }
      
    ]
  },
  {
    id: 14,
    title: "Binary Search",
    total: 4,
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
        title: "Successful Pairs of Spells and Potions",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/OKnm5oyAhWg",
        description: "You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.\n\nYou are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.\n\nReturn an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.",
        testCases: [
          {
            example: 1,
            input: "spells = [5,1,3], potions = [1,2,3,4,5], success = 7",
            output: "[4,0,3]",
            explanation: "0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.\n1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.\n2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.\nThus, [4,0,3] is returned."
          },
          {
            example: 2,
            input: "spells = [3,1,2], potions = [8,5,8], success = 16",
            output: "[2,0,2]",
            explanation: "0th spell: 3 * [8,5,8] = [24,15,24]. 2 pairs are successful.\n1st spell: 1 * [8,5,8] = [8,5,8]. 0 pairs are successful.\n2nd spell: 2 * [8,5,8] = [16,10,16]. 2 pairs are successful.\nThus, [2,0,2] is returned."
          }
        ],
        constraints: [
          "n == spells.length",
          "m == potions.length",
          "1 <= n, m <= 10⁵",
          "1 <= spells[i], potions[i] <= 10⁵",
          "1 <= success <= 10¹⁰"
        ],
        defaultCode: ""
      },

      {
        id: 3,
        title: "Find Peak Element",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/kMzJy9es7Hc",
        description: "A peak element is an element that is strictly greater than its neighbors.\n\nGiven a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.\n\nYou may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.\n\nYou must write an algorithm that runs in O(log n) time.",
        testCases: [
          {
            example: 1,
            input: "nums = [1,2,3,1]",
            output: "2",
            explanation: "3 is a peak element and your function should return the index number 2."
          },
          {
            example: 2,
            input: "nums = [1,2,1,3,5,6,4]",
            output: "5",
            explanation: "Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6."
          }
        ],
        constraints: [
          "1 <= nums.length <= 1000",
          "-2³¹ <= nums[i] <= 2³¹ - 1",
          "nums[i] != nums[i + 1] for all valid i"
        ],
        defaultCode: ""
      },

      {
        id: 4,
        title: "Koko Eating Bananas",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/U2SozAs9RzA",
        description: "Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.\n\nKoko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.\n\nKoko likes to eat slowly but still wants to finish eating all the bananas before the guards return.\n\nReturn the minimum integer k such that she can eat all the bananas within h hours.",
        testCases: [
          {
            example: 1,
            input: "piles = [3,6,7,11], h = 8",
            output: "4",
            explanation: ""
          },
          {
            example: 2,
            input: "piles = [30,11,23,4,20], h = 5",
            output: "30",
            explanation: ""
          },
          {
            example: 3,
            input: "piles = [30,11,23,4,20], h = 6",
            output: "23",
            explanation: ""
          }
        ],
        constraints: [
          "1 <= piles.length <= 10⁴",
          "piles.length <= h <= 10⁹",
          "1 <= piles[i] <= 10⁹"
        ],
        defaultCode: ""
      }
      
    ]
  },
  {
    id: 15,
    title: "Backtracking",
    total: 2,
    problems: [
      
      {
        id: 1,
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/0snEunUacZY",
        image : " https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png",
        description: `Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.\n\nA mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.`,
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
        defaultCode: ""
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
        defaultCode: ""
      }
      
    ]
  },
  {
    id: 16,
    title: "DP - 1D",
    total: 4,
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
        defaultCode: ""
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
        defaultCode: ""
      },
      
      {
        id: 4,
        title: "Domino and Tromino Tiling",
        difficulty: "Medium",
        image: "https://assets.leetcode.com/uploads/2021/07/15/lc-domino.jpg",
        solutionLink: "https://www.youtube.com/embed/CecjOo4Zo-g",
        description: `You have two types of tiles: a 2 × 1 domino shape and a tromino shape. You may rotate these shapes.\n\nGiven an integer n, return the number of ways to tile a 2 × n board. Since the answer may be very large, return it modulo 10⁹ + 7.\n\nIn a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.`,
        testCases: [
          {
            example: 1,
            image : "https://assets.leetcode.com/uploads/2021/07/15/lc-domino1.jpg",
            input: "n = 3",
            output: "5",
            explanation: "The five different ways to tile a 2 × 3 board."
          },
          {
            example: 2,
            input: "n = 1",
            output: "1",
            explanation: "There is only one way to tile a 2 × 1 board."
          }
        ],
        constraints: [
          "1 <= n <= 1000"
        ],
        defaultCode: ""
      }
      
    ]
  },
  {
    id: 17,
    title: "DP - Multidimensional",
    total: 4,
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
        title: "Longest Common Subsequence",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/Ua0GhsJSlWM",
        description: `Given two strings text₁ and text₂, return the length of their longest common subsequence. If there is no common subsequence, return 0.\n\nA subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.\n\nFor example, "ace" is a subsequence of "abcde".\nA common subsequence of two strings is a subsequence that is common to both strings.`,
        testCases: [
          {
            example: 1,
            input: "text₁ = 'abcde', text₂ = 'ace'",
            output: "3",
            explanation: `The longest common subsequence is "ace" and its length is 3.`
          },
          {
            example: 2,
            input: "text₁ = 'abc', text₂ = 'abc'",
            output: "3",
            explanation: `The longest common subsequence is "abc" and its length is 3.`
          },
          {
            example: 3,
            input: "text₁ = 'abc', text₂ = 'def'",
            output: "0",
            explanation: `There is no such common subsequence, so the result is 0.`
          }
        ],
        constraints: [
          "1 <= text₁.length, text₂.length <= 1000",
          "text₁ and text₂ consist of only lowercase English characters."
        ],
        defaultCode: ""
      },
      
      {
        id: 3,
        title: "Best Time to Buy and Sell Stock with Transaction Fee",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/Ew_R-ZfhPEc",
        description: `You are given an array prices where prices[i] is the price of a given stock on the i-th day, and an integer fee representing a transaction fee.\n\nFind the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.\n\n**Note:**\n- You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).\n- The transaction fee is only charged once for each stock purchase and sale.`,
        testCases: [
          {
            example: 1,
            input: "prices = [1,3,2,8,4,9], fee = 2",
            output: "8",
            explanation: `The maximum profit can be achieved by:\n- Buying at prices[0] = 1\n- Selling at prices[3] = 8\n- Buying at prices[4] = 4\n- Selling at prices[5] = 9\nThe total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.`
          },
          {
            example: 2,
            input: "prices = [1,3,7,5,10,3], fee = 3",
            output: "6",
            explanation: `The maximum profit can be achieved by:\n- Buying at prices[0] = 1\n- Selling at prices[2] = 7\n- Buying at prices[3] = 5\n- Selling at prices[4] = 10\nTotal profit: ((7 - 1) - 3) + ((10 - 5) - 3) = 6.`
          }
        ],
        constraints: [
          "1 <= prices.length <= 5 × 10⁴",
          "1 <= prices[i] < 5 × 10⁴",
          "0 <= fee < 5 × 10⁴"
        ],
        defaultCode: ""
      },

      {
        id: 4,
        title: "Edit Distance",
        difficulty: "Medium",
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
    id: 18,
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
        defaultCode: ""
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
          "1 ≤ nums.length ≤ 3 × 10⁴",
          "-3 × 10⁴ ≤ nums[i] ≤ 3 × 10⁴",
          "Each element in the array appears twice except for one element which appears only once."
        ],
        defaultCode: ""
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
  {
    id: 19,
    title: "Trie",
    total: 2,
    problems: [
      
      {
        id: 1,
        title: "Search Suggestions System",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/D4T2N0yAr20",
        description: "You are given an array of strings products and a string searchWord.\n\nDesign a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have a common prefix with searchWord. If there are more than three products with a common prefix, return the three lexicographically minimum products.\n\nReturn a list of lists of the suggested products after each character of searchWord is typed.",
        testCases: [
          {
            example: 1,
            input: "products = [\"mobile\",\"mouse\",\"moneypot\",\"monitor\",\"mousepad\"], searchWord = \"mouse\"",
            output: "[[\"mobile\",\"moneypot\",\"monitor\"],[\"mobile\",\"moneypot\",\"monitor\"],[\"mouse\",\"mousepad\"],[\"mouse\",\"mousepad\"],[\"mouse\",\"mousepad\"]]",
            explanation: "Products sorted lexicographically = [\"mobile\",\"moneypot\",\"monitor\",\"mouse\",\"mousepad\"].\nAfter typing 'm' and 'mo', all products match and we show [\"mobile\",\"moneypot\",\"monitor\"].\nAfter typing 'mou', 'mous', and 'mouse', the system suggests [\"mouse\",\"mousepad\"]."
          },
          {
            example: 2,
            input: "products = [\"havana\"], searchWord = \"havana\"",
            output: "[[\"havana\"],[\"havana\"],[\"havana\"],[\"havana\"],[\"havana\"],[\"havana\"]]",
            explanation: "The only word \"havana\" will always be suggested while typing the search word."
          }
        ],
        constraints: [
          "1 ≤ products.length ≤ 1000",
          "1 ≤ products[i].length ≤ 3000",
          "1 ≤ sum(products[i].length) ≤ 2 × 10⁴",
          "All the strings of products are unique.",
          "products[i] consists of lowercase English letters.",
          "1 ≤ searchWord.length ≤ 1000",
          "searchWord consists of lowercase English letters."
        ],
        defaultCode: ""
      },
      

      {
        id: 2,
        title: "Word Search 2",
        difficulty: "Hard",
        solutionLink: "https://www.youtube.com/embed/asbcE9mZz_U",
        description: `Given an m x n board of characters and a list of strings words, return all words on the board.\n\nEach word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.`,
        testCases: [
          {
            example: 1,
            image : "https://assets.leetcode.com/uploads/2020/11/07/search1.jpg",
            input: "board = [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], words = [\"oath\",\"pea\",\"eat\",\"rain\"]",
            output: "[\"eat\",\"oath\"]",
            explanation: `The words 'eat' and 'oath' can be found on the board using adjacent cells, but 'pea' and 'rain' cannot.`
          },
          {
            example: 2,
            image : "https://assets.leetcode.com/uploads/2020/11/07/search2.jpg",
            input: "board = [[\"a\",\"b\"],[\"c\",\"d\"]], words = [\"abcb\"]",
            output: "[]",
            explanation: `The word 'abcb' cannot be formed because the same letter cell cannot be used more than once.`
          }
        ],
        constraints: [
          "m == board.length",
          "n == board[i].length",
          "1 ≤ m, n ≤ 12",
          "board[i][j] is a lowercase English letter.",
          "1 ≤ words.length ≤ 3 × 10⁴",
          "1 ≤ words[i].length ≤ 10",
          "words[i] consists of lowercase English letters.",
          "All the strings of words are unique."
        ],
        defaultCode: ""
      }
           
    ]
  },
  {
    id: 20,
    title: "Intervals",
    total: 2,
    problems: [
      {
        id: 1,
        title: "Non-overlapping Intervals",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/nONCGxWoUfM",
        description: "Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.\n\nNote that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.",
        testCases: [
          {
            example: 1,
            input: "intervals = [[1,2],[2,3],[3,4],[1,3]]",
            output: "1",
            explanation: "[1,3] can be removed and the rest of the intervals are non-overlapping."
          },
          {
            example: 2,
            input: "intervals = [[1,2],[1,2],[1,2]]",
            output: "2",
            explanation: "You need to remove two [1,2] to make the rest of the intervals non-overlapping."
          },
          {
            example: 3,
            input: "intervals = [[1,2],[2,3]]",
            output: "0",
            explanation: "You don't need to remove any of the intervals since they're already non-overlapping."
          }
        ],
        constraints: [
          "1 <= intervals.length <= 10⁵",
          "intervals[i].length == 2",
          "-5 × 10⁴ <= starti < endi <= 5 × 10⁴"
        ],
        defaultCode: ""
      },

      {
        id: 2,
        title: "Minimum Number of Arrows to Burst Balloons",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/lPmkKnvNPrw",
        description: "There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xₛₜₐᵣₜ, xₑₙd] denotes a balloon whose horizontal diameter stretches between xₛₜₐᵣₜ and xₑₙd. You do not know the exact y-coordinates of the balloons.\n\nArrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xₛₜₐᵣₜ and xₑₙd is burst by an arrow shot at x if xₛₜₐᵣₜ ≤ x ≤ xₑₙd. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.\n\nGiven the array points, return the minimum number of arrows that must be shot to burst all balloons.",
        testCases: [
          {
            example: 1,
            input: "points = [[10,16],[2,8],[1,6],[7,12]]",
            output: "2",
            explanation: "The balloons can be burst by 2 arrows:\n- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].\n- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12]."
          },
          {
            example: 2,
            input: "points = [[1,2],[3,4],[5,6],[7,8]]",
            output: "4",
            explanation: "One arrow needs to be shot for each balloon for a total of 4 arrows."
          },
          {
            example: 3,
            input: "points = [[1,2],[2,3],[3,4],[4,5]]",
            output: "2",
            explanation: "The balloons can be burst by 2 arrows:\n- Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].\n- Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5]."
          }
        ],
        constraints: [
          "1 ≤ points.length ≤ 10⁵",
          "points[i].length == 2",
          "-2³¹ ≤ xₛₜₐᵣₜ < xₑₙd ≤ 2³¹ - 1"
        ],
        defaultCode: ""
      }
      
    ]
  },
  {
    id: 21,
    title: "Monotonic Stack",
    total: 2,
    problems: [
      {
        id: 1,
        title: "Daily Temperatures",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/cTBiBSnjO3c",
        description: "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the iᵗʰ day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] = 0 instead.",
        testCases: [
          {
            example: 1,
            input: "temperatures = [73,74,75,71,69,72,76,73]",
            output: "[1,1,4,2,1,1,0,0]"
          },
          {
            example: 2,
            input: "temperatures = [30,40,50,60]",
            output: "[1,1,1,0]"
          },
          {
            example: 3,
            input: "temperatures = [30,60,90]",
            output: "[1,1,0]"
          }
        ],
        constraints: [
          "1 ≤ temperatures.length ≤ 10⁵",
          "30 ≤ temperatures[i] ≤ 100"
        ],
        defaultCode: ""
      },

      {
        id: 2,
        title: "Next Greater Element 2",
        difficulty: "Medium",
        solutionLink: "https://www.youtube.com/embed/7PrncD7v9YQ",
        description: "Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.\n\nThe next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.",
        testCases: [
          {
            example: 1,
            input: "nums = [1,2,1]",
            output: "[2,-1,2]",
            explanation: "The first 1's next greater number is 2; \nThe number 2 can't find next greater number.\nThe second 1's next greater number needs to search circularly, which is also 2."
          },
          {
            example: 2,
            input: "nums = [1,2,3,4,3]",
            output: "[2,3,4,-1,4]"
          }
        ],
        constraints: [
          "1 ≤ nums.length ≤ 10⁴",
          "-10⁹ ≤ nums[i] ≤ 10⁹"
        ],
        defaultCode: ""
      }
      
    ]
  }
];

export default topicsData;
