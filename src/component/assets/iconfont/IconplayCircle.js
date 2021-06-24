/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconplayCircle = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64c247.424 0 448 200.576 448 448s-200.576 448-448 448S64 759.424 64 512 264.576 64 512 64z m0 64C299.925333 128 128 299.925333 128 512s171.925333 384 384 384 384-171.925333 384-384S724.074667 128 512 128z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M642.730667 538.624l-166.314667 110.869333A32 32 0 0 1 426.666667 622.869333V401.130667a32 32 0 0 1 49.749333-26.624l166.314667 110.869333a32 32 0 0 1 0 53.248z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconplayCircle.defaultProps = {
  size: 18,
};

IconplayCircle = React.memo ? React.memo(IconplayCircle) : IconplayCircle;

export default IconplayCircle;
