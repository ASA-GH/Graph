import { createSimpleActions, createSimpleAction } from './actionFactories';

export const { fetchLabels, fetchLabelsSuccess, fetchLabelsFailure } = createSimpleActions('FETCH_LABELS');
export const { fetchData, fetchDataSuccess, fetchDataFailure } = createSimpleActions('FETCH_DATA');

export const addChip = createSimpleAction('ADD_CHIP');
export const deleteChip = createSimpleAction('DELETE_CHIP');
export const setCurrentLabel = createSimpleAction('SET_CURRENT_LABEL');