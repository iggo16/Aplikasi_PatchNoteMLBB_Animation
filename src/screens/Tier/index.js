/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, Text, View, ScrollView, FlatList, Animated } from 'react-native';
import React, { useRef } from 'react';
import { ImageBackground, Image } from 'react-native';
import { Element3 } from 'iconsax-react-native';
import { BlogList, CategoryList } from './data';
import { fontType, colors } from '../../theme';
import { ListHorizontal, ItemSmall } from '../../components';


export default function App() {
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 142);
    const recentY = diffClampY.interpolate({
        inputRange: [0, 142],
        outputRange: [0, -142],
        extrapolate: 'clamp',
    });
    const logoUrl = 'https://static.wikia.nocookie.net/mobile-legends/images/e/e6/Site-logo.png/revision/latest?cb=20211110152908';
    const backgroundImage = 'https://i.pinimg.com/564x/59/81/ea/5981eada09c0ccdb38d9c7366960e9fb.jpg';
    return (
        <ImageBackground source={{ uri: backgroundImage }} style={styles.container}>
            <View style={styles.overlay}>
                <View style={styles.header}>
                    <Image source={{ uri: logoUrl }} style={styles.logoImage} />
                    <Element3 color={colors.black()} variant="Linear" size={24} />
                </View>
                <Animated.View style={[recent.container, { transform: [{ translateY: recentY }] }]}>
                </Animated.View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.welcomeText}>Hero Tier List</Text>
                    <Image source={require('../../assets/img/SS.png')} style={styles.tiers} />
                    <Image source={require('../../assets/img/S.png')} style={styles.tiers} />
                    <Image source={require('../../assets/img/A.png')} style={styles.tiera} />
                    <Image source={require('../../assets/img/B.png')} style={styles.tiera} />
                    <Image source={require('../../assets/img/C.png')} style={styles.tiera} />
                    <Image source={require('../../assets/img/D.png')} style={styles.tiera} />
                    <Image source={require('../../assets/img/SS.png')} style={styles.tiers} />
                    <Image source={require('../../assets/img/S.png')} style={styles.tiers} />
                    <Image source={require('../../assets/img/A.png')} style={styles.tiera} />
                    <Image source={require('../../assets/img/B.png')} style={styles.tiera} />
                    <Image source={require('../../assets/img/C.png')} style={styles.tiera} />
                    <Image source={require('../../assets/img/D.png')} style={styles.tiera} />
                </ScrollView>
            </View>
        </ImageBackground >

    );
}




const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 16,
        fontFamily: fontType['Pjs-Bold'],
        color: colors.black(),
        textAlign: 'center',
        margin: 10,
    },
    tiers: {
        borderRadius: 10,
        width: 396,
        height: 75,
        marginBottom: 5,
    },
    tiera: {
        borderRadius: 10,
        width: 396,
        height: 120,
        marginBottom: 5,
    },
    container: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        flex: 1,
    },
    header: {
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        elevation: 8,
        paddingTop: 8,
        paddingBottom: 4
    },
    logoImage: {
        width: 150,
        height: 50,
    },
    title: {
        fontSize: 20,
        fontFamily: fontType['Pjs-ExtraBold'],
        color: colors.black(),
    },
    listCategory: {
        paddingVertical: 10,
    },
    listBlog: {
        paddingVertical: 1,
        gap: 10,
    },
    listCard: {
        paddingHorizontal: 24,
        paddingVertical: 10,
        gap: 15,
    },
});
const category = StyleSheet.create({
    item: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 14,
        alignItems: 'center',
        backgroundColor: colors.grey(0.08),
    },
    title: {
        fontFamily: fontType['Pjs-SemiBold'],
        fontSize: 14,
        lineHeight: 18,
    },
    categoryBox: {
        borderWidth: 1,
        borderColor: colors.black(),
        borderRadius: 15,
        padding: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginHorizontal: 0,

    },
    innerContent: {
        backgroundColor: 'blue',
        flex: 1,
        borderRadius: 13,
        overflow: 'hidden',
    },
});
const recent = StyleSheet.create({

    container: {
        position: 'absolute',
        backgroundColor: colors.white(),
        zIndex: 999,
        top: 52,
        left: 0,
        right: 0,
        elevation: 1000,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25,
        borderColor: colors.grey(0.15),
        borderWidth: 1,
        backgroundColor: colors.grey(0.03),
    },
    label: {
        fontSize: 12,
        fontFamily: fontType['Pjs-Medium'],
        color: colors.grey(0.65),
    },
    text: {
        fontSize: 14,
        fontFamily: fontType['Pjs-Bold'],
        color: colors.black(),
        paddingVertical: 5,
        paddingHorizontal: 24,
    },
});






