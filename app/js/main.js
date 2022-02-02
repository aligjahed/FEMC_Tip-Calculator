// Test
console.log("JS is working");

// Calls
const card = document.querySelector(".card");
const bill_input = document.getElementById("bill");
const action_btn = document.querySelector(".action_btn");
const tip_price = document.getElementById("tip");
const total_price = document.getElementById("total");
const people = document.getElementById("people");
const customeTip = document.getElementById("customeTip");
const tip_btn = document.querySelectorAll(".btn");

// variables
let bill = 0;
let people_number = 0;
let tipPercent = 0;
let tipAmount = 0;
let tipAmount_Person = 0;
let total_person = 0;
let tempBtn = undefined;

// Make page responsible
window.onload = () => {
  if (window.innerWidth > 1000) {
    card.classList.remove("flex-column");
    card.classList.remove("flex-jc-c");
    card.classList.add("flex-jc-sb");
  } else {
    card.classList.add("flex-column");
    card.classList.remove("flex-jc-sb");
    card.classList.add("flex-jc-c");
  }
};

window.onresize = () => {
  if (window.innerWidth > 1000) {
    card.classList.remove("flex-column");
    card.classList.remove("flex-jc-c");
    card.classList.add("flex-jc-sb");
  } else {
    card.classList.add("flex-column");
    card.classList.remove("flex-jc-sb");
    card.classList.add("flex-jc-c");
  }
};

function setTipPercent(input) {
  // Chnage buttons active toggle
  if (input.id !== "customeTip") {
    customeTip.value = "";
    tipPercent = parseInt(input.id);

    if (tempBtn == undefined) {
      tempBtn = input;
    } else {
      tempBtn.classList.remove("selected");
    }

    if (tempBtn.id == input.id) {
      input.classList.add("selected");
    } else {
      input.classList.add("selected");
      tempBtn = input;
    }
  } else {
    tipPercent = parseInt(input.value);

    if (tempBtn == undefined) {
      tempBtn = input;
    } else {
      tempBtn.classList.remove("selected");
    }

    if (tempBtn.id == input.id) {
    } else {
      tempBtn = input;
    }
  }
}

function finilize() {
  bill = bill_input.value;

  people_number = people.value;
  people.style.border = "none";
  bill_input.style.border = "none";

  Calc();
}

function Calc() {
  if (bill_input.value !== 0 && bill_input.value !== "") {
    bill_input.style.border = "none";

    if (people.value !== "") {
      tipAmount = bill * (tipPercent / 100);
      tipAmount_Person = tipAmount / people_number;
      tip_price.innerHTML = "$" + tipAmount_Person.toFixed(2);
      total_person = bill / people_number + tipAmount_Person;
      total_price.innerHTML = "$" + total_person.toFixed(2);

      action_btn.style.opacity = "100%";
    } else {
      if (tipPercent == 0 || people.value == 0 || "")
        people.style.border = "2px solid red";
    }
  }
}

function action() {
  tip_price.innerHTML = "$0.00";
  total_price.innerHTML = "$0.00";
  bill_input.value = "";
  customeTip.value = "";
  people.value = "";

  bill = 0;
  people_number = 0;
  tipPercent = 0;
  tipAmount = 0;
  tipAmount_Person = 0;
  total_person = 0;
  tempBtn = tempBtn.defaultValue;

  action_btn.style.opacity = "0.3";
}

setInterval(finilize, 1000);
