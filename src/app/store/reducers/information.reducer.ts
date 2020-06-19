
import * as InformationActions from '../actions';
import { Information } from 'src/app/shared/interfaces';

export interface InformationState {
  informations: Information[];
  information: Information;
  loading: boolean;
  error: boolean;
}

export const initialState: InformationState = {
  informations: [],
  information: null,
  loading: false,
  error: false
};

export function reducer(
  state = initialState,
  action: InformationActions.AllInformationActions
): InformationState {

  switch (action.type) {
    case InformationActions.ADD_INFORMATION: {
      return { ...state, loading: true };
    }

    case InformationActions.ADD_INFORMATION_SUCCESS: {
      return {
        ...state,
        loading: false,
        informations: [...state.informations, { ...action.payload }]
      };
    }

    case InformationActions.ADD_INFORMATION_ERROR: {
      return { ...state, loading: false };
    }

    case InformationActions.GET_INFORMATIONS: {
      return { ...state, loading: true };
    }

    case InformationActions.GET_INFORMATIONS_ERROR: {
      return {
        ...state,
        loading: false
      };
    }

    case InformationActions.GET_INFORMATIONS_SUCCESS: {
      return {
        ...state,
        informations: action.payload,
        loading: false
      };
    }

    case InformationActions.GET_INFORMATION: {
      return { ...state, loading: true };
    }

    case InformationActions.GET_INFORMATION_ERROR: {
      console.log(action.payload);
      return {
        ...state,
        loading: false
      };
    }

    case InformationActions.GET_INFORMATION_SUCCESS: {

console.log('GET_INFORMATION_SUCCESS=>', action.payload)

      return {
        ...state,
        information: action.payload,
        loading: false
      };
    }

    case InformationActions.DELETE_INFORMATION: {
      return {
        ...state,
        loading: true,
        informations: state.informations.filter(h => h !== action.payload)
      };
    }

    case InformationActions.DELETE_INFORMATION_SUCCESS: {
      const result = { ...state, loading: false };
      return result;
    }

    case InformationActions.DELETE_INFORMATION_ERROR: {
      return {
        ...state,
        informations: [...state.informations, action.payload.requestData],
        loading: false
      };
    }

    case InformationActions.UPDATE_INFORMATION: {
      return {
        ...state,
        informations: state.informations.map(h => {
          return h;
        })
      };
    }

    case InformationActions.UPDATE_INFORMATION_SUCCESS: {
      return modifyInformationState(state, action.payload);
    }

    case InformationActions.UPDATE_INFORMATION_ERROR: {
      return {
        ...state,
        loading: false,
        informations: state.informations.map(h => {
          if (h.id === action.payload.requestData.id) {
            state.error = true;
          }
          return h;
        })
      };
    }

    case InformationActions.SET_INFORMATION_LOADING: {
      return {
        ...state,
        loading: action.payload == null ? true : action.payload
      };
    }
  }
  return state;
}

function modifyInformationState(informationState: InformationState, informationChanges: Partial<Information>): InformationState {

  return {
    ...informationState,
    loading: false,
    informations: informationState.informations.map(h => {
      if (h.id === informationChanges.id) {
        return { ...h, ...informationChanges };
      } else {
        return h;
      }
    })
  };
}
