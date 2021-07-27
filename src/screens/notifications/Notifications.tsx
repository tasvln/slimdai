import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, Image, FlatList, RefreshControl, ScrollView, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../utils/styles'
import { Feather } from '@expo/vector-icons'

export default function Notifications() {
    return (
        <SafeAreaView style={styles.safeView}>
            <View style={styles.layoutView}>
                <View style={styles.headBar}>
                    <View style={styles.flex}>
                        <Text style={styles.headTxt}>Seeds</Text>
                        <Text style={[styles.headTxt, { color: '#3B82F6' }]}>.</Text>
                    </View>
                    <TouchableOpacity>
                        <Feather name="inbox" size={32} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, marginTop: 10 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.notBox}>
                            <View style={styles.flex}>
                                <Image source={require('../../../assets/images/image4.jpg')} borderRadius={9999} style={{ width: 50, height: 50, marginRight: 16 }} />
                                <View style={styles.flex}>
                                    <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Poppins_600SemiBold', marginRight: 4 }}>Monosls</Text>
                                    <Text style={{ color: '#ffffff50', fontSize: 16, fontFamily: 'Poppins_400Regular' }}>just followed you.</Text>
                                </View>
                            </View> 
                        </View>
                        <View style={styles.notBox}>
                            <View style={styles.flex}>
                                <Image source={require('../../../assets/images/image2.jpg')} borderRadius={9999} style={{ width: 50, height: 50, marginRight: 16 }} />
                                <View style={styles.flex}>
                                    <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Poppins_600SemiBold', marginRight: 4 }}>kaono</Text>
                                    <Text style={{ color: '#ffffff50', fontSize: 16, fontFamily: 'Poppins_400Regular' }}>just followed you.</Text>
                                </View>
                            </View> 
                        </View>
                        <View style={styles.notBox}>
                            <View style={styles.flex}>
                                <Image source={require('../../../assets/images/image4.jpg')} borderRadius={9999} style={{ width: 50, height: 50, marginRight: 16 }} />
                                <View style={styles.flex}>
                                    <Text style={{ color: '#ffffff50', fontSize: 16, fontFamily: 'Poppins_400Regular', marginRight: 4 }}>New bid</Text>
                                    <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Poppins_600SemiBold', marginRight: 4 }}>Oxagon, 5 ETH</Text>
                                    <Text style={{ color: '#ffffff50', fontSize: 16, fontFamily: 'Poppins_400Regular' }}>received.</Text>
                                </View>
                            </View> 
                        </View>
                        <View style={styles.notBox}>
                            <View style={styles.flex}>
                                <Image source={require('../../../assets/images/image4.jpg')} borderRadius={9999} style={{ width: 50, height: 50, marginRight: 16 }} />
                                <View style={styles.flex}>
                                    <Text style={{ color: '#ffffff50', fontSize: 16, fontFamily: 'Poppins_400Regular', marginRight: 4 }}>New bid</Text>
                                    <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Poppins_600SemiBold', marginRight: 4 }}>Oxagon, 5 ETH</Text>
                                    <Text style={{ color: '#ffffff50', fontSize: 16, fontFamily: 'Poppins_400Regular' }}>received.</Text>
                                </View>
                            </View> 
                        </View>
                        <View style={styles.notBox}>
                            <View style={styles.flex}>
                                <Image source={require('../../../assets/images/image4.jpg')} borderRadius={9999} style={{ width: 50, height: 50, marginRight: 16 }} />
                                <View style={styles.flex}>
                                    <Text style={{ color: '#ffffff50', fontSize: 16, fontFamily: 'Poppins_400Regular', marginRight: 4 }}>New bid</Text>
                                    <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Poppins_600SemiBold', marginRight: 4 }}>Oxagon, 5 ETH</Text>
                                    <Text style={{ color: '#ffffff50', fontSize: 16, fontFamily: 'Poppins_400Regular' }}>received.</Text>
                                </View>
                            </View> 
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}
