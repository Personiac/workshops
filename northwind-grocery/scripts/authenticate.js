"use strict";

const AUTHENTICATION_KEY = "0kEy123";
const createPageLink = document.querySelector("#create-page-link");

function isAuthenticated() {
  return localStorage.getItem("authenticationKey") === AUTHENTICATION_KEY;
}

function storeAuthenticationKey() {
  localStorage.setItem("authenticationKey", AUTHENTICATION_KEY);
}

document.addEventListener("DOMContentLoaded", (event) => {
  if (isAuthenticated()) {
    createPageLink.style.display = "block";
  } else {
    createPageLink.style.display = "none";
  }
});
