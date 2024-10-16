import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nombre-input',
  standalone: true,
  imports: [FormsModule],
  template: `
  <div>
    <h2>Hola {{nombre}}</h2>
    <input type="text" [(ngModel)]="nombre">
  </div>
  `,
  styles: ``
})
export class NombreInputComponent {
  nombre = 'Emanuel';
}
