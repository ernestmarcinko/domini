import DoMini from "../base";

DoMini._fn.bodyTransform = function() {
    let x = 0, y = 0;
    if ( typeof WebKitCSSMatrix !== 'undefined' ) {
        let style = window.getComputedStyle(document.body);
        if ( typeof style.transform != 'undefined' ) {
            let matrix = new WebKitCSSMatrix(style.transform);
            if ( matrix.m41 != 'undefined' ) {
                x = matrix.m41;
            }
            if ( matrix.m42 != 'undefined' ) {
                y = matrix.m42;
            }
        }
    }

    return {x: x, y: y};
};

DoMini._fn.bodyTransformY = function() {
    return this.bodyTransform().y;
};

DoMini._fn.bodyTransformX = function() {
    return this.bodyTransform().x;
};

DoMini._fn.hasFixedParent = function(el) {
    /**
     * When CSS transform is present, then Fixed element are no longer fixed
     * even if the CSS declaration says.
     */
    if ( DoMini._fn.bodyTransformY() != 0 ) {
        return false;
    }
    do {
        if ( window.getComputedStyle(el)['position'] == 'fixed' ) {
            return true;
        }
    } while( el = el.parentElement );
    return false;
};

DoMini._fn.hasEventListener = function(el, type, trigger) {
    if (typeof el._domini_events == "undefined") {
        return false;
    }
    for (let i = 0; i < el._domini_events.length; i++) {
        if ( el._domini_events[i].trigger == trigger && el._domini_events[i].type == type ) {
            return true;
        }
    }
    return false;
};

DoMini._fn.allDescendants = function(node) {
    let nodes = [], _this = this;
    if ( !Array.isArray(node) ) {
        node = [node];
    }
    node.forEach( function(n){
        for (let i = 0; i < n.childNodes.length; i++) {
            let child = n.childNodes[i];
            nodes.push(child);
            nodes = nodes.concat(_this.allDescendants(child));
        }
    });
    return nodes;
};

DoMini._fn.createElementsFromHTML = function(htmlString) {
    let template = document.createElement('template');
    template.innerHTML = htmlString.replace(/(\r\n|\n|\r)/gm, "");
    return [...template.content.childNodes];
};

DoMini._fn.absolutePosition = function(el) {
    if ( !el.getClientRects().length ) {
        return { top: 0, left: 0 };
    }

    let rect = el.getBoundingClientRect();
    let win = el.ownerDocument.defaultView;
    return ({
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
    });
};

// Create a plugin based on a defined object
DoMini._fn.plugin = function (name, object) {
    DoMini.fn[name] = function (options) {
        if ( typeof(options) != 'undefined' && object[options] ) {
            return object[options].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else {
            return this.each(function (elem) {
                elem['domini_' + name] = Object.create(object).init(options, elem);
            });
        }

    };
};

export default DoMini;