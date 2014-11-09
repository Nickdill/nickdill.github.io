$(document).ready(function(){
    var clicks = true;
    var job1 = true;
    var job2 = true;
    var job3 = true;
    var proj1 = true;
    var proj2 = true;
    var proj3 = true;
    var proj4 = true;
    var video = true;
    $('.menu_icon').click(function() {
        if (clicks) {
            $('.mobile_menu').slideDown();
            clicks = false;
        } else {
            $('.mobile_menu').slideUp();
            clicks = true;
        }
    });
    $('.m_menu').click(function() {
        $('.mobile_menu').slideUp();
        clicks = true;
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > $('#first_box').height()) {
            $('#nav_bar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < $('#first_box').height()) {
            $('#nav_bar').removeClass('navbar-fixed');
        }
    });

    $('.job1').click(function() {
        if (job1) {
            $('.job1info').slideDown();
            $('.job1').css('background','#3498db');
            job1 = false;
        } else {
            $('.job1info').slideUp();
            $('.job1').css('background','');
            job1 = true;
        }
    });
    $('.job2').click(function() {
        if (job2) {
            $('.job2info').slideDown();
            $('.job2').css('background','#3498db');
            job2 = false;
        } else {
            $('.job2info').slideUp();
            $('.job2').css('background','');
            job2 = true;
        }
    });
    $('.job3').click(function() {
      if (job3) {
            $('.job3info').slideDown();
            $('.job3').css('background','#3498db');
            job3 = false;
        } else {
            $('.job3info').slideUp();
            $('.job3').css('background','');
            job3 = true;
        }
    });
    $('.proj1').click(function() {
        if (proj1) {
            $('.proj1info').slideDown();
            $('.proj1').css('background','#34495E');
            proj1 = false;
        } else {
            $('.proj1info').slideUp();
            $('.proj1').css('background','');
            proj1 = true;
        }
    });
    $('.proj2').click(function() {
        if (proj2) {
            $('.proj2info').slideDown();
            $('.proj2').css('background','#34495E');
            proj2 = false;
        } else {
            $('.proj2info').slideUp();
            $('.proj2').css('background','');
            proj2 = true;
        }
    });
    $('.proj3').click(function() {
        if (proj3) {
            $('.proj3info').slideDown();
            $('.proj3').css('background','#34495E');
            proj3 = false;
        } else {
            $('.proj3info').slideUp();
            $('.proj3').css('background','');
            proj3 = true;
        }
    });
    $('.proj4').click(function() {
        if (proj4) {
            $('.proj4info').slideDown();
            $('.proj4').css('background','#34495E');
            proj4 = false;
        } else {
            $('.proj4info').slideUp();
            $('.proj4').css('background','');
            proj4 = true;
        }
    });
    $('.more1').click(function() {
        $('#box3').slideUp();
        $('#boxtyrant').delay(500).slideDown();
    });
    $('.less1').click(function() {
        $('#boxtyrant').slideUp();
        $('#box3').delay(500).slideDown();
    });
    $('.more2').click(function() {
        $('#box3').slideUp();
        $('#box2048').delay(500).slideDown();
    });
    $('.less2').click(function() {
        $('#box2048').slideUp();
        $('#box3').delay(500).slideDown();
    });
    $('.more3').click(function() {
        $('#box3').slideUp();
        $('#boxdata').delay(500).slideDown();
    });
    $('.less3').click(function() {
        $('#boxdata').slideUp();
        $('#box3').delay(500).slideDown();
    });
    $('.more4').click(function() {
      $('#box3').slideUp();
        $('#boxninth').delay(500).slideDown();
    });
    $('.less4').click(function() {
        $('#boxninth').slideUp();
        $('#box3').delay(500).slideDown();
    });

    $('.vidbutton').click(function() {
        if (video == true) {
            $('.video').slideDown();
            video = false;
        } else {
            $('.video').slideUp();
            video = true;
        }
    });

    $('#secretCounter').click(function() {
        $('.counter').slideUp();
    });

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});
