setInterval(function startTime() {
  var currentTime = new Date();
  var currentHour = currentTime.getHours();
  var currentMinute = currentTime.getMinutes();
  var currentSecond = currentTime.getSeconds();
    var e = document.getElementById("clock");


  $(".circle").css('margin-left', currentSecond*10);
    
$(".circle2").css('margin-left', currentMinute*10);

$(".circle3").css('margin-left', currentHour*10);    
    
   e.innerHTML = currentHour + ":" + currentMinute + ":" + currentSecond;   
})

