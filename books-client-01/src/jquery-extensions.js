(function($){

    $.fn.src=function(url){
        
        var old = $(this).attr("src");
        if(url!==undefined){
            $(this).attr("src", url);
        }
        
        return old;
    }

    $.fn.highlight=function(options){
        var settings=$.extend({
            background:'lightyellow',
            
        },options);

        $(this).css(settings);
    }

})(jQuery);