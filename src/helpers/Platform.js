import {Platform as ReactNativePlatform} from 'react-native';

export default class Platform {

    static isAndroid() {
        return ReactNativePlatform.OS === 'android';
    }

}