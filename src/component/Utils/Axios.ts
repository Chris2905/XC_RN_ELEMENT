
// import { Toast } from "@ant-design/react-native";
import axios from "axios";
import qs from "querystring";
import XCNavigate from "./Navigate";
import {deleteData, loadData} from "./Storage";

//过滤请求
axios.interceptors.request.use(
    (config) => {
        return loadData({key: "user"}).then((res: any) => {
            config.timeout = 50000;
            if (res) {
                config.headers = res.headers || {};
            }
            return config;
        }).catch(() => {
            return config;
        });
    },
    (error) => {
        console.log(
            "request Err = ",
            error,
        );
        // Toast.fail("发送请求错误！");
        return Promise.reject(error);
    },
);
// 添加响应拦截器
axios.interceptors.response.use(
    (response) => {
        if (response.data.result === "ok" || response.data.info === "OK") {
            return Promise.resolve(response.data);
        } else {
            if (response.data.code == 1002) {
                console.log("未登录");
                deleteData("user");
                XCNavigate.replace("Login");
            }
            // Toast.info(response.data.errmsg);
            return Promise.reject(response.data);
        }
    },
    (error) => {
        console.log("response error =", JSON.stringify(error));
        // Toast.info(
        //     error.message == "Network Error" ||
        //         error.message.indexOf("timeout") != -1
        //         ? "请检查网络连接"
        //         : "程序开小差了",
        // );
        if (error && error.response) {
            let res = {};
            return Promise.reject(res);
        }
        return Promise.reject(error);
    },
);


export const XCGet = async (url: string, data = {}) => {
    return axios.get(`${url}?${qs.stringify(data)}`);
};

export const XCPost = async (url: string, data = {}) => {
    return axios.post(url, data);
};

export const XCAxios = (url: string, data = {}, methods = "GET") => {
    if (methods == 'GET') {
        XCGet(url, data);
        return; 
    }
    return XCPost(url, data);
};