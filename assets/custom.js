jQuery(document).ready(function(){
  $('footer .footer-top .ftop-row .fcol-left .menu-tab-inner .mtab-head span.micon .micon-plus').on('click', function(e){
    e.preventDefault();
    $(this).hide();
    $(this).closest('.micon').find('.micon-minus').show();
    $(this).closest('.menu-tab-inner').find('.tabmenu-list').show();
  })

  $('footer .footer-top .ftop-row .fcol-left .menu-tab-inner .mtab-head span.micon .micon-minus').on('click', function(e){
    e.preventDefault();
    $(this).hide();
    $(this).closest('.micon').find('.micon-plus').show();
    $(this).closest('.menu-tab-inner').find('.tabmenu-list').hide();
  })

  $('footer .footer-middle2 .footer-cc-grid .footer-cc-row .fcurrency-col button').on('click', function(e){
    e.preventDefault();
    if($(this).closest('.fcurrency-col').find('#currency-list').hasClass('opacity-100')){
      $(this).closest('.fcurrency-col').find('#currency-list').removeClass('opacity-100');
    }else{
      $(this).closest('.fcurrency-col').find('#currency-list').addClass('opacity-100');
    }
    
    if($(this).closest('.fcurrency-col').find('#currency-list').attr('inert') != 'undefined'){
      $(this).closest('.fcurrency-col').find('#currency-list').attr('inert', true);
    }else{
      $(this).closest('.fcurrency-col').find('#currency-list').removeAttr('inert');
    }

    if($(this).closest('.fcurrency-col').find('#currency-list').attr('aria-hidden') != 'undefined'){
      $(this).closest('.fcurrency-col').find('#currency-list').attr('aria-hidden', true);
    }else{
      $(this).closest('.fcurrency-col').find('#currency-list').removeAttr('aria-hidden');
    }

  })


  $(".customFormKlaviyo .dklaviyoForm input.kemail").keyup(function(){
    var inputval = $(this).val();
    if(inputval != '' && inputval != null && inputval != 'undefined'){
      $(this).closest('.dklaviyoForm').find('.kemail').removeClass('error');
      $('.main-footer-wrap .hiddenFormGrid').find('form.needsclick input[type="email"]').val(inputval);
    }
  });

  $('.customFormKlaviyo .dklaviyoForm .ksubmit').on('click', function(e){
    e.preventDefault();
    var value = $(this).closest('.dklaviyoForm').find('.kemail').val();
    if(value != '' && value != null && value != 'undefined'){
      $(this).closest('.dklaviyoForm').find('.kemail').removeClass('error');
      $('.main-footer-wrap .hiddenFormGrid').find('form.needsclick input[type="email"]').val(value);
      $('.main-footer-wrap .hiddenFormGrid').find('form.needsclick input[type="submit"]').trigger('click');
    }else{
      $(this).closest('.dklaviyoForm').find('.kemail').addClass('error');
    }
    
  })

  setTimeout(function(){
    $('.footer-bigscreen .klaviyoFormgrid-desktop button.needsclick').html(' <svg viewBox="0 0 24 24" fill="none" class="ag-29y" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M4.09998 12H20.1M20.1 12L14.1 6M20.1 12L14.1 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
    $('.footer-smallscreen .klaviyoFormgrid-mobile button.needsclick').html(' <svg viewBox="0 0 24 24" fill="none" class="ag-29y" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M4.09998 12H20.1M20.1 12L14.1 6M20.1 12L14.1 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  }, 2000)


  setTimeout(function(){
    $('.quiz-main .oct-quiz-btn-wrapper').addClass('nofloat');
  }, 2000)


  $('.truemed-widget-grid .truemed-grid-custom a.tm-link.css-tm-link').on('click', function(e){
    e.preventDefault();
    if($(this).closest('.truemed-widget-grid').find('.truemed-grid-hidden').length > 0){
      $(this).closest('.truemed-widget-grid').find('.truemed-grid-hidden .truemed-instructions .truemed-instructions-open').trigger('click');
    }
  })


  $('section[x-data="ThemeSection_header()"] button[data-menu-drawer-toggle]').on('click', function(){
    $('body').addClass('click-prevent');
  })

  $('.sidebar-container .js-enabled button').on('click', function(){
    $('body').removeClass('click-prevent');
  })


  function changeDataSlide(index){
    var slide_index = index;
    $('.main-image').css('opacity', '0.6233');
    $('.experts-trust .circle-grid-inner .circular-circle-grid svg').removeClass('circular-progress');
    if(!$('.experts-trust .small-imgs .circle-grid-inner[data-index="'+slide_index+'"]').find('svg').hasClass('circular-progress')){
      $('.experts-trust .small-imgs .circle-grid-inner[data-index="'+slide_index+'"]').find('svg').addClass('circular-progress')
    }
    $('.experts-trust .circle-grid-inner .circular-circle-grid .circular-images img').removeClass('active');
    $('.experts-trust .small-imgs .circle-grid-inner[data-index="'+slide_index+'"] .circular-images img').addClass('active');
    $('#largeImage').attr('src',$('.experts-trust .small-imgs .circle-grid-inner[data-index="'+slide_index+'"] .circular-images img').attr('data-large-img').replace('thumb','large'));
    $('#description .text-review').html($('.experts-trust .small-imgs .circle-grid-inner[data-index="'+slide_index+'"] .circular-images img').attr('data-review'));
    $('#description .text-name').html($('.experts-trust .small-imgs .circle-grid-inner[data-index="'+slide_index+'"] .circular-images img').attr('data-name'));
    $('#description .text-address').html($('.experts-trust .small-imgs .circle-grid-inner[data-index="'+slide_index+'"] .circular-images img').attr('data-address'));
    setTimeout(function(){
       $('.main-image').css('opacity', '1');
    }, 1000);
  }

  function repeatProgressbar(){
    var total_slides = $('.experts-trust .small-imgs .circle-grid-inner').length;
    $('.experts-trust .small-imgs .circle-grid-inner').each(function(){
      var data = $(this).attr('data-index');
      if(data == 1){
        if(!$('body').hasClass('circle-clicked')){
          $('.experts-trust .small-imgs .circle-grid-inner[data-index="5"] svg').removeClass('circular-progress');
          $('.experts-trust .small-imgs .circle-grid-inner[data-index="5"] .circular-images img').removeClass('active');
          $('.experts-trust .small-imgs .circle-grid-inner[data-index="1"] .circular-images img').addClass('active');
          var data2 = parseInt(data)+parseInt(1);
          if($(this).find('.circular-circle-grid svg').hasClass('circular-progress')){
            if(data2 > total_slides){
              $('.experts-trust .small-imgs .circle-grid-inner .circular-circle-grid svg').removeClass('circular-progress');
              $('.experts-trust .small-imgs .circle-grid-inner[data-index="1"]').addClass('circular-progress');
            }else{
              $('.experts-trust .small-imgs .circle-grid-inner .circular-circle-grid svg').removeClass('circular-progress');
              $('.experts-trust .small-imgs .circle-grid-inner[data-index="'+data2+'"] svg').addClass('circular-progress');
            }
    
          }else{
            if(data2 > total_slides){
              $('.experts-trust .small-imgs .circle-grid-inner .circular-circle-grid svg').removeClass('circular-progress');
              $('.experts-trust .small-imgs .circle-grid-inner[data-index="1"] svg').addClass('circular-progress');
            }else{
              $('.experts-trust .small-imgs .circle-grid-inner .circular-circle-grid svg').removeClass('circular-progress');
              $('.experts-trust .small-imgs .circle-grid-inner[data-index="'+data+'"] svg').addClass('circular-progress');
            }
            if(!$('body').hasClass('click-prevent')){
              changeDataSlide(data);
            }
          }
        }
      }else if(data == 2){
         if(!$('body').hasClass('circle-clicked')){
          setTimeout(function(){
            $('.experts-trust .small-imgs .circle-grid-inner[data-index="1"] svg').removeClass('circular-progress');
            $('.experts-trust .small-imgs .circle-grid-inner[data-index="1"] .circular-images img').removeClass('active');
            $('.experts-trust .small-imgs .circle-grid-inner[data-index="2"] .circular-images img').addClass('active');
            var data2 = parseInt(data)+parseInt(1);
            if($(this).find('.circular-circle-grid svg').hasClass('circular-progress')){
              if(data2 > total_slides){
                $('.experts-trust .small-imgs .circle-grid-inner[data-index="1"] svg').addClass('circular-progress');
              }else{
                $('.experts-trust .small-imgs .circle-grid-inner[data-index="'+data2+'"] svg').addClass('circular-progress');
              }
      
            }else{
              if(data2 > total_slides){
                $('.experts-trust .small-imgs .circle-grid-inner[data-index="2"] svg').addClass('circular-progress');
              }else{ 
                $('.experts-trust .small-imgs .circle-grid-inner[data-index="'+data+'"] svg').addClass('circular-progress');
              }
            }
            if(!$('body').hasClass('click-prevent')){
              changeDataSlide(data);
            }
          }, 5100);
        }
        
      }else if(data == 3){
         if(!$('body').hasClass('circle-clicked')){
          setTimeout(function(){
            $('.experts-trust .small-imgs .circle-grid-inner[data-index="2"] svg').removeClass('circular-progress');
            $('.experts-trust .small-imgs .circle-grid-inner[data-index="2"] .circular-images img').removeClass('active');
            $('.experts-trust .small-imgs .circle-grid-inner[data-index="3"] .circular-images img').addClass('active');
            var data2 = parseInt(data)+parseInt(1);
            if($(this).find('.circular-circle-grid svg').hasClass('circular-progress')){
              if(data2 > total_slides){
                $('.experts-trust .small-imgs .circle-grid-inner[data-index="1"] svg').addClass('circular-progress');
              }else{
                $('.experts-trust .small-imgs .circle-grid-inner[data-index="'+data2+'"] svg').addClass('circular-progress');
              }
      
            }else{
              if(data2 > total_slides){
                $('.experts-trust .small-imgs .circle-grid-inner[data-index="3"] svg').addClass('circular-progress');
              }else{
                $('.experts-trust .small-imgs .circle-grid-inner[data-index="'+data+'"] svg').addClass('circular-progress');
              }
            }
            if(!$('body').hasClass('click-prevent')){
              changeDataSlide(data);
            }

          }, 10200);
        }
        
      }else if(data == 4){
        if(!$('body').hasClass('circle-clicked')){
          setTimeout(function(){
            $('.experts-trust .small-imgs .circle-grid-inner[data-index="3"] svg').removeClass('circular-progress');
            $('.experts-trust .small-imgs .circle-grid-inner[data-index="3"] .circular-images img').removeClass('active');
            $('.experts-trust .small-imgs .circle-grid-inner[data-index="4"] .circular-images img').addClass('active');
            var data2 = parseInt(data)+parseInt(1);
            if($(this).find('.circular-circle-grid svg').hasClass('circular-progress')){
              if(data2 > total_slides){
                $('.experts-trust .small-imgs .circle-grid-inner[data-index="1"] svg').addClass('circular-progress');
              }else{
                $('.experts-trust .small-imgs .circle-grid-inner[data-index="'+data2+'"] svg').addClass('circular-progress');
              }
      
            }else{
              if(data2 > total_slides){
                $('.experts-trust .small-imgs .circle-grid-inner[data-index="4"] svg').addClass('circular-progress');
              }else{
                $('.experts-trust .small-imgs .circle-grid-inner[data-index="'+data+'"] svg').addClass('circular-progress');
              }
            }
            if(!$('body').hasClass('click-prevent')){
              changeDataSlide(data);
            }

          }, 15400);
        }
        
      }else if(data == 5){
        if(!$('body').hasClass('circle-clicked')){
          setTimeout(function(){
            $('.experts-trust .small-imgs .circle-grid-inner[data-index="4"] svg').removeClass('circular-progress');
            $('.experts-trust .small-imgs .circle-grid-inner[data-index="4"] .circular-images img').removeClass('active');
            $('.experts-trust .small-imgs .circle-grid-inner[data-index="5"] .circular-images img').addClass('active');
            var data2 = parseInt(data)+parseInt(1);
            if($(this).find('.circular-circle-grid svg').hasClass('circular-progress')){
              if(data2 > total_slides){
                $('.experts-trust .small-imgs .circle-grid-inner[data-index="1"] svg').addClass('circular-progress');
              }else{
                $('.experts-trust .small-imgs .circle-grid-inner[data-index="'+data2+'"] svg').addClass('circular-progress');
              }
      
            }else{
              if(data2 > total_slides){
                $('.experts-trust .small-imgs .circle-grid-inner[data-index="5"] svg').addClass('circular-progress');
              }else{
                $('.experts-trust .small-imgs .circle-grid-inner[data-index="'+data+'"] svg').addClass('circular-progress');
              }
            }
            if(!$('body').hasClass('click-prevent')){
              changeDataSlide(data);
            }
            
          }, 20800);
        
        }
      }
      
    })
  }

  repeatProgressbar();
  
  setInterval(repeatProgressbar, 26700);

});

