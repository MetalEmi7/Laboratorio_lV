import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Clase 4 - Funcionando!';

  form ={
    nombre: "miNombre",
    email:"miMail@email.email"
  };  

miEvento(e){
  console.log(e);
  

}


}
