/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconminusSquare = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M686.208 106.666667C813.653333 106.666667 917.333333 210.325333 917.333333 337.770667v348.437333C917.333333 813.653333 813.653333 917.333333 686.208 917.333333H337.770667C210.325333 917.333333 106.666667 813.653333 106.666667 686.208V337.770667C106.666667 210.325333 210.325333 106.666667 337.770667 106.666667h348.437333z m7.125333 373.333333h-362.666666a32 32 0 0 0 0 64h362.666666a32 32 0 0 0 0-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconminusSquare.defaultProps = {
  size: 18,
};

IconminusSquare = React.memo ? React.memo(IconminusSquare) : IconminusSquare;

export default IconminusSquare;
