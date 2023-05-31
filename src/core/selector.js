import DoMini from "../base";

DoMini.fn.is = function(s){
    let el = this.get(0);
    if ( el != null ) {
        return el.matches(s);
    }
    return false;
};

DoMini.fn.parent = function (s) {
    let el = this.get(0);
    let _this = this.copy(this, true);
    _this.a = [];
    if (el != null) {
        el = el.parentElement;
        if (typeof s != 'undefined') {
            if (el.matches(s)) {
                _this.a = [el];
            }
        } else {
            _this.a = el == null ? [] : [el];
        }
        return _this;
    }
    return _this;
};

DoMini.fn.copy = function(source, deep) {
    let o, prop, type;
    if (typeof source != 'object' || source === null) {
        // What do to with functions, throw an error?
        o = source;
        return o;
    }
    o = new source.constructor();
    for (prop in source) {
        if (source.hasOwnProperty(prop)) {
            type = typeof source[prop];
            if (deep && type === 'object' && source[prop] !== null) {
                o[prop] = this.copy(source[prop]);
            } else {
                o[prop] = source[prop];
            }
        }
    }
    return o;
};

DoMini.fn.first = function () {
    let _this = this.copy(this, true);
    _this.a = typeof _this.a[0] != 'undefined' ? [_this.a[0]] : [];
    _this.length = _this.a.length;
    return _this;
};

DoMini.fn.last = function () {
    let _this = this.copy(this, true);
    _this.a = _this.a.length > 0 ? [_this.a[_this.a.length - 1]] : [];
    _this.length = _this.a.length;
    return _this;
};

DoMini.fn.prev = function (s) {
    let _this = this.copy(this, true);
    if ( typeof s == "undefined" ) {
        _this.a = typeof _this.a[0] != 'undefined' && _this.a[0].previousElementSibling != null ?
            [_this.a[0].previousElementSibling] : [];
    } else {
        if ( typeof _this.a[0] != 'undefined' ) {
            let n = _this.a[0].previousElementSibling;
            _this.a = [];
            while ( n != null ) {
                if ( n.matches(s) ) {
                    _this.a = [n];
                    break;
                }
                n = n.previousElementSibling;
            }
        }
    }
    _this.length = _this.a.length;
    return _this;
};

DoMini.fn.next = function (s) {
    let _this = this.copy(this, true);
    if ( typeof s == "undefined" ) {
        _this.a = typeof _this.a[0] != 'undefined' && _this.a[0].nextElementSibling != null ?
            [_this.a[0].nextElementSibling] : [];
    } else {
        if ( typeof _this.a[0] != 'undefined' ) {
            let n = _this.a[0].nextElementSibling;
            _this.a = [];
            while ( n != null ) {
                if ( n.matches(s) ) {
                    _this.a = [n];
                    break;
                }
                n = n.nextElementSibling;
            }
        }
    }
    _this.length = _this.a.length;
    return _this;
};

DoMini.fn.closest = function (s) {
    let el = this.get(0);
    let _this = this.copy(this, true);
    _this.a = [];
    if ( typeof s === "string" ) {
        if (el !== null && typeof el.matches != 'undefined' && s !== '') {
            if (!el.matches(s)) {
                // noinspection StatementWithEmptyBodyJS
                while ((el = el.parentElement) && !el.matches(s)) ;
            }
            _this.a = el == null ? [] : [el];
        }
    } else {
        if (el !== null && typeof el.matches != 'undefined' && typeof s.matches != 'undefined') {
            if ( el !== s ) {
                // noinspection StatementWithEmptyBodyJS
                while ((el = el.parentElement) && el !== s) ;
            }
            _this.a = el == null ? [] : [el];
        }
    }
    _this.length = _this.a.length;
    return _this;
};

DoMini.fn.add = function( el ) {
    if ( typeof el !== "undefined" ) {
        if (typeof el.nodeType !== "undefined") {
            if (this.a.indexOf(el) == -1) {
                this.a.push(el);
            }
        } else if (typeof el.a !== "undefined") {
            let _this = this;
            el.a.forEach(function (el) {
                if (_this.a.indexOf(el) == -1) {
                    _this.a.push(el);
                }
            });
        }
    }
    return this;
};

DoMini.fn.find = function (s) {
    let _this = this.copy(this, true);
    _this.a = [];
    this.forEach(function(el){
        if ( el !== null && typeof el.querySelectorAll != 'undefined') {
            _this.a = _this.a.concat(Array.prototype.slice.call(el.querySelectorAll(s)));
        }
    });
    _this.length = _this.a.length;
    return _this;
};

export default DoMini;