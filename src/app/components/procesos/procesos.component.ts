import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, } from '@angular/router';

@Component({
selector: 'app-procesos',
standalone: true,
imports: [RouterLink, RouterOutlet, RouterLinkActive],
template: `
  <div >
    <ul class="nav flex-column">
      <li class="nav-item">
        <a  class="nav-link" routerLink="contador" routerLinkActive="active">Contador</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['form',10,20]" routerLinkActive="active">Formulario</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>

    <router-outlet />
  </div>

    
`,
styles: ``
})
export class ProcesosComponent {
  
}