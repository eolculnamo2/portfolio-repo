export const ACTION_TYPES = {
  UPDATE_TEST: 'UPDATE_TEST',
  UPDATE_SELECTED_LAYER: 'UPDATE_SELECTED_LAYER',
}

export const actions = {
  [ACTION_TYPES.UPDATE_TEST]: (state, action) => ({
    ...state,
    testContext: action.payload,
  }),
  [ACTION_TYPES.UPDATE_SELECTED_LAYER]: (state, action) => ({
    ...state,
    selectedLayer: action.payload,
  }),
}