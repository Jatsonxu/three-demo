import "./css/style.css"

// import("./js/element.js")
import "./js/element.js"

import Cat from "./img/cat.jpg"

const divEl = document.createElement("div")
divEl.className = "title"
divEl.innerHTML = "Hello Document Element,Holy"
document.body.appendChild(divEl)

const imgEl = document.createElement("img")
imgEl.src = Cat
imgEl.style.width = "220px"
imgEl.style.height = "220px"
document.body.appendChild(imgEl)


let i = 0
// let timer = setInterval(() => console.log((i + Math.random())), 1000,)

let timer = setInterval(() => {
    if (i < 20) {
        console.log(i++)
    } else {
        clearInterval(timer)
        timer = null
    }
}, 1000)
console.log("123")
console.log("4455")
console.log("111")
console.log("Webpack dev server")
console.log("Webpack dev server2")

if (module.hot) {
    module.hot.accept("./js/element.js", () => {
        console.log("某个模块发生了更新了")
    })
}