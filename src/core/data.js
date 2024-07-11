import DoMini from "../base";

DoMini.fn.val = function(v) {
    let ret;
    if ( arguments.length === 1 ) {
        for ( const el of this ) {
            if ( el.type === 'select-multiple' ) {
                v = typeof v === 'string' ? v.split(',') : v;
                for ( let i = 0, l = el.options.length, o; i < l; i++ ) {
                    o = el.options[i];
                    o.selected = v.indexOf(o.value) !== -1;
                }
            } else {
                el.value = v;
            }
        }
        ret = this;
    } else {
        let el = this.get(0);
        if ( el != null ) {
            if ( el.type === 'select-multiple' ) {
                ret = Array.prototype.map.call(el.selectedOptions, function(x){ return x.value });
            } else {
                ret = el.value;
            }
        }
    }
    return ret;
};

DoMini.fn.attr = function (a, v) {
    let ret;
    for ( const el of this ) {
        if ( arguments.length === 2 ) {
            el.setAttribute(a, v);
            ret = this;
        } else {
            if ( typeof a === 'object' ) {
                Object.keys(a).forEach(function(k){
                    el.setAttribute(k, a[k]);
                });
            } else {
                ret = el.getAttribute(a);
                break;
            }
        }
    }
    return ret;
};

DoMini.fn.removeAttr = function(a) {
    for ( const el of this ) {
        el.removeAttribute(a);
    }
    return this;
};

DoMini.fn.prop = function(a, v) {
    let ret;
    for ( const el of this ) {
        if ( arguments.length === 2 ) {
            el[a] = v;
        } else {
            ret = typeof el[a] != "undefined" ? el[a] : null;
            break;
        }
    }
    if ( arguments.length === 2 ) {
        return this;
    } else {
        return ret;
    }
};

DoMini.fn.data = function(d, v) {
    const s = d.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
    if ( arguments.length === 2 ) {
        for ( const el of this ) {
            if ( el != null ) {
                el.dataset[s] = v;
            }
        }
        return this;
    } else {
        let el = this.get(0);
        return el != null && typeof el.dataset[s] != "undefined" ? el.dataset[s] : '';
    }
};

DoMini.fn.html = function(v) {
    if ( arguments.length === 1 ) {
        for ( const el of this ) {
            el.innerHTML = v;   
        }
        return this;
    } else {
        let el = this.get(0);
        return el == null ? '' : el.innerHTML;
    }
};

DoMini.fn.text = function(v) {
    if ( arguments.length === 1 ) {
        for ( const el of this ) {
            el.textContent = v;   
        }
        return this;
    } else {
        let el = this.get(0);
        return el == null ? '' : el.textContent;
    }
};

export default DoMini;