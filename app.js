$(document).ready(function() {
	$('body').hide(0).fadeIn(1000);
	$('li, button').click(function() {
		$('#main-top, #main-top-interior').hide().fadeIn(400);
	});
	$('li').click(function() {
		var selection = $(this).addClass('selected');
		$(this).siblings().removeClass('selected');
	});
	$('li.blue').click(function() {
		var imageSwap = $('div#car').html('<img src="images/blank.png" alt="car">');
	});
	$('li.red').click(function() {
		var imageSwap = $('div#car').html('<img src="images/red.png" alt="car">');
	});
	$('li.orange').click(function() {
		var imageSwap = $('div#car').html('<img src="images/orange.png" alt="car">');
	});
	$('li.green').click(function() {
		var imageSwap = $('div#car').html('<img src="images/green.png" alt="car">');
	});
	$('li.black').click(function() {
		var imageSwap = $('div#car').html('<img src="images/black.png" alt="car">');
	});
	$('li.wheel-1').click(function() {
		var imageSwap = $('div#layer-2').html('<img src="images/blank.png" alt="car">');
	});
	$('li.wheel-2').click(function() {
		var imageSwap = $('div#layer-2').html('<img src="images/layer-2-a.png" alt="car">');
	});
	$('li.wheel-3').click(function() {
		var imageSwap = $('div#layer-2').html('<img src="images/layer-2-b.png" alt="car">');
	});
	$('li.liv-1').click(function() {
		var imageSwap = $('div#layer-3').html('<img src="images/blank.png" alt="none">');
	});
	$('li.liv-2').click(function() {
		var imageSwap = $('div#layer-3').html('<img src="images/dojo.png" alt="coding dojo">');
	});
	$('li.liv-3').click(function() {
		var imageSwap = $('div#layer-3').html('<img src="images/ninja.png" alt="tbd">');
	});
	$('li.kit-1').click(function() {
		var imageSwap = $('div#layer-4').html('<img src="images/blank.png" alt="coding dojo">');
	});
	$('li.kit-2').click(function() {
		var imageSwap = $('div#layer-4').html('<img src="images/type-r.png" alt="tbd">');
	});
	$('li.stock').click(function() {
		var imageSwap = $('div#layer-5').html('<img src="images/interior-stock.png" alt="car">');
	});
	$('li.blue-interior').click(function() {
		var imageSwap = $('div#layer-5').html('<img src="images/interior-blue.png" alt="car">');
	});
	$('li.red-interior').click(function() {
		var imageSwap = $('div#layer-5').html('<img src="images/interior-red.png" alt="car">');
	});
	$('li.orange-interior').click(function() {
		var imageSwap = $('div#layer-5').html('<img src="images/interior-orange.png" alt="car">');
	});
	$('li.green-interior').click(function() {
		var imageSwap = $('div#layer-5').html('<img src="images/interior-green.png" alt="car">');
	});
	$('li.stock-trim').click(function() {
		var imageSwap = $('div#layer-6').html('<img src="images/stock-trim.png" alt="car">');
	});
	$('li.blue-trim').click(function() {
		var imageSwap = $('div#layer-6').html('<img src="images/blue-trim.png" alt="car">');
	});
	$('li.red-trim').click(function() {
		var imageSwap = $('div#layer-6').html('<img src="images/interior-red-trim.png" alt="car">');
	});
	$('li.black-trim').click(function() {
		var imageSwap = $('div#layer-6').html('<img src="images/black-trim.png" alt="car">');
	});
	$('li.stock-package').click(function() {
		var imageSwap = $('div#layer-7').html('<img src="images/blank.png" alt="car">');
	});
	$('li.tech-package').click(function() {
		var imageSwap = $('div#layer-7').html('<img src="images/tech-package.png" alt="car">');
	});
	$('#interior').on('click', function() {
		$('div#main-top, div#main-top-interior, div#sidebar, div#sidebar-interior').each(function() {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$(this).addClass('hidden');
			} else {
				$(this).addClass('active');
				$(this).removeClass('hidden');
			}
		});
	});
	$('#interior').on('click', function() {
		$('#interior').each(function() {
			if ($(this).hasClass('btn-int')) {
				$(this).removeClass('btn-int');
				$(this).addClass('btn-ext');
			} else {
				$(this).addClass('btn-int');
				$(this).removeClass('btn-ext');
			}
		});
		$('#interior, #sidebar, #sidebar-interior').hide().fadeIn(400);
	});
});
