/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconmore = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M224 608A96.106667 96.106667 0 0 1 128 512c0-52.928 43.072-96 96-96S320 459.072 320 512s-43.072 96-96 96z m288 0a96.106667 96.106667 0 0 1-96-96c0-52.928 43.072-96 96-96s96 43.072 96 96-43.072 96-96 96z m288 0A96.106667 96.106667 0 0 1 704 512c0-52.928 43.072-96 96-96S896 459.072 896 512s-43.072 96-96 96z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconmore.defaultProps = {
  size: 18,
};

Iconmore = React.memo ? React.memo(Iconmore) : Iconmore;

export default Iconmore;
