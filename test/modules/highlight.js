QUnit.module("module: highlight.js tests", function(hooks) {
    var $ = DoMini;
    hooks.beforeEach(function() {
        var f = document.getElementById('qunit-fixture');
        f.innerHTML = fixture;
    });

    QUnit.test('.highlight()', function(assert) {
        assert.expect(50);

        assert.true($().highlight('lorem').length == 0, 'on empty');
        assert.true($(null).highlight('lorem').length == 0, 'on null');
        assert.true($({}).highlight('lorem').length == 0, 'on empty object');
        assert.true($(undefined).highlight('lorem').length == 0, 'on undefined');

        assert.equal(
            $('.loremipsum').highlight('lorem').find('.highlight').length,
            2,
            "2 highlights default"
        );
        document.querySelectorAll('.loremipsum .highlight').forEach((el, i)=>{
            assert.equal(el.textContent.toLowerCase(), 'lorem', 'text validation #' + i);
        });
        assert.equal(
            $('.loremipsum').unhighlight().find('.highlight').length,
            0,
            "Unhighlight default"
        );

        assert.equal(
            $('.loremipsum').highlight('tr').find('.highlight').length,
            6,
            "Unhighlight default"
        );
        document.querySelectorAll('.loremipsum .highlight').forEach((el, i)=>{
            assert.equal(el.textContent.toLowerCase(), 'tr', 'text validation #' + i);
        });
        $('.loremipsum').unhighlight()

        assert.equal(
            $('.loremipsum').highlight('tr', {
                className: 'customHighlight',
                element: 'strong',
            }).find('.customHighlight').length,
            6,
            "6 highlights customHighlight"
        );
        document.querySelectorAll('.loremipsum .customHighlight').forEach((el, i)=>{
            assert.equal(el.textContent.toLowerCase(), 'tr', 'customHighlight text validation #' + i);
        });

        $('.loremipsum').unhighlight();
        assert.equal(
            $('.loremipsum').find('.customHighlight').length,
            6,
            "Default unhighlight should fail"
        );

        $('.loremipsum').unhighlight({
            className: 'customHighlight', element: 'span'
        });
        assert.equal(
            $('.loremipsum').find('.customHighlight').length,
            6,
            "Badly configured unhighlight should fail"
        );

        $('.loremipsum').unhighlight({
            className: 'customHighlight', element: 'strong'
        });
        assert.equal(
            $('.loremipsum').find('.customHighlight').length,
            0,
            "Correctly custom configured unhighlight"
        );
        // This should not run
        document.querySelectorAll('.loremipsum .customHighlight').forEach((el, i)=>{
            assert.equal(el.textContent.toLowerCase(), 'tr', 'customHighlight text validation #' + i);
        });

        assert.equal(
            $('.loremipsum').highlight('es', {
                className: 'customHighlight',
                element: 'strong',
                excludeParents: '.pparent2'
            }).find('.customHighlight').length,
            8,
            "8 highlights customHighlight and exclude 1 parent"
        );
        document.querySelectorAll('.loremipsum .customHighlight').forEach((el, i)=>{
            assert.equal(el.textContent.toLowerCase(), 'es', 'customHighlight text validation #' + i);
        });
        $('.loremipsum').unhighlight({
            className: 'customHighlight', element: 'strong'
        });

        assert.equal(
            $('.loremipsum').highlight('es', {
                className: 'customHighlight',
                element: 'strong',
                excludeParents: '.pparent2, .pparent3'
            }).find('.customHighlight').length,
            5,
            "5 highlights customHighlight and exclude 2 parents"
        );
        document.querySelectorAll('.loremipsum .customHighlight').forEach((el, i)=>{
            assert.equal(el.textContent.toLowerCase(), 'es', 'customHighlight text validation #' + i);
        });
        $('.loremipsum').unhighlight({
            className: 'customHighlight', element: 'strong'
        });

        assert.equal(
            $('.loremipsum').highlight('Vi', {
                className: 'customHighlight',
                element: 'li',
                caseSensitive: true,
            }).find('.customHighlight').length,
            1,
            "1 highlights customHighlight and caseSensitivity"
        );
        document.querySelectorAll('.loremipsum .customHighlight').forEach((el, i)=>{
            assert.equal(el.textContent, 'Vi', 'customHighlight text validation #' + i);
        });
        $('.loremipsum').unhighlight({
            className: 'customHighlight', element: 'li'
        });

        assert.equal(
            $('.loremipsum').highlight('ac', {
                wordsOnly: true,
            }).find('.highlight').length,
            4,
            "4 highlights and whole words only"
        );
        document.querySelectorAll('.loremipsum .highlight').forEach((el, i)=>{
            assert.equal(el.textContent.toLocaleLowerCase(), 'ac', 'customHighlight text validation #' + i);
        });
        $('.loremipsum').unhighlight();


        assert.equal(
            $('.loremipsum').highlight('Ac', {
                caseSensitive: true,
                wordsOnly: true,
            }).find('.highlight').length,
            2,
            "2 highlights and whole words and caseSensitive only"
        );
        document.querySelectorAll('.loremipsum .highlight').forEach((el, i)=>{
            assert.equal(el.textContent, 'Ac', 'customHighlight text validation #' + i);
        });
        $('.loremipsum').unhighlight();
    });
});