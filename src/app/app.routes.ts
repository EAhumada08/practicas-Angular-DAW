import { Routes } from '@angular/router';
import { MateriasComponent } from './components/materias/materias.component';
import { LoginComponent } from './components/login/login.component';
import { CounterComponent } from './components/counter/counter.component';
export const routes: Routes = [
    {
        path: "materias",
        component: MateriasComponent
    }, 
    {
        path: "contador",
    component: CounterComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
];
