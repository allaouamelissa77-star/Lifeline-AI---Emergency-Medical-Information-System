/* CALENDAR */
const calendar = document.querySelector(".calendar-grid")
for(let i=1;i<=30;i++){
let day = document.createElement("div")
day.innerText = i
calendar.appendChild(day)
}
/* CHATBOT */
const chatIcon = document.querySelector(".chat-icon")
const chatWindow = document.querySelector(".chat-window")
chatIcon.onclick = () => {
chatWindow.style.display =
chatWindow.style.display === "block"
? "none"
: "block"
}