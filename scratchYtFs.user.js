// ==UserScript==
// @name         Scratch YouTube full screen
// @namespace    github.com/mxmou
// @version      1.0
// @description  Enables the full screen button in Scratch's YouTube video player
// @author       MaxiMouse
// @homepageURL  https://github.com/mxmou/customize-scratch
// @supportURL   https://github.com/mxmou/customize-scratch/issues
// @updateURL    https://mxmou.github.io/customize-scratch/scratchYtFs.user.js
// @match        https://scratch.mit.edu/discuss/youtube/*/
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector(".youtube-player").setAttribute("allowfullscreen", true);
        document.querySelector(".youtube-player").src += ""; // reload video
    });
})();
