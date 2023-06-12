import DoMini from "../base";

DoMini.fn.ajax = function(args) {
    let uuidv4 = function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    let defaults = {
        'url': '',
        'method': 'GET',
        'cors': 'cors', // cors, no-cors
        'data': {},
        'success': null,
        'fail': null,
        'accept': 'text/html',
        'contentType': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    args = this.extend(defaults, args);

    if ( args.cors != 'cors' ) {
        let fn = 'ajax_cb_' + uuidv4().replaceAll('-', '');
        DoMini.fn[fn] = function() {
            args.success.apply(this, arguments);
            delete DoMini.fn[args.data.fn];
        };
        args.data.callback = 'DoMini.fn.' + fn;
        args.data.fn = fn;
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = args.url + '?' + this.serializeObject(args.data);
        script.onload = function(){this.remove();};
        document.body.appendChild(script);
    } else {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if ( args.success != null ) {
                if ( this.readyState == 4 && this.status == 200 ) {
                    args.success(this.responseText);
                }
            }
            if ( args.fail != null ) {
                if ( this.readyState == 4 && this.status >= 400 ) {
                    args.fail(this);
                }
            }
        };

        xhttp.open(args.method.toUpperCase(), args.url, true);
        xhttp.setRequestHeader('Content-type', args.contentType);
        xhttp.setRequestHeader('Accept', args.accept);

        xhttp.send(this.serializeObject(args.data));
        return xhttp;
    }
};

export default DoMini;