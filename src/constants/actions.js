export const ACTION_TYPES = {
  UPDATE_SELECTED_LAYER: 'UPDATE_SELECTED_LAYER',
  UPDATED_LAYER_STATS: 'UPDATE_LAYER_STATS',
}

export const actions = {
  [ACTION_TYPES.UPDATE_SELECTED_LAYER]: (state, action) => ({
    ...state,
    selectedLayer: action.payload,
  }),
  [ACTION_TYPES.UPDATED_LAYER_STATS]: (state, action) => ({
    ...state,
    selectedLayerStats: action.payload,
  })
}