import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationsComponent } from './informations.component';
import { InformationsListComponent } from './informations-list/informations-list.component';
import { InformationsEditComponent } from './informations-edit/informations-edit.component';
import { InformationsRoutingModule } from './informations-routing.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, InformationsRoutingModule
  ],
  declarations: [InformationsListComponent, InformationsComponent, InformationsEditComponent],
  providers: [FormBuilder]
})
export class InformationsModule { }
