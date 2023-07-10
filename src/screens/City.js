import React from "react";
import {
    SafeAreaView,
    Text,
    ImageBackground,
    StyleSheet,
    StatusBar,
    View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import IconText from "../components/IconText";

const City = ({weatherData}) => {
    const {
        container,
        cityName,
        cityText,
        countryName,
        populationText,
        populationWrapper,
        riseSetText,
        riseSetWrapper,
        imageLayout,
        rowLayout,
    } = styles;
    const {name, country, population, sunrise, sunset} = weatherData
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require("../../assets/tianjin-2185510_1280.jpg")}
                style={imageLayout}
            >
                <Text style={[cityName, cityText]}>{name}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        iconName={"user"}
                        iconColor={"red"}
                        bodyText={`Population: ${population}`}
                        bodyTextStyle={populationText}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText
                        iconName={"sunrise"}
                        iconColor={"white"}
                        bodyText={moment(sunrise).format('h:mm:ss a')}
                        bodyTextStyle={riseSetText}
                    />
                    {/* <Feather name="sunrise" size={50} color="white" />
                    <Text style={styles.riseSetText}>10:46:58am</Text> */}
                    <IconText
                        iconName={"sunset"}
                        iconColor={"white"}
                        bodyText={moment(sunset).format('h:mm:ss a')}
                        bodyTextStyle={riseSetText}
                    />
                    {/* <Feather name="sunset" size={50} color="white" />
                    <Text style={styles.riseSetText}>17:28:15pm</Text> */}
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: "center",
        alignSelf: "center",
        color: "white",
        fontWeight: "bold",
    },
    populationWrapper: {
        justifyContent: "center",
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: "red",
    },
    riseSetWrapper: {
        justifyContent: "space-around",
        marginTop: 30,
    },
    rowLayout: {
        flexDirection: "row",
        alignItems: "center",
    },
    riseSetText: {
        fontSize: 20,
        color: "white",
    },
});

export default City;
