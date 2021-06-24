import React, { ReactNode, CSSProperties, useState, useEffect } from 'react';
import { StyleSheet, View, Text, ViewStyle, UIManager, Animated, Easing, TouchableOpacity } from 'react-native';
import Mask from './Mask';
import IconFont from '../../assets/iconfont/index';
import XC, * as XCConfig from '../../Styles/StyleConfig';

/***
 * modal模态框
 * jtang 5004914
 * 传参：
 *  visible            ：是否显示模态框
 *  animationDuration  ：动画时间
 *  animationType      ：动画效果
 *  maskType           ：蒙层是否透明
 *  canEveMask         ：蒙层是否可以点击 
 *  onClose            ：关闭事件
 *  showHeader         ：是否显示标题头部
 *  title              ：标题
 *  hasCloseIcon       ：头部是否有关闭图标
 *  footer             ：底部内容
 *  style              ：自定义样式
 ***/

const modalStyle = {
  invisibleWrapper: {
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    position: 'absolute',
    // backgroundColor: 'rgba(0,0,0,0)',
  },
  wrapperStyle: {
    position: 'absolute',
    zIndex: XCConfig.zIndexPopup,
    left: '50%',
    top: '50%',
    
  },
  modalArea: {
    backgroundColor: '#fff',
    borderRadius: 4
  },

  modalHeaderArea: {
    position: 'relative',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  closeIcon: {
    position: 'absolute',
    right: 15,
    top: 20
  },
  modalHeaderTitle: {
    textAlign: 'center',
  },
  modalBodyArea: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    maxHeight: 350,
  },
  modalFooterArea: {
    display: 'flex',
    width: '100%',
    // paddingHorizontal: 15,
    // paddingBottom: 10,
  },
  container: {
    flexDirection: 'row',
  },
};

export interface ModalProps {
  visible: boolean;
  animationDuration?: number;
  animationType?: 'noth' | 'fade' | 'zoom';
  maskType?: 'normal' | 'transparent';
  canEveMask?: boolean;
  onClose?: () => void;
  showHeader?: boolean;
  title?: ReactNode;
  hasCloseIcon?: boolean;
  footer?: ReactNode;
  style?: CSSProperties;
  styles?: typeof modalStyle;
}

const modalStyles = StyleSheet.create<any>(modalStyle);

let Modal: React.FC<ModalProps> = (props: ModalProps) => {

  const {
      visible = false,
      animationDuration = 200,
      animationType = 'fade',
      maskType = 'normal',
      canEveMask = true,
      onClose,
      showHeader = true,
      title,
      hasCloseIcon = true,
      footer,
      style,
      styles = modalStyles,
      children
  } = props;

  const [directionStyle, setDirectionStyle] = useState({});
  const [animatedStyle, setAnimatedStyle] = useState({});
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

  useEffect(()=>{
    console.log('111111', visible);
    if(visible) {
      showAnimated();
    } else {
    
    }
  }, [visible]);

  const triggleElastic = (type:string, { value, params, callback }:any) => {
    Animated[type](value, params).start(()=>{
      callback && callback()
    });
  }

  const showAnimated = () => {
    if(animationType == 'noth') {
      return;
    }
    let _animatedStyle = {};
    let _interpolatedAnimation;
    let params;
    let type = '';
    if(animationType == 'fade') {
      _interpolatedAnimation = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1]
      });
      _animatedStyle = { opacity: _interpolatedAnimation };
      type = 'timing';
      params = {
        toValue: 100,
        duration: animationDuration,
        easing: Easing.linear,
        useNativeDriver: true,
      };
    } else if (animationType == 'zoom') {
      _interpolatedAnimation = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0.8, 1.2, 1],
      });
      _animatedStyle = {transform: [{ scale: _interpolatedAnimation }]};
      type = 'spring';
      params = {
        toValue: 1,
        velocity: 6,
        friction: 12,
        tension: -6,
        useNativeDriver: true,
      };
    }

    setAnimatedStyle(_animatedStyle);
    triggleElastic(type, {value: animatedValue, params});

  };

  const onModalClose = () => {
    if(animationType == 'noth'){
      onClose && onClose();
      return;
    }
    let params = {
      toValue: 0,
      duration: animationDuration,
      easing: Easing.linear,
      useNativeDriver: true,
    };
    triggleElastic('timing', {value: animatedValue, params, callback: onClose});
  };

  const onLayout = (e) => {
    const directionStyle = {};
    let { height, width } = e.nativeEvent.layout;
    directionStyle['marginLeft'] = -(width/2);
    directionStyle['marginTop'] = -(height/2);
    console.log(directionStyle)
    setDirectionStyle(directionStyle);
  };


  const renderMask = () => {
    return <Mask
      visible={visible}
      type={maskType}
      onClick={canEveMask ? onModalClose : ()=>{}}
    />;
  };

  const renderModalHeader = () => {
    return <View style={styles.modalHeaderArea}>
      <View style={styles.modalHeaderTitle}>
          <Text style={[XC.Txt163, {textAlign: 'center'}]}>{title}</Text>
      </View>
      { 
        hasCloseIcon ? <TouchableOpacity
          activeOpacity={1}
          style={[XC.XFlex, styles.closeIcon]}
          onPress={onModalClose}>
            <IconFont
              // style={styles.closeIcon}
              name={'close__blod'}
              size={16}
              color={'#333'}
            />
        </TouchableOpacity> : null 
      }
    </View>
  };

  const renderModalBody = () => {
    return <View style={styles.modalBodyArea}>
      { children }
    </View>
  }

  const renderModalFooter = () => {
    return <View style={styles.modalFooterArea}>
      { footer }
    </View>
  };
  
  const popupCls = [
    styles.wrapperStyle,
    Object.assign({ width: '70%' }, style),
  ];

  const popUpStyle = [popupCls, directionStyle, animatedStyle];
  const maskStyle = animationType == 'fade' ? [animatedStyle] : [];

  return (
    visible ? <View style={styles.invisibleWrapper}>
        <Animated.View style={popUpStyle} onLayout={e => onLayout(e)}>
          <View style={styles.modalArea}>
                { showHeader && renderModalHeader() }
                { renderModalBody() }
                { footer && renderModalFooter() }
          </View>
        </Animated.View>
        <Animated.View style={maskStyle}>
            { renderMask() }
        </Animated.View>
    </View> : null
  );
};

export default Modal;