# FizzBuzz

```
function fizzBuzz(num) {
  let answer = [];

  for (i = 1; i < num + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz")
    } else if (i % 3 === 0) {
      answer.push("Fizz")
    } else if (i % 5 === 0) {
      answer.push("Buzz")
    } else {
      answer.push(i.toString())
    }
  }

  return answer;
}
```
