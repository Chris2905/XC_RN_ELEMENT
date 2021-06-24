import React, { useState } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Alert
} from 'react-native';

import {Style, XCEle, XCView} from '@/component/Index';


const KeyboardDemo = () => {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState("");

    const toggle = () => {
        setVisible(!visible);
    };

    const onKeyClick = (key:string) => {
        console.log(key);
        if (['close', 'ok'].indexOf(key) > -1) {
            if(key =='ok'){
                Alert.alert(value);
            }
            
            toggle();
            return;
        }
    
        let newVal = '';
        if(key === 'delete') {
            newVal = value.slice(0, value.length - 1);
        } else {
            newVal = value + key;
        }

        if (newVal !== value) {
            setValue(newVal);
        }
    };

    return (
        <XCEle.XCSafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior='automatic'
                style={styles.scrollView}>

                <View style={{marginBottom: 20}}>
                    <XCEle.XCButton type='common' disabled onPress={() => {}}>
                        <Text style={Style.Txt16f}>虚拟键盘样式</Text>
                    </XCEle.XCButton>
                </View>
                <View style={{paddingLeft: 10, paddingRight: 10}}>
                    <XCEle.Keyboard onKeyClick={(txt = '')=>{
                        Alert.alert(txt);
                    }}/>
                </View>

                <View style={{marginBottom: 20}}>
                    <XCEle.XCButton type='common' onPress={toggle}>
                        <Text style={Style.Txt16f}>触发虚拟键盘=》 {visible ? '关闭' : '开启'}</Text>
                    </XCEle.XCButton>
                </View>
                <View>
                    <Text>{value}</Text>
                </View>
            </ScrollView>

            <XCEle.KeyboardPicker
                visible={visible}
                onKeyClick={onKeyClick}
            />
        </XCEle.XCSafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    small: {
        width: 100, height: 60
    },
    boxTop: {
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
    },
    popupBox: {
        backgroundColor: '#2b2c2d',
        width: '100%',
        height: '100%',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 300,
    },
    popupBoxLeft: {
        width: 280,
        height: '100%',
    },
    popupBoxReft: {
        width: 280,
        height: '100%',
    }
});

export default KeyboardDemo;
