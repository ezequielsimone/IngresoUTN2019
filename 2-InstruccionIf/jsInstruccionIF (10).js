function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	// math.round (  math.random() * (maximo - minimo) + minimo   );
	// math.floor (  math.random() * ((maximo + 1) - minimo) + minimo  );
	var aleatorio = Math.round (Math.random() * 9 + 1);

if (aleatorio >= 9) {
	alert("EXCELENTE " + aleatorio);
}
else if (aleatorio >= 4) {
	alert("APROBÓ " + aleatorio);
}
else {
	alert("Vamos, la proxima se puede " + aleatorio);
}



}//FIN DE LA FUNCIÓN