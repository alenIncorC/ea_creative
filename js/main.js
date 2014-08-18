function gallery(){
            $('#panda1').click(function(){ 
                bootbox.alert(
                    '<iframe width="560" height="315" src="//www.youtube.com/embed/HRwiPJkm1WE" frameborder="0" allowfullscreen></iframe>'); });
            $('#panda2').click(function(){ 
                bootbox.alert(
                    '<iframe width="560" height="315"  src="//www.youtube.com/embed/k5OUUFqPGWA" frameborder="0" allowfullscreen></iframe>'); });
            $('#panda3').click(function(){ 
                bootbox.alert(
                    '<iframe width="560" height="315" src="//www.youtube.com/embed/k5OUUFqPGWA" frameborder="0" allowfullscreen></iframe>'); });
            $('#cat1').click(function(){ 
                bootbox.alert('<iframe width="560" height="315"  src="//www.youtube.com/embed/GNaAYKV5mIM" frameborder="0" allowfullscreen></iframe> '); });
            // $('#bird2').click(function() { bootbox.alert('<img src="images/bird2.jpg"><h4>Bird ipsum dolor sit amet</h4>'); });
            // $('#dog3').click(function() { bootbox.alert('<img src="images/dog3.jpg"><h4>Dog ipsum dolor sit amet</h4>'); });
            // $('#cat3').click(function() { bootbox.alert('<img src="images/cat3.jpg"><h4>Cat ipsum dolor sit amet</h4>'); });
            // $('#bird3').click(function() { bootbox.alert('<img src="images/bird3.jpg"><h4>Bird ipsum dolor sit amet</h4>'); });
            // $('#dog4').click(function() { bootbox.alert('<img src="images/dog4.jpg"><h4>Dog ipsum dolor sit amet</h4>'); });
            // $('#cat4').click(function() { bootbox.alert('<img src="images/cat4.jpg"><h4>Cat ipsum dolor sit amet</h4>'); });
            // $('#bird4').click(function() { bootbox.alert('<img src="images/bird4.jpg"><h4>Bird ipsum dolor sit amet</h4>'); });
            // $('#dog5').click(function() { bootbox.alert('<img src="images/dog5.jpg"><h4>Dog ipsum dolor sit amet</h4>'); });
            $('#cat2').click(function(){ 
                bootbox.alert('<iframe width="560" height="315"  src="//www.youtube.com/embed/jQZtk-fCWQ4" frameborder="0" allowfullscreen></iframe>'); });
            $('#gamer1').click(function(){ 
                bootbox.alert('<iframe width="560" height="315"  src="//www.youtube.com/embed/d_9YsLIVWIA" frameborder="0" allowfullscreen></iframe>'); });
        }
    var $itemsHolder = $('#portfolio ul.thumbnails');
    var $itemsClone = $itemsHolder.clone(); 
    var $filterClass = "";
    $('ul.filter li').click(function(e) {
    e.preventDefault();
    $filterClass = $(this).attr('data-value');
        if($filterClass == 'all'){ var $filters = $itemsClone.find('li'); }
        else { var $filters = $itemsClone.find('li[data-type='+ $filterClass +']'); }
        $itemsHolder.quicksand(
          $filters,
          { duration: 1000 },
          gallery
          );
    });
    $(document).ready(gallery);
    $(document).ready(function(){
        
        $(window).bind('scroll',function(e){
            parallax();
        });

        $('li.intro').click(function(){
            $('html, body').animate({ scrollTop:0 },1000,
                function(){
                    parallax();
                });
            return false;
        });

        $('li.services').click(function(){
            $('html, body').animate({ scrollTop:$('#services')
                                        .offset().top },1000,
                function(){
                    parallax();
                });
            return false;
        });

        $('li.portfolio').click(function(){
            $('html, body').animate({ scrollTop:$('#portfolio')
                                        .offset().top },1000,
                function(){
                    parallax();
                });
            return false;
        });

        $('li.team').click(function(){
            $('html, body').animate({ scrollTop:$('#team')
                                        .offset().top },1000,
                function(){
                    parallax();
                });
            return false;
        });

        $('li.contacts').click(function(){
            $('html, body').animate({ scrollTop:$('#contacts')
                                        .offset().top },1000,
                function(){
                    parallax();
                });
            return false;
        });



        $('#portfolio .thumbnail').on('mouseenter mouseleave',function(){ 
            $(this).toggleClass('onhov');
        });
        $('#team .thumbnail').on('mouseenter mouseleave', function(){
            $(this).find('.img-circle').toggleClass('circleHov');

        })
    });

    function parallax(){

        $window = $(window);

        $('section[data-type="background"]').each(function(){
            var $scroll = $(this);

            $(window).scroll(function(){
                var yPos = -($window.scrollTop()/$scroll.data('speed'));
                var coords = '50% '+yPos+'px';

                $scroll.css({backgroundPosition: coords});
            });
        });
    }

    document.createElement("section");