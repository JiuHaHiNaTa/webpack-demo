// import _ from 'lodash'
import './components/css/test.css'
import test from './images/test.jpg'
import Data from './data.xml'
// import {
//     testErrorThrow
// } from './components/js/test'

// let title = document.getElementById("title");
// window.onload = () => changeTitleColor();

let element = component();
document.body.appendChild(element);
window.alert('Hmmm, this probably isn\'t a great idea...');

// getComponent().then(component => {
//     document.body.appendChild(component);
// })


if (process.env.NODE_ENV == 'production') {
    console.log('Looks like we are in production mode!');
} else {
    console.log('Looks like we are in development mode!');
}

console.log(Data);

// testErrorThrow();

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = e => import('../src/components/js/test').then(module => {
        let print = module.default;
        print();
    });

    let myIcon = new Image();
    myIcon.src = test;

    element.appendChild(btn);
    element.appendChild(myIcon);
    return element;
}

// //promise使用
// function getComponent() {
//     return import( /* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//         var element = document.createElement('div');

//         element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//         return element;

//     }).catch(error => 'An error occurred while loading the component');
// }

//async 简化promise
async function getComponent() {

    var element = document.createElement('div');
    const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
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