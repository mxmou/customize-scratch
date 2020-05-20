// ==UserScript==
// @name           Bring it Back
// @namespace      github.com/mxmou
// @version        1.1
// @description    Bring back the Discuss button in the header!
// @author         MaxiMouse
// @homepageURL    https://github.com/mxmou/customize-scratch
// @supportURL     https://github.com/mxmou/customize-scratch/issues
// @updateURL      https://mxmou.github.io/customize-scratch/bringItBack.user.js
// @match          https://scratch.mit.edu/*
// @run-at         document-body
// ==/UserScript==

var interval = setInterval(function() {
    if (document.querySelector('div#navigation div.inner ul') || document.querySelector('div#topnav ul.site-nav')) {
        clearInterval(interval);
        var link = document.createElement('li');
        link.innerHTML = '<a href="/discuss">Discuss</a>';
        link.className = 'link discuss';
        try {
            document.querySelector('div#navigation div.inner ul')
                .insertBefore(link, document.querySelector('div#navigation div.inner ul').getElementsByTagName('li')[3]);
        } catch(err) {
            document.querySelector('div#topnav ul.site-nav')
                .insertBefore(link, document.querySelector('div#topnav ul.site-nav').getElementsByTagName('li')[2]);
        }
    }
}, 50);
