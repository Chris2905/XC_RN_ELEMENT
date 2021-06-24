/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconshareFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 64a128 128 0 1 1-88.661333 220.330667l-301.482667 188.394666C381.866667 485.12 384 498.304 384 512c0 16.298667-3.050667 31.893333-8.597333 46.229333l298.773333 186.709334a128 128 0 1 1-30.485333 56.426666L337.962667 610.346667a128 128 0 1 1 5.653333-191.658667l302.08-188.778667A128 128 0 0 1 768 64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconshareFill.defaultProps = {
  size: 18,
};

IconshareFill = React.memo ? React.memo(IconshareFill) : IconshareFill;

export default IconshareFill;
