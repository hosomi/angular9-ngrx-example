import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationsComponent } from './informations/informations.component';
import { AppStoreModule } from './store/app-store.module';
import { InformationsModule } from './informations/informations.module';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/services/in-memory-data.service';

export const metaReducers: MetaReducer<any>[] = environment.production ? [] : [];

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,    
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    InformationsModule,
    AppStoreModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
