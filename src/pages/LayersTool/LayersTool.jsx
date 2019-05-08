import React, { useReducer } from 'react';
import { LayersBody, ToolBar } from '../../components/layers-tool-components';
import { actions } from '../../constants/actions';
import './LayersTool.scss';

const initialLayerState= {
  testContext: 'testing context'
}

//https://medium.com/@AWCwebdeveloper/react-without-redux-aaad33dafbb8
export const LayerToolContext = React.createContext(initialLayerState);
const reducer = (state=initialLayerState, action) => actions[action.type](state, action);

function LayersTool() {
  const [state, dispatch] = useReducer(reducer, initialLayerState);
  return (
    <div className="layers-main-wrap">
      <h1>Layers Tool</h1>
      <em>
        As much as I'd love to claim I know React-DND well, I heavily relied on using code from the <a href="http://react-dnd.github.io/react-dnd/examples/drag-around/custom-drag-layer">react-dnd website</a>
      </em>
      <LayerToolContext.Provider value={{state, dispatch}}>
        <ToolBar />
        <LayersBody />
      </LayerToolContext.Provider>
    </div>
  )
}

export default LayersTool;
