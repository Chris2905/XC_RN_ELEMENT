import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import {IconFont, Style, XCEle} from '../../component/Index';

const Button = () => {
    return (
        <XCEle.XCSafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                <XCEle.XCButton type="common" onPress={() => {}}>
                    按钮
                </XCEle.XCButton>
                <XCEle.XCButton type="success" onPress={() => {}}>
                    提交
                </XCEle.XCButton>
                <XCEle.XCButton type="submit">提交</XCEle.XCButton>
                <XCEle.XCButton type="cancel">取消</XCEle.XCButton>
                <XCEle.XCButton type="empty">取消</XCEle.XCButton>
                <XCEle.XCButton type="cancel" innerContentStyle={styles.small}>
                    自定义样式
                </XCEle.XCButton>
                <View style={Style.XFlex}>
                    <XCEle.XCButton type="danger">驳回</XCEle.XCButton>
                    <XCEle.XCButton type="warning">警告</XCEle.XCButton>
                </View>
                <View style={Style.XFlex}>
                    <XCEle.XCButton showLinear={true} onPress={() => {}}>
                        渐变
                    </XCEle.XCButton>
                    <XCEle.XCButton showLinear={true} colors={['#3ac900', '#cccccc']}>
                        警告
                    </XCEle.XCButton>
                </View>
                <View style={[Style.XFlex, {marginTop: 20}]}>
                    <XCEle.XCButton type="wholeEmpty">
                        <IconFont name="camera" size={30} />
                    </XCEle.XCButton>
                    <XCEle.XCButton type="wholeEmpty">
                        <IconFont name="camera-off" size={30} />
                    </XCEle.XCButton>
                </View>
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
        width: 100,
        height: 60,
    },
});

export default Button;
