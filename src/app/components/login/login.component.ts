import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
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
}
