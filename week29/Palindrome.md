# Palindrome

tacocat (length = 7, max index = 6)
anna
bob

```
function isPalindrome(word) {
  if (word === "") {
    retrun false;
  }

  for (i = 0; i < word.length/2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
```
