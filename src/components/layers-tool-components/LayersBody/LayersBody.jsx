import React, { useContext } from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import LayerContainer from '../LayerContainer';
import { DragDropContext } from 'react-dnd'
import { LayerToolContext } from '../../../pages/LayersTool/LayersTool';
import { ACTION_TYPES } from '../../../constants/actions';
import './LayersBody.scss';

function LayersBody() {
  const context = useContext(LayerToolContext);
  const updateSelectedLayer = payload => context.dispatch({type: ACTION_TYPES.UPDATE_SELECTED_LAYER, payload});
  console.log(context.state)
  return (
    <div className="layersbody-wrap">
      <LayerContainer selectLayer={updateSelectedLayer} />
    </div>
  )
}

export default DragDropContext(HTML5Backend)(LayersBody)
