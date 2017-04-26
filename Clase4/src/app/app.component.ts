import { Component } from '@angular/core';
import { Person } from './entidades/persona';   // La ruta de la importacion siempre debe ser en minuscula, sin importar si tiene mayus. el archivo en cuestion. Verificar esto con detalle

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Clase 4 - Funcionando!';
  showForm = true;  //Muestra formulario; ver en HTML.

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
    nombre:"Adolfo",
    email:"El_viejo_garca@gmail.com",
    edad: 58
    }];



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





}
