import React, { useState } from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import {XCEle} from '../../component/Index';

const Tab = () => {
    let [select, setSelect] = useState(1);

    return (
        <XCEle.XCSafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                <XCEle.Tab
                    tabList={[
                        {name: 'tab1', value: 1},
                        {name: 'tab2', value: 2},
                        {name: 'tab3', value: 3},
                    ]}
                    selectId={select}
                    onChange={setSelect}
                />
                <XCEle.Tab
                    tabList={[
                        {name: 'tab1', value: 1},
                        {name: 'tab2', value: 2},
                        {name: 'tab3', value: 3},
                    ]}
                    isScroll={true}
                    withoutLine={true}
                    selectId={select}
                    onChange={setSelect}
                />
            </ScrollView>
        </XCEle.XCSafeAreaView>
    );
};

export default Tab;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    small: {
        width: 100,
        height: 60,
    },
});