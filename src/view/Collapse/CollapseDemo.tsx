import React, { useState } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Alert
} from 'react-native';

import {Style, XCEle, XCView} from '@/component/Index';


const CollapseDemo = () => {
    const [isAnimate, setIsAnimate] = useState(false);
    const [isMultiple, setIsMultiple] = useState(false);
    const [selectKey, setSelectKey] = useState('1');

    return (
        <XCEle.XCSafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior='automatic'
                style={styles.scrollView}>
                <View style={Style.XFlex}>
                    <XCEle.XCButton type='common' onPress={() => {
                        setIsAnimate(!isAnimate);
                    }}>
                        <Text style={Style.Txt16f}>动画【{ isAnimate ? '开启' : '关闭' }】</Text>
                    </XCEle.XCButton>
                    <XCEle.XCButton type='common' onPress={()=>{
                        setIsMultiple(!isMultiple);
                        setSelectKey(!isMultiple ? [] : undefined);
                    }}>
                        <Text style={Style.Txt16f}>展开多项【{isMultiple ? '允许' : '不允许'}】</Text>
                    </XCEle.XCButton>
                </View>
                <XCEle.Collapse
                    selectKey = {selectKey}
                    isAnimate = {isAnimate}
                    isMultiple = {isMultiple}
                    onChange = {(key) => {
                        console.log("key", key);
                    }}
                >
                    <XCEle.Collapse.Item key="1" title="标题1" onChange = {(key) => {console.log("item1 key", key);}}>
                        <Text>内容1</Text>
                        
                    </XCEle.Collapse.Item>
                    <XCEle.Collapse.Item key="2" title="标题2" onChange = {(key) => {console.log("item2 key", key);}}>
                        <Text>内容2</Text>
                    </XCEle.Collapse.Item>
                    <XCEle.Collapse.Item key="3" title="标题3" onChange = {(key) => {console.log("item3 key", key);}}>
                        <Text>内容3</Text>
                    </XCEle.Collapse.Item>
                </XCEle.Collapse>

                <View style={{marginBottom: 20}}>
                    <XCEle.XCButton type='common' disabled onPress={()=>{}}>
                        <Text style={Style.Txt16f}>默认展开</Text>
                    </XCEle.XCButton>
                </View>

                <XCEle.Collapse
                    isMultiple = {true}
                    defaultSelectKey={['0', '1']}
                    onChange = {(key) => {
                        console.log("key", key);
                    }}
                >
                    <XCEle.Collapse.Item key="0" title="标题1" onChange = {(key) => {console.log("item1 key", key);}}>
                        <Text>内容1</Text>
                        
                    </XCEle.Collapse.Item>
                    <XCEle.Collapse.Item key="1" title="标题2" onChange = {(key) => {console.log("item2 key", key);}}>
                        <Text>内容2</Text>
                    </XCEle.Collapse.Item>
                    <XCEle.Collapse.Item key="2" title="标题3" onChange = {(key) => {console.log("item3 key", key);}}>
                        <Text>内容3</Text>
                    </XCEle.Collapse.Item>
                </XCEle.Collapse>
            </ScrollView>
            
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

export default CollapseDemo;
