// Asynchronous function 1
function asyncFunction1(callback) {
  setTimeout(function () {
    console.log("Async function 1 completed");
    callback();
  }, 1000);
}

// Asynchronous function 2
function asyncFunction2(callback) {
  setTimeout(function () {
    console.log("Async function 2 completed");
    callback();
  }, 1000);
}

// Asynchronous function 3
function asyncFunction3(callback) {
  setTimeout(function () {
    console.log("Async function 3 completed");
    callback();
  }, 1000);
}

// Nested callback hell
asyncFunction1(function () {
  asyncFunction2(function () {
    asyncFunction3(function () {
      console.log("All async functions completed");
    });
  });
});
