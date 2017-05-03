import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";  //Para realizar peticiones; Respetar Mayusculas.
import 'rxjs/add/operator/toPromise';           //Nos provee herramientos para manejar datos.

@Injectable()
export class DatosService {


  constructor(public http:Http) {

    console.log("Cons: Servicio");
  }


  //Metodos
traerDatos() {  

    this.http.get("https://restcountries.eu/rest/v2/all")
    .toPromise()
    .then(this.extractData)
    .catch(this.error);

  /*
    //Url extaida desde   https://restcountries.eu/#api-endpoints-all
    let url = 'https://restcountries.eu/rest/v2/all';

    //then y catch se ejecuta asinconicamente
    return this.http.get('https://restcountries.eu/rest/v2/all')
      .toPromise()
      .then(this.extractData)
      .catch(this.error);*/
}

  extractData(Res: Response){
    return Res.json() || {};
  }

  error(error: Response){
    return error;
  }



  getClientes():string[]{
    return [
      'Maria',
      'Maria2',
      'Maria3',
    ]    
  }

}
 