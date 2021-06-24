/***
 * XC按钮组
 * Chris1000052
 * 特殊传参：
 * showLinear：是否渐变
 * colors： 渐变色
 * type： 纯色按钮颜色类型success、submit、cancel、danger、warning、common、empty、wholeEmpty
 * withoutThrottle：是否关闭节流
 * delayTime：节流延时时间
 ***/

import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, StyleSheet, GestureResponderEvent, Text} from 'react-native';
import AnimatedLinearGradient from 'react-native-linear-animated-gradient-transition';
import XC, * as XCConfig from '../Styles/StyleConfig';
interface TouchableProps extends TouchableOpacityProps {
    colors?: Array<string>;
    type?: 'success' | 'submit' | 'cancel' | 'danger' | 'warning' | 'common' | 'empty' | 'wholeEmpty';
    showLinear?: boolean;
    style?: any;
    withoutThrottle?: boolean;
    delayTime?: number;
    disabled?: boolean;
    onPress?: any;
    children?: any;
    [key: string]: any;
}

let isClicked: boolean = false;
let timer: any = 0;

class LinearGradient extends React.PureComponent<TouchableProps, any> {
    constructor(props: TouchableProps) {
        super(props);
    }
    baseColors: Array<string> = ['#FF6630', '#FF3535'];

    render() {
        const {colors, style, children} = this.props;
        const myColors = Array.isArray(colors) ? colors : this.baseColors;
        const myStyle = style ? style : styles.container;

        return (
            <AnimatedLinearGradient colors={myColors} style={myStyle} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                {children}
            </AnimatedLinearGradient>
        );
    }
}

//鲜橙按钮组
const Button: React.FC<TouchableProps> = (props: TouchableProps) => {
    const {colors = [XCConfig.SubButtonColor, XCConfig.SubMitBgColor], type = 'success', showLinear, disabled, onPress, withoutThrottle, delayTime, innerContentStyle, ...rest} = props;
    const disabledStyle = disabled && styles.disabled;

    const handlePress = (e: GestureResponderEvent) => {
        // 不需要节流的场合
        if (withoutThrottle) {
            if (typeof onPress === 'function') {
                // Alert.alert('已点击');
                onPress(e);
            }
            return;
        }

        if (!isClicked) {
            if (typeof onPress === 'function') {
                // Alert.alert('已点击');
                isClicked = true;
                clearTimeout(timer);

                onPress(e);

                timer = setTimeout(() => {
                    isClicked = false;
                }, delayTime || 500);
            }
        }
    };
    const Children = () => {
        if (typeof props.children != 'string') {
            return props.children;
        }
        if (type == 'empty') {
            return <Text style={[XC.Txt14f, {color: '#999'}]}>{props.children}</Text>;
        }
        return <Text style={XC.Txt14f}>{props.children}</Text>;
    };

    return showLinear ? (
        <LinearGradient style={[styles.btnCommonSty, styles.btnNoPadddingSty]} colors={colors}>
            <TouchableOpacity style={styles.lineGradientBtnCommonSty} disabled={disabled} onPress={handlePress} activeOpacity={0.8} {...rest}>
                {Children()}
            </TouchableOpacity>
        </LinearGradient>
    ) : (
        <TouchableOpacity disabled={disabled} onPress={handlePress} style={[styles.btnCommonSty, styles[type], disabledStyle, innerContentStyle]} activeOpacity={0.8} {...rest}>
            {Children()}
        </TouchableOpacity>
    );
};

export const XCButton = React.memo ? React.memo(Button) : Button;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    disabled: {
        opacity: 0.5,
    },
    btnCommonSty: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 20,
        marginHorizontal: 15,
        flex: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnNoPadddingSty: {
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
    lineGradientBtnCommonSty: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    success: {
        backgroundColor: XCConfig.SubButtonColor,
    },
    submit: {
        backgroundColor: XCConfig.SubMitBgColor,
    },
    cancel: {
        backgroundColor: XCConfig.CancelBgColor,
    },
    danger: {
        backgroundColor: XCConfig.DangerColor,
    },
    warning: {
        backgroundColor: XCConfig.WarningColor,
    },
    common: {
        backgroundColor: XCConfig.CommonColor,
    },
    empty: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    wholeEmpty: {
        backgroundColor: '#fff',
        paddingVertical: 0,
        paddingHorizontal: 0,
        marginHorizontal: 0,
        marginTop: 0,
    },
});
