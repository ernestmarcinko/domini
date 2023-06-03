QUnit.module("basic.js tests", function(hooks) {
    var $ = DoMini;
    hooks.beforeEach(function() {
        var f = document.getElementById('qunit-fixture');
        f.innerHTML = fixture;
    });

    QUnit.test('forEach()', function(assert) { 
        assert.expect(4);

        assert.equal($('#more-ps p').get().length, 3);
        assert.equal($('#madeupnodeID p').get().length, 0);

        assert.equal($('#more-ps p').get(0), document.querySelector('#more-ps p'));
        assert.equal($('#more-ps p').get(3), null);

        assert.equal($('#madeupnodeID p').get(0), null);
        assert.equal($('#madeupnodeID p').get(3), null);

        $('#more-ps p').forEach(function(n, i, arr){
            assert.equal(n.nodeName, 'p');
            if ( i == 0 ) {
                assert.equal(arr, $('#more-ps').get());
                assert.equal(n.class, 'pClass');
            }
            if ( i == 1 ) {
                assert.equal(n.id, 'pId');
            }
        });
        // Empty selection
        $('#madeupnodeID p').forEach(function(n, i, arr){
            // This should never execute
            assert.equal(i, i);
        });
    });
});