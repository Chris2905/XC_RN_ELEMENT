/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconbangzhu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M93.090909 512c0 231.400727 187.531636 418.909091 418.909091 418.909091 231.400727 0 418.909091-187.531636 418.909091-418.909091 0-231.400727-187.531636-418.909091-418.909091-418.909091-231.400727 0-418.909091 187.531636-418.909091 418.909091z m-93.090909 0C0 229.236364 229.166545 0 512 0c282.763636 0 512 229.166545 512 512 0 282.763636-229.166545 512-512 512C229.236364 1024 0 794.833455 0 512zM520.936727 209.454545c-60.16 0-107.310545 16.663273-142.266182 49.989819C342.900364 292.770909 325.818182 338.781091 325.818182 397.498182h92.695273c0-33.326545 6.493091-59.508364 20.31709-77.754182 15.453091-22.225455 40.657455-32.535273 76.427637-32.535273 27.648 0 49.570909 7.144727 65.024 22.202182 14.661818 15.080727 22.784 35.723636 22.784 61.905455 0 19.828364-7.330909 38.865455-21.969455 56.32l-9.751272 11.101091c-52.829091 46.033455-84.549818 79.36-95.115637 100.770909-11.403636 21.410909-16.267636 47.592727-16.267636 77.730909V628.363636h93.509818v-11.101091c0-19.037091 4.049455-35.700364 12.194909-51.572363a123.508364 123.508364 0 0 1 32.512-39.68c39.028364-33.326545 62.603636-54.737455 69.911273-62.673455C687.616 437.992727 698.181818 405.410909 698.181818 365.754182c0-48.407273-16.267636-86.481455-48.779636-114.269091C616.890182 222.952727 573.789091 209.454545 520.936727 209.454545zM458.705455 714.356364c-11.264 10.798545-16.523636 24.669091-16.523637 41.611636 0 16.965818 5.259636 30.836364 16.523637 41.634909 11.264 10.775273 24.762182 16.942545 41.285818 16.942546s30.021818-5.399273 41.285818-16.174546c11.264-10.798545 17.268364-25.437091 17.268364-42.402909 0-16.942545-6.004364-30.813091-16.523637-41.611636-11.264-10.775273-25.506909-16.174545-42.030545-16.174546s-30.021818 5.399273-41.285818 16.174546z"
        fill={getIconColor(color, 0, '#9099B0')}
      />
    </Svg>
  );
};

Iconbangzhu.defaultProps = {
  size: 18,
};

Iconbangzhu = React.memo ? React.memo(Iconbangzhu) : Iconbangzhu;

export default Iconbangzhu;
