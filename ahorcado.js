var palabrasSecretas = ["papa", "melon", "sandia", "auto", "pelicula"];
var palabraElegida = "";
var errores = 0;

window.onload = function() {
	$('#iniciar-juego').click(function() {
		enableScroll();
		window.location = "#page3";
		setup();
	});
	$('#nueva-palabra').click(function() {
		enableScroll();
		window.location = "#page2";
	});
	$('#cancel-add-word').click(function() {
		enableScroll();
		window.location = "#page1";
	});
	$('#new-game').click(function() {
		setup();
	});
	$('#surrender').click(function() {
		rendirse();
	});
	
	$('#add-word').click(function() {
		agregarPalabra();
	});
	$('#cancel-add-word').click(function() {
		enableScroll();
		window.location = "#page1";
	});
	
	cargarCanvas();
	disableScroll();
}

function setup() {
	limpiarTablero();
	palabraElegida = escogerPalabra();
	deletrear(palabraElegida);
	document.addEventListener('keydown', teclaPresionada);
}

function disableScroll() { 
  document.body.classList.add("remove-scrolling"); 
} 

function enableScroll() { 
  document.body.classList.remove("remove-scrolling"); 
	window.setInterval(disableScroll(), 500);
}

function limpiarTablero() {
	errores = 0;
	$(".letras").empty();
	$(".errores").empty();
	resetCanvas();
}

function escogerPalabra() {
	let pal = palabrasSecretas[Math.floor(Math.random() * palabrasSecretas.length)];
	console.log(pal);
	return pal;
}

function deletrear(p) {
	let arr = p.split("");
	arr.forEach(a => $(".letras").append("<figure>" + a + "</figure>"));
}

function teclaPresionada(e) {
	if(/[a-z]/.test(e.key) && e.key.length == 1) {
		descubrirLetras(e.key);
		comprobarVictoria(e.key);
	}
}

function descubrirLetras(letra) {
	let arrLetras = $("figure");
	let figuras = arrLetras.filter(":contains(" + letra + ")");
	if(figuras.length == 0) {letraErronea(letra);}
	console.log(figuras);
	figuras.addClass("mostrarLetra");
}

function comprobarVictoria(letra) {
	palabraElegida = palabraElegida.replaceAll(letra, "");
	if(palabraElegida.length == 0) { terminarJuego() };
}

function letraErronea(letra) {
	$("canvas").effect("shake");
	$(".errores").append("<span>" + letra + "</span>");
	errores += 1;
	dibujarCuerpo(errores);
	if(errores >= 6) { terminarJuego() };
}

function terminarJuego() {
	document.removeEventListener('keydown', teclaPresionada);
	if(errores >= 6) {
		Swal.fire(
  'You have been hanged',
  'You lose',
  'error')
	} else {
	Swal.fire({title:'Good job!', text:'You WIN!', icon:'success'});
	}
}

function rendirse() {
	$("figure").addClass("mostrarLetra");
	for(let i=1; i<7; i++) {
		dibujarCuerpo(i);
	}
	Swal.fire('You have been hanged','You lose','error');
	document.removeEventListener('keydown', teclaPresionada);
}

function agregarPalabra() {
	palabrasSecretas.push($("input").val());
	console.log(palabrasSecretas);
}