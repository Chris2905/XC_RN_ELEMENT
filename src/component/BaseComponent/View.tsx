import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

//SafeAreaView封装，避免内容渲染到不可见的“刘海”范围
function registerSafeViewElement(InnerComponent: typeof View) {
  return class WrappedComponent extends Component<any, any> {
    constructor(props: any) {
      super(props);
    }

    render() {
      const {...props} = this.props;
      return (
          <SafeAreaView style={styles.container}>
              <InnerComponent style={styles.container} {...props} />
          </SafeAreaView>
      );
    }
  };
}

export const XCSafeAreaView = registerSafeViewElement(View);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    }
});
