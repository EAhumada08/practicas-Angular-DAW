import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <p>
      form works!
      {{id}}
      {{cod}}
    </p>
    <button (click)="irMaterias()">Materias</button>
    <div [hidden]="!isAdmin" class="caja" style="width: 50%;">
    <form [formGroup]="materiasForm" (submit) = 'guardar()'>
        <label for="id">Id:</label><br>
        <input type="text" formControlName="id" name="id" id="id"  [class]="{'missing':isInvalid}">
        <br>
        <label for="materia">Materia:</label><br>
        <input type="text" formControlName="materia" name="materia" id="materia">
        <br>
        <label for="nivel">Nivel:</label><br>
        <input type="text" formControlName="nivel" name="nivel" id="nivel">
        <br>
        <button type="submit" [disabled]="!materiasForm.valid">Guardar</button><br>

    </form>

</div>
  `,
  styles: `
  .missing{
    border: 1px solid red;
}`
})
export class FormComponent {
  id: number = 0;
  cod:number=0;
  url:ActivatedRoute = inject(ActivatedRoute);
  navigator: Router = new Router();

  isInvalid = false;
  isAdmin = false;
  private formBuilder = new FormBuilder();

  materiasForm = this.formBuilder.group({
    id: ['', Validators.required],
    materia: ['', Validators.required],
    nivel: ['', Validators.required],
  })

  constructor(private userService:AuthServiceService ){
    this.id = this.url.snapshot.params['id'];
    this.cod = this.url.snapshot.params['cod'];
    let user = this.userService.getUser();

    if(user.type ==2){
      this.isAdmin = true;
    }
  }

  irMaterias(){
    this.navigator.navigate(['materias']);
  }

  guardar(){
    console.log(this.materiasForm);
    this.isInvalid = !this.materiasForm.controls.id.valid;
    console.log(this.isInvalid)
  }
}
