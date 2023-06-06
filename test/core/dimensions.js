QUnit.module("dimensions.js tests", function(hooks) {
    var $ = DoMini, baseOffset;
    hooks.beforeEach(function() {
        var f = document.getElementById('qunit-fixture');
        f.innerHTML = fixture;
        baseOffset = document.getElementById('qunit-fixture').getBoundingClientRect();
    });

    QUnit.test('position()', function(assert) {
        assert.deepEqual($('#imaginaryelement').position(), {'top': 0, 'left': 0});

        assert.equal($('#absolute').position().top, 30, '#absolute top: 30px');
        assert.equal($('#absolute').position().left, 40, '#absolute left: 40px');

        assert.equal($('#absolute').position().top, 30, '#absolute top: 30px');
        assert.equal($('#absolute').position().left, 40, '#absolute left: 40px');

        // Margins have to be added
        assert.equal($('#fixed').position().top, 333 + 10, '#fixed top: 333px');
        assert.equal($('#fixed').position().left, 444 + 40, '#fixed left: 444px');
    });

    QUnit.test('offset()', function(assert) {
        assert.deepEqual($('#imaginaryelement').offset(), {'top': 0, 'left': 0});

        assert.equal($('#absolute').offset().top - baseOffset.top, 30, '#absolute offset top: 30px');
        assert.equal($('#absolute').offset().left - baseOffset.left, 40, '#absolute offset left: 40px');
    });

    QUnit.test('width() and variants', function(assert) {
        assert.equal($('#imaginaryelement').width(), 0);
        assert.equal($('#imaginaryelement').height(), 0);
        assert.equal($('#imaginaryelement').outerWidth(), 0);
        assert.equal($('#imaginaryelement').outerHeight(), 0);
        assert.equal($('#imaginaryelement').noPaddingWidth(), 0);
        assert.equal($('#imaginaryelement').noPaddingHeight(), 0);

        assert.equal($('#title').width(), baseOffset.width);

        assert.equal($('#fixed').width(), 220);
        assert.equal($('#fixed').height(), 120);

        assert.equal($('#fixed').noPaddingWidth(), 200);
        assert.equal($('#fixed').noPaddingHeight(), 100);

        assert.equal($('#absolute').width(), window.innerWidth);
        assert.equal($('#absolute').height(), window.innerHeight);
    });
});