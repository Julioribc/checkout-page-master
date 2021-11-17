import countAmounts from "./countAmount.js";

document.addEventListener("DOMContentLoaded", function () {
  const $listElements = document.querySelectorAll(".card-product-amount");
  const classElements = {
    "btnDecrease": ".product-decrement",
    "btnIncrease": ".product-increase",
    "conter": ".product-total",
  };
  const maxNumber = 15
  $listElements.forEach((element) => {
    countAmounts(element, maxNumber, classElements);
  });
});
