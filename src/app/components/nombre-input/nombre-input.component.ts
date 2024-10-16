import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nombre-input',
  standalone: true,
  imports: [FormsModule],
  template: `
  <div>
    <h2>{{texto}}</h2>
    <label for="text">Materia</label>
    <input type="text" id="text" [(ngModel)]="texto">
    <button [disabled]="!texto">Agregar</button>
  </div>
  `,
  styles: ``
})
export class NombreInputComponent {
  texto = '';
}
