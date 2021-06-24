/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconcloseBlod = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M889.130667 134.869333a53.333333 53.333333 0 0 1 0 75.434667L587.434667 511.978667l301.696 301.717333a53.333333 53.333333 0 1 1-75.434667 75.434667L512.021333 587.413333 210.304 889.130667a53.333333 53.333333 0 1 1-75.434667-75.434667L436.586667 512 134.869333 210.304a53.333333 53.333333 0 1 1 75.434667-75.434667L512 436.565333 813.696 134.869333a53.333333 53.333333 0 0 1 75.434667 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcloseBlod.defaultProps = {
  size: 18,
};

IconcloseBlod = React.memo ? React.memo(IconcloseBlod) : IconcloseBlod;

export default IconcloseBlod;
