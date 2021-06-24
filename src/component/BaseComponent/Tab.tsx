/***
 * Tab
 * Chris1000052

 ***/

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import XC from '../Styles/StyleConfig';
import {Tools} from '../../component/Utils/Index';
import {XCConfig} from '../Styles/Index';

interface TabProps {
    tabList: Array<any>;
    selectId: number;
    onChange: Function;
    isScroll?: Boolean;
    withoutLine?: Boolean;
    filterComponent?: React.FC;
}
//鲜橙按钮组
let Tab: React.FC<TabProps> = (props: TabProps) => {
    if (props.isScroll) {
        return (
            <View style={XC.XFlex}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.scrollTabRow, props.withoutLine? null : styles.bottomSplit ]}>
                    {props.tabList.map(res => {
                        return (
                            <TouchableOpacity
                                key={res.value}
                                activeOpacity={0.8}
                                style={styles.scrollTabItem}
                                onPress={() => {
                                    props.onChange(res.value);
                                }}
                                hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
                                <Text style={[XC.Txt143, res.value == props.selectId ? styles.tabTxt : null]}>{res.name}</Text>
                                <View style={[styles.tabLine, res.value == props.selectId ? styles.tabLineSelect : null]}></View>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
                {props.filterComponent}
            </View>
        );
    }
    return (
        <View style={XC.XFlex}>
            <View style={[styles.tabRow, XC.flex(1), props.withoutLine ? null : styles.bottomSplit]}>
                {props.tabList.map((res: any) => {
                    return (
                        <TouchableOpacity
                            key={res.value}
                            activeOpacity={0.8}
                            style={styles.tabItem}
                            onPress={() => {
                                props.onChange(res.value);
                            }}
                            hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
                            <Text style={[XC.Txt143, res.value == props.selectId ? styles.tabTxt : null]}>{res.name}</Text>
                            <View style={[styles.tabLine, res.value == props.selectId ? styles.tabLineSelect : null]}></View>
                        </TouchableOpacity>
                    );
                })}
            </View>
            {props.filterComponent}
        </View>
    );
};

Tab = React.memo ? React.memo(Tab, Tools.shouldRender) : Tab;

export {Tab};

const styles = StyleSheet.create({
    scrollTabRow: {
        paddingVertical: 15,
        backgroundColor: '#fff',
        flex: 1,
    },
    tabRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 15,
        backgroundColor: '#fff',
    },
    scrollTabItem: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    tabItem: {
        alignItems: 'center',
        flex: 1,
    },
    tabLine: {
        width: 20,
        height: 2,
        borderRadius: 4,
        backgroundColor: '#fff',
        marginTop: 5,
        marginBottom: -5,
    },
    tabLineSelect: {
        backgroundColor: XCConfig.MainColor,
    },
    tabTxt: {
        color: XCConfig.MainColor,
    },
    bottomSplit: {
        borderBottomColor: '#ccc',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
