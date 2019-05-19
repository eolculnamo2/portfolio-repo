// @flow

import React from 'react';
import PropTypes from 'prop-types';
import './LayerDragCircle.scss';

function LayerDragCircle(props: Object) {
  const { height, location } = props;

  function getCirclePosition(location: string): Object {
    const [verticalPos, horizontalPos] = location.split('-');
    return {
      position: 'absolute',
      [verticalPos]: -6 - (+height),
      [horizontalPos]: -6,
    }
  }

  return (
    <div
      className="layer-drag-circle"
      style={getCirclePosition(location)}
    />
  )
}

LayerDragCircle.defaultProps = {
  height: '',
  location: 'top-left',
}

LayerDragCircle.propTypes = {
  height: PropTypes.string,
  location: PropTypes.string,
}


export default LayerDragCircle;
