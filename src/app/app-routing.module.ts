import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationsComponent } from './informations/informations.component';

const routes: Routes = [
  { path: '',  component: InformationsComponent},
  { path: '', redirectTo: '/informations', pathMatch: 'full' },
  { path: 'informations', component: InformationsComponent },
  { path: 'informations', loadChildren: './informations/informations.module#InformationsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
