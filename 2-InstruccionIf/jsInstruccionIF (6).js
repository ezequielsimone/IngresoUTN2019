function Mostrar()
{
//tomo la edad  

var edad = document.getElementById("edad").value;

    if(edad >=13 && edad <=17)
{
    alert("Usted es adolecente");
    }
    else
{
        if (edad > 17) {   
                
            alert("Usted es adulto");
        
        } else {   
            
            alert("usted es un niño")
            
        }

}




}//FIN DE LA FUNCIÓN
