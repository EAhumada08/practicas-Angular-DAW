import { Component, inject } from '@angular/core';
import { UsuarioServicioService } from '../../services/usuario-servicio.service';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  userService = inject(UsuarioServicioService);
  usersList : any;

  constructor(){
     this.userService.getUsers().subscribe(data => {
      this.usersList = data;
      console.log(this.usersList)
    });

  }

}
