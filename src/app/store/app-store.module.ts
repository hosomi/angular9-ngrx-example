import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InformationDataService } from './services/information-data.service';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { InformationEffects } from './effects/information.effects';
import { InformationSelectors } from './services/information.selectors';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('entityCache', reducers),
    EffectsModule.forFeature([ InformationEffects ])
  ],
  providers: [
    InformationDataService,
    InformationSelectors,
  ],
  exports: [StoreModule, EffectsModule]
})

export class AppStoreModule { }
