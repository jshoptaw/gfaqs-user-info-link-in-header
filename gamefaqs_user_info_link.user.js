// ==UserScript==
// @name           GameFAQs User Info Link in Header
// @namespace      OTACON120
// @version        1.1.1
// @description    Adds link to "Board User Info" page in site header
// @updateURL      https://greasyfork.org/scripts/618-gamefaqs-user-info-link-in-header/code/GameFAQs%20User%20Info%20Link%20in%20Header.meta.js
// @downloadURL    https://greasyfork.org/scripts/618-gamefaqs-user-info-link-in-header/code/GameFAQs%20User%20Info%20Link%20in%20Header.user.js
// @website        http://otacon120.com/user-scripts/gamefaqs-related/user-info-link-in-header/
// @include        http://*.gamefaqs.com/*
// @match          http://*.gamefaqs.com/*
// @grant          none
// ==/UserScript==

var welcomeMsg   = document.getElementsByClassName('masthead_strip')[0].getElementsByClassName('masthead_user')[0],
	userProfile  = welcomeMsg.getElementsByTagName('a')[0],
	userInfo     = document.createElement('a');

if ( userProfile.firstChild.textContent !== 'Log In' ) {
	userInfo.href      = '/boards/user.php';
	userInfo.innerHTML = 'User Info <i class="icon icon-th-list"></i>';

	welcomeMsg.insertBefore(userInfo, userProfile.nextSibling);
}