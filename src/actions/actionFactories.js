import { createActions, createAction } from 'redux-actions';

export const createSimpleAction = name => {
  return createAction(name);
};

export const createSimpleActions = name => {
  return createActions({
    [name]: null,
    [`${name}_SUCCESS`]: null,
    [`${name}_FAILURE`]: null,
  });
};
