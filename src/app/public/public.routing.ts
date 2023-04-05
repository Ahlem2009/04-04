import {  Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CartesAffichantCategoriesComponent } from './home/carte-affichant-categories/carte-affichant-categories.component';

// import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { PublicComponent } from './public.component';
// import { RechercheComponent } from './recherche/recherche.component';



export const PublicRoutingModule: Routes = [
    // {path:"",component:HomeComponent},
    {path:"service",component:ServiceComponent},
    {path:"service1",component:PublicComponent},
    {path:'cat',component:CartesAffichantCategoriesComponent},
    {path:"cat/:nom",component:CategoriesComponent},
    // {path:"recherche-pro",component:RechercheComponent},
  ]
  
