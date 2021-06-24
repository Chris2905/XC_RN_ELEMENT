'use strict';
//公共样式
import {StyleSheet, Platform, Dimensions} from 'react-native';
const winDimensions = Dimensions.get('screen');

export const HeadNavBgColor = '#ffffff';
export const HeadNavBtmSplitColor = '#cccccc';
export const WinWidth = winDimensions.width;
export const WinHeight = winDimensions.height;
export const WidthScale = 750;
export const WindowScale = winDimensions.width / 750;
export const PageBGColor = '#f0f0f0';
export const SplitColor = '#e1e1e1';
export const MainColor = '#3ac569';
export const SubButtonColor = '#3ac569';
export const SubMitBgColor = '#ff674b';
export const CancelBgColor = '#cccccc';
export const LoadingColor = '#3ac569';
export const DangerColor = '#ff674b';
export const WarningColor = '#e6a23c';
export const CommonColor = '#008dff';

// 堆叠顺序
export const zIndexMask = 1000;
export const zIndexPopup = 1300;
export const zIndexModal = 1400;

// 透明度
export const OpacityMask = 0.5;


export const fontFamily = Platform.select({
  ios: 'PingFang SC',
  android: 'DroidSansFallback',
});

let styles: any = StyleSheet.create({
    //页面背景
    container: {
        position: 'relative',
        backgroundColor: PageBGColor,
        flex: 1,
    },
    greenTxt: {
        color: MainColor,
    },
    redTxt: {
        color: SubMitBgColor,
    },
    blueTxt: {
        color: '#1296db',
    },
    row: {
        flexDirection: 'row',
    },

    //******************************************************字体、颜色****************************************************************
    TxtTitle: {
        fontSize: 22,
        color: '#333',
        fontFamily,
        fontWeight: 'bold',
    },
    Txt16f: {
        fontSize: 16,
        color: '#fff',
        fontFamily,
    },
    Txt20f: {
        fontSize: 20,
        color: '#fff',
        fontFamily,
    },
    Txt14f: {
        fontSize: 14,
        color: '#fff',
        fontFamily,
    },
    Txt12f: {
        fontSize: 12,
        color: '#fff',
        fontFamily,
    },
    Txt153: {
        fontSize: 15,
        color: '#333',
        fontFamily,
    },
    Txt163: {
        fontSize: 16,
        color: '#333',
        fontFamily,
    },
    Txt183: {
        fontSize: 18,
        color: '#333',
        fontFamily,
    },
    Txt143: {
        fontSize: 14,
        color: '#333',
        fontFamily,
    },
    Txt123: {
        fontSize: 12,
        color: '#333',
        fontFamily,
    },
    Txt166: {
        fontSize: 16,
        color: '#666',
        fontFamily,
    },
    Txt146: {
        fontSize: 14,
        color: '#666',
        fontFamily,
    },
    Txt126: {
        fontSize: 12,
        color: '#666',
        fontFamily,
    },
    Txt169: {
        fontSize: 16,
        color: '#999',
        fontFamily,
    },
    Txt149: {
        fontSize: 14,
        color: '#999',
        fontFamily,
    },
    Txt129: {
        fontSize: 12,
        color: '#999',
        fontFamily,
    },
    Txt16c: {
        fontSize: 16,
        color: '#ccc',
        fontFamily,
    },
    Txt14c: {
        fontSize: 14,
        color: '#ccc',
        fontFamily,
    },
    Txt12c: {
        fontSize: 12,
        color: '#ccc',
        fontFamily,
    },
    Txt16g: {
        fontSize: 16,
        color: '#3ac569',
        fontFamily,
    },
    Txt14g: {
        fontSize: 14,
        color: '#3ac569',
        fontFamily,
    },
    Txt12g: {
        fontSize: 12,
        color: '#3ac569',
        fontFamily,
    },
    fontBold: {
        fontWeight: 'bold',
        fontFamily,
    },
    priceColor: {
        color: '#f63',
    },
    // lineHeight: num => {
    //     return {
    //         lineHeight: num,
    //     };
    // },

    //******************************************************布局*********************************************************************************************************
    FlexWrap: {
        flexWrap: 'wrap',
    },
    XFlex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    XAround: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    XBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    XLeft: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    XBottom: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    YLeft: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    YCenter: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    XYCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    YAround: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    YBetween: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    // flex: (num: any) => {
    //     return {flex: num};
    // },
    boxShadow: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 30,
        elevation: 20,
    },

    textInputBox: {
        //用textAlign:'right'，android滑动有问题
        padding: 0,
        margin: 0,
        flex: 1,
        height: 48,
        textAlign: 'right',
        fontSize: 14,
        color: '#333',
        fontFamily,
    },
    lineContainerStyle: {
        backgroundColor: '#fff',
        height: 48,
        paddingHorizontal: 15,
        borderBottomColor: SplitColor,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    lineLabelBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

styles.lineHeight = (num: number) => {
    return { lineHeight: num };
};

styles.flex = (num: number) => {
    return {flex: num};
};

export default styles;
