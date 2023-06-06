import DoMini from "../base";

DoMini.fn.clear = function() {
    for ( const el of this ) {
        delete el._domini_events;
    }
    return this;
};

DoMini.fn.clone = function() {
    let clones = [];
    for (const el of this) {
        clones.push(el.cloneNode(true));
    }
    return DoMini().add(clones);
};

DoMini.fn.detach = function(elem) {
    let context = this, removed = [];
    if ( typeof elem != "undefined" ) {
        context = this.find(elem);
    }
    for ( const el of context ) {
        if ( el.parentElement != null ) {
            removed.push(el.parentElement.removeChild(el));
        }
    }
    return DoMini(null).add(removed);
};

/**
 * Same as .detach() but this also removes all DoMini related stuff
 */
DoMini.fn.remove = function(selector) {
    return this.detach(selector).off().clear();
};

DoMini.fn.prepend = function(prepend) {
    prepend = DoMini._fn.HTMLElementArrayFromAny(prepend);
    if ( prepend.length > 0 ) {
        for ( const el of this ) {
            for ( const pre of prepend ) {
                el.insertBefore(pre, el.children[0]);
            }
        }
    }
    return this;
};

DoMini.fn.append = function(append) {
    append = DoMini._fn.HTMLElementArrayFromAny(append);
    if ( append.length > 0 ) {
        for ( const el of this ) {
            for ( const ap of append ) {
                el.appendChild(ap);
            }
        }
    }
    return this;
};

export default DoMini;