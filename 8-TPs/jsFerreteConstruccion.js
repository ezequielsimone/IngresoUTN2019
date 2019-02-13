/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo, ancho, perimetro, resultado;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);
    
    perimetro = largo * 2 + ancho * 2; 
    resultado = perimetro * 3;

    alert("Debera comprar " + resultado.toFixed(2) + " metros de alambre")

}
function Circulo () 
{
    var radio, perimetro, resultado;

    radio = parseFloat(document.getElementById("Radio").value);
    perimetro = 2 * Math.PI * radio ;
    resultado = perimetro * 3;
    
    alert("Debera comprar " + resultado.toFixed(2) + "metros de alambre");
	
}
function Materiales () 
{
    var largo, ancho, cal, cemento, superficie, resultadoCal, resultadoCemento;
    
    cal = 3;
    cemento = 2;
    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);
    
    superficie = largo * ancho;

    resultadoCal = superficie * cal;
    resultadoCemento = superficie * cemento;

    alert( "Debera comprar " + resultadoCal.toFixed(2) + " bolsas de cal y " + resultadoCemento.toFixed(2) + " bolsas de cemento" );
}