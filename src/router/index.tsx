import React, {} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './Interface';
import {XCTools} from '@/component/Index';
import * as Router from '@/view/Index';
import {
    createStackNavigator,
} from '@react-navigation/stack';

let Stack = createStackNavigator<RootStackParamList>();

const Screens: Array<any> = [
    {
        name: 'HomePage',
        component: Router.HomePage,
        options: {headerTitle: '鲜橙科技', headerShown: true},
    },
    {
        name: 'ButtonPage',
        component: Router.ButtonPage,
        options: {headerTitle: 'Button组件', headerShown: true},
    },
    {
        name: 'Tab',
        component: Router.Tab,
        options: {headerTitle: 'Tab组件', headerShown: true},
    },
    {
        name: 'DatePicker',
        component: Router.DatePicker,
        options: {headerTitle: 'DatePicker组件', headerShown: true},
    },
    {
        name: 'CheckBox',
        component: Router.CheckBox,
        options: {headerTitle: 'CheckBox组件', headerShown: true},
    },
    {
        name: 'Radio',
        component: Router.Radio,
        options: {headerTitle: 'Radio组件', headerShown: true},
    },
    {
        name: 'Stepper',
        component: Router.Stepper,
        options: {headerTitle: 'Stepper组件', headerShown: true},
    },
    {
        name: 'Popup',
        component: Router.Popup,
        options: {headerTitle: 'Popup组件', headerShown: true},
    },
    {
        name: 'List',
        component: Router.List,
        options: {headerTitle: 'List组件', headerShown: true},
    },
    {
        name: 'Form',
        component: Router.Form,
        options: {headerTitle: 'Form组件', headerShown: true},
    },
    {
        name: 'UploadFile',
        component: Router.UploadFile,
        options: {headerTitle: 'UploadFile组件', headerShown: true},
    },
    {
        name: 'Modal',
        component: Router.Modal,
        options: {headerTitle: 'Modal组件', headerShown: true},
    },
    {
        name: 'Keyboard',
        component: Router.Keyboard,
        options: {headerTitle: 'Keyboard组件', headerShown: true},
    },
    {
        name: 'Collapse',
        component: Router.Collapse,
        options: {headerTitle: '折叠面板组件', headerShown: true},
    },
    {
        name: 'XcGlobalContext',
        component: Router.XcGlobalContext,
        options: {headerTitle: 'react上下文组件', headerShown: true},
    },
    
];

const Index = (): any => {
    let onStateChange = () => {};

    return (
        <NavigationContainer ref={XCTools.Navigate.navigationRef} onStateChange={onStateChange}>
            <Stack.Navigator>
                {Screens.map(({name, component, options = {}}, index) => {
                    return (
                        <Stack.Screen
                            name={name}
                            component={component}
                            options={options}
                            key={index}
                        />
                    );
                })}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Index;
