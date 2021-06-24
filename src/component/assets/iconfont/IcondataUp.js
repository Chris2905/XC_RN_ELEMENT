/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IcondataUp = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M164.736 811.434667l284.8-661.333334a61.333333 61.333333 0 0 1 112.405333-0.64L856.597333 812.586667a86.784 86.784 0 0 1-120.597333 111.573333l-165.653333-89.578667a122.666667 122.666667 0 0 0-116.693334 0l-165.653333 89.6a88.426667 88.426667 0 0 1-123.264-112.768z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IcondataUp.defaultProps = {
  size: 18,
};

IcondataUp = React.memo ? React.memo(IcondataUp) : IcondataUp;

export default IcondataUp;
