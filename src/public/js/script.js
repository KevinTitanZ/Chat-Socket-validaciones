const socket = io();
const userLogged = getCookie("username");

const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");

const username = document.cookie
  .split("; ")
  .find((row) => row.startsWith("username="))
  ?.split("=")[1];

send.addEventListener("click", () => {
  const input = document.querySelector("#message");
  const message = input.value.trim();

  if (message !== "") {
    socket.emit("message", message);
    input.value = "";
  }
});

socket.on("message", ({ user, message }) => {
  const isOwnMessage = user === username;

  const msg = document.createRange().createContextualFragment(`
    <div class="message ${isOwnMessage ? "sent" : "received"}">
      
      <div class="message-body">
        <div class="user-info">
          <span class="username">${user}</span>
          <span class="time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <p>${message}</p>
      </div>
    </div>
  `);

  allMessages.append(msg);
});

socket.on("users", (users) => {
  console.log("Usuarios conectados:", users); // <-- Agrega esto
  const userList = document.querySelector("#connected-users");
  if (userList) {
    userList.innerHTML = users
      .map((u) => `<li><span>🟢</span> ${u}</li>`)
      .join("");
  }
});



function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}
function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}setCookie("username", nombre, 1);
function checkCookie() {
  const username = getCookie("username");
  if (!username) {
    window.location.href = "/register";
  }
}
checkCookie();