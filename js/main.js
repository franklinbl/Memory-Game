
var cards = ["img/c1.png","img/c1.png",
			"img/c2.png","img/c2.png",
			"img/c3.png","img/c3.png",
			"img/c4.png","img/c4.png",
			"img/c5.png","img/c5.png",
			"img/c6.png","img/c6.png",
			"img/c7.png","img/c7.png",
			"img/c8.png","img/c8.png",];

cont=0
cont8=0
cartaAtras1=0
cartaAtras2=0
cartaDelante1=0
cartaDelante2=0
nombre=""




// ESCOGER UNA CARTA AL AZAR

function Cartas(){
	aleatorio = Math.floor(Math.random()*(cards.length));
	selec = cards[aleatorio];
	return selec;
}


// MEZCLAR CARTAS

$("body").ready(function(){
	for(let i=1;i<5;i++){
		for(let f=1;f<5;f++){
			$("#fila"+i+" #col"+f+" div .atras").html("<img src='"+Cartas()+"'>");
			cards.splice(aleatorio, 1);  
		}
	}
});







$('.frente').on('click',function comenzar(){
	cont+=1

	// DESTAPAR CARTA

	$(this).addClass('ocultar');
	clic=this.alt
	$('#img'+clic).removeClass('ocultar')



	// GUARDAR PARTE DE ATRAS DE LAS DOS CARTAS SELECCIONADAS

	if (cartaAtras1==0) {
		cartaAtras1=this
		cartaFallo1=$('#img'+clic)
	}else{
		cartaAtras2=this
		cartaFallo2=$('#img'+clic)
	}


	// GUARDAR LA PARTE DE ADELANTE DE LAS CARTAS SELECCIONDAS

	if (cartaDelante1==0) {
		acierto1=$('#img'+clic+' img')
		cartaDelante1=$('#img'+clic+' img').attr('src')
	}else{
		acierto2=$('#img'+clic+' img')
		cartaDelante2=$('#img'+clic+' img').attr('src')
	}


	//DESPUES DE SELECCIONAR DOS CARTAS HACER:

	if (cont==2 && cont8!=8) {
		// SI LAS CARTAS SON IGUALES
		if (cartaDelante1==cartaDelante2) {

			cartasIguales()
		}else{

			// SI LAS CARTAS SON DIFERENTES
			setTimeout(cartasDiferentes, 550);
		}
	}


	//CUANDO EL JUGADOR GANA GANA

	if (cont8==8) {
		if (cartaDelante1==cartaDelante2) {
			acierto1.addClass('oscurecer')
			acierto2.addClass('oscurecer')
			
			cartaAtras1=0
			cartaAtras2=0
			cartaDelante1=0
			cartaDelante2=0
			cartaFallo1=0
			cartaFallo2=0
			cont=0

			$('.ganaste').removeClass('ocultar')
			swal("GANASTE", "Excelente, conseguiste todas las parejas", "img/final.png");
			$('footer').removeClass('ocultar')
		}
	}	
})



//BOTON REINICIAR

$('.botonReiniciar').on('click',function reiniciar(){
	location.reload();
})



//BOTON COMENZAR

$('.botonComenzar').on('click',function comenzar(){
	nombre=$('input').val()

	if (nombre!="") {
		$('.nombre').html('Nombre del jugador: '+nombre.toUpperCase())
	}else{
		$('.nombre').html('Nombre del jugador: JUGADOR1')
	}

	$('.comenzar').addClass('ocultar')
	$('.contenedor').removeClass('ocultar')
	
})






//ACCION CUANDO LAS CARTAS SEAN IGUALES

function cartasIguales(){
	swal("Acertaste!", "", "success");

	acierto1.addClass('oscurecer')
	acierto2.addClass('oscurecer')
	
	cartaAtras1=0
	cartaAtras2=0
	cartaDelante1=0
	cartaDelante2=0
	cartaFallo1=0
	cartaFallo2=0
	cont=0
	cont8+=1
	$('.paresEncontrados').html('Pares encontrados: '+cont8+'/8')
}



//ACCION CUANDO LAS CARTAS SEAN DIFERENTES

function cartasDiferentes(){
	swal("Sigue intentando!", "", "error");

	cartaFallo1.addClass('ocultar')
	cartaFallo2.addClass('ocultar')
	$(cartaAtras1).removeClass('ocultar')
	$(cartaAtras2).removeClass('ocultar')


	cartaAtras1=0
	cartaAtras2=0
	cartaDelante1=0
	cartaDelante2=0
	cartaFallo1=0
	cartaFallo2=0
	cont=0
}