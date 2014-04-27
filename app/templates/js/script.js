'use strict';

var app = (function() {

    var docElem = document.documentElement,

        _userAgentInit = function() {
            docElem.setAttribute('data-useragent', navigator.userAgent);
        },
        _init = function() {
            _userAgentInit();
        };

    return {
        init: _init
    };

})();

(function() {

    app.init();

})();