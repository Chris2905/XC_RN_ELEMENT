/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconstarFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M957.226667 404.330667a32.042667 32.042667 0 0 0-25.514667-21.504l-270.336-41.749334L540.586667 82.474667A32.042667 32.042667 0 0 0 511.637333 64h-0.064c-12.373333 0-23.637333 7.125333-28.906666 18.346667l-121.856 258.005333-270.72 40.789333a32 32 0 0 0-18.218667 53.930667l196.458667 202.090667-46.890667 284.8a32 32 0 0 0 47.018667 33.237333l241.813333-133.034667 241.301333 133.866667c4.842667 2.624 10.197333 3.968 15.530667 3.968h0.64c17.706667 0 32-14.293333 32-32 0-3.968-0.704-7.765333-2.005333-11.306667l-44.906667-278.677333 196.928-201.237333c8.32-8.554667 11.221333-21.098667 7.466667-32.448z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconstarFill.defaultProps = {
  size: 18,
};

IconstarFill = React.memo ? React.memo(IconstarFill) : IconstarFill;

export default IconstarFill;
