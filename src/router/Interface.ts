import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Login: {};
  Test: {aaa: string};
  HomePage: {};
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
