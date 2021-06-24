/***
 * 文件上传
 * Chris1000052
 ***/

import React from 'react';
import {View, StyleSheet, Modal, ActivityIndicator} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

interface ImgArr {
    url: string;
}
interface ImgPreViewProps {
    imgList: Array<ImgArr>;
    isShow: boolean;
    imgIndex?: number;
    onChange: Function;
}

//首页行样式
let ImagePreView: React.FC<ImgPreViewProps> = (props: ImgPreViewProps) => {
    const closeImgView = () => {
        props.onChange(false);
    };

    return (
        <Modal visible={props.isShow} transparent={true}>
            <ImageViewer
                imageUrls={props.imgList}
                index={props.imgIndex || 0}
                saveToLocalByLongPress={false}
                loadingRender={() => (
                    <View style={styles.loading}>
                        <ActivityIndicator
                            animating={true}
                            color={'#aaa'}
                            size={'large'}
                        />
                    </View>
                )}
                onClick={closeImgView}
            />
        </Modal>
    );
};

ImagePreView = React.memo ? React.memo(ImagePreView) : ImagePreView;

export {ImagePreView};

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
});
