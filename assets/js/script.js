$(document).ready(function(){
  var clicks = true;
  var job1 = true;
  var job2 = true;
  var job3 = true;
  $('.menu_icon').click(function() {
    if (clicks) {
      $('.mobile_menu').slideDown();
      clicks = false;
    } else {
      $('.mobile_menu').slideUp();
      clicks = true;
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




});
