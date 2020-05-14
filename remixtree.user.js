// ==UserScript==
// @name         Scratch Remix Tree
// @namespace    github.com/mxmou
// @version      1.0
// @description  Brings back the remix tree button
// @author       MaxiMouse
// @homepageURL  https://github.com/mxmou/customize-scratch
// @supportURL   https://github.com/mxmou/customize-scratch/issues
// @updateURL    https://mxmou.github.io/customize-scratch/remixtree.user.js
// @match        https://scratch.mit.edu/projects/*/
// ==/UserScript==

(function() {
    'use strict';

    var remixTreeTestInterval = setInterval(function() {
        var remixes = document.querySelector(".stats .project-remixes");
        if (remixes) {
            remixes.title = "View remix tree";
            remixes.style.cursor = "pointer";
            remixes.addEventListener("click", function() {
                location.href += "remixtree";
            });
            clearInterval(remixTreeTestInterval);
        }
    }, 100);
})();
