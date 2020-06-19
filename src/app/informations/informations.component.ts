import { Component, OnInit } from '@angular/core';
import { Information } from '../shared/interfaces';
import { InformationDataService } from '../core/services/data.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { EntityState } from '../store/reducers';
import { InformationSelectors } from '../store/services/information.selectors';
import { InformationAction, GetInformations } from '../store/actions';



@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {
  [x: string]: any;
  
  title = 'Informations';
  informations$: Observable<Information[]>;
  loading$: Observable<boolean>;

  constructor(
      private store: Store<EntityState>,
      private informationSelectors: InformationSelectors) {
      this.informations$ = this.informationSelectors.informations$;
      this.loading$ = this.informationSelectors.loading$;
  }

  ngOnInit() {
      this.getInformations();
  }

  getInformations() {
      this.store.dispatch(new GetInformations());
  }

}
