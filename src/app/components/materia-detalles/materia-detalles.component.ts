import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-materia-detalles',
  standalone: true,
  imports: [],
  template: `
    <div class="box2">
      <p>ID: {{materia.id}}</p>
      <p>Materia: {{materia.nombre}}</p>
      <p>Nivel: {{materia.nivel}}</p>
      <button (click)="sendNotification()">Mensaje para el padre</button>
    </div>
  `,
  styles: `
    .box2{
      min-width: 200px;
      min-width: 200px;
      background-color: rgb(206, 241, 191);
      border: 2px solid rgb(2,2,33);
    }
  `
})
export class MateriaDetallesComponent {
  @Input() materia: any = {}; 
  @Output() notify : EventEmitter<string> = new EventEmitter<string>();

  sendNotification(){
    this.notify.emit('El hijo ha hecho click en el botón');
  }
}
