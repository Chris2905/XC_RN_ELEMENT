/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconedit = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M885.333333 544A32 32 0 0 1 917.333333 576v202.666667h-0.426666A128 128 0 0 1 768 915.562667v1.792H256v-1.578667A128 128 0 0 1 107.093333 800L106.666667 800V597.333333a32 32 0 0 1 64 0v192.810667a64 64 0 0 0 64 63.36h21.312L256 853.333333h512l-0.021333 0.170667h21.546666L789.504 853.333333l3.584-0.106666A64 64 0 0 0 853.333333 789.504h0.192l-0.021333-10.837333H853.333333V576a32 32 0 0 1 32-32z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M248.021333 357.845333L489.365333 116.501333a32 32 0 0 1 45.269334 0l241.344 241.344a32 32 0 0 1-45.248 45.269334l-186.112-186.069334V616.533333a32 32 0 0 1-64 0V215.765333l-187.349334 187.349334a32 32 0 1 1-45.248-45.269334z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconedit.defaultProps = {
  size: 18,
};

Iconedit = React.memo ? React.memo(Iconedit) : Iconedit;

export default Iconedit;
