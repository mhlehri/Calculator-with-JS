let input = document.getElementById("output");
const p = document.querySelectorAll(".p1");

p.forEach((value, index, array) => {
  value.addEventListener("click", (e) => {
    if (value.innerText === "=") {
      if (input.value !== "") {
        try {
          out = eval(input.value);
          input.value = out;
        } catch (err) {
          input.value = "Syntax Error";
        }
      }
    } else if (value.innerText == "AC") {
      input.value = "";
    } else if (value.innerText == "DEL") {
      input.value = input.value.slice(-input.value.length - 1, -1);
    } else {
      input.value += value.innerText;
    }
  });
});

// ? second one

let input2 = document.getElementById("output2");
const p2 = document.querySelectorAll(".p2");
const append = (num) => {
  input2.value += num;
};
function calculate() {
  if (input2.value.includes(".")) {
    try {
      input2.value = eval(input2.value).toFixed(4);
    } catch (err) {
      input2.value = "Syntax Error";
    }
  }
  try {
    input2.value = eval(input2.value);
  } catch (err) {
    input2.value = "Syntax Error";
  }
}
function del() {
  input2.value = input2.value.slice(-input2.value.length - 1, -1);
}
function C() {
  input2.value = "";
}
