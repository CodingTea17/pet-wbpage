$(document).ready(function() {
  $("button#theme").click(function() {
    $("body").toggleClass("page-theme");
    $("#foods").toggleClass("highlight2");
  });
  $("h3#foods").click(function() {
    $("#foods").toggleClass("highlight2");
    $("#foods").toggleClass("highlight");
  });
});
