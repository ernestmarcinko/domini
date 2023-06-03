"use strict";
/**
 * Main DoMini constructor
 * 
 * @param {String|Element|DoMini} selector 
 * @param {Element|DoMini} [$node]
 * @returns {DoMini|void}
 */

var DoMini = function(selector, $node) {
	if ( typeof arguments[2] !== 'undefined' ) {
		return this.constructor.call(this, selector, $node);
	}

    if ( arguments.length >= 1 ) {
        if ( arguments.length == 1 && typeof arguments[0] == 'function' ) {
            if (document.readyState === "complete" || document.readyState === "loaded"  || document.readyState === "interactive") {
                arguments[0].apply(this, [DoMini]);
            } else {
                window.addEventListener('DOMContentLoaded', ()=>{arguments[0].apply(this, [DoMini])});
            }
        } else {
            return new DoMini( selector, $node, true );
        }
    }
};

// Main functions extended over the nodes
DoMini.prototype = DoMini.fn = {
    is_dom: true,
    length: 0,

    constructor: function (s, $node) {
        if ( typeof $node != "undefined" && $node instanceof DoMini ) {
            return DoMini($node).find(s);
        } else {
            if (typeof s == "string") {
                this.push(...this._(s));
            } else {
                if ( s instanceof DoMini ) {
                    return s;
                } else {
                    this.push(s)
                }
            }
        }
        return this;
    },

    _: function (s) {
        if ( s.charAt(0) === '<' ) {
            return DoMini._fn.createElementsFromHTML(s);
        }
        return [...document.querySelectorAll(s)];
    },

    // This makes it act more like an array
	push: Array.prototype.push,
	sort: Array.prototype.sort,
	splice: Array.prototype.splice
}

// Define the iterator symbol to the array iterator
DoMini.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

// Utility functions container
DoMini._fn = {};

export default DoMini;