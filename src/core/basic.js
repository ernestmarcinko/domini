import DoMini from "../base";

DoMini.fn.get = function (n) {
    return typeof n == "undefined" ? Array.from(this) : this[n];
};

DoMini.fn.extend = function () {
    for (let i = 1; i < arguments.length; i++)
        for (let key in arguments[i])
            if (arguments[i].hasOwnProperty(key))
                arguments[0][key] = arguments[i][key];
    return arguments[0];
}

DoMini.fn.forEach = function (callback) {
    this.get().forEach(function (node, index, array) {
        callback.apply(node, [node, index, array]);
    });
    return this;
};

DoMini.fn.each = function (c) {
    return this.forEach(c);
}

export default DoMini;