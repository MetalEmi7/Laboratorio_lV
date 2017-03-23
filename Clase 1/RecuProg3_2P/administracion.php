<?php

$queMuestro = isset($_POST['queMuestro']) ? $_POST['queMuestro'] : NULL;

switch ($queMuestro)
{
    case "1"://LOGIN
        $obj = new stdClass();
        $obj->Exito = TRUE;
        $obj->Mensaje = "";

        require_once("clases/AccesoDatos.php");
        require_once("clases/Usuario.php");


        $usuario = isset($_POST['usuario']) ? json_decode(json_encode($_POST['usuario'])) : NULL;

        $usr = Usuario::TraerUsuarioLogueado($usuario);

        //Conprobacion
        if ($usr === FALSE)
        {
            $obj->Exito = FALSE;
            $obj->Mensaje = "Error!!!\nNO coincide email y password!!!";
        }
        else
        {
            //A obj le damos usuario
            $obj->Usuario = $usr;
            $obj->Mensaje = "EXITO!!!\n Usuario logueado!!!";

                    //Comenzamos con las secciones
                    session_start();            
            
            $_SESSION["Usuario"] = json_encode($usr);
        }

        //Hasta este punto tenemos:
        /*
            $Obj->Usuario;          Contiene info. del usuario logueado.
            $usr;                   Contiene info. del usuario logueado.
            $_SESSION["Usuario"];   Contiene info. del usuario logueado.

        */

        echo json_encode($obj);
        /*
        3 Atributos

        $obj->Exito;
        $obj->Mensaje;
        $obj->Usuario; 
        */

        break;











    case "2"://LOGOUT
        session_unset();
        break;











    case "3"://MOSTRAR GRILLA
        require_once("grilla.php");
        break;












    case "4"://MUESTRA FORM ALTA-MODIFICACION USUARIO
        $usuario = isset($_POST["usuario"]) ? json_decode(json_encode($_POST["usuario"])) : NULL;
        require_once("form.php");

        break;










    case "5"://SUBIR FOTO AL TMP
        require_once("./clases/Archivo.php");
        $res = Archivo::Subir();

        echo json_encode($res);
        break;










    case "6"://ALTA USUARIO
        $obj = new stdClass();
        $obj->Exito = TRUE;
        $obj->Mensaje = "";

//var_dump($_POST["usuario"]);

        $usuario = isset($_POST["usuario"]) ? json_decode(json_encode($_POST["usuario"])) : NULL;
        //$usuario->foto = $_FILES["archivo"]["name"];

        require_once("clases/AccesoDatos.php");
        require_once("clases/Usuario.php");
        require_once("clases/Archivo.php");

        $idUsuario = Usuario::Agregar($usuario);

//alta en bd;                       (LISTO)
//mover del tmp al final (la foto)  (REVISAR)
//actualizar el campo FOTO          (REVISAR)
        
        $origen="tmp/".$usuario->PathFotoTemp;
        $destino="fotos/".$usuario->PathFotoTemp;
        
        if(!Archivo::Mover($origen, $destino))
        {
        $obj->Exito = FALSE;
        $obj->Mensaje = "NO FUNCIONO";
        }

        $obj->PathTemporal = $usuario->foto;
        echo json_encode($obj);

        break;












    case "7"://ELIMINAR USUARIO
        $obj = new stdClass();
        $obj->Exito = TRUE;
        $obj->Mensaje = "";

        $usuario = isset($_POST["usuario"]) ? json_decode(json_encode($_POST["usuario"])) : NULL;

        require_once("clases/AccesoDatos.php");
        require_once("clases/Usuario.php");
        require_once("clases/Archivo.php");

        $idUsuario = Usuario::Borrar($usuario->id);
//Eliminar de la bd                     (LISTO)
//Eliminar foto del repositorio final   (REVISAR)

        echo json_encode($obj);

        break;
        



    case "8"://MODIFICAR USUARIO
        $obj = new stdClass();
        $obj->Exito = TRUE;
        $obj->Mensaje = "";

        $usuario = isset($_POST["usuario"]) ? json_decode(json_encode($_POST["usuario"])) : NULL;

        require_once("clases/AccesoDatos.php");
        require_once("clases/Usuario.php");
        require_once("clases/Archivo.php");

//Actualizar en la bd y la foto
        $idUsuario = usuario::Modificar($usuario);


    //    $Origen_foto = "tmp/". $usuario->foto;
    //    $Destino_foto =  "fotos/". $usuario->foto;
//
    //    
//
    //    if(!Archivo::Mover($Origen_foto, $Destino_foto))
    //    {
    //        $obj->Exito = False;
    //        $obj->Mensaje = "Error en la modificacion de la foto";
    //    }


        echo json_encode($obj);
        break;

    default:
        echo "ERROR";
}