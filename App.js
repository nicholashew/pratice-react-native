import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerNavigator, StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import About from './src/components/about';
import Enquiry from './src/components/enquiry';
import HeaderTitle from './src/components/headerTitle';
import Home from './src/components/home';
import HomeDetails from './src/components/homeDetails';
import ModalScreen from './src/components/modalScreen';

const MainStack = StackNavigator(
  {
    Home: {
      screen: Home, 
      navigationOptions: ({navigation}) => ({
        title: 'Home',
        headerTitle: <HeaderTitle />,
        headerLeft:(
          <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
            <Ionicons name="ios-menu" size={30} color="#fff" />
          </TouchableOpacity>
        ),
        headerRight: (
          <Button
            onPress={() => navigation.navigate('Modal')}
            title="Login"
          />
        )       
      })
    },
    HomeDetails: {
      screen: HomeDetails,
      navigationOptions: (props) => ({
        title: "Detail",
      })
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {      
      headerStyle: {
        backgroundColor: 'rgb(34, 34, 34)',
        paddingRight: 10, 
        paddingLeft: 10
      },
      headerTintColor: '#fff',      
      headerTitleStyle: {
        fontWeight: 'bold',
      }            
    },
  }
);

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Modal: {
      screen: ModalScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }  
);

const TabNav = TabNavigator(
  {
    Home: {
      screen: RootStack
    },
    About: {
      screen: About
    },
    Enquiry: {
      screen: Enquiry
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'About') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Enquiry') {
          iconName = `ios-help-circle${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const DrawerNav = DrawerNavigator({
  HomeDrawer: {
    screen: TabNav,
    navigationOptions: {
      drawerLabel: "Home",
      drawerIcon: ({ tintColor }) => <Ionicons name="ios-home-outline" size={25} />
    },
  },
  AboutDrawer: {
    screen: About,
    navigationOptions: {
      drawerLabel: "About",
      drawerIcon: ({ tintColor }) => <Ionicons name="ios-information-circle-outline" size={25} />
    },
  },
  EnquiryDrawer: {
    screen: Enquiry,
    navigationOptions: {
      drawerLabel: "Enquiry",
      drawerIcon: ({ tintColor }) => <Ionicons name="ios-help-circle-outline" size={25} />
    },
  }
});

export default class App extends React.Component {
  render() {
    return <DrawerNav />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});