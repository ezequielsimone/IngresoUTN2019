function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while (!(numero >= 0 && numero <= 9)){

		numero = prompt("El numero " + numero + " no es un numero entre 0 y 9 inclusive");

	}

	document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN