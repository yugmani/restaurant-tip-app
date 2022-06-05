const billTotal = document.getElementById("bill-amount");
const tipTotal = document.getElementById("tip-amount");
const grandTotal = document.getElementById("grand");
const btnEl = document.querySelector("#btn");
const radioButtons = document.querySelectorAll('input[name="tip"]');

//eventlistener to calculate total amount
btnEl.addEventListener("click", () => {
  let tipSelected;

  //get the value of initial bill amount
  const bill_total = +billTotal.value;

  //validating bill amount
  if (isNaN(bill_total)) {
    const warning = document.getElementById("warning");
    warning.style.display = "block";
    //display warning for invalid input of bill amount
    warning.innerHTML = `<h2>Please enter a valid number!</h2>`;
  } else {
    //   get the value of radio button checked
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        tipSelected = radioButton.value;
        break;
      }
    }

    //call a function to calculate the tip
    const tipAmount = tipCalculate(tipSelected, bill_total);

    //display tip amount and grand total
    tipTotal.innerHTML = tipSelected
      ? `$ ${tipAmount}`
      : "Please select tip Amount!";
    grandTotal.innerHTML = `$ ${tipAmount + bill_total}`;
    billTotal.value = "";
    document.getElementById("final_greet").style.display = "block";
  }
});

//function to calculate tip amount using tip percent
const tipCalculate = (tipPercent, billAmount) => {
  return (tipPercent / 100) * billAmount;
};
