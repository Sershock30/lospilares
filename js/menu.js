var nav = document.getElementById('nav');
var altura = nav.offsetTop;
// alert(nav.offsetTop); se calcula distancia.
window.addEventListener('scroll', function(){
	if (window.pageYOffset > altura) {
		nav.classList.add('fixed');
	}else{
		nav.classList.remove('fixed');
	}
});

var ini = document.getElementById('inicio');
var volver = document.getElementById('volver');
var altura2 = ini.offsetTop+500;
window.addEventListener('scroll', function(){
	if (window.pageYOffset > altura2) {
		volver.classList.add('mostrar');
		volver.classList.remove('vovler');
	}else{
		volver.classList.add('volver');
		volver.classList.remove('mostrar');
	}
});