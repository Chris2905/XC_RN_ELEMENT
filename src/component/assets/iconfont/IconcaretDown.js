/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconcaretDown = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M476.693333 801.301333L151.872 322.624A42.666667 42.666667 0 0 1 187.178667 256h649.642666a42.666667 42.666667 0 0 1 35.306667 66.624L547.306667 801.301333a42.666667 42.666667 0 0 1-70.613334 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcaretDown.defaultProps = {
  size: 18,
};

IconcaretDown = React.memo ? React.memo(IconcaretDown) : IconcaretDown;

export default IconcaretDown;
