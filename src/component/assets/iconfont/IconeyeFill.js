/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconeyeFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.128 160c307.434667 0 431.914667 289.578667 437.013333 301.888 13.845333 26.133333 14.805333 71.082667 0.853334 101.418667 0 0.405333-116.053333 300.693333-437.866667 300.693333C190.293333 864 74.602667 564.330667 73.472 561.28c-13.205333-26.709333-12.778667-70.72 2.346667-101.141333C79.936 450.197333 204.693333 160 512.149333 160zM512 320a149.333333 149.333333 0 0 0-149.333333 149.333333v85.333334a149.333333 149.333333 0 0 0 298.666666 0v-85.333334a149.333333 149.333333 0 0 0-149.333333-149.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconeyeFill.defaultProps = {
  size: 18,
};

IconeyeFill = React.memo ? React.memo(IconeyeFill) : IconeyeFill;

export default IconeyeFill;
