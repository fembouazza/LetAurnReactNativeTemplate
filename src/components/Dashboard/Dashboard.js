import React, {Component} from "react";
import TopNavigationBarComponent from "../shared/TopNavigationBarComponent";
import {translate} from "../../../i18n";
import Theme, {createStyle} from "react-native-theming";
import ActionButton from "react-native-action-button";

export default class Dashboard extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Theme.View style={styles.view}>
                <ActionButton />
                <TopNavigationBarComponent title={translate(`dashboard.title`)}/>
            </Theme.View>
        )
    }
}

const styles = createStyle({
    view: {
        flex: 1,
        backgroundColor: '@DashboardBackgroundColor'
    }
});
