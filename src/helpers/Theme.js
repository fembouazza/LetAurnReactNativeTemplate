import {createTheme} from 'react-native-theming';

const Default = createTheme({

    // Header
    statusBarStyle: 'light-content',
    headerBackgroundColor: '#5c6cff',
    headerTitleColor: '#2b0954',

    // Navigation bar
    navigationBarBackground: '#5c6cff',
    navigationBarItem: '#ffffff',
    navigationBarInactiveItem: 'rgba(255, 255, 255, 0.2)',

    // Middle content
    backgroundColor: 'white',

    DashboardBackgroundColor: "#6faa80",
    SettingsBackgroundColor: "#ff7e94",

}, 'default');

export default [
    Default
];
