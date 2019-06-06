// @flow

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './LayerDragCircle.scss';

function LayerDragCircle(props: Object): JSX.Element {

  const [startLeft, setStartLeft] = useState(null);
  const [startTop, setStartTop] = useState(null);
  const { height, location } = props;

  useEffect(() => {
    console.log(startTop);
  }, [startTop, startLeft]);

  function getCirclePosition(location: string): Object {
    const [verticalPos, horizontalPos] = location.split('-');
    return {
      position: 'absolute',
      [verticalPos]: -6 - (+height),
      [horizontalPos]: -6,
    }
  }

  const initiateDrag = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top } = e.target.getBoundingClientRect();
    setStartLeft(left);
    setStartTop(top);
  };

  return (
    <div
      onClick={initiateDrag}
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
