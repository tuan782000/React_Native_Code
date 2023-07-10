import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = (props) => {
    // sử dụng kỹ thuật props để truyền dữ liệu từ cha xuống con để hiển thị
    const {iconName, iconColor, bodyText, bodyTextStyle } = props;
    // sử dụng kỹ thuật destructuring để viết cú pháp styles cho gọn
    const {container, textTheme} = styles
    return (
        <View style={container}>
            <Feather name={iconName} size={50} color={iconColor} />
            <Text style={[textTheme, bodyTextStyle]}>{bodyText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    textTheme: {
        fontWeight: 'bold',
    }
});
export default IconText;
