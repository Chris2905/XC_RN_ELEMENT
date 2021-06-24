import React, {useState} from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import IconFont from '@/component/assets/iconfont/index';
import {XCView} from '@/component/Index';
import {FormItemProps} from '@/component/interface';

const Form = () => {
    let [FormData, setFormData] = useState<Array<FormItemProps>>([
        {
            type: 'Text',
            propName: '名称',
            propKey: 'name',
            value: '西瓜',
            require: true
        },
        {
            type: 'Input',
            propName: '拣货库位',
            propKey: 'backlog_location_name',
            value: '',
            require: true,
            hasIcon: true,
            RightModal: function RightModal() {
                return (
                    <View style={{marginLeft: 10}}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <IconFont name="camera" size={20} />
                        </TouchableOpacity>
                    </View>
                );
            },
        },
        {
            type: 'DatePicker',
            propName: '时间',
            propKey: 'date',
            value: '',
            hasIcon: true,
            require: true,
        },
        {
            type: 'Selector',
            propName: '仓库',
            propKey: 'whId',
            value: '中心仓',
            extVal: {},
            nvgOption: [
                'List',
                {
                    onPress: selectWhId,
                },
            ],
            hasIcon: true,
        },
        {
            type: 'Radio',
            propName: '选择',
            propKey: 'Radio',
            value: '1',
            List: [
                {label: '选择1', value: '0'},
                {label: '选择2', value: '1'},
                {label: '选择3', value: '3'},
                {label: '选择4', value: '4'},
            ],
        },
        {
            type: 'Switch',
            propName: '是否',
            propKey: 'Switch',
            value: true,
        },
    ]);
    function selectWhId(item: any, propKey: string) {
        console.log(FormData);
        let temp = FormData.slice(0);
        Alert.alert('点击' + item.id);
        temp.map((res: FormItemProps) => {
            if (res.propKey == propKey) {
                res.value = item;
            }
        });
        setFormData(temp);
    }
    const onChange = (FormData: Array<FormItemProps>) => {
        setFormData(FormData);
    };

    return <XCView.Form data={FormData} onChange={onChange}></XCView.Form>;
};

export default Form;
