/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconcaijian = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 853.333333H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666666V256H42.666667a42.666667 42.666667 0 0 1 0-85.333333h128V42.666667a42.666667 42.666667 0 0 1 85.333333 0v725.333333h725.333333a42.666667 42.666667 0 0 1 0 85.333333h-128v128a42.666667 42.666667 0 0 1-85.333333 0v-128z m0-213.333333V256H384a42.666667 42.666667 0 0 1 0-85.333333h426.666667a42.666667 42.666667 0 0 1 42.666666 42.666666v426.666667a42.666667 42.666667 0 0 1-85.333333 0z"
        fill={getIconColor(color, 0, '#9099B0')}
      />
    </Svg>
  );
};

Iconcaijian.defaultProps = {
  size: 18,
};

Iconcaijian = React.memo ? React.memo(Iconcaijian) : Iconcaijian;

export default Iconcaijian;
