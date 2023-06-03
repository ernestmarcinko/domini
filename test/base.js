QUnit.module("base.js tests", function(hooks) {
    var $ = DoMini;
    hooks.beforeEach(function() {
        var f = document.getElementById('qunit-fixture');
        f.innerHTML = fixture;
    });

    QUnit.test('DoMini()', function(assert) {   
        let $title = $('#title'),
            title = ocument.getElementById('title');
            
        assert.expect(34);

        assert.equal(typeof DoMini, 'function'); 
        assert.equal(typeof $title, 'Object');

        assert.equal($(null).length, 0);
        assert.equal($([]).length, 0);
        assert.equal($([][0]).length, 0);


        assert.true($title instanceof DoMini); 
        assert.true($title instanceof Object);
        assert.equal($title.length, 1);

        assert.true($($title) instanceof DoMini); 
        assert.true($($title) instanceof Object);
        assert.equal($($title).length, 1);

        assert.true($(title) instanceof DoMini);
        assert.true($(title) instanceof Object);
        assert.equal($(title).length, 1);

        assert.true(typeof $title[Symbol.iterator] === 'function');
        assert.true(typeof $(title)[Symbol.iterator] === 'function');
        assert.true(typeof $($title)[Symbol.iterator] === 'function');

        assert.true(typeof $title.push === 'function');
        assert.true(typeof $(title).push === 'function');
        assert.true(typeof $($title).push === 'function');

        assert.true(typeof $title.sort === 'function');
        assert.true(typeof $(title).sort === 'function');
        assert.true(typeof $($title).sort === 'function');

        assert.true(typeof $title.splice === 'function');
        assert.true(typeof $(title).splice === 'function');
        assert.true(typeof $($title).splice === 'function');
        

        assert.equal($('#madeupnodeID').length, 0);
        assert.equal($($('#madeupnodeID')).length, 0);

        assert.equal($('#paragraphs p').length, 3);
        assert.equal($($('#paragraphs p')).length, 3);

        assert.equal($('p', $('#paragraphs')).length, 3);
        assert.equal($($('p', $('#paragraphs'))).length, 3);
        assert.equal($('h1', $('#paragraphs')).length, 0);
        assert.equal($($('h1', $('#paragraphs'))).length, 0);
    });
});