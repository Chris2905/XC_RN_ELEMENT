import React, {useState} from 'react';
import {
    StyleSheet,
    ScrollView,
} from 'react-native';

import {XCEle, XCView} from '@/component/Index';

const Stepper = () => {
    const [stepValue, setStepValue] = useState({
        step1: 1,
        step2: 1,
        step3: 1,
        step4: 1,
        step5: 1,
    });

    function onChange(value: any, propName: string) {
        setStepValue((stepValue: any) => {
            let temp = {
                ...stepValue,
                [propName]: value,
            };
            return temp;
        });
    }

    async function onSyncChange(value: any, propName: string) {
        // await XCTools.XCGet('http://img1.youxianbianli.com/public/images/xcapp/product/LocationMap.json');
        setTimeout(() => {
            setStepValue((stepValue: any) => {
                let temp = {
                    ...stepValue,
                    [propName]: value,
                };
                return temp;
            });
        }, 1000);

    }

    return (
        <XCEle.XCSafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                <XCView.LineItemWithRight pageName="基础用法" type="Stepper" valueName="step1" value={stepValue.step1 + ''} onChange={onChange} />
                <XCView.LineItemWithRight pageName="步长设置" type="Stepper" step={2} valueName="step2" value={stepValue.step2 + ''} Round={true} onChange={onChange} />
                <XCView.LineItemWithRight pageName="禁用状态" type="Stepper" canEdit={false} valueName="step3" value={stepValue.step3 + ''} Round={true} onChange={onChange} />
                <XCView.LineItemWithRight pageName="自定义大小" type="Stepper" inputWidth={80} buttonWidth={40} valueName="step4" value={stepValue.step4 + ''} Round={true} onChange={onChange} />
                <XCView.LineItemWithRight pageName="异步加减" type="Stepper" valueName="step5" value={stepValue.step5 + ''} Round={true} onChange={onSyncChange} />
            </ScrollView>
        </XCEle.XCSafeAreaView>
    );
};

export default Stepper;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
});
