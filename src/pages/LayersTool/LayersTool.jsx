import React, { useState } from 'react';
import { LayersBody, ToolBar } from '../../components/layers-tool-components';
import './LayersTool.scss';

const initialLayerState= {
  testContext: 'testing context'
}

export const LayerToolContext = React.createContext(initialLayerState);

function LayersTool() {
  const [state, updateState] = useState(initialLayerState);
  return (
    <div className="layers-main-wrap">
      <h1>Layers Tool</h1>
      <em>
        As much as I'd love to claim I know React-DND well, I heavily relied on using code from the <a href="http://react-dnd.github.io/react-dnd/examples/drag-around/custom-drag-layer">react-dnd website</a>
      </em>
      <LayerToolContext.Provider value={state}>
        <ToolBar />
        <LayersBody />
      </LayerToolContext.Provider>
    </div>
  )
}

export default LayersTool;
