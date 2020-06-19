import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, switchMap } from 'rxjs/operators';
import * as InformationActions from '../actions';
import { InformationDataService } from '../services/information-data.service';


const toAction = InformationActions.toAction();
type InformationAction = InformationActions.InformationAction;
type GetInformationAction = InformationActions.GetInformation;

@Injectable()
export class InformationEffects {

  @Effect()
  getInformations$: Observable<Action> = this.actions$
    .pipe(
      ofType(InformationActions.GET_INFORMATIONS),
      switchMap(() =>
        toAction(
          this.informationDataService.getInformations(),
          InformationActions.GetInformationsSuccess,
          InformationActions.GetInformationsError
        )
      )
    );

    @Effect()
    getInformation$: Observable<Action> = this.actions$
      .pipe(
        ofType(InformationActions.GET_INFORMATION),
        switchMap((action: GetInformationAction) =>
          toAction(
            this.informationDataService.getInformation(action.payload),
            InformationActions.GetInformationSuccess,
            InformationActions.GetInformationError
          )
        )
      );

  @Effect()
  addInformation$: Observable<Action> = this.actions$
    .pipe(
      ofType(InformationActions.ADD_INFORMATION),
      concatMap((action: InformationAction) =>
        toAction(
          this.informationDataService.addInformation(action.payload),
          InformationActions.AddInformationSuccess,
          InformationActions.AddInformationError
        )
      )
    );

  @Effect()
  deleteInformation$: Observable<Action> = this.actions$
    .pipe(
      ofType(InformationActions.DELETE_INFORMATION),
      concatMap((action: InformationAction) =>
        toAction(
          this.informationDataService.deleteInformation(action.payload),
          InformationActions.DeleteInformationSuccess,
          InformationActions.DeleteInformationError
        )
      )
    );

  @Effect()
  updateInformation$: Observable<Action> = this.actions$
    .pipe(
      ofType<InformationActions.UpdateInformation>(InformationActions.UPDATE_INFORMATION),
      concatMap((action: InformationAction) =>
        toAction(
          this.informationDataService.updateInformation(action.payload),
          InformationActions.UpdateInformationSuccess,
          InformationActions.UpdateInformationError
        )
      )
    );

  constructor(
    private actions$: Actions,
    private informationDataService: InformationDataService
  ) {}

}
