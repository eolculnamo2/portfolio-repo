// MUCH OF THIS CODE WAS TAKEN FROM REACT-DND WEBSITE WITH CHANGES TO MAKE
// WORK ON MY PROJECT. https://codesandbox.io/s/8nor7j0pkl

import React from 'react'
import { DragSource } from 'react-dnd'
import Types from '../../constants/dnd-types';

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
}
const Layer = ({
  hideSourceOnDrag,
  left,
  top,
  bgColor,
  connectDragSource,
  isDragging,
  children,
}) => {
  if (isDragging /*&& hideSourceOnDrag*/) {
    return null
  }
  return connectDragSource(
    <div style={Object.assign({}, style, { left, top, backgroundColor: bgColor })}>{children}</div>,
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
