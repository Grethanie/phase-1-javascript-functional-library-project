function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let item of collection) {
      callback(item);
    }
  } else {
    for (let item in collection) {
      callback(collection[item]);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  let newArray = [];
  if (Array.isArray(collection)) {
    for (let item of collection) {
      newArray.push(callback(item));
    }
  } else {
    for (let item in collection) {
      newArray.push(callback(collection[item]));
    }
  }
  return newArray;
}

function myReduce(collection, callback, acc = 0) {
  if (Array.isArray(collection)) {
    for (let item of collection) {
      acc = callback(acc, item);
    }
  } else {
    for (let item in collection) {
      acc = callback(acc, collection[item]);
    }
  }

  return acc;
}

console.log(
  myReduce(
    [1, 2, 3],
    function (acc, val) {
      acc + val;
    },
    10
  )
);
