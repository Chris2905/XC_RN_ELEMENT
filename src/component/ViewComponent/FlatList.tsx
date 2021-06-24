/***
 * 列表展示
 * Chris1000052
 * 组件情况三种：
 * 1.react-native-keyboard-aware-scroll-view解决输入框
 * 2.FlatList 基础列表
 * 3.VirtualizedList 长列表渲染优化
 ***/

import React, { useState } from 'react';
import {
    Platform,
    View,
    FlatList,
} from 'react-native';
import { Empty, PageFooter } from './FlatListModal';

interface FlatListProps {
    data: Array<any>;
    renderItem: React.FC;
    hasMore: boolean;
    onEndReached?: Function;
    onRefresh?: Function;
}

//首页行样式
let XCList: React.FC<FlatListProps> = (props: any) => {
    let [refreshing, setRefreshing] = useState<boolean>(false);
    const renderEmpty = () => {
        return (
            <View style={{height: 200}}>
                <Empty tips="暂无更多数据"/>
            </View>
        );
    };

    const onEndReached = () => {
        if (!props.hasMore) return;
        props.onEndReached && props.onEndReached();
    };
    const onRefresh = async () => {
        setRefreshing(true);
        await props.onRefresh && props.onRefresh();
        setRefreshing(false);
    };

    return (
        <FlatList
            style={{flex: 1, backgroundColor: '#f1f1f1'}}
            data={props.data}
            renderItem={props.renderItem}
            ListEmptyComponent={renderEmpty}
            ListFooterComponent={() => {
                return <PageFooter type={props.hasMore ? 'loading' : 'end'} />;
            }}
            initialNumToRender={20}
            onEndReached={onEndReached}
            onEndReachedThreshold={Platform.OS === 'android' ? 0.1 : 0}
            keyExtractor={(item, index) => JSON.stringify(item) + index}
            onRefresh={onRefresh}
            refreshing={refreshing}
        />
    );
};

XCList = React.memo ? React.memo(XCList) : XCList;

export {XCList};
