import React from 'react';
import { LayersBody } from '../../components/layers-tool-components';
import './LayersTool.scss';

function LayersTool() {
  return (
    <div className="layers-main-wrap">
      <h1>Layers Tool</h1>
      <LayersBody />
    </div>
  )
}

export default LayersTool;
