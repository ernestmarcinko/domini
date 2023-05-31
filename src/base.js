"use strict";
var DoMini = function() {
    DoMini.version = "0.1";
    
    if ( arguments.length >= 1 ) {
        if ( arguments.length == 1 && typeof arguments[0] == 'function' ) {
            if (document.readyState === "complete" || document.readyState === "loaded"  || document.readyState === "interactive") {
                arguments[0].apply(this, [DoMini]);
            } else {
                window.addEventListener('DOMContentLoaded', ()=>{arguments[0].apply(this, [DoMini])});
            }
        }
        return DoMini.fn.$.apply(DoMini.fn, arguments);
    } else {
        return DoMini.fn;
    }
};

// Main functions extended over the nodes
DoMini.fn = {
    a: [],
    is_dom: true,
    length: 0
}

// Utility functions
DoMini._fn = {};

export default DoMini;