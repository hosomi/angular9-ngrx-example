import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InformationsComponent } from './informations.component';
import { InformationsEditComponent } from './informations-edit/informations-edit.component';

const routes: Routes = [
    { path: '', component: InformationsComponent },
    { path: ':Id', component: InformationsEditComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class InformationsRoutingModule {}
