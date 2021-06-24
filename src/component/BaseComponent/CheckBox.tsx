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

interface CheckBoxGroupProps {
    List: Array<Object>;
    style?: any;
    color?: string;
    onChange: Function;
}

interface CheckBoxOptProps {
    label: String;
    value: any;
}

interface CheckBoxProps {
    options: CheckBoxOptProps;
    IsSelect: Boolean;
    handlePress: Function;
    color?: string;
}

class CheckBox extends React.PureComponent<CheckBoxProps, any> {
    constructor(props: CheckBoxProps) {
        super(props);
    }

    render() {
        const {options, handlePress, IsSelect, color = '#008dff'} = this.props;

        return (
            <TouchableOpacity activeOpacity={1} style={[XC.XFlex, styles.CheckBoxItem]} onPress={() => handlePress(options.value)}>
                {IsSelect ? <IconFont style={styles.CheckBoxSelect} name={'ok-copy'} size={16} color={color} /> : <View style={styles.CheckBoxIco}></View>}

                <Text>{options.label}</Text>
            </TouchableOpacity>
        );
    }
}

//鲜橙按钮组
let CheckBoxGroup: React.FC<CheckBoxGroupProps> = (props: CheckBoxGroupProps) => {
    const {List = [], onChange, color, style} = props;
    let [select, setSelect] = useState<Array<number>>([]);
    const handlePress = (value: number) => {
        if (select.includes(value)) {
            let i = select.findIndex(res => res == value);
            select.splice(i, 1);
        } else {
            select.push(value);
        }
        setSelect([...select]);
        onChange([...select]);
    };

    return (
        <View style={[style]}>
            {List.map((res: any) => {
                return <CheckBox key={JSON.stringify(res)} options={res} IsSelect={select.includes(res.value)} color={color} handlePress={handlePress} />;
            })}
        </View>
    );
};

CheckBoxGroup = React.memo ? React.memo(CheckBoxGroup, Tools.shouldRender) : CheckBoxGroup;

export {CheckBoxGroup};

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
        borderRadius: 2,
        width: 16,
        height: 16,
        marginRight: 8,
    },
    CheckBoxSelect: {
        marginRight: 8,
    },
});
