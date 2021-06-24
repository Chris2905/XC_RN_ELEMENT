import React, { Component } from 'react';
import { XcConsumer } from './XcGlobalContext';
import Alert from './Alert';

function alert({title, content, footer}: any) {
    let _footer;
    if(!footer) {
        footer = '确定';
    }
    _footer = Array.isArray(footer) ? footer : [{text: footer}];

    const key = XcConsumer.on(
        <Alert
            title={title || '提示'}
            content = {content}
            footer = {_footer}
            removeComp = {(visible: boolean) => {
                console.log(' removeComp key', key);
                if (!visible) {
                    XcConsumer.off(key);
                }
                console.log(' removeComp visible', visible);
            }}
        />
    );
    
    return key;
}

class XcWin extends Component {

    static alert: typeof alert;

    render() {
        return null;
    }
}
XcWin.alert = alert;

export default XcWin;
