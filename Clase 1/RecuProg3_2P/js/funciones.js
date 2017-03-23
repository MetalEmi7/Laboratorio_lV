function Login()
{//#1
    //Destino de linea de ejecucion.    
    var pagina = "./administracion.php";

    //Informacion a manejar o enviar a DESTINO "Pagina".
    var obj_usuario = {email: $("#email").val(), pass: $("#password").val()};



    $.ajax(
    {
        type: 'POST',
        url: pagina,
        dataType: "json",
        data:
        {
            queMuestro: 1,
            usuario: obj_usuario
        },
        async: true
    })
    .done(function (objJson)
    {
        /*
        Atributos de "objJson"

        $objJson->Exito;
        $objJson->Mensaje;
        $objJson->Usuario; 
        */
        
        //Control de procedimiento.
        if (!objJson.Exito)
        {
            alert(objJson.Mensaje);
            return;
        }

        window.location.href = "principal.php";
    })
    .fail(function (jqXHR, textStatus, errorThrown)
    {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });
}





function Logout() {//#2

    var pagina = "./administracion.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "html",
        data: {
            queMuestro: 2
        },
        async: true
    })
    .done(function (html)
    {
        window.location.href = "login.php?uss=1";
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });

}





function MostrarGrilla()
{    
    var pagina = "./administracion.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "html",
        data:
        {
            queMuestro: 3
        },
        async: true
    })
    .done(function (html)
    {        
        $("#divGrilla").html(html);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });
    //alert("generar ajax para cargar la grilla");
}







function Home() {//#3-sin case

    $("#divGrilla").html("");
    $("#divAbm").html("");
}







function CargarFormUsuario() {//#4

    var pagina = "./administracion.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "html",
        data: {
            queMuestro: 4
        },
        async: true
    })
    .done(function (html) {

        $("#divAbm").html(html);
        $('#cboPerfiles > option[value="usuario"]').attr('selected', 'selected');
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });

}



























function SubirFoto()
{//#5
    var pagina = "./administracion.php";
    
    
    //Control
    if (foto === "")    
        return;    

    //Otra manera de pasar los "parametros"
    var formData = new FormData();

    formData.append("archivo", archivo.files[0]);
    formData.append("queMuestro", "5");

    /* RECORDAR: Si la pagina no sigue con las
    lineas de codigo y ni lanza una excepcion,
    REVISAR LA SINTAXIS */    
    
    $.ajax({
    type: 'POST',
    url: pagina,
    dataType: "json",
    cache: false,
    contentType: false,
    processData: false,
    data: formData,
    async: true

    })
    .done(function (objJson)
    {        
    
    alert($("#archivo").val());

        if (!objJson.Exito)
        {
            alert(objJson.Mensaje);
            return;
        }
        
    $("#fotoTmp").attr("src", objJson.PathTemporal);
    $("#hdnFotoSubir").val(objJson.PathTemporal);

    })
    .fail(function (jqXHR, textStatus, errorThrown)
    {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });
}




    /*CON LA FOTO: Hacer que el atributo FOTO de nuestro array que mantamos por 
    AJAX, solo contenga el nombre del archivo, revisar atributos de $_files[""] u 
    otra manera de obtener unicamente el nombre que es lo unico que hace falta 
    para que esta mierda funcione.*/















function AgregarUsuario() 
{    
    var pagina = "./administracion.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "json",
        data: {queMuestro: OPC, usuario: Usua},
        async: true
    })
    .done(function (objJson)
    {
      
      if (!objJson.Exito)
      {
          alert(objJson.Mensaje);
          return;
      }


    $("#fotoTmp").attr("src", objJson.PathTemporal);
    $("#hdnFotoSubir").val(objJson.PathTemporal);
      
  })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });
    
}






















function EditarUsuario(obj)
{//#7 sin case

}






















function EliminarUsuario()
{//#7
    
}

























function ModificarUsuario()
 {//#8    


}
