import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeJouetComponent } from './liste-jouet/liste-jouet.component';
import { HomeComponent } from './home/home.component';
import { JouetUniqueComponent } from './jouet-unique/jouet-unique.component';

const routes: Routes = [
    {path:'jouets', component: ListeJouetComponent},
    {path:'', component: HomeComponent},
    {path:'jouet/:id', component: JouetUniqueComponent},
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