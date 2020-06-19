import { Injectable } from '@angular/core';
import { Store, createSelector, createFeatureSelector, select } from '@ngrx/store';

import { EntityState } from '../reducers';
import { InformationState } from '../reducers/information.reducer';

const getEntityState = createFeatureSelector<EntityState>('entityCache');

const getInformationState = createSelector(
  getEntityState,
  (state: EntityState) => state.informations
);

const getAllInformations = createSelector(
  getInformationState,
  (state: InformationState) => state.informations
);

const getInformation = createSelector(
  getInformationState,
  (state: InformationState) => state.information
);

const getInformationsLoading = createSelector(
  getInformationState,
  (state: InformationState) => state.loading
);

@Injectable()
export class InformationSelectors {

  constructor(private store: Store<EntityState>) {}

  informations$ = this.store.pipe(select(getAllInformations));
  information$ = this.store.pipe(select(getInformation));
  informationState$ = this.store.pipe(select(getInformationState));
  loading$ = this.store.pipe(select(getInformationsLoading));

}
