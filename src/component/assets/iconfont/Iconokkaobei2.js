/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconokkaobei2 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 1024C229.205333 1024 0 794.794667 0 512 0 229.205333 229.205333 0 512 0 794.794667 0 1024 229.205333 1024 512 1024 794.794667 794.794667 1024 512 1024ZM793.6 334.449778C771.356444 312.206222 735.345778 312.206222 713.159111 334.449778L431.559111 615.992889 310.840889 495.331556C288.654222 473.144889 252.643556 473.144889 230.4 495.331556 208.213333 517.575111 208.213333 553.585778 230.4 575.772444L391.338667 736.711111C413.525333 758.897778 449.536 758.897778 471.779556 736.711111L793.6 414.890667C815.786667 392.647111 815.786667 356.636444 793.6 334.449778Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconokkaobei2.defaultProps = {
  size: 18,
};

Iconokkaobei2 = React.memo ? React.memo(Iconokkaobei2) : Iconokkaobei2;

export default Iconokkaobei2;
