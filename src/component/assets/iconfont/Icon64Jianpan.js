/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icon64Jianpan = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1166 1024" width={size} height={size} {...rest}>
      <Path
        d="M794.053671 816.607595a12.962025 12.962025 0 0 1 8.347544 22.877975l-210.762531 177.489012a12.962025 12.962025 0 0 1-16.695089 0l-210.762532-177.489012A12.962025 12.962025 0 0 1 372.528608 816.607595zM1088.810127 0a77.772152 77.772152 0 0 1 77.772151 77.772152v596.253164a77.772152 77.772152 0 0 1-77.772151 77.772152H77.772152a77.772152 77.772152 0 0 1-77.772152-77.772152V77.772152a77.772152 77.772152 0 0 1 77.772152-77.772152h1011.037975z m0 38.886076H77.772152a38.886076 38.886076 0 0 0-38.821266 36.604759L38.886076 77.772152v596.253164a38.886076 38.886076 0 0 0 36.604759 38.821266L77.772152 712.911392h1011.037975a38.886076 38.886076 0 0 0 38.821265-36.604759L1127.696203 674.025316V77.772152a38.886076 38.886076 0 0 0-36.60476-38.821266L1088.810127 38.886076zM894.379747 492.556962a12.962025 12.962025 0 0 1 12.962025 12.962025v77.772152a12.962025 12.962025 0 0 1-12.962025 12.962026H272.202532a12.962025 12.962025 0 0 1-12.962026-12.962026v-77.772152a12.962025 12.962025 0 0 1 12.962026-12.962025h622.177215zM349.974684 324.050633a12.962025 12.962025 0 0 1 12.962025 12.962025v77.772152a12.962025 12.962025 0 0 1-12.962025 12.962025h-77.772152a12.962025 12.962025 0 0 1-12.962026-12.962025v-77.772152a12.962025 12.962025 0 0 1 12.962026-12.962025h77.772152z m181.468354 0a12.962025 12.962025 0 0 1 12.962025 12.962025v77.772152a12.962025 12.962025 0 0 1-12.962025 12.962025h-77.772152a12.962025 12.962025 0 0 1-12.962025-12.962025v-77.772152a12.962025 12.962025 0 0 1 12.962025-12.962025h77.772152z m181.468354 0a12.962025 12.962025 0 0 1 12.962026 12.962025v77.772152a12.962025 12.962025 0 0 1-12.962026 12.962025h-77.772151a12.962025 12.962025 0 0 1-12.962026-12.962025v-77.772152a12.962025 12.962025 0 0 1 12.962026-12.962025h77.772151z m181.468355 0a12.962025 12.962025 0 0 1 12.962025 12.962025v77.772152a12.962025 12.962025 0 0 1-12.962025 12.962025h-77.772152a12.962025 12.962025 0 0 1-12.962025-12.962025v-77.772152a12.962025 12.962025 0 0 1 12.962025-12.962025h77.772152zM259.240506 168.506329a12.962025 12.962025 0 0 1 12.962026 12.962025v77.772152a12.962025 12.962025 0 0 1-12.962026 12.962026h-77.772152a12.962025 12.962025 0 0 1-12.962025-12.962026v-77.772152a12.962025 12.962025 0 0 1 12.962025-12.962025h77.772152z m181.468355 0a12.962025 12.962025 0 0 1 12.962025 12.962025v77.772152a12.962025 12.962025 0 0 1-12.962025 12.962026h-77.772152a12.962025 12.962025 0 0 1-12.962025-12.962026v-77.772152a12.962025 12.962025 0 0 1 12.962025-12.962025h77.772152z m181.468354 0a12.962025 12.962025 0 0 1 12.962026 12.962025v77.772152a12.962025 12.962025 0 0 1-12.962026 12.962026h-77.772152a12.962025 12.962025 0 0 1-12.962025-12.962026v-77.772152a12.962025 12.962025 0 0 1 12.962025-12.962025h77.772152z m181.468355 0a12.962025 12.962025 0 0 1 12.962025 12.962025v77.772152a12.962025 12.962025 0 0 1-12.962025 12.962026h-77.772152a12.962025 12.962025 0 0 1-12.962026-12.962026v-77.772152a12.962025 12.962025 0 0 1 12.962026-12.962025h77.772152z m181.468354 0a12.962025 12.962025 0 0 1 12.962025 12.962025v77.772152a12.962025 12.962025 0 0 1-12.962025 12.962026h-77.772152a12.962025 12.962025 0 0 1-12.962025-12.962026v-77.772152a12.962025 12.962025 0 0 1 12.962025-12.962025h77.772152z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icon64Jianpan.defaultProps = {
  size: 18,
};

Icon64Jianpan = React.memo ? React.memo(Icon64Jianpan) : Icon64Jianpan;

export default Icon64Jianpan;