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

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let item of collection) {
      if (predicate(item) == true) {
        return item;
      }
    }
  } else {
    for (let item in collection) {
      if (predicate(item) == true) {
        return item;
      }
    }
  }
}

function myFilter(collection, predicate) {
  let newArray = [];
  if (Array.isArray(collection)) {
    for (let item of collection) {
      if (predicate(item) == true) {
        newArray.push(item);
      }
    }
  } else {
    for (let item in collection) {
      if (predicate(item) == true) {
        newArray.push(item);
      }
    }
  }
  return newArray;
}

function mySize(collection) {
  let acc = 0;
  if (Array.isArray(collection)) {
    for (let item of collection) {
      acc++;
    }
  } else {
    for (let item in collection) {
      acc++;
    }
  }
  return acc;
}

function myFirst(array, n) {
  let arr = [];
  if (n == undefined) {
    return array[0];
  } else {
    for (let i = 0; i < n; i++) {
      arr.push(array[i]);
    }
  }
  return arr;
}

function myLast(array, n) {
  if (n == undefined) {
    return array[array.length - 1];
  } else {
    return array.slice(array.length - n);
  }
}

function myKeys(obj) {
  let arr = [];
  for (let item in obj) {
    arr.push(item);
  }
  return arr;
}

function myValues(obj) {
  let arr = [];
  for (let item in obj) {
    arr.push(obj[item]);
  }
  return arr;
}
let input = function (collection) {
  return collection instanceof Array
    ? collection.slice()
    : Object.values(collection);
};

function myReduce(collection, callback, acc) {
  let newCollection = input(collection);

  if (!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }

  for (let item of newCollection) {
    acc = callback(acc, item, newCollection);
  }
  return acc;
}

const callback = (acc, val, collection) => {
  return acc + val * 3;
};

console.log(myReduce([1, 2, 3, 4], callback));
