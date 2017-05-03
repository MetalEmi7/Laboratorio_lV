import { Component } from '@angular/core'; //Para realizar peticiones; Respetar Mayusculas.
import 'rxjs/add/operator/toPromise';      //Nos provee herramientos para manejar datos.
import { Ng2SmartTableModule } from 'ng2-smart-table';   

import { DatosService } from "./servicios/datos.service";
/* Luego de haber importado en el modulo, se hace lo mismo aca.
Tal como se hizo con 'Ng2SmartTable', solo que a diferencia de este, 
no se lo agrega en 'imports' de 'ngModule' del Modulo */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Clase 4 - Funcionando!';
  showForm = true;  //Muestra formulario; ver en HTML.
  showDiv_EjemploListado = false;  //Muestra Listado usando las TAGs <ul> y <li>; ver en HTML.

  ArrayDatos:DatosService;  

//creamos variable de tipo 'DatosService' dentro de los parametros del constructor.
constructor (private dates:DatosService){
  console.log("Constructor: app.component.ts");
  console.log(dates.traerDatos()); 
  
}


sets={
  actions:{
    edit: true,
    add: true,
    delete: true,
    cancel: true,
    editConfirm: true,
    confirmeSave: true,
  },
    edit:{
    editButtonContent:"Modificar",
    create:true,
    cancel:true,
    confirmSave:true
  },
  noDataMessage:"No existen registros",
  pager:{
    perPage:5,
  },
  columns:{
    nombre:{
      title:"Nombre",
      editable: true,
      editor:{
        type:"textArea",
      },
    },
    edad:{
      title:"Edad",
    },
    email:{
      title:"E-Mail",
    }
  },
}




  form ={
    nombre:"miNombre",
    email:"miMail@email.email",
    edad: 26
  };  


//Metodos
miEvento(e, form){
  console.log(e);
  console.log(form);   
}

log_Edit(e){
  console.log(e);
  e.confirm.resolve(e.newData);
}




ngOnInit() {
  this.dates.traerDatos()
}


}
