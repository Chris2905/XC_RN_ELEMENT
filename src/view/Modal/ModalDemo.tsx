import React, {useReducer} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';

import {Style, XCEle, XCView} from '@/component/Index';

const initState = {
    normal: {
        visible: false,
    },
    hasFooter: {
        visible: false,
    },
    closable: {
        visible: false,
    },
    onlyBody: {
        visible: false,
    },
};

const reducer = (state, action) => {
    const { type, key, visible, animationType } = action;

    switch (type) {
        case 'visible':
            return {
                ...state,
                [key]: {
                    ...state[key],
                    visible: !state[key].visible,
                } 
        };

        case 'animation':
            return {
                ...state,
                [key]: {
                    ...state[key],
                    animationType,
                }
        };
    }
};


const PopupDemo = () => {

    const [state, dispatch] = useReducer(reducer, initState);
    const toggle = (key) => dispatch({ type: 'visible', key });

    return (
        <XCEle.XCSafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior='automatic'
                style={styles.scrollView}>

                <View>
                    <XCEle.XCButton type='common' onPress={() => {
                        toggle('normal');
                    }}>
                        <Text style={Style.Txt16f}>普通</Text>
                    </XCEle.XCButton>
                </View>

                <View>
                    <XCEle.XCButton type='common' onPress={() => {
                        toggle('hasFooter');
                    }}>
                        <Text style={Style.Txt16f}>没有头部和底部</Text>
                    </XCEle.XCButton>
                </View>

                <View>
                    <XCEle.XCButton type='common' onPress={() => {
                        toggle('closable');
                    }}>
                        <Text style={Style.Txt16f}>蒙层点击不了</Text>
                    </XCEle.XCButton>
                </View>
        
            </ScrollView>
            

            <XCEle.Modal
                visible={state.normal.visible}
                canEveMask={true}
                showHeader = {true}
                title='标题'
                hasCloseIcon= {true}
                onClose={() => {
                    toggle('normal')
                }}
                footer={
                    <XCEle.XCButton type='common' onPress={() => {
                        toggle('normal');
                    }}>
                        <Text style={Style.Txt16f}>普通</Text>
                    </XCEle.XCButton>
                }
            >
                <Text>模态框内容</Text>
                <Text>模态框内容</Text>
                <Text>模态框内容</Text>
                <Text>模态框内容</Text>
            </XCEle.Modal>

            <XCEle.Modal
                visible={state.hasFooter.visible}
                canEveMask={true}
                showHeader = {false}
                animationType={"zoom"}
                onClose={() => {
                    toggle('hasFooter')
                }}
            >
                <Text>模态框内容</Text>
                <Text>模态框内容</Text>
                <Text>模态框内容</Text>
                <Text>模态框内容</Text>
            </XCEle.Modal>

            <XCEle.Modal
                visible={state.closable.visible}
                canEveMask={false}
                showHeader = {true}
                title={"标题"}
                animationType={"noth"}
                onClose={() => {
                    toggle('closable');
                }}
            >
                <Text>模态框内容</Text>
                <Text>模态框内容</Text>
                <Text>模态框内容</Text>
                <Text>模态框内容</Text>
            </XCEle.Modal>

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

export default PopupDemo;
