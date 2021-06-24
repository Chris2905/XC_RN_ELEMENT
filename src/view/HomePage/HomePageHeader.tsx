import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import logo from '@/component/assets/Image/logo.png';
import {Style} from '@/component/Index';

export default class HomePageHeader extends React.PureComponent {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={Style.XFlex}>
                    <Image source={logo} style={styles.logoIcon}></Image>
                    <Text style={Style.TxtTitle}>鲜橙小仓</Text>
                </View>
                <Text style={[Style.Txt129, Style.lineHeight(30)]}>
                    轻量、可靠的移动端React Native组件库
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    logoIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
});
