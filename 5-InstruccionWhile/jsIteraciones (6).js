function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var ingreso;

while (contador < 5)
{	
	ingreso = parseFloat(prompt("Ingrese un numero"));

	acumulador = acumulador + ingreso;

	contador++;

}

document.getElementById('suma').value=acumulador.toFixed(2);
document.getElementById('promedio').value=(acumulador/5).toFixed(2);

}//FIN DE LA FUNCIÓN