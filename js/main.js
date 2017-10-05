(function($) {

	var coche = $('.coche'),
		fondo1 = $('.fondo1'),
		fondo2 = $('.fondo2'),
		lineas = $('.lineas'),
		txt1 = $('.txt-1'),
		txt2 = $('.txt-2'),
		txt3 = $('.txt-3'),
		txt4 = $('.txt-4'),
		txt4 = $('.txt-4'),
		txt5 = $('.txt-5'),
		clickTag = "https://www.elsardino.com",
		tl = new TimelineMax();

	TweenMax.to(fondo1, 5, {backgroundPosition: "3300px 0px", ease:Linear.easeNone, repeat:-1});
	TweenMax.to(fondo2, 4, {backgroundPosition: "1200px -14px", ease:Linear.easeNone});
	TweenMax.to(lineas, 1, {backgroundPosition: "1200px -14px", ease:Linear.easeNone, repeat:-1});

	tl
	  .to(coche, 1, {x:-400, y:20, scale:1, ease:Power1.easeOut, delay: 1})
	  .fromTo(txt2, 0.3, {y:-30, autoAlpha: 0}, {y:-20, autoAlpha: 1}, '+=0.7')
	  .fromTo(txt1, 0.3, {y:-30, autoAlpha: 0}, {y:0, autoAlpha: 1}, '+=0.9')
	  .to(txt2, 0.2, {autoAlpha: 0})
	  .fromTo(txt3, 0.3, {y:-30, autoAlpha: 0}, {y:0, autoAlpha: 1}, '+=0.6')
	  .fromTo(txt4, 0.3, {y:-30, autoAlpha: 0}, {y:0, autoAlpha: 1}, '+=0.6')
	  .fromTo(txt5, 0.3, {y:-30, autoAlpha: 0}, {y:0, autoAlpha: 1}, '+=0.6');

	  

})(jQuery);
