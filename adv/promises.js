function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error in fetching data");
      }
    }, 4000);
  });
}

// let output = fetchData();
// console.log(output);

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
