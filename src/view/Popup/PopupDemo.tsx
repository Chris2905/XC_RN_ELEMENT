import React, {useReducer} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';

import {Style, XCEle, XCView} from '@/component/Index';

const initVisibleState = {
    popBottom: false,
    popTop: false,
    popLeft: false,
    popCenter: false,
};


const PopupDemo = () => {

    const [visible, setVisible] = useReducer((state, action) => {
        const { type } = action;
        return {
            ...state,
            [type]: !state[type],
        };
    }, initVisibleState);

    const toggle = (type) => setVisible({ type });

    return (
        <XCEle.XCSafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior='automatic'
                style={styles.scrollView}>

                <View>
                    <XCEle.XCButton type='common' onPress={() => {
                        toggle('popTop');
                        setTimeout(() => {
                            toggle('popTop');
                        }, 3000);
                    }}>
                        <Text style={Style.Txt16f}>从上方弹出</Text>
                    </XCEle.XCButton>
                </View>
                
                <View>
                    <XCEle.XCButton type='common' onPress={() => {
                        toggle('popBottom');
                    }}>
                        <Text style={Style.Txt16f}>从下方弹出</Text>
                    </XCEle.XCButton>
                </View>

                <View>
                    <XCEle.XCButton type='common' onPress={() => {
                        toggle('popLeft');
                    }}>
                        <Text style={Style.Txt16f}>从左侧弹出</Text>
                    </XCEle.XCButton>
                </View>

                <View>
                    <XCEle.XCButton type='common' onPress={() => {
                        toggle('popRight');
                    }}>
                        <Text style={Style.Txt16f}>从右侧弹出</Text>
                    </XCEle.XCButton>
                </View>


                <XCEle.Popup
                        visible={visible.popTop}
                        direction="top"
                        afterClose={() => console.log('关闭')}
                    >
                    <Text style={[Style.Txt16f, styles.boxTop]}>更新成功</Text>
                </XCEle.Popup>

                
            </ScrollView>
            <XCEle.Popup
                    visible={visible.popBottom}
                    direction="bottom"
                    afterClose={() => console.log('关闭')}
                >
                <View style={styles.popupBox}>
                    <XCEle.XCButton type='cancel' onPress={() => {
                        toggle('popBottom');
                    }}>
                        <Text style={Style.Txt16f}>取消</Text>
                    </XCEle.XCButton>
                </View>
                
            </XCEle.Popup>

            <XCEle.Popup
                visible={visible.popLeft}
                direction="left"
                afterClose={() => console.log('关闭')}
            >
                <View style={styles.popupBoxLeft}>
                    <XCEle.XCButton type='cancel' onPress={() => {
                        toggle('popLeft');
                    }}>
                        <Text style={Style.Txt16f}>关闭弹层</Text>
                    </XCEle.XCButton>
                </View>
            </XCEle.Popup>

            <XCEle.Popup
                visible={visible.popRight}
                direction="right"
                afterClose={() => console.log('关闭')}
            >
                <View style={styles.popupBoxReft}>
                    <XCEle.XCButton type='cancel' onPress={() => {
                        toggle('popRight');
                    }}>
                        <Text style={Style.Txt16f}>关闭弹层</Text>
                    </XCEle.XCButton>
                </View>
            </XCEle.Popup>


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
