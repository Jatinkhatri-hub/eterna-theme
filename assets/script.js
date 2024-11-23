  $(document).ready(function() {
    
    $('.slider-swiper').slick({
      arrows: false,
      dots: true,
      swipeToSlide: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: '1.2rem',
            slidesToShow: 1
          }
        }
      ]
    });

    var $window = $(window);

    function checkWidth() {
      var windowsize = $window.width();
      if (windowsize < 768) {
        $('.half-half-slider').slick({
          arrows: false,
          dots: true,
          swipeToSlide: true,
          infinite: false,
          centerMode: true,
          centerPadding: '1.2rem',
          slidesToShow: 1
        });
      } else {
        if($('.half-half-slider').hasClass('slick-initialized')){
           $('.half-half-slider').slick('unslick');
        }       
      }
    }
    checkWidth();
    $(window).resize(checkWidth);

     $('.experts-trust .ex-buttons').on('click', function(){
      $('.css-0').fadeTo('300', 0);
      var large_img = $(this).attr('data-large-img');
      var review_content = $(this).find('.data-review-content-pdev').html();
      var review = $(this).attr('data-review');
      var name = $(this).attr('data-name')
      var address = $(this).attr('data-address');
      $('button.ex-buttons').removeClass('active-animate');
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $('button.ex-buttons svg circle.c2').attr('stroke', 'transparent');
      $('button.ex-buttons svg circle.c2').attr('stroke-dasharray', '0 100');
      $(this).find('svg circle.c2').attr('stroke', '#272724');
      $(this).find('svg circle.c2').attr('stroke-dasharray', '100 100');

      setTimeout(function(){
        $('.circle-main-cnt #largeImage').attr('src', large_img);
        /* $('.circle-cnt .et-text-review').html(review);
        $('.circle-cnt .et-text-name').html(name);
        $('.circle-cnt .et-text-address').html(address); */
        $('.circle-cnt').html(review_content);
        $('.css-0').fadeTo('slow', 1);
      }, 500);

    })

    
    function circle_spin_animation(){
        var value = 0;
        var duration = 50000; 
        var increment = 100 / (duration / 1000);
        var index = $('button.ex-buttons.active-animate').attr('data-index');
        var total_slides = $('button.ex-buttons').length;
        var next_slide_index = 0;
        if(index < total_slides){
          next_slide_index = parseInt(index) + parseInt(1);
        }else if(index == total_slides){
          next_slide_index = 1;
        }
        $('button.ex-buttons svg circle.c2').attr('stroke-dasharray', '0 100');
        $('button.ex-buttons svg circle.c2').attr('stroke', 'transparent');
        var interval = setInterval(function(){
          if($('button.ex-buttons').hasClass('active-animate')){
            value += increment;
            value = parseInt(value);
            $('button.ex-buttons.active-animate svg circle.c2').attr('stroke', '#272724');
            $('button.ex-buttons.active-animate svg circle.c2').attr('stroke-dasharray', parseInt(value)+' '+'100');  
            
            if (value > 100) {
              clearInterval(interval);
            }else if(value > 99 && value < 101){
              $('button.ex-buttons.active-animate svg circle.c2').attr('stroke-dasharray', '0 100');
              $('button.ex-buttons.active-animate svg circle.c2').attr('stroke', 'transparent');
              var large_img = $('button.ex-buttons[data-index="'+next_slide_index+'"]').attr('data-large-img');
              var review_content = $('button.ex-buttons[data-index="'+next_slide_index+'"]').find('.data-review-content-pdev').html();
              var review = $('button.ex-buttons[data-index="'+next_slide_index+'"]').attr('data-review');
              var name = $('button.ex-buttons[data-index="'+next_slide_index+'"]').attr('data-name')
              var address = $('button.ex-buttons[data-index="'+next_slide_index+'"]').attr('data-address');
              $('.css-0').fadeTo('300', 0);

              setTimeout(function(){
                $('.circle-main-cnt #largeImage').attr('src', large_img);
                /*$('.circle-cnt .et-text-review').html(review);
                $('.circle-cnt .et-text-name').html(name);
                $('.circle-cnt .et-text-address').html(address); */
                $('.circle-cnt').html(review_content);                
                $('.css-0').fadeTo('slow', 1);
              }, 500);

              $('button.ex-buttons[data-index="'+index+'"]').removeClass('active-animate');
              $('button.ex-buttons[data-index="'+next_slide_index+'"]').addClass('active-animate');

              circle_spin_animation();
    
            }
          }
        }, 80); 
    }


    circle_spin_animation();
    
  });