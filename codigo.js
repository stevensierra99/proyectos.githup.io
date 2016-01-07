function aleatorio(minimo, maximo){
	var numero=Math.floor(Math.random()*(maximo-minimo+1)+minimo);
	return numero;
}

var piedra=0, papel=1, tijera=2, lagarto=3, spock=4;
var opciones=["piedra", "papel", "tijera", "lagarto", "spock"];

var opcionUsuario;
var opcionMaquina=aleatorio(0,4);

opcionUsuario=prompt("Selecciona tu opcion:\n0. Piedra\n1. Papel\n2. Tijera\n3. lagarto\n4. Spock");

alert("Elegiste: "+opciones[opcionUsuario]);
alert("La maquina Eligió: "+opciones[opcionMaquina]);

if(opcionUsuario==piedra){
	if(opcionMaquina==piedra){
		alert("Empate");
	}else if(opcionMaquina==papel){
		alert("Perdiste");
	}else if(opcionMaquina==tijera){
		alert("Ganaste");
	}else if(opcionMaquina==lagarto){
		alert("Ganaste");
	}
	else if(opcionMaquina==spock){
		alert("Perdiste");
	}
}else if(opcionUsuario==papel){
	if(opcionMaquina==piedra){
		alert("Ganaste");
	}else if(opcionMaquina==papel){
		alert("Empate");
	}else if(opcionMaquina==tijera){
		alert("Perdiste");
	}else if(opcionMaquina==lagarto){
		alert("Perdiste");
	}
	else if(opcionMaquina==spock){
		alert("Ganaste");
	}

}else if(opcionUsuario==tijera){
	if(opcionMaquina==piedra){
		alert("Perdiste");
	}else if(opcionMaquina==papel){
		alert("Ganaste");
	}else if(opcionMaquina==tijera){
		alert("Empate");
	}else if(opcionMaquina==lagarto){
		alert("Ganaste");
	}
	else if(opcionMaquina==spock){
		alert("Perdiste");
	}
}else if(opcionUsuario==lagarto){
	if(opcionMaquina==piedra){
		alert("Perdiste");
	}else if(opcionMaquina==papel){
		alert("Ganaste");
	}else if(opcionMaquina==tijera){
		alert("Perdiste");
	}else if(opcionMaquina==lagarto){
		alert("Empate");
	}
	else if(opcionMaquina==spock){
		alert("Ganaste");
	}
}else if(opcionUsuario==spock){
	if(opcionMaquina==piedra){
		alert("Ganaste");
	}else if(opcionMaquina==papel){
		alert("Perdiste");
	}else if(opcionMaquina==tijera){
		alert("Ganaste");
	}else if(opcionMaquina==lagarto){
		alert("Perdiste");
	}
	else if(opcionMaquina==spock){
		alert("Empate");
	}
}