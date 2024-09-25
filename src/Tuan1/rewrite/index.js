//map
Array.prototype.myMap = function (cb) {
    var arr = [];
    for (var i = 0; i < this.length; ++i) {
      var c = cb(this[i], i);
      arr.push(c);
    }
    return arr;
  };
  const array = [1,2,3,4,5]
  console.log('My array:' , array)
  let testMap =array.myMap(e=>e*2)
  console.log("My test Map:", testMap)
  //filter
 


  Array.prototype.myFilter = function (cb) {
    var arr = [];
    for (var i in this) {
      //check value each array valid
      if (this.hasOwnProperty(i)) {
        var c = cb(this[i], i, this);
        if (c === true) {
          arr.push(this[i]);
        }
      }
    }
    return arr;
  };

  let testFilter = array.myFilter(e => e > 2);
console.log("myFilter:", testFilter); // Expected output: [3, 4, 5]
  //some
 

  Array.prototype.mySome = function (cb) {
    for (var i in this) {
      if (this.hasOwnProperty(i)) {
        var c = cb(this[i], i, this);
        if (c === true) {
          return true;
        }
      }
    }
    return false;
  };
  let testSome = array.mySome(e => e > 4);
  console.log("mySome:", testSome); // Expected output: true
  
  testSome = array.mySome(e => e > 5);
  console.log("mySome (no match):", testSome)
  //every
  Array.prototype.myEvery = function (cb) {
    for (var i in this) {
      if (this.hasOwnProperty(i)) {
        var c = cb(this[i], i, this);
        if (c === false) {
          return false;
        }
      }
    }
    return true;
  };
  let testEvery = array.myEvery(e => e > 0);
console.log("myEvery:", testEvery); // Expected output: true

testEvery = array.myEvery(e => e > 2);
console.log("myEvery (not all match):", testEvery);
  //find
  Array.prototype.myFind = function (cb) {
    var arr = [];
    for (var i in this) {
      //check value each array valid
      if (this.hasOwnProperty(i)) {
        var c = cb(this[i], i);
        if (c === true) {
          return c;
        }
      }
    }
    return null;
  };
  
let testFind = array.myFind(e => e === 3);
console.log("myFind:", testFind); // Expected output: 3

testFind = array.myFind(e => e === 6);
console.log("myFind (no match):", testFind);


  //flatMap
  Array.prototype.myFlatMap = function (cb) {
    var arr = [];
    for (var i = 0; i < this.length; ++i) {
      var c = cb(this[i], i);
      if (c) {
        for (let j = 0; j < c.length; ++j) {
          arr.push(c[j]);
        }
      }
    }
  
    return arr;
  };
  
  console.log([1, 2, 3].myFlatMap((e, index) => [e, e * 2]));
  let testFlatMap = [1, 2, 3].myFlatMap((e, index) => [e, e * 2]);
console.log("myFlatMap:", testFlatMap); // Expected output: [1, 2, 2, 4, 3, 6]
  
  // [1, 3, 4].reduce((acc, cur, index, arr));
  //reduce
  Array.prototype.myReduce = function (callback, initialValue) {
    if (this == null) {
      throw new TypeError("Array.prototype.myReduce called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
  
    let array = this;
    let accumulator = initialValue;
    let startIndex = 0;
  
    if (accumulator === undefined) {
      if (array.length === 0) {
        throw new TypeError("Reduce of empty array with no initial value");
      }
      accumulator = array[0];
      startIndex = 1;
    }
  
    for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
  
    return accumulator;
  };
  let testReduce = array.myReduce((acc, cur) => acc + cur, 0);
console.log("myReduce:", testReduce); // Expected output: 15

testReduce = array.myReduce((acc, cur) => acc * cur, 1);
console.log("myReduce (multiplication):", testReduce);