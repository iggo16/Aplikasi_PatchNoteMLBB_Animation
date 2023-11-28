import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import { ArrowLeft, Receipt21 } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { BlogList } from '../../../data';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../../theme';
import { MessageText } from "iconsax-react-native";

const BlogDetail = ({ route }) => {
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 52);
    const headerY = diffClampY.interpolate({
        inputRange: [0, 52],
        outputRange: [0, -52],
    });
    const bottomBarY = diffClampY.interpolate({
        inputRange: [0, 52],
        outputRange: [0, 52],
    });
    const { blogId } = route.params;
    const selectedBlog = BlogList.find(blog => blog.id === blogId);
    const navigation = useNavigation();

    return (
        <View style={styles.overlay}>
            <View style={styles.container}>
                <Animated.View style={[styles.header, { transform: [{ translateY: headerY }] }]}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowLeft
                            color={colors.grey(0.6)}
                            variant="Linear"
                            size={24}
                        />
                    </TouchableOpacity>
                </Animated.View>
                <Animated.ScrollView
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true },
                    )}
                    contentContainerStyle={{
                        paddingHorizontal: 24,
                        paddingTop: 62,
                        paddingBottom: 54,
                    }}>

                    <View style={styles.Box}>
                        <Text style={styles.title}>{selectedBlog.title}</Text>
                    </View>
                    <View style={styles.aboutUsContainer}>
                        <View style={styles.aboutUsBox}>
                            <Text style={styles.content}>{selectedBlog.content}</Text>
                        </View>
                    </View>
                </Animated.ScrollView>
                <Animated.View style={[styles.bottomBar, { transform: [{ translateY: bottomBarY }] }]}>
                </Animated.View>
                <TouchableOpacity
                    style={styles.floatingButton}
                    onPress={() => navigation.navigate("AddBlog")}
                >
                    <MessageText color={colors.white()} variant="Linear" size={30} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default BlogDetail;
const styles = StyleSheet.create({
    floatingButton: {
        backgroundColor: colors.grey(),
        padding: 1,
        position: 'absolute',
        bottom: 30,
        right: 30,
        borderRadius: 10,
        shadowColor: colors.blue(),
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
    },
    Box: {
        borderWidth: 1,
        borderColor: colors.blue(0.5),
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.blue(0.5),
        margin: 2,
        fontSize: 14,
        fontFamily: fontType['Pjs-Regular'],
        color: colors.black(),
        textAlign: 'center',
        lineHeight: 20,
    },
    overlay: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        flex: 1,
    },
    container: {
        backgroundColor: colors.blue(0.1),
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    header: {
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        paddingTop: 8,
        paddingBottom: 4,
        position: 'absolute',
        zIndex: 1000,
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: colors.white(),
    },
    bottomBar: {
        position: 'absolute',
        zIndex: 1000,
        backgroundColor: colors.white(),
        paddingVertical: 14,
        paddingHorizontal: 60,
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    aboutUsContainer: {
        paddingHorizontal: 24,
        marginTop: 20,
    },
    aboutUsBox: {
        borderWidth: 1,
        borderColor: colors.black(),
        borderRadius: 10,
        padding: 5,
    },
    image: {
        height: 20,
        width: 300,
        borderRadius: 10,
        resizeMode: 'cover',
        marginBottom: 16,
    },

    title: {
        fontSize: 16,
        fontFamily: fontType['Pjs-Bold'],
        color: colors.black(),
        textAlign: 'center',
        marginTop: 1,
    },
    content: {
        color: colors.grey(),
        fontFamily: fontType['Pjs-Medium'],
        fontSize: 10,
        lineHeight: 20,
        marginTop: 15,
    },
});