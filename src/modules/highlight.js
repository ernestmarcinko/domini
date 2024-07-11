/*
 * Highlight plugin
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */
import DoMini from "../base";

DoMini.fn.unhighlight = function (options) {
    const $ = DoMini;
    let settings = {className: 'highlight', element: 'span'};
    $.fn.extend(settings, options);

    return this.find(settings.element + "." + settings.className).forEach(function () {
        let parent = this.parentNode;
        parent.replaceChild(this.firstChild, this);
        parent.normalize();
    });
};

DoMini.fn.highlight = function (words, options) {
    this.defaults = {
        className: 'highlight',
        element: 'span',
        caseSensitive: false,
        wordsOnly: false,
        excludeParents: '.excludeFromHighlight'
    };

    const $ = DoMini;
    const settings = {
        ...this.defaults,
        ...options
    };

    if (words.constructor === String) {
        words = [words];
    }
    words = words.filter(function(el){
        return el !== '';
    });
    words.forEach(function(w, i, o){
        o[i] = w.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    });

    if (words.length === 0) {
        return this;
    }

    let flag = settings.caseSensitive ? "" : "i";
    let pattern = "(" + words.join("|") + ")";
    if (settings.wordsOnly) {
        pattern = "(?:,|^|\\s)" + pattern + "(?:,|$|\\s)";
    }
    let re = new RegExp(pattern, flag);
    function highlight(node, re, nodeName, className, excludeParents) {
        excludeParents = excludeParents === '' ? $.fn.highlight.defaults : excludeParents;
        if (node.nodeType === 3) {
            if ( !$(node.parentNode).is(excludeParents) ) {
                let normalized = node.data.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                let match = normalized.match(re);
                if (match) {
                    let highlight = document.createElement(nodeName || 'span');
                    let index;
                    highlight.className = className || 'highlight';
                    if (/\.|,|\s/.test(match[0].charAt(0)))
                        index = match.index + 1;
                    else
                        index = match.index;
                    let wordNode = node.splitText(index);
                    wordNode.splitText(match[1].length);
                    let wordClone = wordNode.cloneNode(true);
                    highlight.appendChild(wordClone);
                    wordNode.parentNode.replaceChild(highlight, wordNode);
                    return 1; //skip added node in parent
                }
            }
        } else if ((node.nodeType === 1 && node.childNodes) && // only element nodes that have children
            !/(script|style)/i.test(node.tagName) && // ignore script and style nodes
            !$(node).closest(excludeParents).length > 0 &&
            !(node.tagName === nodeName.toUpperCase() && node.className === className)) { // skip if already highlighted
            for (let i = 0; i < node.childNodes.length; i++) {
                i += highlight(node.childNodes[i], re, nodeName, className, excludeParents);
            }
        }
        return 0;
    }

    return this.forEach(function (el) {
        highlight(el, re, settings.element, settings.className, settings.excludeParents);
    });
};

export default DoMini;