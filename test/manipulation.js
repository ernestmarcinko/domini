QUnit.module("events.js tests", function(hooks) {
    var $ = DoMini;
    hooks.beforeEach(function() {
        var f = document.getElementById('qunit-fixture');
        f.innerHTML = fixture;
    });

    QUnit.test('.clone()', function(assert) {  
        let source = $(null);
        assert.equal(source.clone(), source);

        assert.deepEqual($(null).clone(), $(null));
        assert.deepEqual($({}).clone(), $(null));
        assert.deepEqual($([][0]).clone(), $(null));

        assert.equal(
            $('#title').clone().get(0).outerHTML,
            $('#title').get(0).outerHTML
        );
        assert.notEqual(
            $('#title').clone().get(0),
            $('#title').get(0)
        );
    });

    QUnit.test('.remove()', function(assert) {
        // Return the same as the removed
        let source = $('#list-container li');
        assert.deepEqual(source.remove(), source, 'Return the same as the removed');
    
        // @todo
    });
});