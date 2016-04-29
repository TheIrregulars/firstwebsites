$(function() {
  $(".clickable").click(function() {
	$("#initially-showing").toggle();
	$("#initially-hidden").toggle();
  });
});

$(function() {
  $("button#switch").click(function() {
	$("body").removeClass();
	$("body").addClass("switch-background")
  });
});

$(function() {
  $("button#switch-back").click(function() {
	$("body").removeClass();
	$("body").addClass("undo")
  });
});