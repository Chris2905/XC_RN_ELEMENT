/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';

interface Props extends GProps, ViewProps {
  name: '64jianpan' | 'close2' | 'zhaobudaojieguo' | 'okkaobei2' | 'ok-copy' | 'share_fill' | 'search_list' | 'gengduo2' | 'star' | 'star_fill' | 'mine_circle_fill' | 'mine_circle' | 'check__blod' | 'close__blod' | 'minus__blod' | 'right_blod' | 'plus__blod' | 'caret_down' | 'arrows_alt' | 'caret_right' | 'caret_up' | 'data_up' | 'down_circle' | 'data_down' | 'download' | 'edit' | 'forward' | 'play_circle' | 'bad' | 'eye_fill' | 'eye' | 'like_fill' | 'interactive' | 'like' | 'more' | 'search_list1' | 'search' | 'loading' | 'good_fill' | 'minus_square_fill' | 'minus_square' | 'plus_square' | 'plus_square_fill' | 'pingjia' | 'saoyisao' | 'shezhi' | 'kefu' | 'tupian' | 'caijian' | 'bangzhu' | 'fangxiang' | 'gengduo' | 'shanchu' | 'home' | 'bell' | 'camera-off' | 'camera' | 'gift' | 'copy' | 'info' | 'link' | 'dollar-sign' | 'icon-test';
  size?: number;
  color?: string | string[];
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
