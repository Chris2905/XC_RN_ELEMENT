import React from 'react';

interface ObjKeyVal {
    [k: string]: any;
}

interface FormItemProps {
    value: string | boolean;
    type: string;
    propName: string;
    propKey: string;
    require?: boolean;
    hasIcon?: boolean;
    rightDom?: React.ReactElement;
    List?: Array<any>;
    [key: string]: any;
}

declare namespace xc_rn_element {

}
