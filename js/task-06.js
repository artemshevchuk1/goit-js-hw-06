const focus = document.querySelector("#validation-input");
  function check() {
    if (focus.value.length !== Number(focus.getAttribute("data-length"))) {
      focus.classList.add("invalid");
      focus.classList.remove("valid");
    } else {
      focus.classList.add("valid");
      focus.classList.remove("invalid");
    }
  }
  console.log(focus.addEventListener("blur", check));