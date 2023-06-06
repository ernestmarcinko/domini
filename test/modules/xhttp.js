QUnit.module("xhttp.js tests", function(hooks) {
    var $ = DoMini;
    hooks.beforeEach(function() {
        var f = document.getElementById('qunit-fixture');
        f.innerHTML = fixture;
    });

    QUnit.test('xhttp()', function(assert) {
        const done = assert.async();
        let data = {
            'options': $('form[name=testform]').serialize()
        };
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
});