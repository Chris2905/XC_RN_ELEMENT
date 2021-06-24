import React, {useState} from 'react';
import {
    StyleSheet,
    ScrollView,
} from 'react-native';

import {XCEle, XCView} from '@/component/Index';

let DatePicker = () => {
    const [dateValue, setDateValue] = useState({
        date1: '2020-01-02',
        date2: '2020-01-02T12:30',
        date3: '2020-01-02T12:30',
        date4: '2020-01-02',
        date5: '2020-01-02T12:10',
    });

    function onDateChange(key: string, date: string) {
        setDateValue({
            ...dateValue,
            [key]: date,
        });
    }

    return (
        <XCEle.XCSafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                <XCView.LineItemWithRight
                    pageName="日期"
                    type="DatePicker"
                    require={true}
                    value={dateValue.date1}
                    hasRightIcon={true}
                    onChange={(e: string) => {
                        onDateChange('date1', e);
                    }}
                />
                <XCView.LineItemWithRight
                    pageName="日期时间"
                    type="DatePicker"
                    mode="datetime"
                    value={dateValue.date2}
                    hasRightIcon={true}
                    onChange={(e: string) => {
                        onDateChange('date2', e);
                    }}
                />
                <XCView.LineItemWithRight
                    pageName="时间"
                    type="DatePicker"
                    mode="time"
                    value={dateValue.date3}
                    hasRightIcon={true}
                    onChange={(e: string) => {
                        onDateChange('date3', e);
                    }}
                />

                {/* <XCEle.XCDatePickerNew
                    mode="date"
                    value={dateValue.date4}
                    onChange={(e: string) => {
                        onDateChange('date4', e);
                    }}
                />
                <XCEle.XCDatePickerNew
                    mode="time"
                    value={dateValue.date5}
                    onChange={(e: string) => {
                        onDateChange('date5', e);
                    }}
                /> */}
            </ScrollView>
        </XCEle.XCSafeAreaView>
    );
};

export default DatePicker;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
});
