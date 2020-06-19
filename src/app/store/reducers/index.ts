import { ActionReducerMap } from '@ngrx/store';

import * as actions from '../actions';
import * as informationsReducers from './information.reducer';


export type Action = actions.InformationAction;

export interface EntityState {
  informations: informationsReducers.InformationState;
  information: informationsReducers.InformationState;  
}

export const reducers: ActionReducerMap<EntityState> = {
  informations: informationsReducers.reducer,
  information: informationsReducers.reducer  
};
