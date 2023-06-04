import DoMini from "../base";

DoMini.fn.clone = function() {
    let el = this.get(0);
    if ( el != null ) {
        this.splice(0, this.length);
        this.push(el.cloneNode(true));
    } else {
        this.splice(0, this.length);
    }
    return this;
};

DoMini.fn.detach = function(elem) {
    let context = this, removed = [];
    if ( typeof elem != "undefined" ) {
        context = this.find(elem);
    }
    context.forEach(function(el) {
        if ( el.parentElement != null ) {
            removed.push(el.parentElement.removeChild(el));
        }
    });
    return DoMini(null).add(removed);
};

DoMini.fn.remove = function(selector) {
    return this.detach(selector).off();
};

// @todo
DoMini.fn.prepend = function(prepend) {
    if ( typeof prepend == 'string' ) {
        prepend = DoMini._fn.createElementsFromHTML(prepend);
    }
    prepend = Array.isArray(prepend) ? prepend : [prepend];
    this.forEach(function(el){
        prepend.forEach(function(pre){
            if ( typeof pre.is_dom != 'undefined' ) {
                pre.forEach(function(pr){
                    el.insertBefore(pr, el.children[0]);
                });
            } else {
                el.insertBefore(pre, el.children[0]);
            }
        });
    });
    return this;
};

// @todo
DoMini.fn.append = function(append) {
    if ( typeof append == 'string' ) {
        append = DoMini._fn.createElementsFromHTML(append);
    }
    append = Array.isArray(append) ? append : [append];
    this.forEach(function(el){
        append.forEach(function(app) {
            if ( app != null ) {
                if (typeof app.is_dom != 'undefined') {
                    app.forEach(function (ap) {
                        el.appendChild(ap);
                    });
                } else {
                    el.appendChild(app.cloneNode(true));
                }
            }
        });
    });
    return this;
};

export default DoMini;