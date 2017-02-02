
// (function(){
// 	'use strict';
// 	var Preciofinal = document.getElementById('Resultado');
// 	var precio = 0;
// 	var diseno = document.getElementById('diseno');
// 	diseno.addEventListener('change', function(e){
// 		if (e.target.checked) {
// 			precio+=25;
// 			Preciofinal.innerHTML()= precio.; 
// 		}else{
// 			Preciofinal.textContent()= precio-25;	
// 		}	
// 	})
// });


// var precio = 0;

// setInterval(function(){
// 	precio++;
// 	document.getElementById('Resultado').innerHTML= precio;
// },1000);

var precio = 500;
var precioFinal = document.getElementById('Resultado');
var design = document.getElementById('diseno');
var animacion = document.getElementById('animacion');
var php = document.getElementById('php');
var extra = document.getElementById('extra');


document.getElementById('Resultado').innerHTML= precio+' $';


design.addEventListener('change', function(e){
	if (e.target.checked) {
		precio+=50;
		precioFinal.innerHTML= precio+' $';
	}else{
		precio-=50;
		precioFinal.innerHTML= precio+' $';
	}
});

animacion.addEventListener('change', function(e){
	if (e.target.checked) {
		precio+=100;
		precioFinal.innerHTML= precio+' $';
	}else{
		precio-=100;
		precioFinal.innerHTML= precio+' $';
	}
});

php.addEventListener('change', function(e){
	if (e.target.checked) {
		precio+=175;
		precioFinal.innerHTML= precio+' $';
	}else{
		precio-=175;
		precioFinal.innerHTML= precio+' $';
	}
});

extra.addEventListener('change', function(e){
	if (e.target.checked) {
		precio+=100;
		precioFinal.innerHTML= precio+' $';
	}else{
		precio-=100;
		precioFinal.innerHTML= precio+' $';
	}
});

