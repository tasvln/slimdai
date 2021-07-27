import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, Image, FlatList, RefreshControl, ScrollView, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../utils/styles'
import { Feather } from '@expo/vector-icons'

export default function Profile() {
    return (
        <SafeAreaView style={styles.safeView}>
            <View style={styles.layoutView}>
                <View style={[styles.headBar, { justifyContent: 'center' }]}>
                    <View style={styles.flex}>
                        <Text style={styles.headTxt}>Profile</Text>
                        <Text style={[styles.headTxt, { color: '#3B82F6' }]}>.</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../../assets/images/image4.jpg')} borderRadius={9999} style={{ width: 120, height: 120 }} />
                    <Text style={{ marginTop: 16, fontSize: 28, color: '#fff', fontFamily: 'Poppins_700Bold' }}>Top Dakota</Text>
                    <View style={[styles.flex, { marginTop: 10 }]}>
                        <Text style={{ color: '#A855F7', fontFamily: 'Poppins_500Medium' }}>@tdakota</Text>
                        <View style={{ padding: 6, paddingLeft: 10, paddingRight: 10, backgroundColor: '#ffffff20', borderRadius: 9999, marginLeft: 10 }}>
                            <Text style={{ color: '#fff', fontFamily: 'Poppins_500Medium' }}>0x1a23...b4c6</Text>
                        </View>
                    </View>
                    <View style={{ maxHeight: 200, marginTop: 28 }}>
                        <Text style={{ color: '#ffffff50', fontFamily: 'Poppins_500Medium' }}>Hey, I'm dakota</Text>
                    </View>
                </View>
                <View style={{ flex: 1, marginTop: 40 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.grid}>
                            <Image source={require('../../../assets/images/image1.jpg')} borderRadius={24} style={{ width: '48%', height: 180, marginRight: 10 }} />
                            <Image source={require('../../../assets/images/image2.jpg')} borderRadius={24} style={{ width: '48%', height: 180, marginRight: 10 }} />
                        </View>
                        <View style={[styles.grid, { marginTop: '4%' }]}>
                            <Image source={require('../../../assets/images/image5.jpg')} borderRadius={24} style={{ width: '48%', height: 180, marginRight: 10 }} />
                            <Image source={require('../../../assets/images/image6.jpg')} borderRadius={24} style={{ width: '48%', height: 180, marginRight: 10 }} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}
