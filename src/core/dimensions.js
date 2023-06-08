import DoMini from "../base";

DoMini.fn.position = function() {
    let el = this.get(0);
    if ( el != null ) {
        return {'top': el.offsetTop, 'left': el.offsetLeft};
    } else {
        return {'top': 0, 'left': 0};
    }
};

DoMini.fn.offset = function() {
    let el = this.get(0);
    if ( el != null ) {
        if ( DoMini._fn.hasFixedParent(el) ) {
            return el.getBoundingClientRect();
        } else {
            return DoMini._fn.absolutePosition(el);
        }
    } else {
        return {'top': 0, 'left': 0};
    }
};

DoMini.fn.outerWidth = function(margin) {
    margin = margin || false;
    let el = this.get(0);
    if ( el != null ) {
        return !margin ? parseInt( el.offsetWidth ) :
            (
                parseInt( el.offsetWidth ) +
                parseInt( this.css('marginLeft') ) +
                parseInt( this.css('marginRight') )
            );
    }

    return 0;
};

DoMini.fn.outerHeight = function(margin) {
    margin = margin || false;
    let el = this.get(0);
    if ( el != null ) {
        return !margin ? parseInt( el.offsetHeight ) :
            (
                parseInt( el.offsetHeight ) +
                parseInt( this.css('marginTop') ) +
                parseInt( this.css('marginBottom') )
            );
    }

    return 0;
};

DoMini.fn.noPaddingHeight = function(margin) {
    margin = margin || false;
    if ( this.length > 0 ) {
        return !margin ? parseInt( this.css('height') ) :
            (
                parseInt( this.css('height') ) +
                parseInt( this.css('marginTop') ) +
                parseInt( this.css('marginBottom') )
            );
    }

    return 0;
};

DoMini.fn.noPaddingWidth = function(margin) {
    margin = margin || false;
    if ( this.length > 0 ) {
        return !margin ? parseInt( this.css('width') ) :
            (
                parseInt( this.css('width') ) +
                parseInt( this.css('marginLeft') ) +
                parseInt( this.css('marginRight') )
            );
    }

    return 0;
};

DoMini.fn.innerWidth = function() {
    let el = this.get(0);
    if ( el != null ) {
        let cs = window.getComputedStyle(el);
        return this.outerWidth() - parseFloat(cs.borderLeftWidth) - parseFloat(cs.borderRightWidth);
    }
    return 0;
};

DoMini.fn.innerHeight = function() {
    let el = this.get(0);
    if ( el != null ) {
        let cs = window.getComputedStyle(el);
        return this.outerHeight() - parseFloat(cs.borderTopWidth) - parseFloat(cs.borderBottomtWidth);
    }
    return 0;
};

DoMini.fn.width = function() {
    return this.outerWidth();
};

DoMini.fn.height = function() {
    return this.outerHeight();
};

export default DoMini;