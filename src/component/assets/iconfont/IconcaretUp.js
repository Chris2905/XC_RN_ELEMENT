/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconcaretUp = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M476.693333 276.032L151.872 754.709333A42.666667 42.666667 0 0 0 187.178667 821.333333h649.642666a42.666667 42.666667 0 0 0 35.306667-66.624L547.306667 276.032a42.666667 42.666667 0 0 0-70.613334 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcaretUp.defaultProps = {
  size: 18,
};

IconcaretUp = React.memo ? React.memo(IconcaretUp) : IconcaretUp;

export default IconcaretUp;
