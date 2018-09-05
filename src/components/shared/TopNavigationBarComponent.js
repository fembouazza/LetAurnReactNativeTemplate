import React from 'react';
import NavigationBar from "react-native-navbar";
import {getCurrentTheme} from "react-native-theming";

export default class TopNavigationBarComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const theme = getCurrentTheme();
        const statusBar = {
            style: theme.parse("@statusBarStyle"),
            tintColor: theme.parse("@headerBackgroundColor")
        };
        const style = {
            backgroundColor: theme.parse("@headerBackgroundColor")
        };
        const titleConfig = {
            title: this.props.title,
            tintColor: theme.parse("@headerTitleColor")
        };
        return (
            <NavigationBar statusBar={statusBar} style={style} title={titleConfig}/>
        );
    }
}
