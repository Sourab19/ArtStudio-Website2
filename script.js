var em = document.getElementById("em");
var err1 = document.getElementById("err1");
var no = document.getElementById("no");
var err2 = document.getElementById("err2");

function regExVal() {
  let RegExp =
    /^([a-zA-z0-9.-]+)@([a-zA-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  if (RegExp.test(em.value)) {
    err1.innerText = "email is valid";
    em.style.border = "2px solid black";
    return true;
  } else {
    err1.innerText = "email is invalid";
    em.style.border = "2px solid red";

    return false;
  }
}

function number() {
  let RegExp =
    /^([0-9]{10})|([0-9]{3}(-[0-9]{3}-[0-9]{4})|(\.[0-9]{3}\.[0-9]{4})|( [0-9]{3} [0-9]{4}))$/;
  if (RegExp.test(no.value)) {
    err2.innerText = "Number is valid";
    no.style.border = "2px solid black";
    return true;
  } else {
    err2.innerText = "Number is invalid";
    no.style.border = "2px solid red";

    return false;
  }
}

function validatePassword() {
  const password = document.getElementById("password").value;
  const bordercol = document.getElementById("password");
  const err3 = document.getElementById("err3");

  // Regex to match at least one uppercase, one lowercase, and one number
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d\S]{8,}$/;

  if (strongRegex.test(password)) {
    // Check if password length is greater than or equal to 8
    if (password.length > 8) {
      err3.innerText = "Password strength: Strong";
      err3.style.color = "green";
      bordercol.style.border = "2px solid green";
    } else {
      // Length is exactly 8
      err3.innerText = "Password strength: Medium";
      err3.style.color = "orange";
      bordercol.style.border = "2px solid orange";
    }
    return true;
  } else {
    // Fails to meet basic criteria
    err3.innerText = "Password strength: Poor";
    err3.style.color = "red";
    bordercol.style.border = "2px solid red";
    return false;
  }
}

function validateRegister() {
  const isPasswordValid = validatePassword();
  const isNumber = number();
  const isEmail = regExVal();

  return isPasswordValid && isNumber && isEmail;
}
