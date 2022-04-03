// ==UserScript==
// @name         BTS r/place overlay
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  makes it easier to correctly place tiless
// @author       PinkFluffy1Corn
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

window.addEventListener('load', () => {
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
    (function () {
        const i = document.createElement("img");
        i.src = "https://github.com/PinkFluffy1Corn/bangtanplace2022/raw/main/overlay.png";
        i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
        console.log(i);
        return i;
    })())
}, false);