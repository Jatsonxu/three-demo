import "../css/style.css"
import "../css/title.less"
import "../css/image.css"
import Cat2 from "../img/cat2.png"

const divEl = document.createElement("div")
divEl.className = "title"
divEl.innerHTML = "你好啊,Jetson"

const bgDivEl = document.createElement("div")
bgDivEl.className = "image-bg"

const imgEl = document.createElement("img")
imgEl.src = Cat2

document.body.appendChild(divEl)
document.body.appendChild(bgDivEl)
document.body.appendChild(imgEl)


