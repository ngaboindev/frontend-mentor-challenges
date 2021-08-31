const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstnameVal = form["firstname"].value;
  const lastnameVal = form["lastname"].value;
  const emailVal = form["email"].value;
  const passwordVal = form["password"].value;

  if (firstnameVal === "") {
    addErrorMsg("firstname", "First name is required");
  } else {
    hideErrorMsg("firstname");
  }
  if (lastnameVal === "") {
    addErrorMsg("lastname", "Last name is required");
  } else {
    hideErrorMsg("lastname");
  }
  if (emailVal === "") {
    addErrorMsg("email", "Email is required");
  } else if (!validateEmail(emailVal)) {
    addErrorMsg("email", "Email is invalid");
  } else {
    hideErrorMsg("email");
  }

  if (passwordVal === "") {
    addErrorMsg("password", "Password is required");
  } else {
    hideErrorMsg("password");
  }
});

function hideErrorMsg(field) {
  const formInput = form[field].parentNode;
  formInput.classList.remove("error");
  const small = form[field].parentNode.querySelector("small");
  small.style.opacity = "0";
}

function addErrorMsg(field, msg) {
  const formInput = form[field].parentNode;
  formInput.classList.add("error");

  const small = form[field].parentNode.querySelector("small");
  small.innerText = msg;
  small.style.opacity = "1";
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
