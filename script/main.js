$("#slideshow > div:gt(0)").hide();

setInterval(function () {
  $("#slideshow > div:first")
    .fadeOut(50)
    .next()
    .fadeIn(50)
    .end()
    .appendTo("#slideshow");
}, 3000);
