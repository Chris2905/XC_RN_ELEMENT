import React, {useState} from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
} from 'react-native';

import {Style, XCEle, XCConfig} from '@/component/Index';

const CheckBox = () => {
    const CheckBoxList1 = [
        {label: '测试用例1', value: 1},
        {label: '测试用例2', value: 2},
        {label: '测试用例3', value: 3},
    ];
    const CheckBoxList2 = [
        {label: '测试用例1', value: 1},
        {label: '测试用例2', value: 2},
        {label: '测试用例3', value: 3},
    ];
    const [select, setSelect] = useState <Array<any>>([]);

    function onChange(values: Array<any>) {
        setSelect(values);
    }

    return (
        <XCEle.XCSafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior='automatic'
                style={styles.scrollView}>
                <XCEle.CheckBoxGroup
                    List={CheckBoxList1}
                    onChange={onChange}></XCEle.CheckBoxGroup>

                <Text>当前选中：{JSON.stringify(select)}</Text>

                <XCEle.CheckBoxGroup
                    style={[Style.XFlex, Style.FlexWrap]}
                    List={CheckBoxList2}
                    color={XCConfig.SubMitBgColor}
                    onChange={onChange}></XCEle.CheckBoxGroup>
            </ScrollView>
        </XCEle.XCSafeAreaView>
    );
};

export default CheckBox;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
});
