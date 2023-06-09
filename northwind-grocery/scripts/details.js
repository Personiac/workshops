"use strict";

const urlParams = new URLSearchParams(location.search);
const productDetails = document.querySelector("#product-details");

window.addEventListener("load", (event) => {
    const urlParams = new URLSearchParams(location.search);
    let productId = urlParams.get("productid");
  
    let id = -1;
    if (urlParams.has("productId") === true) {
      id = urlParams.get("productId");
  
      fetchCourseDetails(id);
    }
  });

  