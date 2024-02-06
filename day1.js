let myArray = [1, 2, 3, 2, 1, 3, 1, 4];
let frequencyMap = new Map();

// Counting frequency of each element in the array
myArray.forEach((element) => {
  if (frequencyMap.has(element)) {
    frequencyMap.set(element, frequencyMap.get(element) + 1);
  } else {
    frequencyMap.set(element, 1);
  }
});

// Displaying the frequency map
frequencyMap.forEach((count, element) => {
  console.log(`${element}: ${count} times`);
});
