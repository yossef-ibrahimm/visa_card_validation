let theName = document.getElementById("card_name");
let number = document.getElementById("card_number");
let month = document.getElementById("date_m");
let year = document.getElementById("date_y");
let cvc = document.getElementById("cvc");
let visa_num = document.getElementById("visa_card_number");
let visa_name = document.getElementById("visa_card_name");
let visa_date = document.getElementById("visa_card_date");
let visa_cvc = document.getElementById("visa_cvc_card");
let btn = document.getElementById("btn");
let btn_reload = document.querySelector(".btn_reload");
let error = document.getElementById("name_error");
let article = document.getElementById("article");
let completed_div = document.getElementById("completed");
let completed = false;
let name_valid = false;
let number_valid = false;
let month_valid = false;
let year_valid = false;
let cvc_valid = false;
theName.value = "";
number.value = "";
month.value = "";
year.value = "";
cvc.value = "";
function replace_string(e) {
  e.value = e.value.replace(/[^0-9]/g, "");
}
function replace_num(e) {
  e.value = e.value.replace(/[^a-z]/g, "");
}
// to make max value in input
/* function lengthCheck(object) {
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice(0, object.maxLength);
  }
} */

function valid(e) {
  e.onblur = function () {
    let text = e.getAttribute("name");
    if (e.value.length !== e.maxLength) {
      e.classList.add("error");
      e.placeholder = `Enter ${text}`;
    } else {
      e.classList.remove("error");
    }
  };
}
valid(year);
valid(month);
valid(cvc);
valid(number);



theName.onblur = function () {
  replace_num(theName);
  if (theName.value !== "") {
    name_valid = true;
    visa_name.innerText = theName.value;
    theName.blur();
    theName.classList.remove("error");
    if (number.value === "" || number.value.length >= 18) {
      number.focus();
    }
  } else {
    theName.classList.add("error");
    theName.placeholder = `Enter your name`;
  }
};
function card_number_format(c) {
  let card_number = document.getElementById(c).value;
  card_number = card_number.replace(/[^0-9]/g, "");
  let block1 = "";
  let block2 = "";
  let block3 = "";
  let block4 = " ";
  let formatted = "";
  block1 = card_number.substring(0, 4);
  if (block1.length == 4) {
    block1 = block1 + " ";
  }
  block2 = card_number.substring(4, 8);
  if (block2.length == 4) {
    block2 = block2 + " ";
  }
  block3 = card_number.substring(8, 12);
  if (block3.length == 4) {
    block3 = block3 + " ";
  }
  block4 = card_number.substring(12, 16);
  formatted = block1 + block2 + block3 + block4;
  document.getElementById(c).value = formatted;
}

function num() {
  visa_num.innerText = number.value;
  if (
    number.value.length !== 19 ||
    number.value.length === "" ||
    number.value.length === null
  ) {
    number_valid = false;
  } else {
    number_valid = true;
    number.blur();

    if (month.value === "" || month.value.length > 2) {
      month.focus();
    }
  }
}

function mon() {
  replace_string(month);
  if (month.value.length === 2) {
    month_valid = true;
    month.blur();
    if (year.value === "" || year.value.length < 2) {
      year.focus();
    }
  }
  visa_date.innerText = month.value;
}

function yea() {
  replace_string(year);
  if (year.value.length === 2) {
    year_valid = true;
    year.blur();

    visa_date.innerText += "/" + year.value;
    if (cvc.value === "" || cvc.value.length < 3) {
      cvc.focus();
    }
  }
}
function CvC() {
  replace_string(cvc);
  visa_cvc.innerText = cvc.value;
  if (cvc.value.length === 3) {
    cvc_valid = true;
    cvc.blur();
  }
}
document.forms[0].onsubmit = function (event) {
  if (
    name_valid === false ||
    number_valid === false ||
    month_valid === false ||
    year_valid === false ||
    cvc_valid === false
  ) {
    event.preventDefault();
  } else {
    document.forms[0].remove();
    completed = true;
    completed_div.style.cssText = "display:flex ; ";
  }
};
btn_reload.onclick = function () {
  document.location.reload();
};
