QUnit.module("basic.js tests", function(hooks) {
    var $ = DoMini;
    hooks.beforeEach(function() {
        var f = document.getElementById('qunit-fixture');
        f.innerHTML = fixture;
    });

    QUnit.test('get()', function(assert) {
        assert.equal($('#more-ps p').get().length, 3, "$('#more-ps p').get().length = 3");
        assert.equal($('#madeupnodeID p').get().length, 0, "$('#madeupnodeID p').get().length = 0");

        assert.equal(
            $('#more-ps p').get(0), document.querySelector('#more-ps p'),
            "$('#more-ps p').get(0) = document.querySelector('#more-ps p')"
        );
        assert.equal($('#more-ps p').get(3), null, "$('#more-ps p').get(3) = null");

        assert.equal($('#madeupnodeID p').get(0), null, "$('#madeupnodeID p').get(3) = null");
        assert.equal($('#madeupnodeID p').get(3), null, "$('#madeupnodeID p').get(3) = null");
    });

    QUnit.test('forEach()', function(assert) { 
        assert.expect(6);

        $('#more-ps p').forEach(function(n, i, arr){
            assert.equal(n.nodeName, 'P', 'NodeName in forEach(#more-ps p)');
            if ( i == 0 ) {
                assert.deepEqual(arr, $('#more-ps p').get(), 'forEach(#more-ps p) = arr');
                assert.equal(n.className, 'pClass', 'class name comp forEach(#more-ps p)');
            }
            if ( i == 1 ) {
                assert.equal(n.id, 'pId', 'Node ID[1] = "pId" in forEach(#more-ps p)');
            }
        });

        // Empty selection
        $('#madeupnodeID p').forEach(function(n, i, arr){
            // This should never execute
            assert.equal(i, i);
        });
    });
});