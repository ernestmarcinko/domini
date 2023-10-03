QUnit.module("base.js tests", function(hooks) {
    var $ = DoMini;
    hooks.beforeEach(function() {
        var f = document.getElementById('qunit-fixture');
        f.innerHTML = fixture;
    });

    QUnit.test('DoMini()', function(assert) {   
        let $title = $('#title'),
            title = document.getElementById('title');
            
        assert.expect(42);

        assert.equal(typeof DoMini, 'function', "typeof DoMini = 'function'"); 
        assert.equal(typeof $title, 'object', "typeof $('#title') = 'object'");

        assert.equal($().length, 0, "$().length = 0");
        assert.equal($(null).length, 0, "$(null).length = 0");
        assert.equal($([]).length, 0, "$([]).length = 0");
        assert.equal($(undefined).length, 0, "$(undefined).length = 0");

        assert.equal($(document).length, 1, "$(document).length = 1");
        assert.equal($(window).length, 1, "$(window).length = 1");


        assert.true($title instanceof DoMini, "$('#title') instanceof DoMini"); 
        assert.true($title instanceof Object, "$('#title') instanceof Object");
        assert.equal($title.length, 1, "$('#title').length == 1");

        assert.true($($title) instanceof DoMini, "$($('#title')) instanceof DoMini"); 
        assert.true($($title) instanceof Object, "$($('#title')) instanceof Object");
        assert.equal($($title).length, 1, "$($('#title')).length == 1");

        assert.true($(title) instanceof DoMini, "$(title) instanceof DoMini");
        assert.true($(title) instanceof Object, "$(title) instanceof Object");
        assert.equal($(title).length, 1, "$(title).length == 1");

        assert.true(typeof $title[Symbol.iterator] === 'function', "Symbol.iterator exist in $title");
        assert.true(typeof $(title)[Symbol.iterator] === 'function', "Symbol.iterator exist in $(title)");
        assert.true(typeof $($title)[Symbol.iterator] === 'function', "Symbol.iterator exist in $($title)");

        assert.true(typeof $title.push === 'function', ".push() exist in $title");
        assert.true(typeof $(title).push === 'function', ".push() exist in $(title)");
        assert.true(typeof $($title).push === 'function', ".push() exist in $($title)");

        assert.true(typeof $title.sort === 'function', ".sort() exist in $title");
        assert.true(typeof $(title).sort === 'function', ".sort() exist in $(title)");
        assert.true(typeof $($title).sort === 'function', ".sort() exist in $($title)");

        assert.true(typeof $title.splice === 'function', ".splice() exist in $title");
        assert.true(typeof $(title).splice === 'function', ".splice() exist in $(title)");
        assert.true(typeof $($title).splice === 'function', ".splice() exist in $($title)");
        

        assert.equal($('#madeupnodeID').length, 0, "$('#madeupnodeID').length == 0");
        assert.equal($($('#madeupnodeID')).length, 0, "$($('#madeupnodeID')).length == 0");

        assert.equal($('#paragraphs p').length, 3, "$('#paragraphs p').length == 3");
        assert.equal($($('#paragraphs p')).length, 3,"$($('#paragraphs p')).length == 3");

        assert.equal($('p', $('#paragraphs')).length, 3);
        assert.equal($($('p', $('#paragraphs'))).length, 3, '$($(n)) = $(n);');
        let ps = $('p', $('#paragraphs'));
        assert.equal($(ps), ps, "$('#paragraphs') = $($('#paragraphs'))");
        assert.equal($('h1', $('#paragraphs')).length, 0, "$('h1', $('#paragraphs')).length == 0");
        assert.equal($($('h1', $('#paragraphs'))).length, 0, "$($('h1', $('#paragraphs'))).length == 0");

        assert.equal($('p', $('#paragraphs')).length, 3, "$('p', $('#paragraphs')).length == 3");
        assert.equal($($('p', $('#paragraphs'))).length, 3, "$($('p', $('#paragraphs'))).length == 3");

        assert.equal($('p', '#paragraphs').length, 3, "$('p', '#paragraphs').length == 3");
        assert.equal(
            $('p', document.getElementById('paragraphs')).length, 3, 
            "$('p', document.getElementById('paragraphs')).length == 3"
        );
    });
});