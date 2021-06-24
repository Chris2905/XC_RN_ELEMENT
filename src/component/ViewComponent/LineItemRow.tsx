import React, {} from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import IconFont from '../assets/iconfont/index';
import {XC, XCConfig} from '../Styles/Index';
import FormItem from './FormItem';

interface LineItemRowProps {
    label: string;
    pageName: string;
    params?: Object;
    propStyle?: Object;
    onPress?: Function;
}
interface LineItemWithRightProps {
    pageName: string;
    value: string | boolean;
    require?: Boolean;
    valueName?: string;
    type: string;
    hasRightIcon?: boolean;
    params?: Object;
    propStyle?: Object;
    onChange?: Function;
    nvgOption?: Array<any>;
    [key: string]: any;
}

//首页行样式
let LineItemRow: React.FC<LineItemRowProps> = (props: any) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onPress}
            style={[styles.LineItemRow, XC.XBetween, props.propStyle]}>
            <Text style={[XC.Txt143, XC.fontBold]}>{props.label}</Text>
            <IconFont name={'right_blod'} size={20} color='#ccc' />
        </TouchableOpacity>
    );
};

//右侧自定义样式
let LineItemWithRight: React.FC<LineItemWithRightProps> = (props: any) => {

    return (
        <View style={[styles.checkLine]}>
            {props.require ? <Text style={styles.mustLabel}>*</Text> : null}
            <Text style={styles.checkLabel}>{props.pageName}：</Text>
            <View style={styles.checkSet}>
                {/* 展示不同类型form */}
                {FormItem.get(props.type)(props)}

                {/* 右侧icon */}
                {props.hasRightIcon ? (
                    props.RightModal ? (
                        props.RightModal()
                    ) : (
                        <IconFont name={'right_blod'} size={16} color="#ccc" />
                    )
                ) : null}
            </View>
        </View>
    );
};

LineItemRow = React.memo ? React.memo(LineItemRow) : LineItemRow;
LineItemWithRight = React.memo? React.memo(LineItemWithRight) : LineItemWithRight;

export {LineItemRow, LineItemWithRight};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    LineItemRow: {
        backgroundColor: '#f1f1f1',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    checkLine: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: XCConfig.SplitColor,
        position: 'relative',
    },
    mustLabel: {
        position: 'absolute',
        left: 5,
        color: '#f10',
    },
    checkLabel: {
        width: 100,
        fontSize: 14,
        color: '#333',
    },
    checkSet: {
        flex: 1,
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    ScrollViewSty: {
        flexDirection: 'row',
        paddingVertical: 8
    },
});
