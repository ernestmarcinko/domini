import DoMini from "../base";

// Inspired by: https://github.com/zeusdeux/isInViewport
DoMini.fn.inViewPort = function (tolerance, viewport) {
    "use strict";
    let element = this.get(0), vw, vh;
    if (element == null)
        return false;
    tolerance = typeof tolerance == 'undefined' ? 0 : tolerance;
    viewport = typeof viewport == 'undefined' ? window :
        ( typeof viewport == 'string' ? document.querySelector(viewport) : viewport );
    let ref = element.getBoundingClientRect(),
        top = ref.top, bottom = ref.bottom,
        left = ref.left, right = ref.right,
        invisible = false;

    if (viewport == null) {
        viewport = window;
    }
    if (viewport === window) {
        vw = window.innerWidth || 0;
        vh = window.innerHeight || 0;
    } else {
        vw = viewport.clientWidth
        vh = viewport.clientHeight
        let vr = viewport.getBoundingClientRect();

        // recalculate these relative to viewport
        top = top - vr.top;
        bottom = bottom - vr.top;
        left = left - vr.left;
        right = right - vr.left;
    }

    tolerance = ~~Math.round(parseFloat(tolerance));
    if (right <= 0 || left >= vw) {
        return invisible
    }

    // if the element is bound to some tolerance
    invisible = tolerance > 0 ? top >= tolerance && bottom < (vh - tolerance) :
        ( bottom > 0 && top <= (vh - tolerance) ) |
        ( top <= 0 && bottom > tolerance);

    return invisible;
};

export default DoMini;