$(function () {
    var $container = $('.gallery');
    
    $container.masonry({
        //options
        itemSelector: '.gallery-item',
        columnWidth: 230,
        gutter: 10,
    });

    $.getJSON('data/content.json', function(data){
        //
        var elements = [];

        $.each(data, function(i, item){
            
            var itemHTML = 
            '<li class="gallery-item is-loading">' +
                '<a href="'+ item.images.large  + '">' +
                    '<img src="' + item.images.thumb + '" alt="' + item.title + '" />' + 
                '</a>' + 
            '</li>';

            elements.push($(itemHTML).get(0));
        });// each

        $container.append(elements);
        $container.imagesLoaded(function(){
            //$container.find('li').removeClass('is-loading');
            $(elements).removeClass('is-loading');

            $container.masonry('appended', elements);

        });//imagesLoaded

    }); //getJSON
});
