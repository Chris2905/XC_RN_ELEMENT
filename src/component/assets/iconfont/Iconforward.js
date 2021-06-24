/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconforward = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M942.08 546.944l-330.944 231.68a42.666667 42.666667 0 0 1-67.136-34.986667V280.362667a42.666667 42.666667 0 0 1 67.136-34.944l330.922667 231.658666a42.666667 42.666667 0 0 1 0 69.888z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M526.08 546.944L195.114667 778.624A42.666667 42.666667 0 0 1 128 743.616V280.362667a42.666667 42.666667 0 0 1 67.136-34.944l330.922667 231.658666a42.666667 42.666667 0 0 1 0 69.888z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconforward.defaultProps = {
  size: 18,
};

Iconforward = React.memo ? React.memo(Iconforward) : Iconforward;

export default Iconforward;
