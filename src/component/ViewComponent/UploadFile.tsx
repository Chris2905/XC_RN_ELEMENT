/***
 * 文件上传
 * Chris1000052
 ***/

import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, PermissionsAndroid, TouchableOpacity, Image, Text, Platform, Modal} from 'react-native';
import SyanImagePicker from 'react-native-syan-image-picker';
import IconFont from '../assets/iconfont/index';
import {XC} from '../Styles/Index';
import {Loading} from '../BaseComponent/Index';
import {XCAxios} from '../Utils/Axios';
import {ImagePreView} from './ImagePreView';

interface FormProps {
    imgList: Array<any>;
    remark?: string;
    maxLength?: number;
    lineSize?: number;
    isReadOnly?: Boolean;
    onChange?: Function;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
    needBase64?: Boolean;
    onlyCamera?: Boolean;
    onlyPhoto?: Boolean;
    uploadUrl?: string;
    params?: any;
    callBack?: Function;
    uploadPhoto?: Function;
}

//首页行样式
let UploadFile: React.FC<FormProps> = (props: FormProps) => {
    let {lineSize = 4, maxLength = 9} = props;
    let [width, setWidth] = useState({});
    let [isShow, setIsShow] = useState(false);
    let [needSelect, setNeedSelect] = useState(false);
    let [imgIndex, setImgIndex] = useState(0);
    let imgList = useRef(props.imgList);
    imgList.current = props.imgList;

    const requestPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
                title: '申请读写手机存储权限',
                message: '请允许使用摄像头',
                buttonNeutral: '稍后',
                buttonNegative: '拒绝',
                buttonPositive: '允许',
            });
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('现在你获得摄像头权限了');
            } else {
                console.log('用户并不给你');
                return;
            }
        } catch (err) {
            console.warn(err);
            return;
        }
    };

    const handleLaunchCamera = async () => {
        if (Platform.OS === 'android') await requestPermission();

        SyanImagePicker.openCamera(
            {
                quality: 40,
                imageCount: 9,
                enableBase64: true,
            },
            (err, photos) => {
                if (props.needBase64) {
                    photos &&
                        photos.map((res: any) => {
                            props.callBack && props.callBack(res.base64);
                        });
                } else if (photos) {
                    // photos.map((res, index) => {
                    //     this.uploadPic(res.base64, index);
                    // });
                }
                // this.props.cancelDialog && this.props.cancelDialog();
            },
        );
    };

    const handleSelectPhoto = async () => {
        SyanImagePicker.asyncShowImagePicker({
            quality: 10,
            imageCount: 9,
            enableBase64: true,
        })
            .then(photos => {
                if (props.needBase64) {
                    photos &&
                        photos.map((res: any) => {
                            props.callBack && props.callBack(res.base64);
                        });
                } else if (photos) {
                    addPhoto(photos);
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    const getLayOut = (e: any) => {
        let size = e.nativeEvent.layout.width;
        size = (size - lineSize * 15) / lineSize;
        setWidth({width: size, height: size});
    };

    const deletePhoto = (data: any) => {
        let temp = props.imgList.filter((res: any) => JSON.stringify(data) != JSON.stringify(res));
        props.onChange && props.onChange(temp);
    };

    const addPhoto = (photos: any) => {
        let temp = props.imgList.slice(0);
        photos.map(async (res: any) => {
            let row = {
                url: res.base64,
                showLoading: true,
            };
            temp.push(row);
            await uploadPhoto(row);
            // changeLoading(row);
        });
        props.onChange && props.onChange(temp);
    };
    //关闭上传图片loading
    const changeLoading = (item: any) => {
        setTimeout(() => {
            let temp = imgList.current.slice(0);
            temp.map((res: any) => {
                if (res.url == item.url) res.showLoading = false;
            });
            props.onChange && props.onChange(temp);
        }, 2000);
    };

    const perView = (index: number) => {
        setIsShow(!isShow);
        setImgIndex(index);
    };

    const startUpload = () => {
        if (props.onlyCamera) {
            requestPermission();
        }
        if (props.onlyPhoto) {
            handleSelectPhoto();
        }
        setNeedSelect(true);
    };

    const uploadPhoto = async (row: any) => {
        props.uploadPhoto && (await props.uploadPhoto());
        changeLoading(row);
    };

    return (
        <View style={[XC.XFlex, styles.formModal]} onLayout={getLayOut}>
            {props.imgList.map((res: any, index: number) => {
                return (
                    <View key={index} style={[styles.uploadItem, width]}>
                        <TouchableOpacity
                            onPress={() => {
                                perView(index);
                            }}>
                            <Image source={{uri: res.url}} style={width} resizeMode={props.resizeMode || 'cover'} />
                        </TouchableOpacity>

                        {!props.isReadOnly ? (
                            <TouchableOpacity
                                style={styles.deleteIcon}
                                activeOpacity={0.8}
                                hitSlop={{
                                    top: 10,
                                    left: 10,
                                    bottom: 10,
                                    right: 10,
                                }}
                                onPress={() => {
                                    deletePhoto(res);
                                }}>
                                <IconFont name="close2" size={20} color={'red'} />
                            </TouchableOpacity>
                        ) : null}

                        <Loading isShow={res.showLoading && !props.isReadOnly} />
                    </View>
                );
            })}

            {!props.isReadOnly ? (
                <TouchableOpacity style={[styles.uploadItem, width]} activeOpacity={0.8} disabled={props.imgList.length >= maxLength} onPress={startUpload}>
                    {props.imgList.length >= maxLength ? <IconFont name={'camera-off'} size={30} /> : <IconFont name={'camera'} size={30} />}
                    {props.remark ? <Text style={[XC.Txt126, {marginTop: 5}]}>{props.remark}</Text> : null}
                </TouchableOpacity>
            ) : null}

            <ImagePreView isShow={isShow} imgList={imgList.current} imgIndex={imgIndex} onChange={setIsShow} />

            <Modal visible={needSelect} animationType="fade" transparent={true}>
                <TouchableOpacity
                    style={styles.Mask}
                    onPress={() => {
                        setNeedSelect(false);
                    }}>
                    <View style={styles.ModalBody}>
                        <TouchableOpacity
                            style={styles.UploadIcon}
                            onPress={() => {
                                setNeedSelect(false);
                                setTimeout(() => {
                                    handleLaunchCamera();
                                }, 0);
                            }}>
                            <IconFont name="camera" size={20} color="#999"></IconFont>
                            <Text style={XC.Txt129}>拍照</Text>
                        </TouchableOpacity>
                        <View style={styles.lineView}></View>
                        <TouchableOpacity
                            style={styles.UploadIcon}
                            onPress={() => {
                                setNeedSelect(false);
                                setTimeout(() => {
                                    handleSelectPhoto();
                                }, 0);
                            }}>
                            <IconFont name="tupian" size={20} color="#999"></IconFont>
                            <Text style={XC.Txt129}>相册</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

UploadFile = React.memo ? React.memo(UploadFile) : UploadFile;

export {UploadFile};

const styles = StyleSheet.create({
    formModal: {
        flexWrap: 'wrap',
        // flex: 1,
        marginRight: -15,
    },
    uploadItem: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        marginBottom: 10,
        position: 'relative',
    },
    deleteIcon: {
        position: 'absolute',
        right: -8,
        top: -8,
        backgroundColor: '#fff',
        borderRadius: 40,
    },
    loading: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    Mask: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ModalBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 4,
    },
    UploadIcon: {
        width: 100,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lineView: {
        width: 2,
        height: 20,
        borderRadius: 8,
        backgroundColor: '#ccc',
    },
});
