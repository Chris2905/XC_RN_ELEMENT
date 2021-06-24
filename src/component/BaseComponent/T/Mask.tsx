import React, { PureComponent, CSSProperties } from 'react';
import { StyleSheet, View, ViewStyle, TouchableWithoutFeedback, GestureResponderEvent } from 'react-native';
import * as XCConfig from '../../Styles/StyleConfig';

const maskStyle = {
  wrapperStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: XCConfig.WinWidth,
    height: XCConfig.WinHeight,
    zIndex: XCConfig.zIndexMask,
  },
  transparentWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  normalWrapper: {
    backgroundColor: `rgba(0, 0, 0, ${XCConfig.OpacityMask})`,
  },
};

interface PropsType {
  visible?: boolean;
  type?: 'normal' | 'transparent';
}

export interface MaskProps extends PropsType {
  style?: CSSProperties;
  styles: typeof maskStyle;
  onClick?: (event: GestureResponderEvent) => void;
}

const maskStyles = StyleSheet.create<any>(maskStyle);

/***
 * 蒙层
 * jtang 5004914
 * params
 *  visible : 是否显示 默认 false
 *  type    : 类型
 *  style   : 自定义样式
 *  onClick : 点击事件
***/

export default class Mask extends PureComponent<MaskProps, any> {
  static defaultProps = {
    visible: false,
    type: 'normal',
    styles: maskStyles,
  };

  render() {
    const { visible, styles, type, style, onClick } = this.props;
    const popupCls = [
      styles.wrapperStyle,
      styles[`${type}Wrapper`],
      style,
    ];

    return visible
      && <TouchableWithoutFeedback onPress={onClick}><View style={[popupCls]} /></TouchableWithoutFeedback>;
  }
}