// MUCH OF THIS CODE WAS TAKEN FROM REACT-DND WEBSITE WITH CHANGES TO MAKE
// WORK ON MY PROJECT. https://codesandbox.io/s/8nor7j0pkl

import React, { useContext } from 'react'
import { DragSource } from 'react-dnd'
import Types from '../../constants/dnd-types';
import LayerDragCircle from './LayerDragCircle/LayerDragCircle';
import  { LayerToolContext } from '../../pages/LayersTool/LayersTool';


const Layer = ({
  hideSourceOnDrag,
  left,
  top,
  bgColor,
  connectDragSource,
  isDragging,
  children,
  layerBoxRef
}) => {

  const { boxRef, height } = useContext(LayerToolContext).state.selectedLayerStats;

  const style = {
    position: 'absolute',
    border: '1px dashed gray',
    backgroundColor: 'white',
    cursor: 'move',
    width: 34,
    height: 45,
  }

  const innerStyle = {
    position: 'relative',
    display: layerBoxRef === boxRef ? 'block' : 'none',
  }

  if (isDragging /*&& hideSourceOnDrag*/) {
    return null
  }
  return connectDragSource(
    <div style={{...style, left, top, backgroundColor: bgColor }}>
      {children}
      <div style={innerStyle}>
        <LayerDragCircle
          location="top-right"
        />
        <LayerDragCircle
          location="top-left"
        />
        <LayerDragCircle
          location="bottom-right"
          height={ height }
        />
        <LayerDragCircle
          location="bottom-left"
          height={ height }
          />
      </div>
    </div>,
  )
}
export default DragSource(
  Types.LAYER,
  {
    beginDrag(props) {
      const { id, left, top } = props
      return { id, left, top }
    },
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(Layer);
