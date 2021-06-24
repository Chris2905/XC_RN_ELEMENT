/***
 * 列表展示
 * Chris1000052
 * 组件情况三种：
 * 1.react-native-keyboard-aware-scroll-view解决输入框
 * 2.FlatList 基础列表
 * 3.VirtualizedList 长列表渲染优化
 ***/

import React, { useEffect, useState } from 'react';
import { View, StyleSheet} from 'react-native';
import {LineItemWithRight} from './LineItemRow';
import {XC} from '../Styles/Index';
import {XCButton} from '../BaseComponent/Button';

interface FormProps {
    data: Array<FormItemProps>;
    onChange: Function;
}
interface FormItemProps {
    value: string | boolean;
    type: string;
    propName: string;
    propKey: string;
    require?: boolean;
    hasIcon?: boolean;
    rightDom?: React.ReactElement;
    nvgOption?: Array<any>;
    extVal?: any;
    List?: Array<any>;
    RightModal?: React.FC;
    [key: string]: any;
}

//首页行样式
let Form: React.FC<FormProps> = (props: FormProps) => {
    let [data, setData] = useState(props.data);
    useEffect(() => {
        props.onChange(data);
    }, [data]);
    
    //函数式存在过时的状态，用Effect去关联或者setData回调或者useRef去获取最新值
    const onChange = (value: string, propKey: string) => {
        setData(data => {
            let temp = data.slice(0);
            temp.map((res: FormItemProps) => {
                if (res.propKey == propKey) {
                    res.value = value;
                }
            });
            return temp;
        });
    };

    return (
        <View style={styles.formModal}>
            {data.map((res: FormItemProps) => {
                return (
                    <LineItemWithRight
                        {...res}
                        key={res.propName}
                        pageName={res.propName}
                        type={res.type}
                        require={res.require}
                        value={res.value}
                        hasRightIcon={res.hasIcon}
                        onChange={onChange}
                    />
                );
            })}
            <View style={[XC.XFlex]}>
                <XCButton type="cancel">取消</XCButton>
                <XCButton>提交</XCButton>
            </View>
        </View>
    );
};

Form = React.memo ? React.memo(Form) : Form;

const styles = StyleSheet.create({
    formModal: {
        backgroundColor: '#fff',
        paddingBottom: 20
    },
    footer: {
        
    },
});

export {Form};
