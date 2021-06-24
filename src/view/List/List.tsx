import React, {useState} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {XCEle, XCView, XCTools} from '@/component/Index';

const List = (props: any) => {
    let {params} = props.route;
    let [List, setList] = useState([{id: 1}, {id: 2}, {id: 3}]);

    const onPress = (rowData: any) => {
        console.log(props);
        if (params.onPress) {
            params.onPress(rowData.item);
            XCTools.Navigate.back();
            return;
        }
        Alert.alert('点击');
    };

    const renderItem = (rowData: any) => {
        return (
            <XCView.ItemModal
                type={3}
                onPress={() => {
                    onPress(rowData);
                }}>
                <XCView.ItemRow rowOption={[{label: '商品ID', value: 12345, labStyle: {color: '#333'}}]} />
                <XCView.ItemRow
                    rowOption={[
                        {
                            label: '商品名称',
                            value: '测试商品',
                            valStyle: {color: 'red', fontWeight: 'bold'},
                        },
                        {label: '商品数量', value: 12},
                    ]}
                />
                <XCView.ItemRow rowOption={[{label: '商品ID1', value: 12345}]} />
                <XCView.ItemRow rowOption={[{label: '商品ID2', value: 12345}]} />
                <XCView.ItemRow
                    rowOption={[
                        {label: '商品ID3', value: 12345},
                        {label: '商品ID4', value: 12345},
                    ]}
                />
            </XCView.ItemModal>
        );
    };

    return (
        <XCEle.XCSafeAreaView>
            <XCView.XCList data={List} renderItem={renderItem} hasMore={false} onRefresh={() => {}}></XCView.XCList>
        </XCEle.XCSafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default List;
