import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MateriasComponent } from './components/materias/materias.component';
import { LoginComponent } from './components/login/login.component';
import { CounterComponent } from './components/counter/counter.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MateriasComponent, LoginComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appfrontend';
  initialCount = 18;
}
