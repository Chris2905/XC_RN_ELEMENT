/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconsearch = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M480 64C709.76 64 896 250.24 896 480c0 103.466667-37.76 198.101333-100.266667 270.869333 1.024 0.746667 2.026667 1.642667 2.986667 2.581334l150.826667 150.848a32 32 0 1 1-45.226667 45.248l-150.869333-150.826667a32.32 32.32 0 0 1-2.624-2.986667A414.101333 414.101333 0 0 1 480 896C250.24 896 64 709.76 64 480S250.24 64 480 64z m0 64C285.589333 128 128 285.589333 128 480S285.589333 832 480 832 832 674.410667 832 480 674.410667 128 480 128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconsearch.defaultProps = {
  size: 18,
};

Iconsearch = React.memo ? React.memo(Iconsearch) : Iconsearch;

export default Iconsearch;
