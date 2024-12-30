document.addEventListener("DOMContentLoaded", () => {
  let cartTotal = document.getElementById("cart-total");
  cartTotal.classList.add("hidden");

  let products = [
    { id: 1, name: "Rohit", price: 29.67 },
    { id: 2, name: "pd", price: 24.67 },
    { id: 3, name: "atharva", price: 65.67 },
    { id: 4, name: "katre", price: 65.647 },
  ];

  let cart = [];

  let productList = document.getElementById("product-list");

  products.forEach((product) => {
    let productItem = document.createElement("div");
    console.log(product);
    productItem.innerHTML = `
    <span>${product.name}  -  ${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to cart</button>
    `;
    productList.appendChild(productItem);
  });

  productList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      let productId = parseInt(event.target.getAttribute("data-id"));
      let product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    rendercart();
  }

  let cartEmptyMsg = document.getElementById("cartEmpty-msg");

  function rendercart() {
    let cartTotalPrice = 0;
    cartEmptyMsg.classList.add("hidden");
    cartTotal.classList.remove("hidden");
    let cartList = document.getElementById("cart-list");
    let cartItem = document.createElement("div");
    cart.forEach((item) => {
      cartTotalPrice = cartTotalPrice + item.price;
      console.log(cartTotalPrice);
      cartItem.innerHTML = `
          <span>${item.name} - ${item.price.toFixed(2)}</span>
          `;
          cartTotal.innerHTML = `
          <span>${cartTotalPrice.toFixed(2)}</span>
          `;
    });
    cartList.appendChild(cartItem);
  }
});
