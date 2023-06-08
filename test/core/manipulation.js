QUnit.module("manipulation.js tests", function(hooks) {
    var $ = DoMini;
    hooks.beforeEach(function() {
        var f = document.getElementById('qunit-fixture');
        f.innerHTML = fixture;
    });

    QUnit.test('.clear()', function(assert) {
        //$('#list-container-two li').text('same');
        $('#list-container-two li').on('click keyup', ()=>{});
        assert.equal(
            $('#list-container-two li:first-child').length, 1
        );
        assert.equal(
            typeof $('#list-container-two li:first-child').get(0)._domini_events != 'undefined',
            true
        );
        assert.equal(
            $('#list-container-two li:first-child').clear().length, 1
        );
        assert.equal(
            $('#list-container-two li:first-child').length, 1
        );
        assert.equal(
            typeof $('#list-container-two li:first-child').get(0)._domini_events == 'undefined',
            true
        );
    });

    QUnit.test('.clone()', function(assert) {  
        let source = $(null);
        assert.deepEqual(source.clone(), source);

        assert.deepEqual($(null).clone(), $(null));
        assert.deepEqual($({}).clone(), $(null));
        assert.deepEqual($(undefined).clone(), $(null));

        assert.equal(
            $('#title').clone().get(0).outerHTML,
            $('#title').get(0).outerHTML
        );
        assert.notEqual(
            $('#title').clone().get(0),
            $('#title').get(0)
        );

        // 3 clones
        const listClones = $('#list-container li').clone();
        assert.equal(listClones.length, 3, "3 li cloned");

        // First two only
        const listClones2 = $('#list-container li:nth-child(-n+2)').clone();
        assert.equal(listClones2.length, 2, "2 li cloned");
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

        assert.expect(13);

        assert.equal($(null).detach().length, 0, 'null detach');
        assert.equal($(undefined).detach().length, 0, 'undefined detach');
        
        const element = document.getElementById("list-item-2-2");
        const childDetached = $('#list-container-two').detach(".list-item");
        assert.equal(childDetached.length, 3);
        assert.deepEqual(childDetached.get(1), element);
        assert.notDeepEqual(childDetached.get(0), element);
        assert.notDeepEqual(childDetached.get(2), element);

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

    QUnit.test('.prepend()', function(assert) {
        $('#list-container li').on('click keyup', ()=>{});

        // Return the same as the removed
        let source = $('#list-container-two li.list-item');
        let detached = source.detach();
        
        assert.deepEqual($(null).prepend(detached), $(null));
        assert.equal($(null).prepend(detached).length, 0);

        $('#list-container ul').prepend(detached);
        assert.equal($('#list-container li').length, 6, "List length after prepend");
        assert.true($('#list-container li').hasClass('list-item'), "First item");
        assert.true($('#list-container li').get(1).id=="list-item-2-2", "Second item");
        assert.false($($('#list-container li').get(3)).hasClass('list-item'), "Fourth item");

        // Append multiple times should not change anything
        $('#list-container ul').prepend(detached);
        $('#list-container ul').prepend(detached);
        $('#list-container ul').prepend(detached);
        assert.equal($('#list-container li').length, 6, "After adding multiple times");
        assert.true($('#list-container li').hasClass('list-item'), "First item");
        assert.true($('#list-container li').get(1).id=="list-item-2-2", "Second item");
        assert.false($($('#list-container li').get(3)).hasClass('list-item'), "Fourth item");

        $('#list-container ul').prepend('.list-itemx');
        assert.equal($('#list-container li').length, 7, "Prepend with selector");

        // Two items left still
        $('#list-container ul').prepend('#list-container-two li');
        assert.equal($('#list-container li').length, 9, 'Rest prepended');
    });

    QUnit.test('.append()', function(assert) {
        $('#list-container li').on('click keyup', ()=>{});

        // Return the same as the removed
        let source = $('#list-container-two li.list-item');
        let detached = source.detach();
        
        assert.deepEqual($(null).append(detached), $(null));
        assert.equal($(null).append(detached).length, 0);

        $('#list-container ul').append(detached);
        assert.equal($('#list-container li').length, 6, "List length after prepend");
        assert.false($('#list-container li').hasClass('list-item'), "First item");
        assert.true($('#list-container li').get(4).id=="list-item-2-2", "Fourth item");
        assert.false($($('#list-container li').get(1)).hasClass('list-item'), "Second item");

        // Append multiple times should not change anything
        $('#list-container ul').append(detached);
        $('#list-container ul').append(detached);
        $('#list-container ul').append(detached);
        assert.equal($('#list-container li').length, 6, "After adding multiple times");
        assert.false($('#list-container li').hasClass('list-item'), "First item");
        assert.true($('#list-container li').get(4).id=="list-item-2-2", "Second item");
        assert.true($($('#list-container li').get(3)).hasClass('list-item'), "Fourth item");

        $('#list-container ul').append('.list-itemx');
        assert.equal($('#list-container li').length, 7, "Append with selector");

        // Two items left still
        $('#list-container ul').append('#list-container-two li');
        assert.equal($('#list-container li').length, 9, 'Rest appended');
    });
});