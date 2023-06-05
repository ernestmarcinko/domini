import DoMini from "../base";

DoMini.fn.val = function(v) {
    let el = this.get(0);
    if ( el != null ) {
        if (arguments.length == 1) {
            if ( el.type == 'select-multiple' ) {
                v = typeof v === 'string' ? v.split(',') : v;
                for ( let i = 0, l = el.options.length, o; i < l; i++ ) {
                    o = el.options[i];
                    o.selected = v.indexOf(o.value) != -1;
                }
            } else {
                el.value = v;
            }
        } else {
            if ( el.type == 'select-multiple' ) {
                return Array.prototype.map.call(el.selectedOptions, function(x){ return x.value });
            } else {
                return el.value;
            }
        }
    }
    return this;
};

DoMini.fn.attr = function (a, v) {
    let ret, args = arguments, _this = this;
    this.forEach(function(el) {
        if ( args.length == 2 ) {
            el.setAttribute(a, v);
            ret = _this;
        } else {
            if ( typeof a === 'object' ) {
                Object.keys(a).forEach(function(k){
                    el.setAttribute(k, a[k]);
                });
            } else {
                ret = el.getAttribute(a);
            }
        }
    });
    return ret;
};

DoMini.fn.removeAttr = function(a) {
    this.forEach(function(el) {
        el.removeAttribute(a);
    });
    return this;
};

DoMini.fn.prop = function(a, v) {
    let ret, args = arguments;
    this.forEach(function(el) {
        if ( args.length == 2 ) {
            el[a] = v;
        } else {
            ret = typeof el[a] != "undefined" ? el[a] : null;
        }
    });
    if ( args.length == 2 ) {
        return this;
    } else {
        return ret;
    }
};

DoMini.fn.data = function(d, v) {
    const s = d.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
    if ( arguments.length == 2 ) {
        this.forEach((el) => {
            if ( el != null ) {
                el.dataset[s] = v;
            }
        });
        return this;
    } else {
        let el = this.get(0);
        return el != null & typeof el.dataset[s] == "undefined" ? '' : el.dataset[s];
    }
};

DoMini.fn.html = function(v) {
    if ( arguments.length == 1 ) {
        this.forEach((el)=>{
            el.innerHTML = v;   
        });
        return this;
    } else {
        let el = this.get(0);
        return el == null ? '' : el.innerHTML;
    }
};

DoMini.fn.text = function(v) {
    if ( arguments.length == 1 ) {
        this.forEach((el)=>{
            el.textContent = v;   
        });
        return this;
    } else {
        let el = this.get(0);
        return el == null ? '' : el.textContent;
    }
};

export default DoMini;