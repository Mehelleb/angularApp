import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeJouetComponent } from './liste-jouet/liste-jouet.component';

const routes: Routes = [
    {path:'jouets', component: ListeJouetComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class Rooting {

}