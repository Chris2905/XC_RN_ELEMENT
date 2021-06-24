/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconplusSquare = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M686.208 106.666667C813.653333 106.666667 917.333333 210.325333 917.333333 337.770667v348.437333C917.333333 813.653333 813.653333 917.333333 686.208 917.333333H337.770667C210.325333 917.333333 106.666667 813.653333 106.666667 686.208V337.770667C106.666667 210.325333 210.325333 106.666667 337.770667 106.666667h348.437333zM512 298.666667a32 32 0 0 0-32 32v149.333333h-149.333333a32 32 0 0 0 0 64h149.312l0.021333 149.333333a32 32 0 0 0 64 0l-0.021333-149.333333H693.333333a32 32 0 0 0 0-64h-149.333333v-149.333333A32 32 0 0 0 512 298.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconplusSquare.defaultProps = {
  size: 18,
};

IconplusSquare = React.memo ? React.memo(IconplusSquare) : IconplusSquare;

export default IconplusSquare;
