import React from "react";
import {createBottomTabNavigator} from "react-navigation";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Dashboard from './components/Dashboard/Dashboard';
import Settings from './components/Settings/Settings';
import {getCurrentTheme} from "react-native-theming";
import "./helpers/Theme";

const Theme = getCurrentTheme();

export const Tab = createBottomTabNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <MaterialIcon name={"dashboard"} color={tintColor} style={{fontSize: 24}}/>
            )
        })
    },
    Settings: {
        screen: Settings,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <MaterialIcon name={"settings"} color={tintColor} style={{fontSize: 24}}/>
            )
        })
    }
}, {
    tabBarOptions: {
        activeTintColor: Theme.parse("@navigationBarItem"),
        inactiveTintColor: Theme.parse("@navigationBarInactiveItem"),
        style: {
            backgroundColor: Theme.parse("@navigationBarBackground")
        }
    }
});
