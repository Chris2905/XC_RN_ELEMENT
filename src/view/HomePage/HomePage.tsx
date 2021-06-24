import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

import {XCEle, XCView, XCTools} from '@/component/Index';
import HomePageHeader from './HomePageHeader';

const HomePage = () => {
    const goPage = (pageName: string) => {
        XCTools.Navigate.navigate(pageName, {});
    };
    console.log(XCEle.XCButton);

    return (
        <XCEle.XCSafeAreaView>
            <HomePageHeader />
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                <Text style={styles.lineTitle}>基础组件</Text>
                <XCView.LineItemRow
                    label={'Button组件'}
                    pageName="ButtonPage"
                    onPress={() => {
                        goPage('ButtonPage');
                    }}
                />
                <XCView.LineItemRow
                    label={'Tab组件'}
                    pageName="Tab"
                    onPress={() => {
                        goPage('Tab');
                    }}
                />
                <XCView.LineItemRow
                    label={'DatePicker日历组件'}
                    pageName="DatePicker"
                    onPress={() => {
                        goPage('DatePicker');
                    }}
                />
                <XCView.LineItemRow
                    label={'CheckBox复选框'}
                    pageName="CheckBox"
                    onPress={() => {
                        goPage('CheckBox');
                    }}
                />
                <XCView.LineItemRow
                    label={'Radio单选框'}
                    pageName="Radio"
                    onPress={() => {
                        goPage('Radio');
                    }}
                />
                <XCView.LineItemRow
                    label={'Stepper步进器'}
                    pageName="Stepper"
                    onPress={() => {
                        goPage('Stepper');
                    }}
                />
                <XCView.LineItemRow
                    label={'Search搜索'}
                    pageName="Search"
                    onPress={() => {
                        goPage('Search');
                    }}
                />
                <XCView.LineItemRow
                    label={'Dialog弹出层'}
                    pageName="Dialog"
                    onPress={() => {
                        goPage('Dialog');
                    }}
                />
                <XCView.LineItemRow
                    label={'Collapse折叠面板'}
                    pageName="Collapse"
                    onPress={() => {
                        goPage('Collapse');
                    }}
                />
                <Text style={styles.lineTitle}>业务组件</Text>
                <XCView.LineItemRow
                    label={'Form表单'}
                    pageName="Form"
                    onPress={() => {
                        goPage('Form');
                    }}
                />
                <XCView.LineItemRow
                    label={'List列表'}
                    pageName="List"
                    onPress={() => {
                        goPage('List');
                    }}
                />
                <XCView.LineItemRow
                    label={'Sticky粘性布局'}
                    pageName="Sticky"
                    onPress={() => {
                        goPage('Sticky');
                    }}
                />
                {/* <XCView.LineItemRow
                    label={'Swipe轮播'}
                    pageName='Swipe'
                    onPress={() => {
                        goPage('Swipe');
                    }}
                /> */}
                <XCView.LineItemRow
                    label={'Upload文件上传'}
                    pageName="UploadFile"
                    onPress={() => {
                        goPage('UploadFile');
                    }}
                />
                <XCView.LineItemRow
                    label={'Popup'}
                    pageName="Popup"
                    onPress={() => {
                        goPage('Popup');
                    }}
                />
                <XCView.LineItemRow
                    label={'Modal'}
                    pageName="Modal"
                    onPress={() => {
                        goPage('Modal');
                    }}
                />
                <XCView.LineItemRow
                    label={'Keyboard'}
                    pageName='Modal'
                    onPress={() => {
                        goPage('Keyboard');
                    }}
                />
                <XCView.LineItemRow
                    label={'XcGlobalContext'}
                    pageName='Modal'
                    onPress={() => {
                        goPage('XcGlobalContext');
                    }}
                />
            </ScrollView>
        </XCEle.XCSafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    lineTitle: {
        marginHorizontal: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#666',
    },
});

export default HomePage;
