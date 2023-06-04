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

DoMini.fn.remove = function(elem) {
    if ( typeof elem != "undefined" ) {
        return elem.parentElement.removeChild(elem);
    } else {
        this.forEach(function(el) {
            if ( el.parentElement != null ) {
                return el.parentElement.removeChild(el);
            }
        });
        this.splice(0, this.length);
        return null;
    }
};

DoMini.fn.detach = function() {
    let _this = this, n = [];
    this.forEach(function(elem){
        let el = _this.remove(elem);
        if ( el != null ) {
            n.push(el)
        }
    });
    this.splice(0, this.length);
    this.push(...n);
    return this;
};

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