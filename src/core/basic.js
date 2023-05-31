import DoMini from "../base";

DoMini.fn.get = function (n) {
    return typeof n == "undefined" ? this.a.slice() : (typeof this.a[n] != 'undefined' ? this.a[n] : null);
};

DoMini.fn._ = function (s) {
    if ( s.charAt(0) === '<' ) {
        return DoMini._fn.createElementsFromHTML(s);
    }
    return Array.prototype.slice.call(document.querySelectorAll(s));
};

DoMini.fn.$ = function (s, $node) {
    let _this = this.copy(this, true);
    if ( typeof $node != "undefined" ) {
        _this.a = $node !== null ? $node.find(s).get() : [];
    } else {
        if (typeof s == "string") {
            _this.a = _this._(s);
        } else {
            _this.a = s!== null ? [s] : [];
        }
    }
    _this.length = _this.a.length;
    return _this;
};

DoMini.fn.extend = function () {
    for (let i = 1; i < arguments.length; i++)
        for (let key in arguments[i])
            if (arguments[i].hasOwnProperty(key))
                arguments[0][key] = arguments[i][key];
    return arguments[0];
}

DoMini.fn.forEach = function (callback) {
    this.a.forEach(function (node, index, array) {
        callback.apply(node, [node, index, array]);
    });
    return this;
};

DoMini.fn.each = function (c) {
    return this.forEach(c);
}

export default DoMini;