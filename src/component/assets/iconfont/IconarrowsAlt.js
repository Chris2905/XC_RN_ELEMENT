/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconarrowsAlt = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M444.992 563.285333a32 32 0 0 1 0 45.248L205.504 848.064h164.053333a32 32 0 1 1 0 64h-234.666666a32 32 0 0 1-32-32v-234.666667a32 32 0 0 1 64 0l0.021333 150.698667 232.810667-232.810667a32 32 0 0 1 45.269333 0zM890.730667 109.226667a32 32 0 0 1 32 32v234.666666a32 32 0 1 1-64 0v-150.698666L625.877333 458.048a32 32 0 1 1-45.248-45.269333L820.181333 173.226667l-164.117333 0.021333a32 32 0 0 1 0-64h234.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconarrowsAlt.defaultProps = {
  size: 18,
};

IconarrowsAlt = React.memo ? React.memo(IconarrowsAlt) : IconarrowsAlt;

export default IconarrowsAlt;
