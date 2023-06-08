import DoMini from "../base";

DoMini.fn.animate = function(props, duration, easing) {
    duration = duration || 200;
    easing = easing || "easeInOutQuad";
    for (const el of this) {
        let frames, currentFrame = 0, fps = 60, multiplier, origProps = {}, propsDiff = {},
            handlers, handler, easingFn;
        handlers = this.prop('_domini_animations');
        handlers = handlers == null ? [] : handlers;

        if ( props === false ) {
            handlers.forEach(function(handler){
                // noinspection JSCheckFunctionSignatures
                clearInterval(handler);
            });
        } else {
            easingFn = DoMini.fn.animate.easing[easing] ?? DoMini.fn.animate.easing.easeInOutQuad;
            Object.keys(props).forEach(function(prop){
                if ( prop.indexOf('scroll') > -1 ) {
                    origProps[prop] = el[prop];
                    propsDiff[prop] = props[prop] - origProps[prop];
                } else {
                    origProps[prop] = parseInt( window.getComputedStyle(el)[prop] );
                    propsDiff[prop] = props[prop] - origProps[prop];
                }
            });

            function move() {
                currentFrame++;
                if ( currentFrame > frames ) {
                    clearInterval(handler);
                    return;
                }
                multiplier = easingFn(currentFrame / frames);
                Object.keys(propsDiff).forEach(function(prop){
                    if ( prop.indexOf('scroll') > -1 ) {
                        el[prop] = origProps[prop] + propsDiff[prop] * multiplier;
                    } else {
                        el.style[prop] =
                            origProps[prop] + propsDiff[prop] * multiplier + 'px';
                    }
                });
            }

            frames = duration / 1000 * fps;

            handler = setInterval(move, 1000 / fps);
            handlers.push(handler);
            this.prop('_domini_animations', handlers);
        }
    }
    return this;
};

DoMini.fn.animate.easing = {
    "linear": function(x) { return x; },
    "easeInOutQuad": function(x) {
        return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    },
    "easeOutQuad": function(x) {
        return 1 - (1 - x) * (1 - x);
    }
};

export default DoMini;