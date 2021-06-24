import React, { ReactNode, PureComponent, Component, CSSProperties, Children, ReactElement, cloneElement } from 'react';
import { StyleSheet, View, Text, ViewStyle, Animated, TouchableHighlight } from 'react-native';
import XC, * as XCConfig from '../../Styles/StyleConfig';

const getSelectKey = (props: any) => {
  const { selectKey, defaultSelectKey, isMultiple } = props;
  const _defaultKey = (selectKey || selectKey == 0) ? selectKey : defaultSelectKey;

  if (_defaultKey || _defaultKey == 0) {
    if(Array.isArray(_defaultKey)) {

      if(!isMultiple) {
        return [String(_defaultKey[0])]
      } else {
        return _defaultKey.map((key: any) => String(key))
      }

    }
    return [String(_defaultKey)];
  }
  return [];
};

const isEqualProps = (now, next) => {
  if (Array.isArray(next) && Array.isArray(now)) {
    return next.length === now.length && next.every((key, i) => key === now[i]);
  }
  return now === next;
};

const border = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: XCConfig.SplitColor,
  borderStyle: 'solid',
};

const collapseStyle = {
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  itemWrap: {
    width: '100%',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  titleWrap: {
    backgroundColor: '#fff',
    height: 52,
  },
  titleInner: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginLeft: 16,
    paddingRight: 16,
    ...border,
  },
  titleArrow: {
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: XCConfig.HeadNavBtmSplitColor,
    width: 10,
    height: 10,
    position: 'relative',
  },
  itemBody: {
    backgroundColor: '#fff',
    marginLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    ...border,
  },
};

const collapseStyles = StyleSheet.create<any>(collapseStyle);

type CollapseItemKey = string | number;

type CollapseSelectKey = CollapseItemKey | CollapseItemKey[];

export interface CollapseItemProps {
  style?: CSSProperties;
  styles?: typeof collapseStyle;
  key?: CollapseItemKey;
  title?: ReactNode;
  isSelect?: boolean;
  isAnimate: boolean;
  onChange?: (select?: boolean) => void;
}

/***
 * 折叠面板 - item子组件
 * jtang 5004914
 * params
 *  key      : 对应selectKey
 *  title    : 每项的标题
 *  onChange : 点击某一项的回调函数
***/
export class CollapseItem extends PureComponent<CollapseItemProps, any> {

  static defaultProps = {
    styles: collapseStyles,
    isAnimate: false,
  };

  private titleHeight = 52;

  private bodyHeight = 0;

  constructor(props) {
    super(props);
    this.state = {
      select: this.props.isSelect,
      height: new Animated.Value(this.titleHeight),
      rotate: new Animated.Value(0),
    };
  }

  static getDerivedStateFromProps(nextProps) {
    if ('isSelect' in nextProps) {
      return {
        select: nextProps.isSelect,
      };
    }
    return null;
  }

  componentDidUpdate() {
    this.getAnimate();
  }

  getHeight = () => {
    const { select } = this.state;
    return select ? this.titleHeight + this.bodyHeight : this.titleHeight;
  }

  getRotate = () => {
    const { select } = this.state;
    return select ? 1: 0;
  }

  getAnimate = () => {
    const { isAnimate } = this.props;
    const duration = isAnimate ? 150 : 0;
    const height = this.getHeight();
    const rotate = this.getRotate();
    // 组合动画
    Animated.parallel([
      Animated.timing(this.state.height, {
        toValue: height,
        duration,
        useNativeDriver: false
      }),
      Animated.timing(this.state.rotate, {
        toValue: rotate,
        duration,
        useNativeDriver: false
      }),
    ]).start();
  }

  onPress = () => {
    const { onChange } = this.props;
    const { select } = this.state;

    onChange && onChange(select);
  };

  onLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    this.bodyHeight = height;
    this.state.height.setValue(this.getHeight());
    this.state.rotate.setValue(this.getRotate());
  };


  render() {
    const { title, children, styles, style,  } = this.props;
    const { height, rotate } = this.state;
    const wrapperStyle = [
      styles.itemWrap,
      { height: height },
      style,
    ];

    const titleArrowStyle = [
      styles.titleArrow,
      {
        transform: [
          {
            rotate: rotate.interpolate({
              inputRange: [0, 1],
              outputRange: ['45deg', '-135deg'],
            }),
          },
        ],
        top: rotate.interpolate({
          inputRange: [0, 1],
          outputRange: [0, Math.sqrt(50) / 2],
        }),
      },
    ];

    return (
      <Animated.View style={ wrapperStyle }>
          <TouchableHighlight
            style={ styles.touchStyle }
            underlayColor="#eee"
            activeOpacity={ 0.8 }
            onPress={this.onPress}
          >
            <View style={ styles.titleWrap }>
              <View style={ styles.titleInner }>
                <Text style={ XC.Txt153 }>{ title }</Text>
                  <Animated.View style={ titleArrowStyle } />
              </View>
            </View>
          </TouchableHighlight>
          <View style={ styles.itemBody } onLayout={ this.onLayout } >
            { children }
          </View>
      </Animated.View>
    );
  }

}

export interface CollapseProps {
  style?: CSSProperties;
  styles?: typeof collapseStyle;
  isAnimate?: boolean;
  isMultiple?: boolean;
  selectKey?: any;
  defaultSelectKey?: CollapseSelectKey;
  onChange: (selectKey?: CollapseSelectKey) => void;
}

/***
 * 折叠面板
 * jtang 5004914
 * params
 *  isAnimate        : 展开的时候是否需要动画
 *  isMultiple       : 是否支持能够展开多项
 *  selectKey        : 动展开项的索引数组或者字符串或者数字
 *  defaultSelectKey : 初始化默认展开项的索引数组或者字符串或者数字
 *  onChange         : 点击某项的回调函数，返回选中的项
***/
export default class Collapse extends Component<CollapseProps, any> {

  static defaultProps = {
    styles: collapseStyles,
    isAnimate : false,
    isMultiple : false,
    onChange: () => {},
  }

  static Item: any;

  constructor(props) {
    super(props);

    this.state = {
      selectKey: getSelectKey(props),
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const newState: any = {};

    if(('selectKey' in nextProps) && (nextProps.selectKey !== prevState.prevSelectKey)) {
      newState.selectKey = getSelectKey(nextProps);
      newState.prevSelectKey = nextProps.selectKey;
    }

    if('isAnimate' in nextProps) {
      newState.isAnimate = nextProps.isAnimate;
    }

    if ('isMultiple' in nextProps) {
      newState.isMultiple = nextProps.isMultiple;
    }

    return (newState.activeKey 
      || newState.isAnimate 
      || newState.isMultiple
    ) ? newState : null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqualProps(this.props, nextProps) || !isEqualProps(this.state, nextState);
  }

  onChange = (onItemChange, key) => {
    const { isMultiple, onChange } = this.props;
    console.log('onChange isMultiple', isMultiple);
    const { selectKey } = this.state;
    console.log('onChange selectKey', selectKey, key);
    const hasKey = selectKey.indexOf(key) > -1;

    let newSelectKey: Array<string> = [];

    if (isMultiple) {
      if (hasKey) {
        newSelectKey = selectKey.filter((item) => item !== key);
      } else {
        newSelectKey = selectKey.slice(0);
        newSelectKey.push(key);
        console.log('onChange newSelectKey', newSelectKey);
      }
    } else {
      newSelectKey = hasKey ? [] : [key];
    }

    if (onItemChange) {
      const isSelect = newSelectKey.indexOf(key) > -1;
      onItemChange(isSelect);
    }
    console.log('onChange newSelectKey', newSelectKey);
    this.setState({
      selectKey: newSelectKey,
    });
    onChange(key);
  }


  renderItems() {
    const { children, isAnimate } = this.props;
    const { selectKey } = this.state;

    return Children.map(children, (element: ReactElement<CollapseItemProps>) => {
      console.log('element', element);
      const { key } = element;
      const { onChange } = element.props;
      const isSelect = selectKey.indexOf(key) > -1;

      return cloneElement(element, {
        key: key,
        isSelect,
        isAnimate,
        onChange: () => this.onChange(onChange, key),
      });

    });
  }

  render() {
    const { style, styles } = this.props;

    const wrapStyle = [
      styles.container,
      style,
    ];

    return (
        <View style={ wrapStyle }>
            {
              this.renderItems()
            }
        </View>
    );
  }
}

Collapse.Item = CollapseItem;