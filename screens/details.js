import {Component, React} from'react';
import {View, Text, StyleSheet} from 'react-native';
import {Camera} from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as Facedetector from 'expo-face-detector';

export default class Details extends Component {
    render() {
        return(
            <Text>hello people how are you ?</Text>
        );
    }
}
