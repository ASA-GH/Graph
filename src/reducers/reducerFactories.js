export const handleSingleValueRequest = (state, action) => (
   action.payload
);

/**
 * Common requests (start, success, failure)
 */

export const handleRequestStart = state => ({
  ...state,
  isFetching: true,
  error: null,
});

export const handleRequestSuccess = (state, action) => ({
  ...state,
  isFetching: false,
  content: action.payload ? action.payload : null,
  error: null,
});

export const handleRequestFailure = (state, error) => ({
  ...state,
  isFetching: false,
  content: {},
  error: error.payload,
});

/**
 * Pageble requests
 */
export const handlePagebleRequestSuccess = (state, action) => ({
  ...state,
  isFetching: false,
  totalPages: action.payload.totalPages,
  requestParams: action.payload.requestParams,
  content: action.payload.content,
});

export const handlePagebleRequestFailure = (state, error) => ({
  ...state,
  isFetching: false,
  content: [],
  error: error.payload,
});