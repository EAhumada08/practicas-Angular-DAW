import { Component } from '@angular/core';
import { NombreInputComponent } from '../nombre-input/nombre-input.component';

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [NombreInputComponent],
  templateUrl: './materias.component.html',
  styleUrl: './materias.component.css'
})
export class MateriasComponent {
  materias = [
    {id: 1, nombre: "DAW", nivel: "Lic"},
    {id: 3, nombre: "Gestión de proyectos", nivel: "Lic"},
    {id: 4, nombre: "Sistemas programables", nivel: "Lic"},
    {id: 5, nombre: "Lenguajes y Automatas", nivel: "Lic"},
  ]

  isVisible = false

  getMateria(evento:Event){
    let asignatura = evento.target as HTMLSelectElement;
    console.log(asignatura.value)
  }
}
