// ==UserScript==
// @name         r/place 2023
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

window.addEventListener('load', () => {
    console.log('r/place overlay')
        document.getElementsByTagName("garlic-bread-embed")[0].shadowRoot.children[0].getElementsByTagName("garlic-bread-canvas")[0].shadowRoot.children[0].appendChild(
    (function () {
        const i = document.createElement("img");
        i.src = "https://raw.githubusercontent.com/PinkFluffy1Corn/bangtanplace2022/2023/overlay-01.png";
        i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2500px;height: 2000px;";
        return i;
    })())
}, false);