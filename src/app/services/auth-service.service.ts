import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  usuario : any = {'name':'', 'type': 0};
  
  constructor() { 
   
  }

  saveUser(nom:String, tipo:Number){
    this.usuario.name = nom;
    this.usuario.type = tipo;
  }

  getUser(){
    return this.usuario;
  }
}
