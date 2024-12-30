function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");

    setTimeout(() => {
      resolve({ name: "Akshay", url: "www.akshaymore.com" });
    }, 4000);
  });
}

async function getUserData() {
  try {
    let response = await fetchData();
    console.log("User data fetched succssfully!!", response);
  } catch (error) {
    console.log("Error fetching....\n", error);
  }
}

getUserData();
