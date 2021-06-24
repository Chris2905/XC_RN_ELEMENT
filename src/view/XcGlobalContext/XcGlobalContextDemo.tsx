import React, {useReducer, useState} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';

import {Style, XCEle, XCView} from '@/component/Index';


const XcGlobalContextDemo = () => {
    const [key, setKey] = useState(0);
    return (
        <XCEle.XCSafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior='automatic'
                style={styles.scrollView}>
                <View style={styles.boxTop}>
                    <Text>说明：</Text>
                </View>
                <View style={styles.boxTop}>
                    <Text>XcGlobalContext是创建一个上下文的容器，具体使用参考React.createContext</Text>
                </View>
                <View style={styles.boxTop}>
                    <Text>必须放到项目根文件，这样后续的静态alert confirm toast才能生效</Text>
                </View>

                <XCEle.XCButton type="common" onPress={() => {
                    XCEle.XcWin.alert({
                        title: 'Title',
                        content: 'alert content',
                        footer: [
                            { text: 'Cancel', onClick: () => console.log('cancel')},
                            { text: 'OK', onClick: () => console.log('ok') },
                        ]
                    });
                }}>
                    静态调用alert
                </XCEle.XCButton>
            </ScrollView>
            
            <View></View>
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
        // height: 40,
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

export default XcGlobalContextDemo;
