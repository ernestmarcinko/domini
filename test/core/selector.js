QUnit.module("selector.js tests", function(hooks) {
    var $ = DoMini;
    hooks.beforeEach(function() {
        var f = document.getElementById('qunit-fixture');
        f.innerHTML = fixture;
    });

    QUnit.test('.is()', function(assert) {
        assert.false($().is('div').length == 0, 'on empty');
        assert.false($(null).is('div'), 'on null');
        assert.false($({}).is('body'), 'on empty object');
        assert.false($(undefined).is('#list-container-two'), 'on undefined');

        assert.true($('#list-container-two .ul-item').is('ul'), 'is for node type');
        assert.true($('#list-container-two ul').is('.ul-item'), 'is for node class');
        assert.true($('#list-container-two ul').parent().is("#list-container-two"), 'is for node id');
        assert.true($('#list-container-two ul').parent().is("div"), 'is for div');

        assert.false($('#list-container-two .ul-item').is('div'), '!is for node type');
        assert.false($('#list-container-two ul').is('.list-item'), '!is for node class');
        assert.false($('#list-container-two ul').parent().is("#list-container"), '!is for node id');
        assert.false($('#list-container-two ul').parent().is("ul"), '!is for div');
    });

    QUnit.test('.parent()', function(assert) {
        const listContainerTwo = document.querySelector('#list-container-two');

        assert.true($().parent('div').length == 0, 'on empty');
        assert.true($(null).parent('div').length == 0, 'on null');
        assert.true($({}).parent('body').length == 0, 'on empty object');
        assert.true($(undefined).parent().length == 0, 'on undefined');

        assert.deepEqual(
            $('body').parent().find('body')[0],
            document.body, 
            'parent -> child ->parent = parent'
        );

        assert.true(
            $('#list-container-two ul').parent('div').is('#list-container-two'),
            "parent is #id"
        );
        assert.deepEqual(
            $('#list-container-two ul').parent('div').get(0),
            listContainerTwo,
            "parent by type is element"
        );
        assert.deepEqual(
            $('#list-container-two ul').parent('#list-container-two').get(0),
            listContainerTwo,
            "parent by ID is element"
        );
        assert.deepEqual(
            $('#list-container-two ul').parent().get(0),
            listContainerTwo,
            "parent is element"
        );
        assert.notDeepEqual(
            $('#list-container-two ul li').parent('#list-container-two').get(0),
            listContainerTwo,
            "parent not exists #1"
        );
        assert.notDeepEqual(
            $('#list-container-two ul li').parent().get(0),
            listContainerTwo,
            "parent not exists #2"
        );
    });

    QUnit.test('.first()', function(assert) {
        const listContainerFirstLi = document.querySelector('#list-container li');

        assert.true($().first().length == 0, 'on empty');
        assert.true($(null).first().length == 0, 'on null');
        assert.true($({}).first().length == 0, 'on empty object');
        assert.true($(undefined).first().length == 0, 'on undefined');

        assert.equal(
            $("#list-container li").first().length, 1,
            "first length = 1"
        );
        assert.equal(
            $("#list-container-fake li").first().length, 0,
            "fake length = 0"
        );
        assert.deepEqual(
            $("#list-container li").first().get(0),
            listContainerFirstLi,
            "li is first"
        );
    });

    QUnit.test('.last()', function(assert) {
        const listContainerLastLi = document.querySelector('#list-container li:last-child');

        assert.true($().last().length == 0, 'on empty');
        assert.true($(null).last().length == 0, 'on null');
        assert.true($({}).last().length == 0, 'on empty object');
        assert.true($(undefined).last().length == 0, 'on undefined');

        assert.equal(
            $("#list-container li").last().length, 1,
            "last length = 1"
        );
        assert.equal(
            $("#list-container-fake li").last().length, 0,
            "fake length = 0"
        );
        assert.deepEqual(
            $("#list-container li").last().get(0),
            listContainerLastLi,
            "li is last"
        );
    });

    QUnit.test('.prev()', function(assert) {
        const listContainerLi = document.querySelectorAll('#list-container li');

        assert.true($().prev().length == 0, 'on empty');
        assert.true($(null).prev().length == 0, 'on null');
        assert.true($({}).prev().length == 0, 'on empty object');
        assert.true($(undefined).prev().length == 0, 'on undefined');

        // 3 items, 2nd and 3rd have previous neighbors
        assert.equal(
            $("#list-container li, #list-container li").prev().length, 2,
            "prev length = 2"
        );
        
        assert.equal(
            $("#list-container-fake li").prev().length, 0,
            "fake length = 0"
        );
        assert.deepEqual(
            $("#list-container li:first-child").prev().get(0), undefined,
            "prev first child"
        );
        assert.deepEqual(
            $("#list-container li:nth-child(2)").prev().get(0),
            listContainerLi[0],
            "prev second child"
        );
        assert.deepEqual(
            $("#list-container li:last-child").prev().get(0),
            listContainerLi[1],
            "prev last child"
        );
    });

    QUnit.test('.next()', function(assert) {
        const listContainerLi = document.querySelectorAll('#list-container li');

        assert.true($().next().length == 0, 'on empty');
        assert.true($(null).next().length == 0, 'on null');
        assert.true($({}).next().length == 0, 'on empty object');
        assert.true($(undefined).next().length == 0, 'on undefined');

        // 3 items, 2nd and 3rd have previous neighbors
        assert.equal(
            $("#list-container li").next().length, 2,
            "next length = 2"
        );
        
        assert.equal(
            $("#list-container-fake li").next().length, 0,
            "fake length = 0"
        );
        assert.deepEqual(
            $("#list-container li:first-child").next().get(0),
            listContainerLi[1],
            "next first child"
        );
        assert.deepEqual(
            $("#list-container li:nth-child(2)").next().get(0),
            listContainerLi[2],
            "next second child"
        );
        assert.deepEqual(
            $("#list-container li:last-child").next().get(0),
            undefined,
            "next last child"
        );
    });

    QUnit.test('.closest()', function(assert) {
        assert.true($().closest().length == 0, 'on empty');
        assert.true($(null).closest().length == 0, 'on null');
        assert.true($({}).closest().length == 0, 'on empty object');
        assert.true($(undefined).closest().length == 0, 'on undefined');
        assert.true($("#list-container li").closest().length == 0, 'on defined with empty');

        assert.true($().closest('div').length == 0, 'on empty');
        assert.true($(null).closest('div').length == 0, 'on null');
        assert.true($({}).closest('body').length == 0, 'on empty object');
        assert.true($(undefined).closest('html').length == 0, 'on undefined');
        

        let closestDivs = $("#list-container li").closest('div');
        let nativeClosestDivs = document.querySelectorAll("#list-container");
        assert.deepEqual(
            closestDivs[0],
            nativeClosestDivs[0],
            "parent #1"
        );
        closestDivs = $("#list-container-two li").closest('div');
        nativeClosestDivs = document.querySelectorAll("#list-container-two");
        assert.deepEqual(
            closestDivs[0],
            nativeClosestDivs[0],
            "parent #2"
        );
        assert.notDeepEqual(
            closestDivs[0],
            document.body,
            "parent #2"
        );

        closestDivs = $("#list-container li, #list-container-two li").closest('div');
        nativeClosestDivs = document.querySelectorAll("#list-container, #list-container-two");
        assert.deepEqual(
            closestDivs[0],
            nativeClosestDivs[0],
            "multiple element parents #1"
        );
        assert.deepEqual(
            closestDivs[1],
            nativeClosestDivs[1],
            "multiple element parents #1"
        );
    });

    QUnit.test('.add()', function(assert) {
        let nativeDiv = document.querySelector("#list-container");

        assert.true($().add().length == 0, 'on empty');
        assert.true($(null).add().length == 0, 'on null');
        assert.true($({}).add().length == 0, 'on empty object');
        assert.true($(undefined).add().length == 0, 'on undefined');
        assert.true($().add([0, 1, 2]).length == 0, 'on bad array');

        assert.equal($().add([0, document.body, 2]).length, 1, 'on partially bad array');
        assert.equal($().add([nativeDiv, document.body, 2, nativeDiv]).length, 2, 'on partially bad array dupe');
        assert.equal($(document.body).add([nativeDiv]).length, 2, 'bod + div as array');
        assert.equal($(document.body).add(nativeDiv).length, 2, 'bod + div');

        assert.equal($().add('#list-container li').length, 3, 'on empty');
        assert.equal($(null).add('#list-container li').length, 3, 'on empty');
        assert.equal($('random').add('#list-container li').length, 3, 'on empty');
        assert.equal($(undefined).add('#list-container li').length, 3, 'on empty');

        // Duplicate additions, still should be 3
        assert.equal($("#list-container li").add('#list-container li').length, 3, 'dupe check');
        assert.equal($("#list-container li").add('#list-container-two li').length, 9, 'add check');
        assert.equal($("#list-container li").add(nativeDiv).length, 4, 'add check with div');
        assert.equal($("#list-container li").add([nativeDiv, 1, 2]).length, 4, 
            'add check with div array + bad data'
        );
        assert.equal($("#list-container li").add([nativeDiv, nativeDiv, {}, [], document.body]).length, 5, 
            'add check with div,body array + bad data'
        );
    });

    QUnit.test('.find()', function(assert) {
        let nativeListLi = document.querySelectorAll("#list-container li");
        assert.true($().find().length == 0, 'on empty');
        assert.true($(null).find().length == 0, 'on null');
        assert.true($({}).find().length == 0, 'on empty object');
        assert.true($(undefined).find().length == 0, 'on undefined');
        assert.true($().find([0, 1, 2]).length == 0, 'on bad params');


        assert.equal($("#list-container").find("div").length, 0, 'non-existing child');
        assert.equal($("#list-container").find("li").length, 3, 'list items length check');

        $("#list-container").find("li").forEach((el, i) => {
            assert.deepEqual(
                el, 
                nativeListLi[i], 
                'list items length check' + i
            );
        });

        // Without duplication this should have 6 list items
        $("#list-container, #list-container ul").find('li').forEach((el, i) => {
            assert.deepEqual(
                el, 
                nativeListLi[i], 
                'list items length check' + i
            );
        });
    });
});