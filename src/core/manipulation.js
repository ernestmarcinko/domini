import DoMini from "../base";

DoMini.fn.clear = function() {
    this.forEach((el)=>{
        delete el._domini_events;
    });
    return this;
};

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

/**
 * Same as .detach() but this also removes all DoMini related stuff
 */
DoMini.fn.remove = function(selector) {
    return this.detach(selector).off().clear();
};

DoMini.fn.prepend = function(prepend) {
    prepend = DoMini._fn.HTMLElementArrayFromAny(prepend);

    if ( prepend.length > 0 ) {
        this.forEach(function(el){
            prepend.forEach(function(pre){
                el.insertBefore(pre, el.children[0]);
            });
        });
    }

    return this;
};

DoMini.fn.append = function(append) {
    append = DoMini._fn.HTMLElementArrayFromAny(append);
    
    if ( append.length > 0 ) {
        this.forEach(function(el){
            append.forEach(function(a) {
                el.appendChild(a);
            });
        });
    }
    return this;
};

export default DoMini;