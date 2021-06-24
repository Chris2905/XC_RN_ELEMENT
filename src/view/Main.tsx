import React, {useEffect} from 'react';
import {StatusBar, LogBox} from 'react-native';
// import {Provider as ANTDProvider} from '@ant-design/react-native';
import {enableScreens} from 'react-native-screens';
import '@/component/Utils/Axios';
import '@/component/Utils/Event';

import {Style, XCEle, XCView} from '@/component/Index';

import {observer, Provider} from 'mobx-react';
import Navigator from '@/router/index';
enableScreens();

const App = () => {
    useEffect(() => {
        LogBox.ignoreLogs([
            'Non-serializable values were found in the navigation state',
        ]);
    }, []);

    return (
        <Provider>
            <XCEle.XcProvider>
                <StatusBar barStyle='dark-content' />
                <Navigator />
            </XCEle.XcProvider>
        </Provider>
    );
};

export default observer(App);
