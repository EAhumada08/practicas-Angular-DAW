import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario : {
    nombre: String,
    avatar : String,
    tipo : Number

  }=
  {
    nombre : "",
    avatar : "",
    tipo : 0
  };

    isAuth = false

    constructor(){
      this.usuario.nombre="Emanuel"
      this.usuario.avatar="Foto",
      this.usuario.tipo = 2

    }

    login(){
      this.isAuth = true
    }
}
