const form = document.querySelector(".login-form");
const inputField = form.querySelectorAll("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (email !== "" && password !== "") {
    let dataForm = {
      email,
      password,
    };
    console.log(dataForm);
  } else {
    alert("Нужно заполнить все поля");
  }
  form.reset();
});


// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });