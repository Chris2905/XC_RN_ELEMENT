/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconcopy = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 341.333333h-384c-72.533333 0-128 55.466667-128 128v384c0 72.533333 55.466667 128 128 128h384c72.533333 0 128-55.466667 128-128v-384c0-72.533333-55.466667-128-128-128z m42.666667 512c0 25.6-17.066667 42.666667-42.666667 42.666667h-384c-25.6 0-42.666667-17.066667-42.666666-42.666667v-384c0-25.6 17.066667-42.666667 42.666666-42.666666h384c25.6 0 42.666667 17.066667 42.666667 42.666666v384z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M213.333333 597.333333H170.666667c-25.6 0-42.666667-17.066667-42.666667-42.666666V170.666667c0-25.6 17.066667-42.666667 42.666667-42.666667h384c25.6 0 42.666667 17.066667 42.666666 42.666667v42.666666c0 25.6 17.066667 42.666667 42.666667 42.666667s42.666667-17.066667 42.666667-42.666667V170.666667c0-72.533333-55.466667-128-128-128H170.666667C98.133333 42.666667 42.666667 98.133333 42.666667 170.666667v384c0 72.533333 55.466667 128 128 128h42.666666c25.6 0 42.666667-17.066667 42.666667-42.666667s-17.066667-42.666667-42.666667-42.666667z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconcopy.defaultProps = {
  size: 18,
};

Iconcopy = React.memo ? React.memo(Iconcopy) : Iconcopy;

export default Iconcopy;