import React, { Component } from 'react'
import { Text, View,  Image, Platform, StatusBar, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context'


export default function Header ({home, title}) {
return (
<SafeAreaView>
    <View style={GlobalStyles.bar}>
        <View >
            { home? (
            <Image
            source={require('../assets/scLogo.png')}
            style={{ width: 180, height: 35,  resizeMode:'contain' }}
            /> 
            ):(
             <Text style={{fontSize:22, fontWeight: 'bold',}}>{title}</Text>
            )}
        </View>
        <View style={GlobalStyles.notificationPanel}>
            <View style={GlobalStyles.notificationIcon}>
            <Ionicons name="notifications" size={23} />
            </View>
            <View style={GlobalStyles.userIcon}>
                <Image
                source={require('../assets/userIcon.png')}
                style={{ width: 30, height: 30, borderRadius:30,  resizeMode:'contain' }}
                /> 
            </View>
        </View>
    </View>

</SafeAreaView>
)
}

const GlobalStyles = StyleSheet.create({
    statusBarArea: {
        // backgroundColor: '#C9D9FF',
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    bar: {
        // backgroundColor: '',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 13,        
    },
    userIcon: {
        borderColor:'#252525',
        borderWidth:2,
        borderRadius:30,
        padding:5,
    },
    notificationPanel:{
        flexDirection:'row',
        alignItems:'center'
    },
    notificationIcon:{
        padding:10
    }
}
)
