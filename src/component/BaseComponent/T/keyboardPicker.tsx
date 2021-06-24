
import React, { useEffect, useState } from 'react';

import Keyboard from './Keyboard';
import { Popup } from './Popup';

export interface keyboardPickerProps {
  visible?: boolean;
  onKeyClick?: (key?: string) => void;
}

/***
 * 虚拟键盘带popup PDA需要
 * jtang 5004914
 * params
 *  visible: 是否显示
 *  onKeyClick : 点击事件
***/

let keyboardPicker: React.FC<keyboardPickerProps> = (props: keyboardPickerProps) => {

    const {
      visible = false,
      onKeyClick,
    } = props;

    const [isVisible, setIsVisible] = useState(visible);

    useEffect(()=>{
      setIsVisible(visible);
    }, [visible]);
  
    const _onKeyClick = (key: string) => {
      if (['ok', 'close'].indexOf(key) > -1) {
        setIsVisible(false);
      }
      onKeyClick && onKeyClick(key);
    };
  
    return (
        <Popup 
          visible={isVisible}
        >
            <Keyboard onKeyClick={_onKeyClick} />
        </Popup>
    );
  };
  
  export default keyboardPicker;