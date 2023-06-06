import DoMini from "../base";

DoMini.fn.is = function(s){
    let is = false;
    for ( const el of this ) {
        if ( el.matches(s) ) {
            is = true;
            break;
        }
    }
    return is;
};

DoMini.fn.parent = function (s) {
    let elements = [];
    for ( const el of this ) {
        let parent = el.parentElement;
        if ( typeof s == 'string' ) {
            if ( parent != null && !parent.matches(s) ) {
                parent = null;
            }
        }
        elements.push(parent);
    }
    return DoMini().add(elements);
};

DoMini.fn.copy = function(source, deep) {
    let o, prop, type;
    if (typeof source != 'object' || source === null) {
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
    return DoMini(this[0]);
};

DoMini.fn.last = function () {
    return DoMini(this[this.length-1]);
};

DoMini.fn.prev = function (s) {
    let elements = [];
    
    for ( const el of this ) {
        let prev;
        if ( typeof s == "string" ) {
            prev = el.previousElementSibling;
            while ( prev != null ) {
                if ( prev.matches(s) ) {
                    elements.push(prev);
                    break;
                }
                prev = prev.previousElementSibling;
            }
        } else {
            elements.push(el.previousElementSibling);
        }
    }

    return DoMini(null).add(elements);
};

DoMini.fn.next = function (s) {
    let elements = [];

    for ( const el of this ) {
        let next;
        if ( typeof s == "string" ) {
            next = el.nextElementSibling;
            while ( next != null ) {
                if ( next.matches(s) ) {
                    if ( !elements.includes(next) ) {
                        elements.push(next);
                    }
                    break;
                }
                next = next.nextElementSibling;
            }
        } else {
            elements.push(el.nextElementSibling);
        }
    }
    
    return DoMini(null).add(elements);
};

DoMini.fn.closest = function (s) {
    let elements = [];
    for ( let el of this ) {
        if ( typeof s === "string" && s !== '' ) {
            while ((el = el.parentElement) && !el.matches(s)) ;
            if ( !elements.includes(el) ) {
                elements.push(el);
            }
        } else {
            s = s instanceof DoMini ? s.get(0) : s;
            if ( s instanceof HTMLElement ) {
                while ((el = el.parentElement) && el !== s) ;
            } else {
                el = null;
            }
            if ( !elements.includes(el) ) {
                elements.push(el);
            }
        }
    }
    return DoMini().add(elements);
};

DoMini.fn.add = function( el ) {
    let elements = DoMini._fn.HTMLElementArrayFromAny(el);
    for (const element of elements) {
        if ( !Array.from(this).includes(element) ) {
            this.push(element);
        }
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
            newDomini.add(found);
        }
    }

    return newDomini;
};

export default DoMini;