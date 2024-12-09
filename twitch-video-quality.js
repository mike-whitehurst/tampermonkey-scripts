// ==UserScript==
// @name         Twitch video quality
// @namespace    http://tampermonkey.net/
// @version      2024-12-09
// @description  Fix blurry twitch video on 1440p fullscreen
// @author       Mike Whitehurst
// @match        https://www.twitch.tv/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitch.tv
// @grant        window.onurlchange
// ==/UserScript==

(function() {
    'use strict';

    function setPlayerMaxHeight() {
        //console.log('setPlayerMaxHeight called in tampermonkey script');
        let players = document.getElementsByClassName('video-player__container');
        if (players && players.length === 1) {
            players[0].style["max-height"] = "1080px";
        }
    };

    window.addEventListener('load', function() {
        //console.log('load event fired in tampermonkey script');
        setPlayerMaxHeight();
    }, false);

    if (window.onurlchange === null) {
        window.addEventListener('urlchange', (info) => {
            //console.log('urlchange event fired in tampermonkey script');
            setPlayerMaxHeight();
        });
    }

})();