import React, { CSSProperties, useState, useEffect } from 'react';
import { StyleSheet, View, ViewStyle, UIManager, Animated, Easing } from 'react-native';
import * as XCConfig from '../../Styles/StyleConfig';

const popupStyle = {
  container: {
    flexDirection: 'row',
  },
  wrapperStyle: {
    position: 'absolute',
    zIndex: XCConfig.zIndexPopup,
  },
  bottomWrapper: {
    left: 0,
    width: '100%',
  },
  topWrapper: {
    left: 0,
    width: '100%',
    // backgroundColor: 'rgba(0, 0 , 0, 0.7)',
    justifyContent: 'center',
  },
  leftWrapper: {
    top: 0,
    height: '100%',
  },
  rightWrapper: {
    top: 0,
    height: '100%',
  },
  invisibleWrapper: {
    height: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  topInvisible: {
    left: 0,
    top: 0,
    width: XCConfig.WinWidth,
  },
  bottomInvisible: {
    left: 0,
    bottom: 0,
    width: XCConfig.WinWidth,
  },
  leftInvisible: {
    left: 0,
    top: 0,
    height: XCConfig.WinHeight,
  },
  rightInvisible: {
    right: 0,
    top: 0,
    height: XCConfig.WinHeight,
  },
  topMask: {
    bottom: XCConfig.WinHeight,
  },
  bottomMask: {
    top: -XCConfig.WinHeight,
  },
  leftMask: {
    right: XCConfig.WinWidth,
  },
  rightMask: {
    left: -XCConfig.WinWidth,
  },
};

export interface PopupProps {
  visible?: boolean;
  direction?: 'top' | 'right' | 'bottom' | 'left';
  animationDuration?: number;
  afterClose?: () => void;
  style?: CSSProperties;
  styles?: typeof popupStyle;
}

const popupStyles = StyleSheet.create<any>(popupStyle);

/***
 * popup弹出框
 * jtang 5004914
 * 传参：
 *  visible            ：是否显示
 *  direction          ：弹出位置 'top' | 'right' | 'bottom' | 'left'
 *  animationDuration  ：动画时间
 *  style              ：自定义样式
 *  afterClose         ：关闭事件
 ***/
let Popup: React.FC<PopupProps> = (props: PopupProps) => {

  const { 
    visible = false, 
    direction = 'bottom',
    animationDuration = 200,
    styles = popupStyles,
    style,
    afterClose,
    children
  } = props;
  
  const [isPending, setIsPending] = useState(false);
  const [animationState, setAnimationState] = useState('enter');
  const [directionStyle, setDirectionStyle] = useState({});
  const [transfromStyle, setTransfromStyle] = useState({});
  const [translateValue, setTranslateValue] = useState(new Animated.Value(0));

  useEffect(() => {
    translateValue.addListener((value) => {
      console.log('value', value);
      animationEnd(value);
    });

    return () => {
      translateValue.removeAllListeners();
    }
  }, []);

  useEffect(()=>{
    if(visible) {
      enter();
    } else {
      leave();
    }
  }, [visible]);

  const enter = () => {
    let transfromStyle = {};
    console.log('direction', direction);
    let newValue;
    if (direction === 'bottom') {
      transfromStyle = { transform: [{ translateY: translateValue }] };
      newValue = directionStyle[direction];
    } else if (direction === 'top') {
      transfromStyle = { transform: [{ translateY: translateValue }] };
      newValue = -directionStyle[direction];
    } else if (direction === 'left') {
      transfromStyle = { transform: [{ translateX: translateValue }] };
      newValue = -directionStyle[direction];
    } else if (direction === 'right') {
      transfromStyle = { transform: [{ translateX: translateValue }] };
      newValue = directionStyle[direction];
    }

    console.log('newValue', newValue);
    console.log('transfromStyle', transfromStyle);
    setIsPending(true);
    setAnimationState('enter');
    setTransfromStyle(transfromStyle);

    Animated.timing(
      translateValue,
      {
        toValue: newValue,
        duration: animationDuration,
        easing: Easing.linear,
        useNativeDriver: true,
      },
    ).start();
  }

  const leave = () => {
    setAnimationState('leave')

    Animated.timing(
      translateValue,
      {
        toValue: 0,
        duration: animationDuration,
        easing: Easing.linear,
        useNativeDriver: true,
      },
    ).start();
  };

  const animationEnd = (value:any) => {
    // const { afterClose } = this.props;

    if (animationState === 'leave' && value.value === 0 && isPending) {
      setIsPending(false);
      if (typeof afterClose === 'function') {
        afterClose();
      }
    }
  };

  const onLayout = (e) => {
    const directionStyle = {};
    let { height, width } = e.nativeEvent.layout;
    if (direction === 'bottom' || direction === 'top') {
      directionStyle[direction] = -height;
    } else {
      directionStyle[direction] = -width;
    }
    setDirectionStyle(directionStyle);
  };

  const popupCls = [
    styles.wrapperStyle,
    styles[`${direction}Wrapper`],
    style,
  ];

  const invisibleStyle = [
    styles.invisibleWrapper,
    styles[`${direction}Invisible`],
  ];

  const popUpStyle = [popupCls, directionStyle, transfromStyle];

  return (
      <View style={invisibleStyle}>
          <Animated.View style={popUpStyle} onLayout={e => onLayout(e)}>
              {children}
          </Animated.View>
      </View>
  );
};

Popup = React.memo ? React.memo(Popup) : Popup;

export { Popup };