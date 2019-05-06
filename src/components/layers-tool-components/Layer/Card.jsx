import React from 'react'
import { DragSource } from 'react-dnd'
const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
}
const Card = ({
  hideSourceOnDrag,
  left,
  top,
  connectDragSource,
  isDragging,
  children,
}) => {
  if (isDragging && hideSourceOnDrag) {
    return null
  }
  return connectDragSource(
    <div style={Object.assign({}, style, { left, top })}>{children}</div>,
  )
}
export default DragSource(
  ItemTypes.Card,
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
)(Card)