import {sum} from "./js/math";

const {priceFormat} = require('./js/format.js')

// 直接导入个操作 DOM 的面向过程代码
import "./js/element.js"

console.log(sum(20, 20));
console.log(priceFormat());


const message = "hello world"
const names = ["abc", "cba", "nba"]
names.forEach(item => console.log(item))