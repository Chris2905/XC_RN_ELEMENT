/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconminusSquareFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M298.666667 480m32 0l362.666666 0q32 0 32 32l0 0q0 32-32 32l-362.666666 0q-32 0-32-32l0 0q0-32 32-32Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M337.770667 170.666667C245.632 170.666667 170.666667 245.632 170.666667 337.770667v348.437333C170.666667 778.346667 245.632 853.333333 337.770667 853.333333h348.437333C778.346667 853.333333 853.333333 778.346667 853.333333 686.208V337.770667C853.333333 245.632 778.346667 170.666667 686.208 170.666667H337.770667z m0 746.666666C210.325333 917.333333 106.666667 813.653333 106.666667 686.208V337.770667C106.666667 210.325333 210.325333 106.666667 337.770667 106.666667h348.437333C813.653333 106.666667 917.333333 210.325333 917.333333 337.770667v348.437333C917.333333 813.653333 813.653333 917.333333 686.208 917.333333H337.770667z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconminusSquareFill.defaultProps = {
  size: 18,
};

IconminusSquareFill = React.memo ? React.memo(IconminusSquareFill) : IconminusSquareFill;

export default IconminusSquareFill;
