import _ from 'lodash'
import './components/css/test.css'
import test from './images/test.jpg'
import Data from './data.xml';

// let title = document.getElementById("title");
// window.onload = () => changeTitleColor();
document.body.appendChild(component());
console.log(Data);

function component() {
    var element = document.createElement('div');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    let myIcon = new Image();
    myIcon.src = test;

    element.appendChild(myIcon);
    return element;
}

function changeTitleColor() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    document.body.appendChild(element);
    let color = "#F43000"
    let start = Date.now();
    let timer = setInterval(() => {
        let count = Number(color.substring(color.length - 4)) + 1001;
        color = "#AB" + parseInt(count > 10000 ? (count - 10000) * 1000 : count);
        console.log(color);
        element.setAttribute('style', `color:  ${color}`);
        // if (Date.now() - start > 3000) {
        //     clearInterval(timer);
        // }
    }, 500);

}

function typeMatchCallBack(flag, element) {
    if (flag) {
        console.log("Element matched");
    } else {
        console.log("Element match missing , Error Type for this function");
    }
}