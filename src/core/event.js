import DoMini from "../base";

DoMini.fn.on = function() {
    let args = arguments,
        func = function(args, e) {
            let $el;
            if ( e.type == 'mouseenter' || e.type == 'mouseleave' || e.type == 'mouseover' ) {
                let el = document.elementFromPoint(e.clientX, e.clientY);
                if ( !el.matches(args[1]) ) {
                    // noinspection StatementWithEmptyBodyJS
                    while ((el = el.parentElement) && !el.matches(args[1])) ;
                }
                if ( el != null ) {
                    $el = DoMini(el);
                }
            } else {
                $el = DoMini(e.target).closest(args[1]);
            }
            if (
                $el != null &&
                $el.closest(this).length > 0
            ){
                let argd = [];
                argd.push(e);
                if ( typeof args[4] != 'undefined' ) {
                    for (let i=4; i<args.length; i++) {
                        argd.push(args[i]);
                    }
                }
                args[2].apply($el.get(0), argd);
            }
        };
    let events = args[0].split(' ');
    for (let i=0;i<events.length;i++) {
        let type = events[i];
        if ( typeof args[1] == "string" ) {
            this.forEach(function(el){
                if ( !DoMini._fn.hasEventListener(el, type, args[2]) ) {
                    let f = func.bind(el, args);
                    el.addEventListener(type, f, args[3]);
                    // Store the trigger in the selected elements, not the parent node
                    el._domini_events = typeof el._domini_events == "undefined" ? [] : el._domini_events;
                    el._domini_events.push({
                        'type': type,
                        'selector': args[1],
                        'func': f,  // The bound function called by the event listener
                        'trigger': args[2], // The function within the bound function, used in this.trigger(..)
                        'args': args[3]
                    });
                }
            });
        } else {
            for (let i=0;i<events.length;i++) {
                let type = events[i];
                this.forEach(function (el) {
                    if ( !DoMini._fn.hasEventListener(el, type, args[1]) ) {
                        el.addEventListener(type, args[1], args[2]);
                        el._domini_events = typeof el._domini_events == "undefined" ? [] : el._domini_events;
                        el._domini_events.push({
                            'type': type,
                            'func': args[1],
                            'trigger': args[1],
                            'args': args[2]
                        });
                    }
                });
            }
        }
    }
    return this;
};

DoMini.fn.off = function(listen, callback) {
    this.forEach(function (el) {
        if ( typeof el._domini_events != "undefined" && el._domini_events.length > 0 ) {
            if ( typeof listen === 'undefined' ) {
                let cb;
                while (cb = el._domini_events.pop()) {
                    el.removeEventListener(cb.type, cb.func, cb.args);
                }
                el._domini_events = [];
            } else {
                listen.split(' ').forEach(function(type){
                    let cb;
                    let remains = [];
                    while (cb = el._domini_events.pop()) {
                        if ( 
                            cb.type == type &&
                            ( 
                                typeof callback == "undefined" ||
                                cb.trigger == callback
                            )
                        ) {
                            el.removeEventListener(type, cb.func, cb.args);
                        } else {
                            remains.push(cb);
                        }
                    }
                    el._domini_events = remains;
                });
            }
        }
    });
    return this;
};

DoMini.fn.offForced = function(){
    let _this = this;
    this.forEach(function(el, i){
        let ne = el.cloneNode(true);
        el.parentNode.replaceChild(ne, el);
        _this[i] = ne;
    });
    return this;
};

DoMini.fn.trigger = function(type, args, native ,jquery) {
    native = native || false;
    jquery = jquery || false;
    this.forEach(function(el){
        let triggered = false;
        // noinspection JSUnresolvedVariable,JSUnresolvedFunction
        if (
            jquery &&
            typeof jQuery != "undefined" &&
            typeof jQuery._data != 'undefined' &&
            typeof jQuery._data(el, 'events') != 'undefined' &&
            typeof jQuery._data(el, 'events')[type] != 'undefined'
        ) {
            // noinspection JSUnresolvedVariable,JSUnresolvedFunction
            jQuery(el).trigger(type, args);
            triggered = true;
        }
        if ( !triggered && native ) {
            // Native event handler
            let event = new Event(type);
            event.detail = args;
            el.dispatchEvent(event);
        }

        if (typeof el._domini_events != "undefined") {
            // Case 1, regularly attached
            el._domini_events.forEach(function(data){
                if ( data.type == type ) {
                    let event = new Event(type);
                    data.trigger.apply(el, [event].concat(args));
                }
            });
        } else {
            // Case 2, attached to a selector: $elem.on('click', 'selector'...
            let found = false, p = el;
            // Find parents, where event infomration is stored
            while ( true ) {
                p = p.parentElement;
                if ( p == null ) {
                    break;
                }
                if (typeof p._domini_events != "undefined") {
                    p._domini_events.forEach(function(data){
                        if ( typeof data.selector !== "undefined" ) {
                            let targets = DoMini(p).find(data.selector);
                            if (
                                targets.length > 0 &&
                                targets.get().indexOf(el) >=0 &&
                                data.type == type
                            ) {
                                let event = new Event(type);
                                data.trigger.apply(el, [event].concat(args));
                                found = true;
                            }
                        }
                    });
                }
                if ( found ) {
                    break;
                }
            }
        }
    });
    return this;
};

export default DoMini;