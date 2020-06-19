import { Action } from '@ngrx/store';


import { DataAction, DataErrorAction } from './data.actions';
import { Information } from 'src/app/shared/interfaces';
import { DataServiceError } from '../services/data-error.service';

export const ADD_INFORMATION = '[Information] ADD_INFORMATION';
export const ADD_INFORMATION_ERROR = '[Information] ADD_INFORMATION_ERROR';
export const ADD_INFORMATION_SUCCESS = '[Information] ADD_INFORMATION_SUCCESS';

export const GET_INFORMATION = '[Information] GET_INFORMATION';
export const GET_INFORMATION_SUCCESS = '[Information] GET_INFORMATION_SUCCESS';
export const GET_INFORMATION_ERROR = '[Information] GET_INFORMATION_ERROR';

export const UPDATE_INFORMATION = '[Information] UPDATE_INFORMATION';
export const UPDATE_INFORMATION_SUCCESS = '[Information] UPDATE_INFORMATION_SUCCESS';
export const UPDATE_INFORMATION_ERROR = '[Information] UPDATE_INFORMATION_ERROR';

export const GET_INFORMATIONS = '[Information] GET_INFORMATIONES';
export const GET_INFORMATIONS_SUCCESS = '[Information] GET_INFORMATIONES_SUCCESS';
export const GET_INFORMATIONS_ERROR = '[Information] GET_INFORMATIONES_ERROR';

export const DELETE_INFORMATION = '[Information] DELETE_INFORMATION';
export const DELETE_INFORMATION_SUCCESS = '[Information] DELETE_INFORMATION_SUCCESS';
export const DELETE_INFORMATION_ERROR = '[Information] DELETE_INFORMATION_ERROR';

export const SET_INFORMATION_LOADING = '[Information] SET_INFORMATION_LOADING';

export abstract class InformationAction implements DataAction<Information> {
  readonly type: string;
  constructor(public readonly payload: Information) {}
}

export abstract class InformationErrorAction implements DataErrorAction<Information> {
  readonly type: string;
  constructor(public readonly payload: DataServiceError<Information>) {}
}

export class GetInformations implements Action {
  readonly type = GET_INFORMATIONS;
}

export class GetInformationsSuccess implements Action {
  readonly type = GET_INFORMATIONS_SUCCESS;
  constructor(public readonly payload: Information[]) {}
}

export class GetInformationsError implements Action {
  readonly type = GET_INFORMATIONS_ERROR;
  constructor(public readonly payload: any) {}
}

export class GetInformation implements Action {
  readonly type = GET_INFORMATION;
  constructor(public readonly payload: number) {}
}

export class GetInformationSuccess implements Action {
  readonly type = GET_INFORMATION_SUCCESS;
  constructor(public readonly payload: Information) {}
}

export class GetInformationError extends InformationErrorAction {
  readonly type = GET_INFORMATION_ERROR;
}

export class AddInformation extends InformationAction {
  readonly type = ADD_INFORMATION;
}

export class AddInformationSuccess extends InformationAction {
  readonly type = ADD_INFORMATION_SUCCESS;
}

export class AddInformationError extends InformationErrorAction {
  readonly type = ADD_INFORMATION_ERROR;
}

export class UpdateInformation extends InformationAction {
  readonly type = UPDATE_INFORMATION;
}

export class UpdateInformationSuccess extends InformationAction {
  readonly type = UPDATE_INFORMATION_SUCCESS;
}

export class UpdateInformationError extends InformationErrorAction {
  readonly type = UPDATE_INFORMATION_ERROR;
}

export class DeleteInformation extends InformationAction {
  readonly type = DELETE_INFORMATION;
}

export class DeleteInformationSuccess extends InformationAction {
  readonly type = DELETE_INFORMATION_SUCCESS;
}

export class DeleteInformationError extends InformationErrorAction {
  readonly type = DELETE_INFORMATION_ERROR;
}

export class SetInformationLoading {
  readonly type = SET_INFORMATION_LOADING;
  constructor(public payload = true) {}
}

export type AllInformationActions =
  | GetInformation
  | GetInformationSuccess
  | GetInformationError
  | UpdateInformation
  | UpdateInformationSuccess
  | UpdateInformationError
  | GetInformations
  | GetInformationsSuccess
  | GetInformationsError
  | AddInformation
  | AddInformationSuccess
  | AddInformationError
  | DeleteInformation
  | DeleteInformationSuccess
  | DeleteInformationError
  | SetInformationLoading;
