/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconmineCircle = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64c247.424 0 448 200.576 448 448s-200.576 448-448 448S64 759.424 64 512 264.576 64 512 64z m-1.386667 576a361.941333 361.941333 0 0 0-280.490666 132.757333A382.890667 382.890667 0 0 0 512 896a382.933333 382.933333 0 0 0 280.384-121.642667A361.898667 361.898667 0 0 0 510.613333 640zM512 128C299.925333 128 128 299.925333 128 512c0 75.52 21.802667 145.962667 59.477333 205.354667a415.402667 415.402667 0 0 1 246.357334-136.128A149.269333 149.269333 0 0 1 352 448v-85.333333a149.333333 149.333333 0 0 1 149.333333-149.333334h21.333334a149.333333 149.333333 0 0 1 149.333333 149.333334v85.333333a149.333333 149.333333 0 0 1-82.517333 133.589333c97.6 16.085333 183.744 66.133333 245.866666 137.621334A382.208 382.208 0 0 0 896 512c0-212.074667-171.925333-384-384-384z m0 149.333333a96 96 0 0 0-95.893333 91.477334l-0.106667 4.522666v64a96 96 0 0 0 191.893333 4.522667l0.106667-4.522667v-64A96 96 0 0 0 512 277.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconmineCircle.defaultProps = {
  size: 18,
};

IconmineCircle = React.memo ? React.memo(IconmineCircle) : IconmineCircle;

export default IconmineCircle;