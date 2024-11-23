$(document).ready(function () {
  const header = document.querySelector(".section-header");

  function headerHeight() {
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty(
      "--header-height",
      headerHeight + "px"
    );
  }

  headerHeight();
  window.addEventListener("resize", headerHeight);

  window.onscroll = function(e) {
    const sectionHeader = document.querySelector(".section-header");
    if (this.oldScroll < this.scrollY) {
      sectionHeader.style.top = `calc(-1 * var(--header-height) + 0px)`;
    } else {
      sectionHeader.style.top = "0px";
    }
    this.oldScroll = this.scrollY;
  }

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop:
                target.offset().top -
                parseInt(
                  getComputedStyle(document.documentElement).getPropertyValue(
                    "--sticky-header-height"
                  )
                ) -
                25,
            },
            500,
            function () {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1");
                $target.focus();
              }
            }
          );
        }
      }
    });

  $(".product-display").each(function () {
    $(this).slick({
      arrows: true,
      dots: true,
      swipeToSlide: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: "unslick",
        },
      ],
    });
  });

  $(".better-blog-posts").each(function () {
    $(this).slick({
      arrows: true,
      dots: true,
      swipeToSlide: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: "unslick",
        },
      ],
    });
  });

  $(".before-after").each(function () {
    $(this).slick({
      arrows: true,
      dots: true,
      swipeToSlide: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: false,
          },
        },
      ],
    });
  });

 // $(".results-ugc").each(function () {
   /* $(".results-ugc").slick({
      arrows: true,
      dots: false,
      swipeToSlide: true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1.75,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    }); */
  // });

  $(".ugc-image-slider").each(function () {
    $(this).slick({
      arrows: true,
      dots: false,
      swipeToSlide: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });

  $(".carlos-modal-btn").click(function () {
    var modalId = $(this).data("modal-id");
    $("#" + modalId).attr("data-open", "true");
    $("body").addClass("carlos-modal-open");
  });

  $(".carlos-modal-close").click(function () {
    var modalId = $(this).closest(".carlos-modal").attr("id");
    $("#" + modalId).attr("data-open", "false");
    $("body").removeClass("carlos-modal-open");
  });

  $(window).click(function (event) {
    if ($(event.target).hasClass("carlos-modal")) {
      $(".carlos-modal").attr("data-open", "false");
      $("body").removeClass("carlos-modal-open");
    }
  });

  $(".quick-add-modal").each(function () {
    var sticky_atc = $(this).attr("data-sticky");
    var $checked = $("input[checked]", this);
    var type = $checked.attr("data-type");
    var price = $checked.attr("data-price");
    var variantID = $checked.attr("data-variant");
    var sellingPlan = $checked.attr("data-selling-plan");
    var $atcbtn = $(".add-to-cart", this);

    $atcbtn.find(".add-to-cart-price").text(price);

    $("input", this).change(function () {
      var type = $(this).attr("data-type");
      var price = $(this).attr("data-price");
      var variantID = $(this).attr("data-variant");
      var sellingPlan = $(this).attr("data-selling-plan");
      var $atcbtn = $(this)
        .closest(".quick-add-variants")
        .siblings(".add-to-cart");

      if (type == "onetime") {
        $atcbtn.find(".add-to-cart-text").text("Add to cart");
        if (sticky_atc == "true") {
          $(".buy-box .carlos-onetime .buy-box-button").click();
        }
        $atcbtn.find('input[name="selling_plan"').val('');
        $('.selling-plan-input').val('');
      } else if (type == "subscription") {
        $atcbtn.find(".add-to-cart-text").text("Subscribe");
        if (sticky_atc == "true") {
          $(".buy-box .carlos-subscription .buy-box-button").click();
          $(
            ".buy-box .carlos-subscription .buy-box-options label input[variant-id='" +
              variantID +
              "']"
          )
            .closest("label")
            .click();
        }
        $atcbtn.find('input[name="selling_plan"').val(sellingPlan);
      }

      $atcbtn.find(".add-to-cart-price").text(price);
      $atcbtn.find('input[name="variant"').val(variantID);
     
    });

    $(".add-to-cart-modal").on("click", function (e) {
      e.preventDefault();
      var productId = $('input[name="product"', this).val();
      var variantId = $('input[name="variant"', this).val();
      var sellingPlanId = $('input[name="selling_plan"', this).val();
        
      if (sticky_atc == "true") {
        if(sellingPlanId != '' && sellingPlanId != 'undefined' && sellingPlanId != null){
          addToCart1(productId, variantId, sellingPlanId);
        }else{
          addToCart1(productId, variantId, '');
        }
        
        $(".carlos-modal").attr("data-open", "false");
        $("body").removeClass("carlos-modal-open");
      } else {
        if(sellingPlanId != '' && sellingPlanId != 'undefined' && sellingPlanId != null){
          addToCart1(productId, variantId, sellingPlanId);
        }else{
          addToCart1(productId, variantId, '');
        }
      }
    });

    function addToCart1(productId, variantId, sellingPlanId) {
      var formData = new FormData();
      formData.append("id", variantId);
      formData.append("quantity", 1);
  
      if(sellingPlanId != null && sellingPlanId != 'undefined' && sellingPlanId != ''){
        formData.append("selling_plan", sellingPlanId);
      }
  
      fetch("/cart/add.js", {
        method: "POST",
        body: formData,
      })
      .then((response) => response.json())
      .then((data) => {
        $(".carlos-modal").attr("data-open", "false");
        $("body").removeClass("carlos-modal-open");
        console.log(data);
        $('#rebuy-cart').addClass('is-visible');
        $('#rebuy-cart').attr('aria-hidden', false);
        $('#rebuy-cart').css('visibility', 'visible');
        $('body').addClass('rebuy-modal-visible');
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }

  });

  var checkExist = setInterval(function () {
    if (document.querySelector(".carlos-membership-button")) {
      clearInterval(checkExist);
      membershipAddon();
    }
  }, 100);

  function membershipAddon() {
    function hideMainIfMembershipExists() {
      if ($(".product-membership").length > 0) {
        $(".carlos-membership-wrapper").hide();
      } else {
        $(".carlos-membership-wrapper").show();
      }
    }

    hideMainIfMembershipExists();

    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "childList") {
          if (
            $(mutation.addedNodes).is(".product-membership") ||
            $(mutation.removedNodes).is(".product-membership")
          ) {
            hideMainIfMembershipExists();
          }
        }
      });
    });

    observer.observe(document, {
      childList: true,
      subtree: true,
    });

    $(".carlos-membership-button").click(function () {
      var productId = $('input[name="product"', this).val();
      var variantId = $('input[name="variant"', this).val();
      var sellingPlanId = $('input[name="selling_plan"', this).val();
      addToCart(productId, variantId, sellingPlanId);

      function addToCart(productId, variantId, sellingPlanId) {
        var formData = new FormData();
        formData.append("id", variantId);
        formData.append("quantity", 1);
        formData.append("selling_plan", sellingPlanId);

        fetch("/cart/add.js", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    });
  }
});

var accordion = document.querySelectorAll(".accordion");
var active = null;

accordion.forEach((item) => {
  item.addEventListener("click", function () {
    if (!this.classList.contains("open-content")) {
      const openContents = document.querySelectorAll(".open-content");
      openContents.forEach((content) => {
        content.classList.remove("open-content");
      });
    }

    this.classList.toggle("open-content");
    const accordionContent = this.nextElementSibling;

    if (active) {
      active.style.maxHeight = null;
    }

    if (accordionContent !== active) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      active = accordionContent;
    } else {
      active = null;
    }
  });
});
