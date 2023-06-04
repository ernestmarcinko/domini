QUnit.module("base.js tests", function(hooks) {
    var $ = DoMini;
    hooks.beforeEach(function() {
        var f = document.getElementById('qunit-fixture');
        f.innerHTML = fixture;
    });

    QUnit.test('on("event") regular', function(assert) {   
        let x = 0;
        let cb = function(){
            ++x;
        };
        let nocb = function(){};
        
        $("#title").on('click', cb);

        $("#title").trigger('click');
        assert.equal(x, 1, 'click trigger 1');
        $("#title").trigger('click');
        assert.equal(x, 2, 'click trigger 2');
        $("#title").off('keypress').trigger('click');
        assert.equal(x, 3, 'wrong event trigger');
        $("#title").off('click', nocb).trigger('click');
        assert.equal(x, 4, 'wrong callback off() trigger');
        $("#title").off('click', cb).trigger('click');
        assert.equal(x, 4, 'correct callback off() trigger');
        $("#title").trigger('click');
        assert.equal(x, 4, 'final click trigger');
    });

    QUnit.test('on("event") dynamic', function(assert) {   
        let x = 0;
        let cb = function(){
            ++x;
        };
        let nocb = function(){};
        
        // The list has 3 items
        $("#list-container").on('click', 'li', cb);

        // Trigger will execute 3 times, x=3
        $("#list-container li").trigger('click');
        assert.equal(x, 3, 'click trigger 1');

        // Add 1 more list item
        $("#list-container ul").append(
            $("#list-container li:last-child").clone()
        );

        // Trigger will execute 4 times, x=4
        x = 0;
        $("#list-container li").trigger('click');
        assert.equal(x, 4, 'click trigger 2');

        // Fake callback removal
        x = 0;
        $("#list-container ").off('click', nocb).trigger('click');
        assert.equal(x, 1, 'Fake callback removal');

        // Real callback removal
        x = 0;
        $("#list-container ").off('click', cb).trigger('click');
        assert.equal(x, 0, 'Real callback removal');

        // All callback removal
        x = 0;
        $("#list-container ").on('click', cb).off('click').trigger('click');
        assert.equal(x, 0, 'All callback removal');
    });
});