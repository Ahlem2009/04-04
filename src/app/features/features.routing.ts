import {  Routes } from '@angular/router';
import {GestionClientComponent} from './gestion-client/gestion-client.component'
import {GestionExpertComponent} from './gestion-expert/gestion-expert.component'
import {GestionManagerComponent} from './gestion-manager/gestion-manager.component'
import {GestionOffreComponent} from './gestion-offre/gestion-offre.component';
import {BoutonCreerOffreComponent} from './gestion-offre/bouton-creer-offre/bouton-creer-offre.component'
import {CreerOffreComponent} from './gestion-offre/creer-offre/creer-offre.component'
import {DashboardComponent} from './dashboard/dashboard.component';
import {CardsComponent} from './dashboard/cards/cards.component'
import { ContentComponent } from './dashboard/content/content.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { GestionDocumentComponent } from './gestion-document/gestion-document.component';
import { GestionTicketComponent } from './gestion-ticket/gestion-ticket.component';
import { CreationDocumentComponent } from './gestion-document/creation-document/creation-document.component';
import { GestionCategorieComponent } from './gestion-categorie/gestion-categorie.component';
import { CreationCategorieComponent } from './gestion-categorie/creation-categorie/creation-categorie.component';
import { CreationTicketComponent } from './gestion-ticket/creation-ticket/creation-ticket.component';
import { CreerTypeThemeComponent } from './gestion-categorie/creer-type-theme/creer-type-theme.component';
import { CreerExpertComponent } from './gestion-expert/creer-expert/creer-expert.component';
import { CreerManagerComponent } from './gestion-manager/creer-manager/creer-manager.component';
import{SidebarComponent} from './sidebar/sidebar.component'
import { FeaturesComponent } from './features.component';
import { AddThemeComponent } from './gestion-categorie/add-theme/add-theme.component';
export const FeauturesRoutingModule: Routes = [
  {path:"dashboard",component:FeaturesComponent},
  {path:"gestion-clt",component:GestionClientComponent},
  {path:"gestion-expert",component:GestionExpertComponent},
  {path:"gestion-manager",component:GestionManagerComponent},
  {path:"gestion-offre",component:GestionOffreComponent},
  {path:"creerOffre",component:BoutonCreerOffreComponent},
  {path:"creer-offre",component:CreerOffreComponent},
  {path:"cards",component:CardsComponent},
  {path:"content",component:ContentComponent},
  {path:"header",component:HeaderComponent},
  {path:"gestion-doc",component:GestionDocumentComponent},
  {path:"creation-offre",component:CreerOffreComponent},
  {path:"gestion-ticket",component:GestionTicketComponent},
  {path:"creation-Document",component:CreationDocumentComponent},
  {path:"modifier-type-theme",component:CreerTypeThemeComponent},
  {path:"modifier-theme",component:AddThemeComponent},
  {path:"creation-ticket",component:CreationTicketComponent},
  {path:"gestion-categorie",component:GestionCategorieComponent},
  {path:"ajouter-categorie",component:CreationCategorieComponent},
  {path:"creer-expert",component:CreerExpertComponent},
  {path:"creer-manager",component:CreerManagerComponent},
]
