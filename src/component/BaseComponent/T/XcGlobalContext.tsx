
import React, { Component, PureComponent, ReactNode } from 'react';
import { DeviceEventEmitter, NativeEventEmitter, StyleSheet, View, Text } from 'react-native';

/***
 *  react-native中的事件广播监听
 *  https://blog.csdn.net/suwu150/article/details/81536432
 *  https://www.jianshu.com/p/2f17bfb01929?utm_campaign
 ***/
const createType = 'create_observer';
const removeType = 'remove_observer';

const GlobalEventEmitter = DeviceEventEmitter || new NativeEventEmitter();

export const { Provider, Consumer } = React.createContext({});


console.log(111111);

class GlobalObserver {
    // 事件唯一标志起始位
    private onlyKey = 10000;

    on = (ele: any) => {
        const key = this.onlyKey++;
        // 发送通知
        GlobalEventEmitter.emit(createType, ele, key);
        return key;
    }

    off = (key: number) => {
        // 发送通知
        GlobalEventEmitter.emit(removeType, key);
    }
}

const globalObserver = new GlobalObserver();

type ComponentFactoryState = {
    units: any[];
};
/***
 *  用来存放global组件的的工厂
 ***/
class ComponentFactory extends PureComponent<{}, ComponentFactoryState> {
    constructor(props) {
        super(props);
        this.state = {
            units: [],
        }
    }

    create = (key: number, children: any) => {
        this.setState((prevState) => ({
            units: [...prevState.units, { key, children }]
        }));
    };

    update = (key: number, children: any) => {
        this.setState((prevState) => ({
            units: prevState.units.map((item: any)=>{
                if(item.key === key) {
                    return { ...item, children };
                }
                return item;
            })
        }));
    }

    remove = (key: number) => {
        this.setState((prevState) => ({
            units: prevState.units.filter(item => item.key !== key)
        }));
    }

    render() {
        const { units } = this.state;
        return units.map((unit, index) => {
            return (
                <View key={unit.key} style={[StyleSheet.absoluteFill, { zIndex: 2000 + index }]} collapsable={false} pointerEvents="box-none" >
                    { unit.children }
                </View>
            )
        })
    }

}

/***
 *  生产者
 ***/
export class XcProvider extends Component {

    _factoryRef?: ComponentFactory;
    _onlyKey = 0;

    componentDidMount() {
        const factoryRef = this._factoryRef;
        console.log('factoryRef', factoryRef)

        // 开启
        GlobalEventEmitter.addListener(createType, this.create);
        GlobalEventEmitter.addListener(removeType, this.remove);

    }

    componentWillUnmount() {
        GlobalEventEmitter.removeListener(createType, this.create);
        GlobalEventEmitter.removeListener(removeType, this.remove);
    }

    _setFactoryRef = (factoryRef?: any) => {
        this._factoryRef = factoryRef;
    };

    create = (children: any, _key?: number) => {
        console.log('create');
        console.log('children', children);
        console.log('_key', _key);
        const key = _key || this._onlyKey++;
        if(this._factoryRef) {
            this._factoryRef.create(key, children);
        }
        return key;
    }

    update = (key: number, children: any) => {
        if(this._factoryRef) {
            this._factoryRef.update(key, children);
        }
    }

    remove = (key: number) => {
        console.log('remove', key);
        if (this._factoryRef) {
            this._factoryRef.remove(key)
        }
    }

    render() {
        return (
            <Provider
                value = {{
                    onCreate: this.create,
                    onUpdate: this.update,
                    onRemove: this.remove,
                }}
            >
                <View style={styles.container} collapsable={false}>
                    {this.props.children}
                </View>
                <ComponentFactory ref={this._setFactoryRef} />
            </Provider>
        );
    }
}

/***
 *  消费者
 ***/
export class XcConsumer extends Component {

    // 减少暴露出去的变量 globalObserver中的方法从XcConsumer静态方法抛出去
    static on = globalObserver.on;
    static off = globalObserver.off;

    render() {
        const { children } = this.props;
        console.log('children', children);
        // 自定义数据，还未完成 todo
        return (
            <Consumer>
                {manager => (
                    <View  style={styles.container} collapsable={false}>
                        {children}
                    </View>
                )}
            </Consumer>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});