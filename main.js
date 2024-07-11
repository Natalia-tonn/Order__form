const btn = document.querySelector(".btn")
const body = document.querySelector("body")

btn.addEventListener("click", (e) =>{
    e.preventDefault()
const newBtn = document.createElement("button")
newBtn.textContent = "Заказ оплачен"
newBtn.classList.add("new-btn")
body.append(newBtn)

const newBtn2 = document.createElement("button")
newBtn2.textContent = "Заказ отправлен"
newBtn2.classList.add("new-btn")
body.append(newBtn2)

const newBtn3 = document.createElement("button")
newBtn3.textContent = "Заказ получен"
newBtn3.classList.add("new-btn")
body.append(newBtn3)


const newMessage = document.createElement("div")
newMessage.textContent = "Заказ создан, ожидайте дальнейшей информации"
newMessage.classList.add("new-message")
body.append(newMessage)

})


