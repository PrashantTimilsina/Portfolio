"use strict";
const submit = document.querySelector(".last");
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (first.value && second.value && third.value) {
    alert("Form submitted");
    first.value = second.value = third.value = "";
  } else {
    alert("Please fill the form before you submit");
  }
});
