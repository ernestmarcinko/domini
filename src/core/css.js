import DoMini from "../base";

DoMini.fn.css = function(prop, v) {
    let els = this.get(), el;
    for (let i=0; i<els.length; i++) {
        el = els[i];
        if ( arguments.length == 1 ) {
            if ( typeof prop == "object" ) {
                Object.keys(prop).forEach(function(k){
                    el.style[k] = prop[k];
                });
            } else {
                return window.getComputedStyle(el)[prop];
            }
        } else {
            el.style[prop] = v;
        }
    }
    return this;
};

DoMini.fn.hasClass = function (c) {
    let el = this.get(0);
    return el != null ? el.classList.contains(c) : false;
};

DoMini.fn.addClass = function (c) {
    let args = c;
    if (typeof c == 'string') {
        args = c.split(' ');
    }
    args = args.filter(function (i) {
        return i.trim() !== ''
    });
    if (args.length > 0) {
        this.forEach(function (el) {
            el.classList.add.apply(el.classList, args);
        });
    }
    return this;
};

DoMini.fn.removeClass = function (c) {
    if ( typeof c != 'undefined' ) {
        let args = c;
        if (typeof c == 'string') {
            args = c.split(' ');
        }
        args = args.filter(function (i) {
            return i.trim() !== ''
        });
        if (args.length > 0) {
            this.forEach(function (el) {
                el.classList.remove.apply(el.classList, args);
            });
        }
    } else {
        this.forEach(function (el) {
            if ( el.classList.length > 0 ) {
                el.classList.remove.apply(el.classList, el.classList);
            }
        });
    }
    return this;
};

DoMini.fn.isVisible = function() {
    let el = this.get(0), visible = true, style;
    while (el !== null) {
        style = window.getComputedStyle(el);
        if (
            style['display'] == 'none' ||
            style['visibility'] == 'hidden' ||
            style['opacity'] == 0
        ) {
            visible = false;
            break;
        }
        el = el.parentElement;
    }
    return visible;
};

export default DoMini;