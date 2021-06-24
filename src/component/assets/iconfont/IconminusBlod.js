/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconminusBlod = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M64 469.333333m53.333333 0l789.333334 0q53.333333 0 53.333333 53.333334l0 0q0 53.333333-53.333333 53.333333l-789.333334 0q-53.333333 0-53.333333-53.333333l0 0q0-53.333333 53.333333-53.333334Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconminusBlod.defaultProps = {
  size: 18,
};

IconminusBlod = React.memo ? React.memo(IconminusBlod) : IconminusBlod;

export default IconminusBlod;
