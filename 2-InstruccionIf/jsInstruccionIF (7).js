function Mostrar()
{
//tomo la edad  

var edad, estadoCivil;

edad = parseInt(document.getElementById("edad").value);
estadoCivil = document.getElementById("estadoCivil").value;

if (edad < 18 && estadoCivil !="Soltero") //edad menor a 18 y estado civil DISTINTO de soltero
{
    alert("es muy pequeño para no ser soltero");
}


}//FIN DE LA FUNCIÓN