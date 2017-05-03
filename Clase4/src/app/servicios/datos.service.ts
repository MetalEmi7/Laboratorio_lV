import { Injectable } from '@angular/core';

@Injectable()
export class DatosService {

  constructor() { }

  //Metodos
  getClientes():string[]{
    return [
      'Maria',
      'Maria2',
      'Maria3',
    ]    
  }

}
