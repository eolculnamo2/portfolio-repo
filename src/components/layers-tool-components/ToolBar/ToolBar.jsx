import React, { useContext } from 'react';
import { ACTION_TYPES } from '../../../constants/actions';
import { LayerToolContext } from '../../../pages/LayersTool/LayersTool';
import './ToolBar.scss';

function ToolBar() {
  const context = useContext(LayerToolContext);
  const { testContext } = context.state;

  const updateText = () => context.dispatch({type: ACTION_TYPES.UPDATE_TEST, payload: 'testUpdated'});

  return (
    <div className="toolbar-wrap">
      <div>
        <button onClick={updateText} className="toolbar-child toolbar-action-btn">Add Text</button>
        <button className="toolbar-child toolbar-action-btn">Add Layer</button>
      </div>
      <div className="toolbar-details">
        <span>
          <h4>Width</h4>
        </span>
        <span>
          <h4>Height</h4>
        </span>
        <span>
          <h4>Fill</h4>
        </span>
        <span>
          <h4>Border</h4>
        </span>
      </div>
    </div>
  )
}

export default ToolBar;