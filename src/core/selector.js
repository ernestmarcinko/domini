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
    if ( el != null ) {
        el = el.parentElement;
        if ( typeof s == 'string' && el != null ) {
            if ( !el.matches(s) ) {
               el = null;
            }
        }
    }
    return DoMini(el);
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
    this.splice(0, 1);
    return DoMini(this[0]);
};

DoMini.fn.last = function () {
    this.splice(-1, 1);
    return DoMini(this[0]);
};

DoMini.fn.prev = function (s) {
    const el = this.get(0);
    let prev = null;
    
    if ( el != null ) {
        if ( typeof s == "string" ) {
            prev = el.previousElementSibling;
            while ( prev != null ) {
                if ( prev.matches(s) ) {
                    break;
                }
                prev = prev.previousElementSibling;
            }
        } else {
            prev = el.previousElementSibling;
        }
    }

    return DoMini(prev);
};

DoMini.fn.next = function (s) {
    const el = this.get(0);
    let next = null;

    if ( el != null ) {
        if ( typeof s == "string" ) {
            next = el.nextElementSibling;
            while ( next != null ) {
                if ( next.matches(s) ) {
                    break;
                }
                next = next.nextElementSibling;
            }
        } else {
            next = el.nextElementSibling;
        }
    }
    
    return DoMini(next);
};

DoMini.fn.closest = function (s) {
    let el = this.get(0);
    if ( el !== null ) {
        if ( typeof s === "string" && s !== '' ) {
            while ((el = el.parentElement) && !el.matches(s)) ;
        } else {
            s = s instanceof DoMini ? s.get(0) : s;
            if ( s instanceof HTMLElement ) {
                while ((el = el.parentElement) && el !== s) ;
            } else {
                el = null;
            }
        }
    }
    return DoMini(el);
};

DoMini.fn.add = function( el ) {
    let toAdd = [];
    if ( typeof el == 'string' ) {
        toAdd = DoMini(el).get();
    } else if ( el instanceof DoMini ) {
        toAdd = el.get();
    } else if ( el instanceof HTMLElement ) {
        toAdd = [el];
    }
    if ( toAdd.length > 0 ) {
        this.push(...toAdd);
    }
    return this;
};

DoMini.fn.find = function (s) {
    const newDomini = new DoMini();
    if ( typeof s == 'string' ) {
        let found = [];
        this.get().forEach(function(el){
            found = found.concat( Array.from(el.querySelectorAll(s)) );
        });
        if ( found.length > 0 ) {
            newDomini.push(...found);
        }
    }

    return newDomini;
};

export default DoMini;