$(document).ready(function()
{
	$('.main-cont .main-jum .jumbotron').fadeIn(1700)  ;
	$(".navbar #close-menu-toggle").hide() ;
	$(".navbar #menu-toggle").click(function()
	{
		$(".sidebar").animate({
			top : '0'
		}) ;
		$(this).fadeOut() ;
	}) ;
	$(".sidebar .sidebar-content i").click(function()
	{
		$(".sidebar").animate({
			top : '-200%'
		}) ;
		$(".navbar #menu-toggle").fadeIn() ;
	}) ;
	$(".navbar-1 #menu-toggle-1").click(function()
	{
		$(".sidebar").animate({
			top : '0'
		}) ;
		$(this).fadeOut() ;
	}) ;
	$(".sidebar .sidebar-content i").click(function()
	{
		$(".sidebar").animate({
			top : '-200%'
		}) ;
		$(".navbar-1 #menu-toggle-1").fadeIn();
	}) ;
})
$(window).scroll(function()
{
	var sc = $(window).scrollTop() ;
	if(sc >= 100)
	{
		$('.up').fadeIn(1000) ;
		$(".navbar").fadeOut() ;
		$(".navbar-1").css("visibility" , "visible") ;
		$(".navbar").css("visibility" , "visible") ;
		$(".navbar-1 .navbar-brand .navbar-logo .logo").attr("src","logo.png") ;
		$(".navbar-1 .navbar-brand .brand-name").fadeIn(1000)
	} else {
		$('.up').fadeOut() ;
		$(".navbar").fadeIn(1000) ;
		$(".navbar-1").css("visibility" , "hidden") ;
		$(".navbar-1").css("visibility" , "hidden") ;
		$(".navbar-1 .navbar-brand .brand-name").fadeOut()
	}
}) ;