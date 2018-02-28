window.onload = function () {

    document.getElementById("Inicio").onclick = inicio;

    document.getElementById("Contacto").onclick = contacto;

    document.getElementById("Localización").onclick = localizacion;

    document.getElementById("titulo").style.display = "block";

};


        if (document.getElementById("containerContacto").style.display === "block") {

            document.getElementById("Inicio").style.display = "none";

            document.getElementById("Localización").style.display = "none";


    } 
else {

        document.getElementById("Inicio").style.display = "block";

        document.getElementById("Contacto").style.display = "block";

        document.getElementById("Localizaciónn").style.display = "block";
}



function Inicio() {

        document.getElementById("Contacto").style.display = "none";

        document.getElementById("Localización").style.display = "none";
    }

    document.getElementById("titulo").style.display = "block";

    document.getElementById("containerBtn").style.display = "block";

    document.getElementById("containerContacto").style.display = "none";

    document.getElementById("containerLocalización").style.display="none";
}



function Contacto() {

        document.getElementById("Inicio").style.display = "none";

        document.getElementById("Localización").style.display = "none";

    }

    document.getElementById("titulo").style.display = "none";

    document.getElementById("containerBtn").style.display = "none";

    document.getElementById("containerContacto").style.display = "block";

    document.getElementById("containerLocalización").style.display="none";

}



function Localización() {
{

        document.getElementById("Inicio").style.display = "none";

        document.getElementById("Contacto").style.display = "none";

    }

    document.getElementById("titulo").style.display = "none";

    document.getElementById("containerBtn").style.display = "none";

    document.getElementById("containerContacto").style.display = "none";

    document.getElementById("containerLocalización").style.display="block";


}


    document.getElementById("titulo").style.display = "none";

    document.getElementById("containerBtn").style.display = "none";

    document.getElementById("containerContacto").style.display = "none";

    document.getElementById("containerLocalización").style.display="none";

}
