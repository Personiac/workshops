"use strict";

let form = document.getElementById("costEstimatorForm");
let results = document.getElementById("costBreakdown");

form.addEventListener("submit", function(event) {
    event.preventDefault();


    console.log(form.elements);
    const name = form.element.name.value;
    const email = form.element.email.value;
    const checkInDate = form.element.checkInDate.value;
    const nights = parseInt(form.elements.nights.value);
    const roomType = document.querySelector("input[name='roomType']:checked").value;
    const adults = parseInt(form.elements.adults.value);
    const children = parseInt(form.elements.children.value);
    const discount = document.querySelector("input[name='discount']:checked").value;

    const occupancy = {
        "Queen": 5,
        "King": 2,
        "2-Bedroom Suite": 6
    };

    if (adults + children > occupancy[roomType]) {
        const messageDiv = document.getElementById("messageDiv");
        messageDiv.innerText = "The room you selected will not hold your party";
        results.style.display = "none";
        return;
    }

    const originalRoomCost = getRoomRate(checkInDate, roomType);
    const discountPercentage = discount === "AAA/Senior" ? 0.1 : discount === "Military" ? 0.2 : 0;
    const discountAmount = originalRoomCost * discountPercentage;
    const discountedRoomCost = originalRoomCost - discountAmount;
    const tax = discountedRoomCost * 0.12;
    const totalCost = (discountedRoomCost + tax) * nights;

    document.getElementById("originalRoomCost").innerText = originalRoomCost.toFixed(2);
    document.getElementById("discountAmount").innerText = discountAmount.toFixed(2);
    document.getElementById("discountedRoomCost").innerText = discountedRoomCost.toFixed(2);
    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("totalCost").innerText = totalCost.toFixed(2);

    results.style.display = "block";
});

function getRoomRate(checkInDate, roomType) {

}
