"use strict";

const urlParams = new URLSearchParams(location.search);
const productDetails = document.querySelector("#product-details");

function fetchProductsThenDisplayProduct(id) {
  fetch(`http://localhost:8081/api/products`)
    .then((response) => response.json())
    .then((content) => findMatchingProduct(content, id))
    .then((result) => displayProductDetails(result))
}

function findMatchingProduct(list, id) {
  return list.find((product) => {
    return product.productId == id;
  });
}

function displayProductDetails(product) {
    productDetails.innerText = `
    Product Name: ${product.productName}
    Price: $${parseFloat(product.unitPrice).toFixed(2)}
    Stock: ${product.unitsInStock} items left
    Supplier: ${product.supplier}
    Discontinued: ${product.discontinued}`
}

window.addEventListener("load", (event) => {
  const urlParams = new URLSearchParams(location.search);

  let id = -1;
  if (urlParams.has("productid")) {
    id = urlParams.get("productid");
    fetchProductsThenDisplayProduct(id);
  }
});
