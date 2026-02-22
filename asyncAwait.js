// Async/Await
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();

// Another example with fetch-like simulation
function fetchData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id: id, name: `User ${id}`, email: `user${id}@example.com` });
      } else {
        reject('Invalid ID');
      }
    }, 1500);
  });
}

async function getUserData() {
  try {
    console.log('Fetching user data...');
    const user = await fetchData(1);
    console.log('User data:', user);
  } catch (error) {
    console.log('Error:', error);
  }
}

getUserData();
