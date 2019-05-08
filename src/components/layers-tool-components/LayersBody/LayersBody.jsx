import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import LayerContainer from '../LayerContainer';
import { DragDropContext } from 'react-dnd'
import './LayersBody.scss';

function LayersBody() {
  return (
    <div className="layersbody-wrap">
      <LayerContainer/>
    </div>
  )
}

export default DragDropContext(HTML5Backend)(LayersBody)
