import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeJouetComponent } from './liste-jouet/liste-jouet.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path:'jouets', component: ListeJouetComponent},
    {path:'', component: HomeComponent},
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