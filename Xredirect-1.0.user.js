// ==UserScript==
// @name         Xredirect
// @author       Nox
// @version      1.0
// @homepage     https://github.com/NoxNecro/Xredirect
// @supportURL   https://github.com/NoxNecro/Xredirect/issues
// @description  Redirects X/Twitter to XCancel before the page loads to pass the annoying login page
// @match        *://x.com/*
// @match        *://twitter.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Construct the new URL
    let newUrl = location.href.replace(/^(https?:\/\/)(x\.com|twitter\.com)/, '$1xcancel.com');

    // Redirect immediately
    location.replace(newUrl);
})();
