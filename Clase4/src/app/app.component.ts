import { Component } from '@angular/core';

//Agregado
import { Person } from './entidades/persona';   
/* La ruta de la importacion siempre debe ser en minuscula, 
sin importar si tiene mayus. el archivo en cuestion. 
Verificar esto con detalle. */

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

  ArrayVacio:Array<Person>;
  datos:Array<Person>=[{
    nombre:"Emiliano",
    email:"Metalemi7@gmail.com",
    edad: 26
    },    
    {
    nombre:"Anastassia",
    email:"Anis88@gmail.com",
    edad: 15
    },
    {
    nombre:"Pedro",
    email:"Pedro345@gmail.com",
    edad: 18
    },
    {
    nombre:"Granja de Sol",
    email:"Medallon_De_Pollo_Con_Queso@gmail.com",
    edad: 344 //Calorias
    },
    {
    nombre:"Adolfo",
    email:"El_viejo_garca@gmail.com",
    edad: 58
    }];


settings={
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
    perPage:3,
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





}
