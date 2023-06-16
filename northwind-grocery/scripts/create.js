"use strict";

function handleSubmit(event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);
    let product = Object.fromEntries(formData.entries());

    fetch("http://localhost:8081/api/products", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((response) => {
        console.log(response.status, response.statusText);
        return response.json();
      })
      .then(window.location.replace("index.html"));
  }