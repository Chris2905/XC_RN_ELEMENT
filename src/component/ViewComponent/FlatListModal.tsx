/***
 * 列表模块
 * Chris1000052

 ***/

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import IconFont from '../assets/iconfont/index';
import {XC} from '../Styles/Index';

interface ItemModalProps {
    type: number;
    onPress?: any;
    [key: string]: any
}
interface ItemRowProps {
    rowOption: Array<rowOptionProps>;
}
interface rowOptionProps {
    label: string;
    value: any;
    labStyle?: any;
    valStyle?: any;
}
interface EmptyProps {
    option?: optionProps;
    tips?: string;
}
interface optionProps {
    name: string;
    size?: number;
    color?: string;
}
interface footerProps {
    type: 'loading' | 'end';
    tips?: string;
}

let ItemModal: React.FC<ItemModalProps> = ({type, onPress, ...reset}: ItemModalProps) => {
    return (
        <TouchableOpacity style={styles['listModal'+type]} onPress={onPress}>
            {reset.children}
        </TouchableOpacity>
    );
};

let ItemRow: React.FC<ItemRowProps> = ({rowOption}: any) => {
    return (
        <View style={XC.XBetween}>
            {rowOption.map((res: any) => {
                return (
                    <View key={res.label} style={styles.rowItem}>
                        <Text
                            style={[XC.Txt149, styles.rowLabel, res.labStyle]}>
                            {res.label}:
                        </Text>
                        <Text style={[XC.Txt143, res.valStyle]}>
                            {res.value}
                        </Text>
                    </View>
                );
            })}
        </View>
    );
};

//空列表
let Empty: React.FC<EmptyProps> = ({option, tips}: any) => {
    return (
        <View style={[XC.XYCenter, styles.EmptyIcon]}>
            {option ? (
                <IconFont
                    name={option.name}
                    size={option.size || 100}
                    color={option.color || '#ccc'}
                />
            ) : (
                <IconFont name={'play_circle'} size={100} color={'#ccc'} />
            )}
            {tips ? (
                <View>
                    <Text style={[XC.Txt126, {marginTop: 10}]}>{tips}</Text>
                </View>
            ) : null}
        </View>
    );
};

//列表footer
let PageFooter: React.FC<footerProps> = ({type, tips}: any) => {
    if (type == 'end') {
        return (
            <View style={styles.footer}>
                <Text style={styles.footerTxt}>{tips || '没有更多数据了'}</Text>
            </View>
        );
    }
    return (
        <View style={styles.footer}>
            <ActivityIndicator
                style={{height: 40, marginRight: 5}}
                size="small"
                color={'#3ac569'}
            />
            <Text style={styles.footerTxt}>{tips || '正在加载中...'}</Text>
        </View>
    );
};

ItemModal = React.memo ? React.memo(ItemModal) : ItemModal;
ItemRow = React.memo ? React.memo(ItemRow) : ItemRow;
Empty = React.memo ? React.memo(Empty) : Empty;
PageFooter = React.memo ? React.memo(PageFooter) : PageFooter;

export {ItemModal, ItemRow, Empty, PageFooter};

const styles = StyleSheet.create({
    listModal1: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    listModal2: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 10
    },
    listModal3: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 10,
        marginHorizontal: 15,
        borderRadius: 8
    },
    EmptyIcon: {
        flex: 1,
    },
    footer: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerTxt: {
        fontSize: 14,
        color: '#999',
    },
    rowItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowLabel: {
        width: 70,
        lineHeight: 24,
    },
});
