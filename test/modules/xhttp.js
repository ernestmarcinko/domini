QUnit.module("module: xhttp.js tests", function(hooks) {
    var $ = DoMini;
    hooks.beforeEach(function() {
        var f = document.getElementById('qunit-fixture');
        f.innerHTML = fixture;
    });

    QUnit.test('xhttp() cors', function(assert) {
        const done = assert.async();
        let data = {
            'options': $('form[name=testform]').serialize()
        };
        // Cors
        $.fn.ajax({
            "url": "/request",
            "method": "POST",
            "data": data,
            "success": function(args){
                assert.deepEqual(JSON.parse(args), data);
                done();
            }
        });
    });

    QUnit.test('xhttp() no-cors', function(assert) {
        const done = assert.async();
        // No-Cors
        DoMini.fn.ajax({
            url: 'https://clients1.google.com/complete/search',
            cors: 'no-cors',
            data: {
                q: 'us',
                hl: 'en',
                nolabels: 't',
                client: 'hp',
                ds: ''
            },
            success: function (data) {
                if (data[1].length > 0) {
                    let response = data[1][0][0].replace(/(<([^>]+)>)/ig, "");
                    response = DoMini('<textarea />').html(response).text();
                    console.log(response);
                    assert.notEqual(response, '');
                    assert.notEqual(response, 'us');
                    done();
                }
            }
        });
    });
});