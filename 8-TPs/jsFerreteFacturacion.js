/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1, precio2, precio3, suma;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    suma = precio1 + precio2 + precio3;

    alert("La suma de los precios es " + suma);

}
function Promedio () 
{
	var precio1, precio2, precio3, suma, promedio;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    suma = precio1 + precio2 + precio3;
    promedio = suma / 3;

    alert("El promedio de los precios es " + promedio);
}
function PrecioFinal () 
{   
    var precio1, precio2, precio3, suma, iva, precioFinal;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    suma = precio1 + precio2 + precio3;
    iva = suma * 21 / 100;
    precioFinal = suma + iva;

    alert("El precio final de los precios es " + precioFinal);
	
}