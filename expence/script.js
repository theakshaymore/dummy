document.addEventListener("DOMContentLoaded", () => {
  let expenceForm = document.getElementById("expenceForm");
  let expenceName = document.getElementById("expenceName");
  let expencePrice = document.getElementById("expencePrice");
  let expenceList = document.getElementById("expenceList");
  let expenceTotal = document.getElementById("expenceTotal");

  let expences = JSON.parse(localStorage.getItem("expences")) || [];
  let totalAmount = calculateTotal();


  renderExpences();
  updateTotal()

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
      renderExpences();
      updateTotal();

      expenceName.value = "";
      expencePrice.value = "";
    }
  });

  expenceList.addEventListener('click', (event)=> {
    if (event.target.tagName === 'BUTTON') {
        let expenceId = JSON.parse(event.target.getAttribute('data-id'))
        expences = expences.filter(expence => expence.id !== expenceId)
        saveExpenceToLocal()
        renderExpences()
        updateTotal()
    }
    
  })

  function calculateTotal() {
    return expences.reduce((sum, expence) => sum + expence.price, 0);
  }

  function updateTotal() {
    totalAmount = calculateTotal();
    expenceTotal.textContent = totalAmount;
  }

  function renderExpences() {
    expenceList.innerHTML = "";
    expences.forEach((expence) => {
      let li = document.createElement("li");
      li.innerHTML = `
        <span>${expence.name}  - $${expence.price}</span>
        <button data-id='${expence.id}'>Delete</button>
        `;
        expenceList.appendChild(li);
    });
  }

  function saveExpenceToLocal() {
    localStorage.setItem("expences", JSON.stringify(expences));
    console.log("EXPENCE ADDED");
  }
});
