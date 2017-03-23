<?php
require_once("verificar_sesion.php");
require_once("clases/AccesoDatos.php");
require_once("clases/Usuario.php");

if (!isset($usuario)) 
{//     ALTA
    $nombre = "";
    $email = "";
    $id = "";
    $foto = "pordefecto.jpg";
    $botonClick = "AgregarUsuario()";
    $botonTitulo = "Guardar";
}
else 
{//     MODIFICACION
    //$Usuario existe y contiene toda la 
    //informacion que necesitamos para visualizar y modificar
    $nombre = $usuario->nombre;
    $email = $usuario->email;
    $foto = $usuario->foto;
    $pass = $usuario->password;
    $id = $usuario->id;

    if(isset($usuario->accion))
    {//     Informacion que proviene de la GRILLA
        $botonClick = $usuario->accion == "Modificar" ? "ModificarUsuario()" : "EliminarUsuario()";  
        $botonTitulo = $usuario->accion;
    }
    else 
    {//     MODIFICACION (NO VIENE DE LA GRILLA)
        $botonClick = "ModificarUsuario()";    
        $botonTitulo = "Editar Perfil";        
    }   
 }




$perfiles = Usuario::TraerTodosLosPerfiles();

?>
<script type="text/javascript" src="./js/funciones.js"></script>

<div id="divFrm" class="animated bounceInLeft" style="height:330px;overflow:auto;margin-top:0px;border-style:solid">
    
    <input type="hidden" id="hdnIdUsuario" value="<?php echo $id; ?>" /> 
    
    <input type="text" placeholder="Nombre" id="txtNombre" value="<?php echo $nombre; ?>" />
    <input type="text" placeholder="E-mail" id="txtEmail" value="<?php echo $email; ?>" />
    <input type="password" placeholder="Password" id="txtPassword" value="" />

    <span>Perfil</span>
    <select id="cboPerfiles" >
        <?php

        foreach ($perfiles AS $p)
        {
            $miPerfil = isset($usuario->perfil) ? $usuario->perfil : "";
            $selected = $miPerfil == $p["perfil"] ? "selected" : "";
            echo "<option value='" . $p["perfil"] . "' " . $selected . ">" . $p["perfil"] . "</option>";
        }

        ?>	
    </select>
    <br/><br/>

    <input type="file" id="archivo" onchange="SubirFoto()" /> 

    
    
    <input type="button" class="MiBotonUTN" onclick="<?php echo $botonClick; ?>" value="<?php echo $botonTitulo; ?>"  />



    <input type="hidden" id="hdnQueHago" value="agregar" />
</div>
<div id="divFoto"  class="animated bounceInLeft" style="border-style:none" >
    <div style="width:25%;float:left"></div>
    <div style="width:75%;float:right">

        <img id="fotoTmp" src="./fotos/<?php echo $foto; ?>" style="float:left" class="fotoform" />

        <input type="hidden" id="hdnFotoSubir" value="<?php echo $foto; ?>" />

    </div>
</div>