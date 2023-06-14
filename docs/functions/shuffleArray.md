# Shuffle Array

This function takes an array as input and returns a new array with the elements shuffled randomly. It uses the Fisher-Yates algorithm, which iterates over the array in reverse order and swaps each element with a randomly chosen element from the remaining unshuffled portion of the array.

## Usage

```js
shuffleArray(arr);
```

So on the arr you need to put an array.

### Example

```js
const { shuffleArray } = require("argonium/lib");

const arr = [1, 2, 3, 4, 5];
const shuffledArr = shuffleArray(arr);

console.log(shuffledArr);
```

#### Should return those numbers in a random order, like this:

```
[ 3, 1, 5, 4, 2 ]
```
