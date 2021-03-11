define([
    './a-util.js'
], function(aUtil) {
    'use strict';
    return {
        printDate: function() {
            console.log(aUtil.aGetFormatDate())
        }
    }
});