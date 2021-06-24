/***
 * CheckBox
 * Chris1000052
 * 特殊传参：

 ***/

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IconFont from '../assets/iconfont/index';
import XC from '../Styles/StyleConfig';
import {Tools} from '../Utils/Index';

interface RadioGroupProps {
    List: Array<Object>;
    style?: any;
    color?: string;
    onChange: Function;
}

interface RadioOptProps {
    label: String;
    value: any;
}

interface RadioProps {
    options: RadioOptProps;
    IsSelect: Boolean;
    handlePress: Function;
    color?: string;
}

class Radio extends React.PureComponent<RadioProps, any> {
    constructor(props: RadioProps) {
        super(props);
    }

    render() {
        const {options, handlePress, IsSelect, color} = this.props;

        return (
            <TouchableOpacity activeOpacity={1} style={[XC.XFlex, styles.CheckBoxItem]} onPress={() => handlePress(options.value)}>
                {IsSelect ? <IconFont style={styles.CheckBoxSelect} name={'okkaobei2'} size={16} color={color || '#008dff'} /> : <View style={styles.CheckBoxIco}></View>}
                <Text>{options.label}</Text>
            </TouchableOpacity>
        );
    }
}

//鲜橙按钮组
let RadioGroup: React.FC<RadioGroupProps> = (props: RadioGroupProps) => {
    const {List = [], onChange, color, style} = props;
    let [select, setSelect] = useState(-1);
    const handlePress = (value: number) => {
        setSelect(value);
        onChange(value);
    };

    return (
        <View style={[style]}>
            {List.map((res: any) => {
                return <Radio key={JSON.stringify(res)} options={res} IsSelect={select == res.value} color={color} handlePress={handlePress} />;
            })}
        </View>
    );
};

RadioGroup = React.memo ? React.memo(RadioGroup, Tools.shouldRender) : RadioGroup;

export {RadioGroup};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    CheckBoxItem: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    CheckBoxIco: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        width: 16,
        height: 16,
        marginRight: 8,
    },
    CheckBoxSelect: {
        marginRight: 8,
    },
});
