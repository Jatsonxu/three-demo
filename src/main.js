import {createApp} from "vue";

const divEl = document.createElement("div")
divEl.innerHTML = "Hello Document Element"
document.body.appendChild(divEl)

import App from "./vue/App.vue"

const app = createApp(App)
console.log(App)
app.mount("#app")