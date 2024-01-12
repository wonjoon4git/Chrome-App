const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // convention of using uppercase variable name for strings
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // 'event' is a free information given by JS by default
  event.preventDefault(); // does not refresh after submit (preventing default behavior)
  loginForm.classList.add(HIDDEN_CLASSNAME); // hiding the login form
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greeting.innerText = `Hello ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
