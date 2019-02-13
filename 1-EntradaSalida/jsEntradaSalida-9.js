/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    /*var sueldo;
    var resultado;

    sueldo = document.getElementById("sueldo").value;
    resultado = parseInt(sueldo) * 1.10;

    document.getElementById("resultado").value = resultado;

    alert(sueldo*0.1);*/

    var sueldo;
    var resultado;
    var aumento;

    sueldo = parseInt(document.getElementById("sueldo").value);
    aumento = sueldo * 10 / 100;
    resultado = sueldo + aumento;
    
    document.getElementById("resultado").value = resultado;

    alert("El aumento es " + aumento);

	
}
