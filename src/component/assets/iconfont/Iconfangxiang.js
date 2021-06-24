/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconfangxiang = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M985.080436 452.252932c50.87955-16.95037 52.1878-88.392197 1.990815-107.219621l-910.086973-341.282615C31.252407-13.398755-13.398735 31.252387 3.750717 76.984257l341.282615 910.086973c18.827424 50.196985 90.269252 48.888735 107.219621-1.990815l133.213981-399.585062 399.613502-133.242421zM154.22791 154.199449l642.464522 240.945526-274.163701 91.40686a56.880436 56.880436 0 0 0-35.976875 35.976876l-91.406861 274.163701-240.917085-642.464523z"
        fill={getIconColor(color, 0, '#9099B0')}
      />
    </Svg>
  );
};

Iconfangxiang.defaultProps = {
  size: 18,
};

Iconfangxiang = React.memo ? React.memo(Iconfangxiang) : Iconfangxiang;

export default Iconfangxiang;
