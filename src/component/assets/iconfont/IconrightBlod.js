/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconrightBlod = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M368.384 126.549333L715.306667 473.514667a53.333333 53.333333 0 0 1 0 75.413333L368.384 895.893333a53.333333 53.333333 0 0 1-75.434667-75.434666l309.226667-309.248L292.949333 201.984a53.333333 53.333333 0 0 1 75.434667-75.434667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconrightBlod.defaultProps = {
  size: 18,
};

IconrightBlod = React.memo ? React.memo(IconrightBlod) : IconrightBlod;

export default IconrightBlod;
