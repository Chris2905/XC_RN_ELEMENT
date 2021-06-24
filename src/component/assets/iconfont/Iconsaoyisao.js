/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconsaoyisao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M866.52 407.83c-13.25 0-24-10.75-24-24V177.69H641.19c-13.25 0-24-10.75-24-24s10.75-24 24-24h225.33c13.25 0 24 10.75 24 24v230.14c0 13.25-10.75 24-24 24zM866.52 945.35H641.19c-13.25 0-24-10.75-24-24s10.75-24 24-24h201.33V697.87c0-13.25 10.75-24 24-24s24 10.75 24 24v223.48c0 13.25-10.75 24-24 24zM98.87 407.83c-13.25 0-24-10.75-24-24V153.69c0-13.25 10.75-24 24-24h228.28c13.25 0 24 10.75 24 24s-10.75 24-24 24H122.87v206.14c0 13.25-10.75 24-24 24zM327.15 945.35H98.87c-13.25 0-24-10.75-24-24V697.87c0-13.25 10.75-24 24-24s24 10.75 24 24v199.48h204.28c13.25 0 24 10.75 24 24s-10.75 24-24 24zM870.67 564.84H97.56c-13.25 0-24-10.75-24-24s10.75-24 24-24h773.11c13.25 0 24 10.75 24 24s-10.75 24-24 24z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconsaoyisao.defaultProps = {
  size: 18,
};

Iconsaoyisao = React.memo ? React.memo(Iconsaoyisao) : Iconsaoyisao;

export default Iconsaoyisao;
