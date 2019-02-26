function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while(respuesta == "si" || respuesta == "SI")
	{	
		ingreso = parseFloat(prompt("Ingrese un numero"));
	
		if (ingreso < 0 ){
			negativo = negativo * ingreso;
		}
		else{
			positivo = positivo + ingreso;
		}

		respuesta = prompt("Desea sumar otro numero?");
	
		contador++;
	
	}

document.getElementById('suma').value=positivo.toFixed(2);
document.getElementById('producto').value=negativo.toFixed(2);

}//FIN DE LA FUNCIÓN