import React, { ReactNode, Component, isValidElement } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableHighlight, TextStyle } from 'react-native';
import Modal from './Modal';

export interface AlertProps {
    title: ReactNode;
    content: ReactNode;
    footer: any[];
    removeComp?: (visible: boolean) => void;
}

export default class Alert extends Component<AlertProps> {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }

    onClose = () => {
        const { removeComp } = this.props;
        this.setState({
            visible: false,
        }, ()=>{
            const {visible} = this.state;
            removeComp && removeComp(visible);
        });
    };

    renderFooter = (footer: any) => {
        let footerDom;
        let buttomItemArea = {};
        let btnGroupStyle = alertStyles.buttonGroupV;
        if (footer && footer.length === 2) {
            btnGroupStyle = alertStyles.buttonGroupH;
            buttomItemArea = { flex: 1 };
        }

        if(footer && footer.length) {

            const buttonItemStyle = footer && footer.length === 2 
                ? alertStyles.buttonItemH
                : alertStyles.buttonItemV;

            const footerButtons = footer.map((button: any, index: number)=>{
                let buttonStyle = {};
                const noneBorder = footer && footer.length === 2 && index === 1 ? { borderRightWidth: 0 } : {};

                if(footer && footer.length === 2 && index === 0) {
                    buttonStyle = { color: '#333'};
                }
                if (button.style) {
                    buttonStyle = button.style;
                }

                const onCallback = () => {
                    if (button.onClick) {
                        button.onClick();
                    }
                };

                return (
                    <TouchableHighlight
                        key={index}
                        style={buttomItemArea}
                        underlayColor="#ddd"
                        onPress={onCallback}
                    >
                        <View style={[buttonItemStyle, noneBorder]}>
                            <Text style={[alertStyles.buttonText, buttonStyle]}>
                                { button.text }
                            </Text>
                        </View>
                    </TouchableHighlight>
                );
            });

            footerDom = (
                <View
                    style={[btnGroupStyle, alertStyles.footer]}
                >
                    {footerButtons}
                </View>
            );
        }

        return footerDom;
    }

    render() {

        const { title, content, footer } = this.props;
        const { visible } = this.state;

        const _footer = footer.map(button => {
            const orginClick = button.onClick || function () { };
            button.onClick = () => {
                const res = orginClick();
                if(res && res.then) {
                    res.then(()=>{
                        this.onClose();
                    });
                } else {
                    this.onClose();
                }
            };
            return button;
        });

        return (
            <Modal
                maskType = 'normal'
                title={title}
                visible = {visible}
                hasCloseIcon={false}
                canEveMask={false}
                footer = {this.renderFooter(_footer)}
            >
                <ScrollView>
                    { isValidElement(content) ? content : <Text style={{textAlign:'center'}}>{content}</Text> }
                </ScrollView>
            </Modal>
        );
    }
}


const alertStyle = {
    footer: {},
    buttonGroupH: {
        flexGrow: 1,
        flexDirection: 'row',
    },    
    buttonGroupV: {
        flexGrow: 1,
        flexDirection: 'column',
    },
    buttonItemH: {
        height: 52,
        flexGrow: 1,
        justifyContent: 'center',
        borderColor: '#e1e1e1',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
        paddingVertical: 11,
    },
    buttonItemV: {
        height: 52,
        flexGrow: 1,
        justifyContent: 'center',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: '#e1e1e1',
        paddingVertical: 11,
    },
    buttonText: {
        textAlign: 'center',
        color: '#008dff',
        fontSize: 18,
        backgroundColor: 'transparent',
    },
};

const alertStyles = StyleSheet.create<any>(alertStyle);