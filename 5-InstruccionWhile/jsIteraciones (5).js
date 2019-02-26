function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo != "f" && sexo != "m" && sexo != "M" && sexo != "F")

{
        
    sexo = prompt("no ingreso una respuesta valida f/m");

}
document.getElementById("Sexo").value = sexo;


}//FIN DE LA FUNCIÓN