DoMini(function($){
    // Fix pre tags HTML
    function toHTML(str) {
        var p = document.createElement("p");
        p.textContent = str;
        return p.innerHTML;
    }
    $('pre').forEach(function(){
        this.innerHTML = toHTML(this.innerHTML);
    });

    $('#list1 li').on('mouseover', function(){
        $(this).text('Text Changed');
    });

    $('#list2_add').on('click', function(){
        $('#list2').append("<li>New list item</li>");
    });
    $('#list2').on('mouseover', 'li', function(){
        $(this).text('Text Changed');
    });

    $('#list3 li').on('click', function(){
        $(this).css('color', $(this).data('color'))
    });

    $('#list4 li').on('click', function(){
        $(this).css({
            color: $(this).data('color'),
            fontSize: '22px' // or "font-size": "22px"
        });
    });
});