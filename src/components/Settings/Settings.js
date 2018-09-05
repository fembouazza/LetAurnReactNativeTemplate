import React, {Component} from "react";
import TopNavigationBarComponent from "../shared/TopNavigationBarComponent";
import {translate} from "../../../i18n";
import Theme, {createStyle} from "react-native-theming";

export default class Settings extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Theme.View style={styles.view}>
                <TopNavigationBarComponent title={translate(`settings.title`)}/>
            </Theme.View>
        )
    }
}

const styles = createStyle({
    view: {
        flex: 1,
        backgroundColor: '@SettingsBackgroundColor'
    }
});
