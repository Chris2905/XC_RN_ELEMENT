/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconcameraOff = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M925.866667 866.133333l-640-640-213.333334-213.333333C55.466667-4.266667 29.866667-4.266667 12.8 12.8s-17.066667 42.666667 0 59.733333L153.6 213.333333H128C55.466667 213.333333 0 268.8 0 341.333333v469.333334c0 72.533333 55.466667 128 128 128h750.933333l72.533334 72.533333c8.533333 8.533333 21.333333 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333l-85.333333-85.333334z m-520.533334-384l8.533334-8.533333 179.2 179.2c-17.066667 12.8-38.4 25.6-59.733334 29.866667-34.133333 4.266667-68.266667 0-93.866666-21.333334-29.866667-21.333333-46.933333-46.933333-55.466667-81.066666-4.266667-34.133333 4.266667-68.266667 21.333333-98.133334zM128 853.333333c-25.6 0-42.666667-17.066667-42.666667-42.666666V341.333333c0-25.6 17.066667-42.666667 42.666667-42.666666h110.933333l115.2 115.2c-8.533333 8.533333-12.8 12.8-17.066666 21.333333-34.133333 46.933333-42.666667 102.4-34.133334 157.866667s42.666667 106.666667 89.6 136.533333c34.133333 25.6 76.8 38.4 119.466667 38.4 12.8 0 25.6 0 38.4-4.266667 38.4-8.533333 72.533333-25.6 102.4-51.2l140.8 140.8H128zM896 213.333333h-149.333333l-72.533334-110.933333c-8.533333-8.533333-21.333333-17.066667-34.133333-17.066667H384c-25.6 0-42.666667 17.066667-42.666667 42.666667s17.066667 42.666667 42.666667 42.666667h234.666667l72.533333 110.933333c8.533333 8.533333 21.333333 17.066667 34.133333 17.066667h170.666667c25.6 0 42.666667 17.066667 42.666667 42.666666v396.8c0 25.6 17.066667 42.666667 42.666666 42.666667s42.666667-17.066667 42.666667-42.666667V341.333333c0-72.533333-55.466667-128-128-128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcameraOff.defaultProps = {
  size: 18,
};

IconcameraOff = React.memo ? React.memo(IconcameraOff) : IconcameraOff;

export default IconcameraOff;
