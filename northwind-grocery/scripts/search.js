"use strict";

const categoryDDL = document.querySelector("#category-DDL");
const searchTypeDDL = document.querySelector("#search-type-DDL");
const productTbl = document.querySelector("#product-tbl");
const productTblBody = document.querySelector("#product-tbl-body");
const createPageLink = document.querySelector("#create-page-link");

searchTypeDDL.addEventListener("change", (event) => {
  fetchCategories();
  fetchProducts();
  if (searchTypeDDL.value == 1) {
    categoryDDL.style.display = "block";
  } else {
    categoryDDL.style.display = "none";
  }
});

categoryDDL.addEventListener("change", (event) => fetchProducts());


function fetchCategories() {
  fetch("http://localhost:8081/api/categories")
    .then((response) => response.json())
    .then((content) => {
      if (searchTypeDDL.value == 1) {
        loadCategoryList(content);
        console.log(categoryDDL.value + content.name);
      }
    });
}

function fetchProducts() {
  fetch("http://localhost:8081/api/products")
    .then((response) => response.json())
    .then((content) => {
      if (searchTypeDDL.value == 1) {
        clearTable();
        console.log(categoryDDL.value);
        let filteredList = filterProductsByCategoryID(categoryDDL.value, content);
        console.log(filteredList);
        loadProductsByCategoryTable(filteredList);
      }
      if (searchTypeDDL.value == 2) {
        loadProductsTable(content);
      }
    });
}

function loadCategoryList(list) {
  clearCategoryDDL();
  let count = 1;

  let selectOption = document.createElement("option");
  selectOption.value = "";
  selectOption.textContent = "Select A Category...";
  categoryDDL.appendChild(selectOption);

  list.sort((a, b) => a.categoryId - b.categoryId);

  for (const category of list) {
    let option = new Option(category.name, count);
    categoryDDL.appendChild(option);
    count++;
  }
}

function buildProductRow(product) {
  let anchor = document.createElement("a");
  anchor.href = `details.html?productid=${product.productId}`;
  anchor.text = "More details";

  let row = productTblBody.insertRow(-1);

  row.insertCell(0).innerText = product.productId;
  row.insertCell(1).innerText = product.productName;
  row.insertCell(2).innerText = `$${parseFloat(product.unitPrice).toFixed(2)}`;
  row.insertCell(3).appendChild(anchor);

  productTblBody.appendChild(row);
}

function loadProductsTable(list) {
  clearTable();
  list.forEach(buildProductRow);
}

function filterProductsByCategoryID(categoryId, list) {
  return list.filter((product) => {
    return product.categoryId == categoryId;
  });
}

function loadProductsByCategoryTable(filteredList) {
  clearTable();
  filteredList.forEach(buildProductRow);
}

function clearTable() {
  productTblBody.innerHTML = "";
}

function clearCategoryDDL() {
  categoryDDL.innerHTML = "";
}
