QUnit.module("module: serialize.js tests", function(hooks) {
    var $ = DoMini;
    hooks.beforeEach(function() {
        var f = document.getElementById('qunit-fixture');
        f.innerHTML = fixture;
    });

    QUnit.test('.serialize()', function(assert) {
        assert.equal($().serialize(), '', 'on empty');
        assert.equal($(null).serialize(), '', 'on null');
        assert.equal($({}).serialize(), '', 'on empty object');
        assert.equal($(undefined).serialize(), '', 'on undefined');
        assert.equal($('div').serialize(), '', 'on wrong element');

        assert.equal(
            $('form[name=testform]').serialize(),
            "textareabox=This%20is%20the%20textarea%0A%20%20%20%20content!&radiobox[radio2][]=on&multibox[checkbox4][]=on&multibox[checkbox2][]=on&multibox[checkbox1][]=on&multi_select=value%204&multi_select=value%202&multi_select=value%201&single_select=value%204&single_box_checked=on&pass=password123&hiddenbox=Hidden%20value!&email=test%40test.com&name=My%20Name",
            "Form test"
        );
    });
});