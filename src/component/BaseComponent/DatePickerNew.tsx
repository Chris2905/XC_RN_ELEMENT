import React, {useState} from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

interface DateTimePickerProps {
    mode?: "date" | "time";
    display?: "default" | "spinner" | "calendar" | "clock" | "inline";
    onChange?: Function;
    value: string;
    max?: string;
    min?: string;
    timeZoneOffsetInMinutes?: number;
    timeZoneOffsetInSeconds?: number;
    textColor?: string;
    [key: string]: any
}

//DatePicker封装
let XCDatePickerNew: React.FC<DateTimePickerProps> = (props: DateTimePickerProps) => {
    let {display = 'default', mode = 'date', max = '', min = '', value, onChange, ...reset} = props;
    let [date, setDate] = useState<Date>(new Date(value));
    const handlePress = (e: Event, value: Date) => {
        setDate(value);
        onChange && onChange(value);
    };

    return <DateTimePicker style={{flex: 1}} value={date} mode={mode} display={display} is24Hour={true} maximumDate={new Date(max || '2100-01-01')} minimumDate={new Date(min || '1970-01-01')} onChange={handlePress} locale="zh" {...reset} />;
};

XCDatePickerNew = React.memo ? React.memo(XCDatePickerNew) : XCDatePickerNew;

export {XCDatePickerNew};
