$("#freeForm1").validate({
  rules: {
    name: {
      required: true,
    },
    number: {
      required: true,
      phoneUS: true
    }
  }
});

$("#freeForm2").validate({
  rules: {
    name: {
      required: true,
    },
    number: {
      required: true,
      phoneUS: true
    }
  }
});

$("#freeForm3").validate({
  rules: {
    name: {
      required: true,
    },
    number: {
      required: true,
      phoneUS: true
    }
  }
});

$("#freeForm4").validate({
  rules: {
    name: {
      required: true,
    },
    number: {
      required: true,
      phoneUS: true
    }
  }
});

$("#freeForm5").validate({
  rules: {
    name: {
      required: true,
    },
    number: {
      required: true,
      phoneUS: true
    }
  }
});



$('.main-menu nav ul li').click(function (item) {
  $('.main-menu nav ul li.active').removeClass('active');
  $(this).addClass('active');
})

$('.main-menu__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.main-menu__slider-nav'
});

$('.main-menu__slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 0,
  arrows: false,
  asNavFor: '.main-menu__slider',
  centerMode: false,
  focusOnSelect: true
});

$('.main-teachers__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.main-teachers__slider-nav'
});

$('.main-teachers__slider-nav').slick({
  asNavFor: '.main-teachers__slider',
  slidesToShow: 4,
  slidesToScroll: 0,
  centerMode: false,
  infinite: true,
  focusOnSelect: true
});