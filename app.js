const signinButton = document.querySelector("#sign-in-btn");
const signupButton = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

signupButton.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

signinButton.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
