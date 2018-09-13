// JavaScript Document
$(function(){
	$('h3 + p').hide();
	$('h3').click(function(e){
		$(this).next('p').toggle();
		})
		.css('cursor','pointer');
});