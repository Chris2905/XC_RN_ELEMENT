import React from "react";
import { NavigationContainerRef, StackActions } from "@react-navigation/native";

export default class XCNavigate {
    static navigationRef = React.createRef<NavigationContainerRef>();

    static navigate(name: string, params?: any) {
        if (XCNavigate.navigationRef.current) {
            XCNavigate.navigationRef.current.navigate(name, params);
        }
    }

    static replace(name: string, params?: any) {
        if (XCNavigate.navigationRef.current) {
            XCNavigate.navigationRef.current?.dispatch(
                StackActions.replace(name, params),
            );
        }
    }

    static back() {
        if (XCNavigate.navigationRef.current) {
            XCNavigate.navigationRef.current.goBack();
        }
    }
}
