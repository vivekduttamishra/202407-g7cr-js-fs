

(function () {
    $(".toggler")
        .css("cursor","pointer")
        .click(function(){
            $(this) //current h2
                .next() //find the next item
                .slideToggle(700);
        });

}) ();


(function(){

    $('.remote-toggler')
        .css('cursor','pointer')
        .click(function(){
            var id= $(this).attr("id");
            $("."+id).slideToggle(700);
        });

})();
(function(){

    $('.for-toggler')
        .css('cursor','pointer')
        .click(function(){
            var id= $(this).attr("for");
            $("#"+id).slideToggle(700);
        });

})();

(function(){

    $('[toggler-target]')
        .css('cursor','pointer')
        .click(function(){
            var id= $(this).attr("toggler-target");
            $("#"+id).slideToggle(700);
        });

    $('[toggle-all]')
        .click(function(){
            //console.log('toggle all clicked');
            $('[toggler-target]').each(function(){
                var id=$(this).attr('toggler-target');
                //console.log('toggle element id',id);
                
                $("#"+id).slideToggle(700);
            });
        });

})();