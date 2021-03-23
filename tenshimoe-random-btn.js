// ==UserScript==
// @name         Tenshi.moe Random Anime
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  A userscript that adds a random button to Tenshi.moe
// @author       Arjix
// @match        *://*tenshi.moe/*
// @grant        GM_xmlhttpRequest
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


(function() {
    'use strict';
    const link = "https://raw.githubusercontent.com/ArjixGamer/tenshimoe-random/main/all_anime.json"
    const getRandomAnime = () => {
        GM_xmlhttpRequest({
            method: "GET",
            url: link,
            onload: function(res) {
                const ALL_ANIME = JSON.parse(res.response)
                const index = getRandomInt(1, ALL_ANIME.length-1)
                document.location.href = ALL_ANIME[index]
            }})}
   const button = `<li id="menu-account" class="nav-item dropdown">
                     <a class="nav-link btn btn-outline-secondary" id="randomAnimeBtn" href="#" role="button">
                        <i class="fas fa-dice" aria-hidden="true"></i> <span class="d-none d-md-inline">Random</span>
                     </a>
                  </li>`
   $("ul > li.nav-item.dropdown").first().before(button)
   document.getElementById("randomAnimeBtn").onclick = getRandomAnime
})();
