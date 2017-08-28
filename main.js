// ==UserScript==
// @name         Bing Search
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Will attempt random bing searches
// @author       Spencer Stantis
// @match        https://www.bing.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //creates a random bumber from 15 to 25 for the seconds timer
    Math.floor(Math.random()*10+15);
    //test
})();
