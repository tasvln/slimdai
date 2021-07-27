import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: '#181818'
    },
    layoutView: {
        flex: 1,
        margin: 24,
        marginBottom: 0
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 24
    },
    headTxt: {
        fontSize: 26,
        color: '#fff',
        letterSpacing: -2,
        fontFamily: 'Poppins_600SemiBold'
    },
    nftImg: {
        width: '100%',
        height: 400,
    },
    detsView: {
        padding: 24,
        borderRadius: 32,
        backgroundColor: '#141414',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -100
    },
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
    },
    input: {
        padding: 20,
        borderWidth: 2,
        borderColor: '#ffffff20',
        width: '100%',
        borderRadius: 24,
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        color: '#fff'
    },
    grid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    notBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20
    }
})

export default styles