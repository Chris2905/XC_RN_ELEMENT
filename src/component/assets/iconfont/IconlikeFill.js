/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconlikeFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M736 128a254.933333 254.933333 0 0 0-176.384 70.464 4611.84 4611.84 0 0 0-47.317333 47.68L464.938667 199.04A254.656 254.656 0 0 0 288 128c-141.162667 0-256 114.837333-256 256 0 82.432 41.173333 144.298667 76.48 182.506667L425.365333 886.613333c25.109333 25.066667 52.949333 41.386667 86.634667 41.386667 33.706667 0 61.568-16.32 86.762667-41.514667l316.714666-320 2.218667-2.453333C955.904 516.394667 992 471.381333 992 384c0-141.162667-114.837333-256-256-256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlikeFill.defaultProps = {
  size: 18,
};

IconlikeFill = React.memo ? React.memo(IconlikeFill) : IconlikeFill;

export default IconlikeFill;
