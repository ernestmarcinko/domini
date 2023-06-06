QUnit.module("events.js tests", function(hooks) {
    var $ = DoMini,x = 0,
    cb = function(){
        ++x;
    },
    nocb = function(){}; // Exists only for reference, not used
    
    hooks.beforeEach(function() {
        var f = document.getElementById('qunit-fixture');
        x = 0; 
        f.innerHTML = fixture;
    });

    QUnit.test('on("event") regular', function(assert) {  
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

    QUnit.test('on("event") multiple', function(assert) {  
        $("#title").on('click keypress keyup custom_event', cb);

        $("#title").trigger('click').trigger('keyup');
        assert.equal(x, 2, 'multiple trigger 1');

        x = 0;
        //Trigger all
        $("#title")
            .trigger('click').trigger('keypress')
            .trigger('keyup').trigger('custom_event');
        assert.equal(x, 4, 'trigger all of registered');
    
        x = 0;
        // Fake and real trigger
        $("#title").trigger('fake').trigger('keyup');
        assert.equal(x, 1, 'multiple trigger 1');

        x = 0;
        // Remove one and trigger
        $("#title").off('click', cb).trigger('click');
        assert.equal(x, 0, 'remove and trigger same');

        x = 0;
        // Remove two more and trigger
        $("#title").off('keyup', cb).off('keypress');
        $("#title")
            .trigger('click').trigger('keypress')
            .trigger('keyup').trigger('custom_event');
        assert.equal(x, 1, 'one remaining trigger "custom_event"');

        x = 0;
        // Add back all & trigger all
        $("#title").on('click keypress keyup custom_event', cb);
        $("#title")
            .trigger('click').trigger('keypress')
            .trigger('keyup').trigger('custom_event');
        assert.equal(x, 4, 'Trigger all 4 after re-adding');

        x = 0;
        // Try registering multiple times the same, still should
        // only register once for each event.
        $("#title").on('click keypress keyup custom_event', cb);
        $("#title").on('click keypress keyup custom_event', cb);
        $("#title")
            .trigger('click').trigger('keypress')
            .trigger('keyup').trigger('custom_event');
        assert.equal(x, 4, 'Trigger all 4, double register');
    });
});