# Week 29

## Fizz Buzz

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

fizzBuzz(3);
expect it to return: ["1", "2", "Fizz"]
fizzBuzz(5);
expect it to return: ["1", "2", "Fizz", "4", "Buzz"]

## Palindrome

Given a value, write a function that will test to see if the string is a palindrome or not. Return true if it is or false if it’s not.

isPalindrome('tacocat');
expect it to return: true

## [Remove Duplicates](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

Attempt 1:

```
var removeDuplicates = function(nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1)
    }
  }
};
```

Attempt 2:

```
var removeDuplicates = function(nums) {
  let i = 0;

  for (j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};
```
