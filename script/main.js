$("#slideshow > div:gt(0)").hide();

setInterval(function () {
  $("#slideshow > div:first")
    .fadeOut(200)
    .next()
    .fadeIn(200)
    .end()
    .appendTo("#slideshow");
}, 3000);
