QUnit.module("data.js tests", function(hooks) {
    var $ = DoMini;
    hooks.beforeEach(function() {
        var f = document.getElementById('qunit-fixture');
        f.innerHTML = fixture;
    });

    QUnit.test('html()', function(assert) {    
        assert.expect(3);
        var nodeContent = document.getElementById('node').innerHTML;
        assert.equal($('#node').html(), nodeContent);
        assert.equal($('#nonexistentnode').html(), '');
        assert.notEqual($('#node').html(), '');
    });

    QUnit.test('text()', function(assert) {    
        assert.expect(3);
        var title = document.getElementById('title').textContent;
        assert.equal(title, $('#title').text());
        assert.equal('', $('#nonexistentnode').text());
        assert.notEqual($('#title').text(), '');
    });
});