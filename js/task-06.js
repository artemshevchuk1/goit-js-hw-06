const focus = document.querySelector("#validation-input");
  function check() {
    if (focus.value.length < Number(focus.getAttribute("data-length"))) {
      focus.classList.add("invalid");
    } else {
      focus.classList.remove("invalid");
      focus.classList.add("valid");
    }
  }
  console.log(focus.addEventListener("blur", check));