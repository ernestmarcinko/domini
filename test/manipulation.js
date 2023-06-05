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
        $('#list-container li').on('click keyup', ()=>{});

        // Return the same as the removed
        let source = $('#list-container li');
        let removed = source.remove();

        assert.expect(7);

        assert.equal(removed.length, 3, 'Return the same as the removed');
        assert.equal(source.length, 3, 'Source reference still contains elements');
        assert.equal($('#list-container li').length, 0, 'New selection length = 0');
        assert.deepEqual($('#list-container li'), $(null), 'Selecting the same = DoMini(null)');
        removed.forEach(function(){
            assert.equal(typeof this._domini_events == 'undefined', true, 'Events should be removed');
        });

        // These should not exist
        $('#list-container li').forEach(()=>{
            assert.equal(0, 2);
        });
    });

    QUnit.test('.detach()', function(assert) {
        $('#list-container li').on('click keyup', ()=>{});

        // Return the same as the removed
        let source = $('#list-container li');
        let removed = source.detach();

        assert.expect(7);

        assert.equal(removed.length, 3, 'Return the same as the removed');
        assert.equal(source.length, 3, 'Source reference still contains elements');
        assert.equal($('#list-container li').length, 0, 'New selection length = 0');
        assert.deepEqual($('#list-container li'), $(null), 'Selecting the same = DoMini(null)');
        removed.forEach(function(){
            // Events should still exist
            assert.equal(typeof this._domini_events == 'undefined', false, 'Events should still exist');
        });

        // These should not exist
        $('#list-container li').forEach(()=>{
            assert.equal(0, 2);
        });
    });
});