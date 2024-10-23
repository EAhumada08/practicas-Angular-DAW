import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { AuthServiceService } from '../../services/auth-service.service';


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

    userService = inject(AuthServiceService);

    constructor(){
      

    }

    login(){
      this.isAuth = true
      this.usuario.nombre="Emanuel"
      this.usuario.avatar="Foto";
      this.usuario.tipo = 2;
      this.userService.saveUser(this.usuario.nombre, this.usuario.tipo);
      console.log(this.userService.usuario)
    }

    logOut(){
      this.isAuth = false
      this.usuario.nombre=""
      this.usuario.avatar="";
      this.usuario.tipo = 0;
      this.userService.saveUser('',0)
    }
}
