
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import IconFont from '../../assets/iconfont/index';
import XC from '../../Styles/StyleConfig';

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '0', 'close'];

const keyboardStyle = {
  keyboard: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection:'row',
    backgroundColor: '#f60'
  },
  keyboardKeys: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection:'row',
    width: '80%',
  },
  keyboardHandle: {
    display: 'flex',
    width: '20%',
  },
  keyboardItem: {
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.4,
    borderColor: '#e6e6e6',
  },
  keyboardNum: {
    width: '33.333333%',
    height: 54,
  },
  keyboardBtn: {
    flex: 1, 
  },
  keyboardOk: {
    backgroundColor: '#00bc71'
  },
  itemArea: {
    // backgroundColor: '#f60',
    // flex: 1,
    // width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
};

export interface KeyboardProps {
  onKeyClick?: (key?: string) => void;
  styles?: typeof keyboardStyle;
}

const keyboardStyles = StyleSheet.create<any>(keyboardStyle);

/***
 * 虚拟键盘 PDA需要
 * jtang 5004914
 * params
 *  onKeyClick : 点击事件
***/

let Keyboard: React.FC<KeyboardProps> = (props: KeyboardProps) => {

    const {
      styles = keyboardStyles,
      onKeyClick,
    } = props;
  
    const getKeys = () => {
      return KEYS;
    };

    const _onKeyClick = (key: string) => {
      if (key.length === 0) {
        return;
      }
      onKeyClick && onKeyClick(key);
    };

    const renderKey = (text: string, index: number) => {
      return (
          <View key={index} style={[styles.keyboardItem, styles.keyboardNum]} >
              <TouchableOpacity 
                activeOpacity={0.6} 
                hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}
                style={[XC.XFlex]} 
                onPress={()=>{ _onKeyClick(text); }}
              >
                  {
                    text == 'close' ? (
                        <IconFont
                          name={'64jianpan'}
                          size={26}
                          color={'#333'}
                        />
                    ) : (
                        <Text style={[XC.Txt183, XC.fontBold]}>
                            {text}
                        </Text>
                    )
                  }
              </TouchableOpacity>
          </View>
      );
    };
  
    return (
        <View style={styles.keyboard} >
            <View style={styles.keyboardKeys}>
                {
                  getKeys().map(renderKey)
                }
            </View>
            <View style={styles.keyboardHandle}>
                <View style={[styles.keyboardItem, styles.keyboardBtn]}>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}
                      style={[XC.XFlex]}
                      onPress={()=>{ _onKeyClick('delete'); }}
                    >
                        <IconFont
                          name={'shanchu'}
                          size={28}
                          color={'#333'}
                        />
                    </TouchableOpacity>
                </View>
                <View style={[styles.keyboardItem, styles.keyboardBtn, styles.keyboardOk]}>
                    <TouchableOpacity
                      activeOpacity={0.1}
                      style={[XC.XFlex]}
                      hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}
                      onPress={()=>{ _onKeyClick('ok'); }}
                    >
                        <Text style={[XC.Txt20f, XC.fontBold]} >{"确定"}</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </View>
    );
  };
  
  export default Keyboard;