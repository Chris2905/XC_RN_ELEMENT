/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icongengduo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M74.202907 190.191792A46.54445 46.54445 0 0 0 46.555504 232.733419v558.533395a46.54445 46.54445 0 0 0 27.647403 42.541627l418.900046 186.177798a46.54445 46.54445 0 0 0 37.817366 0l418.900046-186.177798A46.54445 46.54445 0 0 0 977.444496 791.266814V232.733419a46.54445 46.54445 0 0 0-27.624131-42.541627l-418.900046-186.177799a46.54445 46.54445 0 0 0-37.817366 0l-418.900046 186.177799zM139.644403 262.987311l372.355597-165.488791 372.355597 165.465519V761.012922l-372.355597 165.48879-372.355597-165.465518V262.987311zM112.020272 213.464017a46.54445 46.54445 0 0 0-37.817365 85.083253L465.45555 472.483879V905.76616l46.54445 20.71228 46.590994-20.71228V472.483879l391.206099-173.936609a46.54445 46.54445 0 1 0-37.794093-85.083253L512 391.263814 112.020272 213.440744z"
        fill={getIconColor(color, 0, '#9099B0')}
      />
    </Svg>
  );
};

Icongengduo.defaultProps = {
  size: 18,
};

Icongengduo = React.memo ? React.memo(Icongengduo) : Icongengduo;

export default Icongengduo;
