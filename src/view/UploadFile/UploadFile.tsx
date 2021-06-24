import React, {useState} from 'react';
import {XCView} from '@/component/Index';

const UploadFile = () => {
    let [imgList, setImgList] = useState<Array<any>>([
        // {url: '', extData: {id: 1}},
    ]);

    const onChange = (list: Array<any>) => {
        setImgList(list);
    };

    return (
        <>
            <XCView.UploadFile
                imgList={imgList}
                remark="拍照上传"
                onChange={onChange}></XCView.UploadFile>

            <XCView.UploadFile
                imgList={imgList}
                remark="拍照上传"
                isReadOnly={true}
                onChange={onChange}></XCView.UploadFile>
        </>
    );
};

export default UploadFile;
