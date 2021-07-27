import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, Image, FlatList, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../utils/styles'
import { Feather } from '@expo/vector-icons'
import nfts from '../../utils/nfts'

const wait = ({timeout}: any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function Home() {
    const [refreshing, setRefreshing] = React.useState(false);
  
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

    const renderItem = ({ item }: any) => (
        <View style={{ marginBottom: 40 }}>
            <Image borderRadius={32} style={styles.nftImg} source={{ uri: item.img }} />
            <View style={styles.detsView}>
                <View>
                    <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Poppins_700Bold' }}>{ item.name }</Text>
                    <View style={[styles.flex, { marginTop: 10 }]}>
                        <Image source={{ uri: item.img }} borderRadius={9999} style={{ width: 30, height: 30, marginRight: 10 }} />
                        <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'Poppins_300Light' }}>{ item.creator }</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 26, color: '#fff', fontFamily: 'Poppins_600SemiBold' }}>{ item.price } ETH</Text>
            </View>
        </View>
    )

    return (
        <SafeAreaView style={styles.safeView}>
            <View style={styles.layoutView}>
                <View style={styles.headBar}>
                    <View style={styles.flex}>
                        <Text style={styles.headTxt}>SilmDai</Text>
                        <Text style={[styles.headTxt, { color: '#3B82F6' }]}>.</Text>
                    </View>
                    <TouchableOpacity>
                        <Feather name="inbox" size={32} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={nfts}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
