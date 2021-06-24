/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconmineCircleFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64c247.424 0 448 200.576 448 448s-200.576 448-448 448S64 759.424 64 512 264.576 64 512 64z m-1.386667 576a362.026667 362.026667 0 0 0-280.512 132.757333A382.976 382.976 0 0 0 512 896c110.634667 0 210.325333-46.784 280.405333-121.642667A361.962667 361.962667 0 0 0 510.592 640z m12.053334-426.666667h-21.333334a149.333333 149.333333 0 0 0-149.333333 149.333334v85.333333a149.333333 149.333333 0 0 0 149.333333 149.333333h21.333334a149.333333 149.333333 0 0 0 149.333333-149.333333v-85.333333a149.333333 149.333333 0 0 0-149.333333-149.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconmineCircleFill.defaultProps = {
  size: 18,
};

IconmineCircleFill = React.memo ? React.memo(IconmineCircleFill) : IconmineCircleFill;

export default IconmineCircleFill;
