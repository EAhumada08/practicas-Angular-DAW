import { Component } from '@angular/core';
import { NombreInputComponent } from '../nombre-input/nombre-input.component';
import { MateriaDetallesComponent } from '../materia-detalles/materia-detalles.component';

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [NombreInputComponent, MateriaDetallesComponent],
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

  materiaSeleccionada:any = {};

  isVisible = false

  mensaje = '';
  getMateria(evento:Event){
    let id = evento.target as HTMLSelectElement;
    let idx = Number(id.value)

    let asignatura = this.materias.find(materia => materia.id === idx) || {};
    console.log(asignatura)

    this.materiaSeleccionada = asignatura;
  }

  onNotify(message:string){
    this.mensaje = message;
    console.log(this.mensaje);
  }
}
