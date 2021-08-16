$('#detail-popup').on('shown.bs.modal', function () {
    CKEDITOR.replace('editor1');
 });
 $('.grid-table table .dropdown').on('show.bs.dropdown', function () {
    $('.grid-table [data-sticky=true] table[data-last-col=true] td:last-child').css('position', 'static');
 });
 $('.grid-table table .dropdown').on('hide.bs.dropdown', function () {
    $('.grid-table [data-sticky=true] table[data-last-col=true] td:last-child').css('position', 'sticky');
 });

 if ($(window).width() < 1023) {
    $('.owl-carousel').removeClass('grid-col');
    $('.owl-carousel').owlCarousel({
       // loop: true,
       margin: 15,
       stagePadding: 0,
       nav: true,
       navigation: true,
       autoWidth: false,
       navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
       ],
       autoplay: false,
       responsiveClass: true,
       autoplayHoverPause: true,
       dots: false,
       responsive: {
          0: {
             items: 3
          },
          600: {
             items: 4
          },
          1000: {
             items: 5
          },
          1300: {
             items: 7
          }
       },
    });
 }