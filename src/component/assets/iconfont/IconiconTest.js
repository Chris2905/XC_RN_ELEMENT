/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconiconTest = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 768V301.248l361.344 361.376a32.032 32.032 0 0 0 45.312 0L896 301.248V768H128z m384-173.248L173.248 256h677.504L512 594.752zM64 832h896V192H64v640z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </Svg>
  );
};

IconiconTest.defaultProps = {
  size: 18,
};

IconiconTest = React.memo ? React.memo(IconiconTest) : IconiconTest;

export default IconiconTest;
