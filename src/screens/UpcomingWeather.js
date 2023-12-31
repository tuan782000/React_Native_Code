import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    StatusBar,
    ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

// Sử dụng kỹ thuật props truyền dữ liệu từ tabs xuống cho con thông qua weatherData || truyền cho thằng return phía dưới
const UpcomingWeather = ({ weatherData }) => {
    // item này được truyền từ ở dưới FlatList
    const renderItem = ({ item }) => (
        <ListItem
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    );
    const { container, backgroundImage } = styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require("../../assets/upcoming-background.jpg")}
                style={backgroundImage}
            >
                {/* <Text>UpComing Weather</Text> */}
                {/* <Image
                    source={require("../../assets/upcoming-background.jpg")}
                    style={image}
                /> */}
                <FlatList
                    data={weatherData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                    // này là id của item đó thui
                />
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "royalblue",
    },
    image: {
        height: 100,
        width: 100,
    },
    backgroundImage: {
        flex: 1,
    },
});
export default UpcomingWeather;
