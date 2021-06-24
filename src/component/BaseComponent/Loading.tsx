/***
 * Tab
 * Chris1000052

 ***/

import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

interface LoadingProps {
    isShow: Boolean;
    color?: string;
    size?: number | 'small' | 'large';
}
//鲜橙按钮组
let Loading: React.FC<LoadingProps> = (props: LoadingProps) => {
    if (props.isShow) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator animating={true} color={props.color || '#aaa'} size={props.size || 'large'} />
            </View>
        );
    }
    return null;
};

Loading = React.memo ? React.memo(Loading) : Loading;

export {Loading};

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});
