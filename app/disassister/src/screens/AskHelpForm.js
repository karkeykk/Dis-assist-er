import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, Alert, Dimensions, ScrollView} from 'react-native';
import HelpForm from "../components/HelpForm";
import Ionicons from "react-native-vector-icons/Ionicons";
import {human} from "react-native-typography/dist/index";
let window = Dimensions.get('window');
type Props = {};

class AskHelpForm extends Component<Props> {

    static navigationOptions = ({ navigation  }) => ({
            headerTintColor: 'white',
            headerMode: 'float',
            headerTransparent: true,
        }
    );



    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                <StatusBar
                    backgroundColor="#2D3F43"
                    barStyle="light-content"
                />
                <View style={styles.personblock}>
                    <View style={{position: 'absolute', alignSelf: "flex-start"}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Apps')}>
                            <Ionicons name="md-arrow-back" size={30} color={"white"} style={{alignSelf: 'center', marginLeft: 17, marginTop: 10}}/>
                        </TouchableOpacity>
                    </View>
                    <Ionicons name="md-help-circle" size={140} color={"white"} style={{alignSelf: 'center'}}/>
                    <Text style={[{color: "white", alignSelf: 'center', fontSize: 17,  marginBottom: 15}, human.calloutWhite]}>How can we help you?</Text>
                </View>
                <HelpForm/>
                </ScrollView>
            </View>
        );
    }
}

export default AskHelpForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    personblock: {
        alignContent: 'center',
        backgroundColor: "#2D3F43",
        width: window.width,
        borderBottomLeftRadius:70,
        // borderBottomRightRadius:20,
        borderWidth: 0,

    }
});
