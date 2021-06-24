import React from 'react';
import {TouchableOpacity, TextInput, StyleSheet, View, Text, ScrollView, Switch} from 'react-native';
import {XC} from '../Styles/Index';
import XCNavigate from '../Utils/Navigate';
import * as XCE from '../BaseComponent/Index';

//文本
export const setText = (props: any) => {
    return <Text style={XC.Txt143}>{props.value}</Text>;
};
//输入框
export let setInput: any = (props: any) => {
    return (
        <TextInput
            style={XC.textInputBox}
            underlineColorAndroid="transparent"
            maxLength={20}
            value={props.value}
            placeholder={`请输入${props.pageName}关键字`}
            placeholderTextColor="#ccc"
            onChangeText={(txt: string) => {
                props.onChange(txt, props.propKey);
            }}
        />
    );
};

//日期
export const setDatePicker = (props: any) => {
    return <XCE.XCDatePicker {...props} />;
};
//跳转选择
export const setSelector = (props: any) => {
    return (
        <TouchableOpacity
            disabled={false}
            onPress={() => {
                goPage(props);
            }}>
            <Text style={XC.Txt143}>{props.value}</Text>
        </TouchableOpacity>
    );
};
//单选
export const setRadio = (props: any) => {
    return (
        <View style={{flex: 1}}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} bounces={true} style={styles.ScrollViewSty}>
                {props.List.map((res: any) => {
                    return (
                        <XCE.XCButton
                            key={JSON.stringify(res)}
                            onPress={() => {
                                props.onChange(res.value, props.propKey);
                            }}
                            innerContentStyle={{
                                marginTop: 0,
                                marginRight: 0,
                                paddingVertical: 0,
                            }}
                            type={res.value == props.value ? 'success' : 'empty'}>
                            {res.label}
                        </XCE.XCButton>
                    );
                })}
            </ScrollView>
        </View>
    );
};
//步进器
export const setStepper = (props: any) => {
    let {value, ...rest} = props;
    return <XCE.Stepper value={Number(value)} {...rest} />;
};
//开关
export const setSwitch = (props: any) => {
    let {value, onChange} = props;
    return (
        <Switch
            value={value}
            onValueChange={(txt: boolean) => {
                onChange(txt, props.propKey);
            }}
        />
    );
};

export const goPage = (props: any) => {
    let {nvgOption} = props;
    if (nvgOption && nvgOption.length) {
        XCNavigate.navigate(nvgOption[0], nvgOption[1]);
    }
};

const FormItem: any = new Map([
    ['Text', setText],
    ['Input', setInput],
    ['DatePicker', setDatePicker],
    ['Selector', setSelector],
    ['Radio', setRadio],
    ['Stepper', setStepper],
    ['Switch', setSwitch],
]);

export default FormItem;

const styles = StyleSheet.create({
    ScrollViewSty: {
        flexDirection: 'row',
        paddingVertical: 8,
    },
});
