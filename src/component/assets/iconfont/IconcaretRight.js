/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconcaretRight = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M779.968 547.306667L301.290667 872.128A42.666667 42.666667 0 0 1 234.666667 836.821333V187.178667a42.666667 42.666667 0 0 1 66.624-35.306667l478.677333 324.821333a42.666667 42.666667 0 0 1 0 70.613334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcaretRight.defaultProps = {
  size: 18,
};

IconcaretRight = React.memo ? React.memo(IconcaretRight) : IconcaretRight;

export default IconcaretRight;
