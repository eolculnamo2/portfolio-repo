export const ACTION_TYPES = {
  UPDATE_TEST: 'UPDATE_TEST',
}

export const actions = {
  [ACTION_TYPES.UPDATE_TEST]: (state, action) => ({
    ...state,
    testContext: action.payload,
  })
}