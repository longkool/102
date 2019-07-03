$(window).on("load", function() {
  $.when(
    $.getScript("//cdn.jsdelivr.net/npm/lightgallery@1/dist/js/lightgallery.min.js"),
    $.getScript("//cdn.jsdelivr.net/npm/lg-zoom@1/dist/lg-zoom.min.js"),
    $.getScript("//cdn.jsdelivr.net/npm/lg-thumbnail@1/dist/lg-thumbnail.min.js"),
    $.Deferred(function(deferred) {
      $(deferred.resolve);
    })
  ).done(function() {
    $('#lightgallery').lightGallery({
      selector: "a[imageanchor]"
    });

  });
})
