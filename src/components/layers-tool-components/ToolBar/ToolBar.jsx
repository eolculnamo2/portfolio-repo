import React, { useContext } from 'react';
import { LayerToolContext } from '../../../pages/LayersTool/LayersTool';
import './ToolBar.scss';

function ToolBar() {
  const context = useContext(LayerToolContext);
  const { testContext } = context;
  console.log(testContext)

  return (
    <div className="toolbar-wrap">
      <button className="toolbar-child toolbar-action-btn">Add Text</button>
      <button className="toolbar-child toolbar-action-btn">Add Layer</button>
    </div>
  )
}

export default ToolBar;