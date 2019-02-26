function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var ingreso;

	while(respuesta == "si" || respuesta == "SI")
	{	
		ingreso = parseFloat(prompt("Ingrese un numero"));
	
		acumulador = acumulador + ingreso;

		respuesta = prompt("Desea sumar otro numero?");
	
		contador++;
	
	}

document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN