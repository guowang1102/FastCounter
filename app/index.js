import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Alert
} from 'react-native';


var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

class App extends Component {
    _onPressMenu0() {
        Alert.alert('温馨提示', '点击了我要开卡', [{
            text: 'OK', onPress: ()=> {
            }
        }])
    }

    _onPressMenu1() {
        Alert.alert('温馨提示', '点击了我要签约', [{
            text: 'OK', onPress: ()=> {
            }
        }])
    }

    _onPressSet() {
        Alert.alert('温馨提示', '点击了色设置', [{
            text: 'OK', onPress: ()=> {
            }
        }])
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./image/head.png')}
                       style={styles.head}>
                    <Image source={require('./image/logo.png')}
                           style={styles.logo}/>
                    <View style={styles.cell}/>

                    <TouchableOpacity style={styles.set} onPress={this._onPressMenu1} activeOpacity={0.7}>
                        <Image source={require('./image/setting.png')}
                               style={styles.setImg} onPress={this._onPressSet}/>
                    </TouchableOpacity>

                </Image>

                <Image source={require('./image/bg.png')}
                       style={styles.body}>

                    <TouchableOpacity style={styles.menu0} onPress={this._onPressMenu0} activeOpacity={0.7}>

                        <View style={styles.menuTouch}>
                            <Image source={require('./image/menu0.png')}
                                   style={styles.menuImg}/>
                            <Text style={styles.menuTxt}>我要开卡</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menu1} onPress={this._onPressMenu1} activeOpacity={0.7}>

                        <View style={styles.menuTouch}>
                            <Image source={require('./image/menu1.png')}
                                   style={styles.menuImg}/>
                            <Text style={styles.menuTxt}>我要签约</Text>
                        </View>
                    </TouchableOpacity>

                </Image>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    head: {
        resizeMode: 'stretch',
        width: width,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'contain',
        width: 300,
        height: 45,
        marginLeft: 10,
    },
    cell: {
        flex: 1,
    },
    set: {
        width: 35,
        height: 35,
        marginRight: 20,
    },
    setImg: {
        resizeMode: 'contain',
        width: 35,
        height: 35,
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        resizeMode: 'stretch',
        width: width,
        height: height,
    },
    menu0: {
        width: 180,
        height: 220,
        position: 'relative',
        top: 120,
        left: 280,
    },
    menu1: {
        width: 180,
        height: 220,
        position: 'relative',
        top: 120,
        left: 370,
    },
    menuTouch: {
        alignItems: 'center'
    },
    menuImg: {
        resizeMode: 'contain',
        width: 170,
        height: 170,
    },
    menuTxt: {
        fontFamily: 'Cochin',
        fontSize: 20,
        color: '#000',
    },
});
export default App;