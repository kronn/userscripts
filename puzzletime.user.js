// ==UserScript==
// @name         Accountinfo extractor
// @namespace    https://github.com/kronn/userscripts/blob/master/puzzletime.user.js
// @version      1.1
// @description  Display the Account-ID and it's billable status
// @author       Matthias Viehweger
// @match        https://time.puzzle.ch/ordertimes/new*
// @grant        none
// ==/UserScript==


function appendCurrentAccountId() {
    var dropdown, account_id, target, display_node;

    dropdown = document.getElementById("ordertime_account_id");
    account_id = dropdown.children[0].value;

    // display_node = "<label class='col-md-2 control-label'>AccountID</label>";
    // display_node += "<div class='col-md-5'>" + account_id + "</div>";
    display_node = account_id;

    target = dropdown.parentNode.parentNode;
    target.append(display_node)
}

function createLookupButton() {
    let input = document.createElement("input");
    input.type = "button";
    input.value = "Lookup";
    input.className = "btn";
    input.style.setProperty('margin-left', '8px');
    input.onclick = appendCurrentAccountId;

    $("a[class='cancel']")[0].parentNode.append(input);
}

(function() {
    'use strict';
    createLookupButton();
    // document.getElementById('ordertime_account_id').addEventListener('change', appendCurrentAccountId);
})();
