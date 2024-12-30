document.addEventListener("DOMContentLoaded", () => {
  let expenceForm = document.getElementById("expenceForm");
  let expenceName = document.getElementById("expenceName");
  let expencePrice = document.getElementById("expencePrice");
  let expenceList = document.getElementById("expenceList");
  let expenceTotal = document.getElementById("expenceTotal");

  let expences = [];
  let totalAmount = calculateTotal();
  console.log(totalAmount);
  

  expenceForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = expenceName.value.trim();
    let price = parseFloat(expencePrice.value.trim());
    console.log(name, price);

    if (name != "" && price > 0) {
      let addExpenceObj = {
        id: Date.now(),
        name: name,
        price: price,
      };
      expences.push(addExpenceObj);
      saveExpenceToLocal();
      updateTotal()

      expenceName.value = "";
      expencePrice.value = "";

    }
  });

  function calculateTotal() {
    return expences.reduce((sum, expence) => sum + expence.price, 0)
  }

  function updateTotal() {
    totalAmount = calculateTotal()
  }

  function saveExpenceToLocal() {
    localStorage.setItem("expences", JSON.stringify(expences));
    console.log("EXPENCE ADDED");
  }

  function getExpenceListFromLoacl() {
    return localStorage.getItem(expences);
  }

  
});
