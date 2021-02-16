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


let menu = document.querySelector('.burger');
if (menu) {
	menu.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('nav').classList.add('active');
	})
}

let close = document.querySelector('nav .close');
if (close) {
	close.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('nav').classList.remove('active');
		//document.querySelector('.contacto').style.display = "none";
	})
}


//EFECTO DE ALICK AL MENU
let itemMenu = document.querySelectorAll('header nav a');
if (itemMenu) {
	for (var i = 0; i <= itemMenu.length - 1; i++) {
		itemMenu[i].addEventListener('click', function(e) {
			$('nav').removeClass();
		});
	}
}



//CLICK PARA ABRIR UN POPUP EMPRESAS
const quepago = document.querySelector('section.quepago button.empresa');
if (quepago) {
	quepago.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('.poup-empresas').style.display = 'flex';
	});
}

//CLICK PARA CERRAR UN POPUP EMPRESAS
const poup_empresas = document.querySelector('div.poup-empresas .close');
if (poup_empresas) {
	poup_empresas.addEventListener('click', function(e) {
		document.querySelector('.poup-empresas').style.display = 'none';
	})
}






//CLICK PARA ABRIR UN POPUP COLABORADORES
const quepagoColab = document.querySelector('section.quepago button.empleado');
if (quepagoColab) {
	quepagoColab.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('.poup-colaboradores').style.display = 'flex';
	});
}

//CLICK PARA CERRAR UN POPUP COLABORADORES
const poup_empleado = document.querySelector('div.poup-colaboradores .close');
if (poup_empleado) {
	poup_empleado.addEventListener('click', function(e) {
		document.querySelector('.poup-colaboradores').style.display = 'none';
	})
}
