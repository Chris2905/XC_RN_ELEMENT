/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconcheckBlod = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M875.562667 252.885333a53.333333 53.333333 0 0 1 0 75.413334L445.866667 757.973333a53.354667 53.354667 0 0 1-71.402667 16.682667 52.544 52.544 0 0 1-15.466667-12.949333l-206.549333-206.592a53.333333 53.333333 0 0 1 75.434667-75.434667l172.714666 172.714667 399.530667-399.509334a53.333333 53.333333 0 0 1 75.434667 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcheckBlod.defaultProps = {
  size: 18,
};

IconcheckBlod = React.memo ? React.memo(IconcheckBlod) : IconcheckBlod;

export default IconcheckBlod;
