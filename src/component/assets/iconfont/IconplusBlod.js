/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconplusBlod = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 74.666667A53.333333 53.333333 0 0 1 565.333333 128v341.333333h341.333334a53.333333 53.333333 0 1 1 0 106.666667H565.312l0.021333 341.333333a53.333333 53.333333 0 1 1-106.666666 0l-0.021334-341.333333H117.333333a53.333333 53.333333 0 1 1 0-106.666667h341.333334V128A53.333333 53.333333 0 0 1 512 74.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconplusBlod.defaultProps = {
  size: 18,
};

IconplusBlod = React.memo ? React.memo(IconplusBlod) : IconplusBlod;

export default IconplusBlod;
