console.log("Hello World");

const emailBtn = document.querySelector(".submit");
const signForm = document.querySelector(".sign-up-form");
const dismissBtn = document.querySelector(".dismiss");
const successLabel = document.querySelector(".success-label");

const clearInput = (input) => (input.value = "");

emailBtn.addEventListener("click", (e) => {
  const input = document.getElementById("email");
  const validation = input.value.includes("@");
  const indexAt = input.value.indexOf("@");

  e.preventDefault();

  if (!validation) {
    const form = document.querySelector(".form");
    const span = document.createElement("span");
    span.classList = "error-message";
    span.textContent = "Validate email required";
    form.append(span);
    input.classList.add("error");

    setInterval(clearInput(input), 500);
  }

  if (indexAt === -1) {
    return;
  }

  const after = input.value.substring(indexAt + 1);
  if (after.length === 0) {
    return;
  } else {
    signForm.classList.add("hidden");
    successLabel.classList.add("active");
  }

  input.addEventListener("keyup", (e) => {
    const text = e.currentTarget.value;
    const span = document.querySelector(".error-message");

    if (span === null) {
      return;
    }

    span.remove();

    if (text) {
      input.classList.remove("error");
    }
  });

  input.value = "";
});

dismissBtn.addEventListener("click", (e) => {
  e.preventDefault();

  signForm.classList.remove("hidden");
  successLabel.classList.remove("active");
});
