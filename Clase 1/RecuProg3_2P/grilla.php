<?php
require_once("verificar_sesion.php");
require_once("clases/AccesoDatos.php");
require_once("clases/Usuario.php");

$ArrayDeUsuarios = Usuario::TraerTodosLosUsuarios();
?>



<div class="animated bounceInRight" style="height:460px;overflow:auto;border-style:solid" >
    <table class="table">
    
        <thead style="background:rgb(14, 26, 112);color:#fff;">
            <tr>
                <th> NOMBRE </th>
                <th> MAIL </th>
                <th> PERFIL </th>
                <th> FOTO </th>
                <th> ACCION </th>
            </tr> 
        </thead>   



<?php
        foreach ($ArrayDeUsuarios as $user)
        {
            $user->accion = "Modificar";
            $usuarioM = json_encode($user);
            
            $user->accion = "Eliminar";
            $usuarioE = json_encode($user);
            
            echo "<tr>
                        <td>" . $user->nombre . "</td>
                        <td>" . $user->email . "</td>
                        <td>" . $user->perfil . "</td>
                        <td><img src='./fotos/" . $user->foto . "' class='fotoGrilla' /></td>
                        <td>
                            <input type='button' value='Eliminar' class='MiBotonUTN' id='btnEliminar' onclick='EditarUsuario($usuarioE)' />
                            <input type='button' value='Modificar' class='MiBotonUTN' id='btnModificar' onclick='EditarUsuario($usuarioM)' />
                        </td>
                </tr>";
        }
?>
    </table>
</div>	

