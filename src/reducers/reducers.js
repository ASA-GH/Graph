import * as actions from '../actions/actions';
import initialState from './initialState';
import { handleActions } from 'redux-actions';
import { handleRequestStart, handleRequestSuccess, handleRequestFailure } from './reducerFactories';
import GetColor from '../RandomColor'
import { v4 as uuid } from 'uuid';

export const labelReducer = handleActions(
  {
    [actions.fetchLabels]: handleRequestStart,
    [actions.fetchLabelsSuccess]: handleRequestSuccess,
    [actions.fetchLabelsFailure]: handleRequestFailure,
  },
  initialState.labels
);

export const dataReducer = handleActions(
  {
    [actions.fetchData]: handleRequestStart,
    [actions.fetchDataSuccess]: handleRequestSuccess,
    [actions.fetchDataFailure]: handleRequestFailure,
  },
  initialState.data
);

export const handleAddChip = (state, action) => {
  let chip = {
    id: uuid(),
    title: action.payload,
    color: GetColor(),
    error: false
  };
  return [ ...state, chip ];
};

export const handleDeleteChip = (state, action) => {
  let chip = action.payload;
  return [ ...state.filter(c => c.id !== chip.id) ];
};

export const chipsReducer = handleActions(
  {
    [ actions.addChip ]: handleAddChip,
    [ actions.deleteChip ]: handleDeleteChip
  }
  , initialState.chips);