import React from 'react';
import Card from '../Layer/Card';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import './LayersBody.scss';

function LayersBody() {
  return (
    <div className="layersbody-wrap">
      <Card/>
    </div>
  )
}

export default DragDropContext(HTML5Backend)(LayersBody)
