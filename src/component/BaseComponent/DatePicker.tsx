import React, {useState} from "react";
import DatePicker from 'react-native-datepicker';
import {Tools} from '../Utils/Index';
interface DateTimePickerProps {
    mode?: "date" | "time" | "datetime";
    onChange?: Function;
    value: string;
    propKey: string;
    maxDate?: string;
    minDate?: string;
    format?: string;
    placeholder?: string;
}

//DatePicker封装
let XCDatePicker: React.FC<DateTimePickerProps> = (
    props: DateTimePickerProps,
) => {
    let {value = "", mode = "date", propKey, ...reset} = props;
    let [date, setDate] = useState<string>(value);
    const handlePress = (value: string) => {
        setDate(value);
        props.onChange && props.onChange(value, propKey);
    };

    return (
        <DatePicker
            style={{flex: 1}}
            date={date}
            mode={mode}
            placeholder={"请选择日期"}
            // format={'YYYY-MM-DD'}
            // maxDate={'2100-01-01'}
            // minDate={'1970-01-01'}
            confirmBtnText="确定"
            cancelBtnText="取消"
            androidMode={"spinner"}
            showIcon={false}
            onDateChange={handlePress}
            locale="zh"
            customStyles={Object.assign({
                dateInput: {
                    borderColor: "transparent",
                    borderWidth: 0,
                    alignItems: "flex-end",
                },
                dateText: {},
                btnTextConfirm: {
                    color: "#0090ff",
                },
                btnTextCancel: {
                    color: "#666",
                },
                datePicker: {
                    borderTopColor: "#e1e1e1",
                    color: "black",
                    ios_backgroundColor: "white",
                    backgroundColor: "white",
                    justifyContent: "center",
                },
                datePickerCon: {
                    color: "black",
                    ios_backgroundColor: "white",
                    backgroundColor: "white",
                },
                placeholderText: {
                    color: "#ccc",
                },
            })}
            {...reset}
        />
    );
};

XCDatePicker = React.memo
    ? React.memo(XCDatePicker, Tools.shouldRender)
    : XCDatePicker;

export {XCDatePicker};
