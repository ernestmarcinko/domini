QUnit.module("data.js tests", function(hooks) {
    var $ = DoMini;
    hooks.beforeEach(function() {
        var f = document.getElementById('qunit-fixture');
        f.innerHTML = fixture;
    });
    QUnit.test('val()', function(assert) {
        assert.equal($().val(), undefined, 'invalid element #1');
        assert.equal($('div').val(), undefined, 'invalid element #2');
        assert.equal($('select[name=single_select]').val(), 'value 4', 'single select value');
        assert.deepEqual($('select[name=multi_select]').val(),
            ['value 1', 'value 2', 'value 4'],
            'multi select value'
        );
    });


    QUnit.test('attr()', function(assert) {
        assert.equal($().attr('id'), undefined, 'invalid element #1');
        assert.equal($().attr('id', 'fakeId'), undefined, 'invalid element #2');
        assert.equal($('#node').attr('id'), 'node', 'ID test');
        assert.equal($('#node').attr('fakeAttr'), undefined, 'non-existing attribute');
        assert.deepEqual($('#node').attr('id', 'nodeChanged'), $('#nodeChanged'), 'Single Attribute set');
        assert.deepEqual($('#list-container li').attr('id', 'yolo'), $('*[id=yolo]'), 'Multiple Attributes set');
        document.querySelectorAll("*[id=yolo]").forEach(function(el, i){
            assert.deepEqual(el,  $('*[id=yolo]').get(i), "Deep check #" + i);
        });
        $('*[id=yolo]').removeAttr('id');
    });

    QUnit.test('prop()', function(assert) {
        assert.equal($().prop('randomProp'), undefined, 'invalid element #1');
        assert.deepEqual($().prop('randomProp', 'propValue'), $(), 'invalid element #2');
        assert.equal($('#node').prop('randomProp'), undefined, 'propValue test');

        $('#node').prop('randomProp', 'propValue');
        assert.deepEqual($('#node').prop('randomProp'), 'propValue', 'Single Property value check');

        $('#list-container li').prop('randomProp', 'yolo');
        assert.deepEqual($('#list-container li').prop('randomProp'), 'yolo', 'Multiple Attributes check');

        document.querySelectorAll("#list-container li").forEach(function(el, i){
            assert.equal(el['randomProp'],  'yolo', "Deep check el #" + i);
            assert.equal($($('#list-container li').get(i)).prop('randomProp'), 'yolo', "Deep check via DoMini #" + i);
        });
    });

    QUnit.test('data()', function(assert) {
        assert.equal($().data('id'), '', 'invalid element #1');
        assert.deepEqual($().data('id', 'fakeDataId'), $(), 'invalid element #2');
        assert.equal($('#node').attr('id'), 'node', 'ID test');
        assert.equal($('#node').attr('fakeAttr'), undefined, 'non-existing attribute');
        assert.deepEqual($('#node').attr('id', 'nodeChanged'), $('#nodeChanged'), 'Single Attribute set');
        assert.deepEqual($('#list-container li').attr('id', 'yolo'), $('*[id=yolo]'), 'Multiple Attributes set');
        document.querySelectorAll("*[id=yolo]").forEach(function(el, i){
            assert.deepEqual(el,  $('*[id=yolo]').get(i), "Deep check #" + i);
        });
    });


    QUnit.test('html()', function(assert) {
        var nodeContent = document.getElementById('node').innerHTML;
        assert.equal($().html(), '', 'invalid element #1');
        assert.equal($('null').html(), '', 'invalid element #2');
        assert.equal($('#node').html(), nodeContent);
        assert.equal($('#nonexistentnode').html(), '');
        assert.notEqual($('#node').html(), '');
    });

    QUnit.test('text()', function(assert) {
        var title = document.getElementById('title').textContent;
        assert.equal($().text(), '', 'invalid element #1');
        assert.equal($('null').text(), '', 'invalid element #2');
        assert.equal(title, $('#title').text());
        assert.equal('', $('#nonexistentnode').text());
        assert.notEqual($('#title').text(), '');
    });
});