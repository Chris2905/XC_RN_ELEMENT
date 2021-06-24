import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, TextInput, ViewStyle, TextStyle, Alert} from 'react-native';
import IconFont from '../assets/iconfont/index';
import XC from '../Styles/StyleConfig';
import {Tools} from '../Utils/Index';

interface IProps {
    required?: boolean;
    label?: string;
    value: number;
    valueName: string;
    defaultValue?: number;
    step?: number;
    max?: number;
    min?: number;
    Round?: Boolean;
    canEdit?: boolean;
    disabled?: boolean;
    textInputStyle?: ViewStyle;
    actionColor?: string;
    disColor?: string;
    containerStyle?: ViewStyle;
    labelTxtStyle?: TextStyle;
    inputWidth?: number;
    buttonWidth?: number;
    onChange: (num: number, propName?: string) => void;
}

let Stepper: React.FC<IProps> = (props: IProps) => {
    let {value, max = 9999, min = 0, step = 1, disabled = false, canEdit = true, disColor = '#ddd', Round = false, valueName, inputWidth = 45, buttonWidth = 30} = props;
    let [editable, setEditable] = useState(canEdit);

    // +/-
    const addCount = async (actionType: string) => {
        if (disabled || !editable) return;
        let addNum = actionType == 'add' ? value + step : value - step;
        if (actionType == 'cut' && value <= min) return;
        if (actionType == 'add' && value >= max) return;
        if (addNum < min) addNum = min;
        if (addNum > max) addNum = max;
        setEditable(false);
        props.onChange && (await props.onChange(addNum, valueName));
        setEditable(true);
    };
    // 输入改变
    const countBlur = () => {
        if (disabled || !editable) return;
        if (value > max) value = max;
        if (value < min) value = min;
        setEditable(false);
        props.onChange && props.onChange(value, valueName);
        setEditable(true);
    };
    // 改变触发事件
    const countChange = (count: string) => {
        if (disabled || !editable) return;
        let num = Number(count);
        if (num > max) {
            Alert.alert('最大为' + max);
            num = max;
        }
        if (num < min) {
            Alert.alert('最小为' + min);
            num = min;
        }
        props.onChange && props.onChange(num, valueName);
    };

    let borderColor = disabled ? disColor : props.actionColor || '#3ac569',
        iconColor = disabled ? disColor : props.actionColor || '#3ac569';

    return (
        <View style={[XC.XFlex, styles.stepperBox]}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    styles.actionBtn,
                    XC.XYCenter,
                    {
                        borderColor: value <= min || !editable ? disColor : borderColor,
                    },
                    Round ? styles.borderRadius : {},
                    {
                        width: buttonWidth,
                        height: buttonWidth,
                    },
                ]}
                onPress={() => addCount('cut')}>
                <IconFont name={'minus__blod'} size={18} color={value <= min || !editable ? disColor : iconColor} />
            </TouchableOpacity>
            <TextInput
                style={[
                    styles.textInputBox,
                    props.textInputStyle,
                    {
                        color: disabled ? disColor : '#333',
                        minWidth: inputWidth,
                    },
                ]}
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                maxLength={max.toString().length + 1}
                value={value + ''}
                editable={!disabled && editable}
                onBlur={countBlur}
                onChangeText={countChange}
            />
            <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    styles.actionBtn,
                    XC.XYCenter,
                    {
                        borderColor: value >= max || !editable ? disColor : borderColor,
                    },
                    Round ? styles.borderRadius : {},
                    {
                        width: buttonWidth,
                        height: buttonWidth,
                    },
                ]}
                onPress={() => addCount('add')}>
                <IconFont name={'plus__blod'} size={18} color={value >= max || !editable ? disColor : iconColor} />
            </TouchableOpacity>
        </View>
    );
};

Stepper = React.memo ? React.memo(Stepper, Tools.shouldRender) : Stepper;

export {Stepper};

const styles = StyleSheet.create({
    actionBtn: {
        width: 30,
        height: 30,
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: 'transparent',
        marginVertical: 5,
    },
    borderRadius: {
        borderRadius: 30,
    },
    stepperBox: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    textInputBox: {
        minWidth: 45,
        height: 40,
        paddingHorizontal: 10,
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
        backgroundColor: 'transparent',
    },
    disBtn: {
        borderColor: '#ddd',
    },
});
