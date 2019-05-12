import React, { useContext } from 'react';
import { ACTION_TYPES } from '../../../constants/actions';
import { LayerToolContext } from '../../../pages/LayersTool/LayersTool';
import './ToolBar.scss';

function ToolBar() {
  const context = useContext(LayerToolContext);
  const { width, height, fill, border } = context.state.selectedLayerStats;

  return (
    <div className="toolbar-wrap">
      <div>
        <button className="toolbar-child toolbar-action-btn">Add Text</button>
        <button className="toolbar-child toolbar-action-btn">Add Layer</button>
      </div>
      <div className="toolbar-details">
        <span className="toolbar-detail">
          <h4>Width: </h4>
          <span>{width && `${width}px`}</span>
        </span>
        <span className="toolbar-detail">
          <h4>Height: </h4>
          <span>{height && `${height}px`}</span>
        </span>
        <span className="toolbar-detail">
          <h4>Fill: </h4>
          <span>{fill}</span>
        </span>
        <span className="toolbar-detail">
          <h4>Border: </h4>
          <span>{border}</span>
        </span>
      </div>
    </div>
  )
}

export default ToolBar;