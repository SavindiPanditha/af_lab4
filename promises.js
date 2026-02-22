// Promises
const condition = true; // Change this to false to see the rejection case

const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('Success!');
  } else {
    reject('Failure!');
  }
});

myPromise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

// Another example with setTimeout to simulate async operation
const delayedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved after 2 seconds!');
  }, 2000);
});

delayedPromise.then((result) => {
  console.log(result);
});
