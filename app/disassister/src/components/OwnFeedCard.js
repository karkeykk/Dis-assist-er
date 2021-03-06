import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import { Container, Header, Right, Card, CardItem, Body, Thumbnail, Button, Left } from 'native-base';
import Ionicons from "react-native-vector-icons/Ionicons";
import ToggleSwitch from 'toggle-switch-react-native'



class OwnFeedCard extends Component {

    render() {
        return (
            <Card style={styles.card}>
                <CardItem>
                    <Left>
                        <Body>
                        <Text style={{fontSize: 20, color: "black"}}>{this.props.title}</Text>
                        <Text note>{this.props.category}</Text>
                        <Text note>{this.props.date}</Text>
                        </Body>
                    </Left>
                    <Thumbnail source={{uri: 'https://png.pngtree.com/svg/20161124/flood_and_water_logging_972327.png'}}/>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text style={{fontSize:15, color: "black"}}>
                        {this.props.description}
                    </Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent textStyle={{color: '#87838B'}}>
                            <Ionicons name="md-compass" size={25} color={"black"}/>
                            <Text style={{marginLeft: 2}}>{this.props.location}</Text>
                        </Button>

                    </Left>
                    <Right>
                        <ToggleSwitch
                            isOn={this.props.solved}
                            onColor='green'
                            offColor='red'
                            label='Visible'
                            labelStyle={{color: 'black', fontWeight: '900'}}
                            size='medium'
                            onToggle={ (isOn) => this.props.changeStatus(isOn, this.props.title) }
                        />



                    </Right>
                </CardItem>
            </Card>

        );
    }
}

export default OwnFeedCard;

const styles = StyleSheet.create({
    card: {
        flex: 0,
        borderRadius:10,
        borderWidth: 1,
        overflow: 'hidden',
    },
});
