import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MateriasComponent } from './components/materias/materias.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MateriasComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appfrontend';
}
