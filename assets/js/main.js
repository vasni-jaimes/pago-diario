let slide = document.querySelector('.slide-index');
if (slide) {

	$('.slide').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		arrows: false,
	});
}


// let menu = document.querySelector('.burger');
// if (menu) {
// 	menu.addEventListener('click', function(e) {
// 		e.preventDefault();
// 		document.querySelector('nav').classList.add('active');
// 	})
// }

// let close = document.querySelector('nav .close');
// if (close) {
// 	close.addEventListener('click', function(e) {
// 		e.preventDefault();
// 		document.querySelector('nav').classList.remove('active');
// 		document.querySelector('.contacto').style.display = "none";
// 	})
// }


// //EFECTO DE ALICK AL MENU
// let itemMenu = document.querySelectorAll('header nav a');
// if (itemMenu) {
// 	for (var i = 0; i <= itemMenu.length - 1; i++) {
// 		itemMenu[i].addEventListener('click', function(e) {
// 			$('nav').removeClass();
// 		});
// 	}
// }
