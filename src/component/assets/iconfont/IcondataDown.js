/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IcondataDown = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M164.736 233.898667l284.8 661.333333a61.333333 61.333333 0 0 0 112.405333 0.64L856.597333 232.746667a86.784 86.784 0 0 0-120.597333-111.573334l-165.653333 89.578667a122.666667 122.666667 0 0 1-116.693334 0l-165.653333-89.6a88.426667 88.426667 0 0 0-123.264 112.768z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IcondataDown.defaultProps = {
  size: 18,
};

IcondataDown = React.memo ? React.memo(IcondataDown) : IcondataDown;

export default IcondataDown;
