import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, Image, FlatList, RefreshControl, ScrollView, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../utils/styles'
import { Feather } from '@expo/vector-icons'

export default function Discover() {
    return (
        <SafeAreaView style={styles.safeView}>
            <View style={styles.layoutView}>
                <View>
                    <View style={styles.headBar}>
                        <View style={styles.flex}>
                            <Text style={styles.headTxt}>Discover</Text>
                            <Text style={[styles.headTxt, { color: '#3B82F6' }]}>.</Text>
                        </View>
                        <TouchableOpacity>
                            <Feather name="inbox" size={32} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.searchBar}>
                        <TextInput 
                            placeholder="Search..."
                            placeholderTextColor="#ffffff50"
                            style={styles.input}
                        />
                        <View style={{ position: 'absolute', right: 0, marginRight: 24 }}>
                            <Feather name="search" size={24} color="#ffffff50" />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, marginTop: 24 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginBottom: 40 }}>
                            <Image borderRadius={32} style={styles.nftImg} source={require('../../../assets/images/image4.jpg')} />
                            <View style={styles.detsView}>
                                <View>
                                    <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Poppins_700Bold' }}>Space</Text>
                                    <View style={[styles.flex, { marginTop: 10 }]}>
                                        <Image source={require('../../../assets/images/image4.jpg')} borderRadius={9999} style={{ width: 30, height: 30, marginRight: 10 }} />
                                        <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'Poppins_300Light' }}>tas</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 26, color: '#fff', fontFamily: 'Poppins_600SemiBold' }}>4 ETH</Text>
                            </View>
                        </View>
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
