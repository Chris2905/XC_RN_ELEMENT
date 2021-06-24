/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IcondownCircle = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M64 512c0 247.424 200.576 448 448 448s448-200.576 448-448S759.424 64 512 64 64 264.576 64 512z m64 0c0-212.074667 171.925333-384 384-384s384 171.925333 384 384-171.925333 384-384 384S128 724.074667 128 512z m158.72-52.053333l196.096 196.117333a32 32 0 0 0 45.248 0l196.096-196.096a32 32 0 0 0-45.226667-45.269333l-173.504 173.461333-173.461333-173.44a32 32 0 0 0-45.269333 45.226667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IcondownCircle.defaultProps = {
  size: 18,
};

IcondownCircle = React.memo ? React.memo(IcondownCircle) : IcondownCircle;

export default IcondownCircle;
