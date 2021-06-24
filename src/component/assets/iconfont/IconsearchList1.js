/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconsearchList1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M753.578667 180.992c147.946667 39.637333 235.733333 191.701333 196.096 339.648a276.266667 276.266667 0 0 1-114.816 159.509333l74.602666 129.216a32 32 0 0 1-55.424 32l-76.373333-132.245333a276.053333 276.053333 0 0 1-167.637333 7.637333c-147.946667-39.637333-235.754667-191.722667-196.117334-339.669333 39.637333-147.946667 191.722667-235.733333 339.669334-196.096z m-16.576 61.824c-113.792-30.506667-230.784 37.034667-261.269334 150.826667-30.506667 113.813333 37.034667 230.805333 150.848 261.290666 113.813333 30.506667 230.784-37.034667 261.290667-150.848 30.485333-113.813333-37.056-230.784-150.869333-261.269333z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M64 234.666667m32 0l256 0q32 0 32 32l0 0q0 32-32 32l-256 0q-32 0-32-32l0 0q0-32 32-32Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M64 469.333333m32 0l213.333333 0q32 0 32 32l0 0q0 32-32 32l-213.333333 0q-32 0-32-32l0 0q0-32 32-32Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M64 704m32 0l341.333333 0q32 0 32 32l0 0q0 32-32 32l-341.333333 0q-32 0-32-32l0 0q0-32 32-32Z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </Svg>
  );
};

IconsearchList1.defaultProps = {
  size: 18,
};

IconsearchList1 = React.memo ? React.memo(IconsearchList1) : IconsearchList1;

export default IconsearchList1;
