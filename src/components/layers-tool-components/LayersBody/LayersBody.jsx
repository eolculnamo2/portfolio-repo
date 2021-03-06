// @flow

import React, { useContext } from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import LayerContainer from '../LayerContainer';
import { DragDropContext } from 'react-dnd'
import { LayerToolContext } from '../../../pages/LayersTool/LayersTool';
import { ACTION_TYPES } from '../../../constants/actions';
import type { LayerStats } from '../../../../types/types';
import './LayersBody.scss';

function LayersBody() {
  const context = useContext(LayerToolContext);

  function selectLayer(name, boxRef, fill) {

    const width = boxRef.current.firstChild.offsetWidth;
    const height = boxRef.current.firstChild.offsetHeight;
    const border = boxRef.current.firstChild.style.border;


    const layerStats: LayerStats = {
      height,
      width,
      fill,
      border,
      boxRef,
    }

    context.dispatch({type: ACTION_TYPES.UPDATE_SELECTED_LAYER, payload: name});
    context.dispatch({type: ACTION_TYPES.UPDATED_LAYER_STATS, payload: layerStats})
  }

  return (
    <div className="layersbody-wrap">
      <LayerContainer selectLayer={selectLayer} />
    </div>
  )
}

export default DragDropContext(HTML5Backend)(LayersBody)
