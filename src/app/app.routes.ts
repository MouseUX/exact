import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReporterComponent } from './reporter/reporter.component';
import { EntityComponent } from './entity/entity.component';
import { ItemsListComponent } from './itemsList/itemsList.component';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'reporter', component: ReporterComponent },
  { path: 'entity', component: EntityComponent },
  { path: 'itemsList', component: ItemsListComponent }
];

