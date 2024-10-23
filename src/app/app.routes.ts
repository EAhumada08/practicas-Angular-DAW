import { Routes } from '@angular/router';
import { MateriasComponent } from './components/materias/materias.component';
import { LoginComponent } from './components/login/login.component';
import { CounterComponent } from './components/counter/counter.component';
import { Page404Component } from './components/page-404/page-404.component';
import { ProcesosComponent } from './components/procesos/procesos.component';
import { FormComponent } from './components/form/form.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
    {
        path: "materias",
        component: MateriasComponent
    }, 
    {
        path: "",
        component: LoginComponent   
    },
    {
        path: "procesos",
        component: ProcesosComponent,
        children : [
            {
                path: "contador",
                component: CounterComponent
            },
            {
                path: "form/:id/:cod",
                component: FormComponent
            }
        ]
    },
  
    {
        path: 'usuarios',
        component: UsersComponent
    },
    {
        path: "**",
        component: Page404Component,
        pathMatch : 'full'
    },
    
];
