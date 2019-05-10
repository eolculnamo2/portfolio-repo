// MUCH OF THIS CODE WAS TAKEN FROM REACT-DND WEBSITE WITH CHANGES TO MAKE
// WORK ON MY PROJECT. https://codesandbox.io/s/8nor7j0pkl

import React, { useContext } from 'react'
import { DropTarget } from 'react-dnd'
import Types from '../../constants/dnd-types';
import update from 'immutability-helper'
import Layer from './Layer';


const styles = {
  width: '100%',
  height: '100%',
  position: 'relative',
}
class LayerContainer extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      boxes: {
        a: { top: 20, left: 80, bgColor: '#4286f4' },
        b: { top: 180, left: 20, bgColor: '#4286f4' },
      },
    }
  }

  render() {
    const { hideSourceOnDrag, connectDropTarget, selectLayer } = this.props
    const { boxes } = this.state
    return connectDropTarget(
      <div style={styles}>
        {Object.keys(boxes).map(key => {
          const { left, top, bgColor } = boxes[key]
          return (
            <span onClick={() => selectLayer(key)} key={key}>
              <Layer
                id={key}
                left={left}
                top={top}
                bgColor={bgColor}
                hideSourceOnDrag={hideSourceOnDrag}
              >
              </Layer>
            </span>
          )
        })}
      </div>,
    )
  }
  moveBox(id, left, top) {
    this.setState(
      update(this.state, {
        boxes: {
          [id]: {
            $merge: { left, top },
          },
        },
      }),
    )
  }
}
export default DropTarget(
  Types.LAYER,
  {
    drop(props, monitor, component) {
      if (!component) {
        return
      }
      const item = monitor.getItem()
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      component.moveBox(item.id, left, top)
    },
  },
  connect => ({
    connectDropTarget: connect.dropTarget(),
  }),
)(LayerContainer)
