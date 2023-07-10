import React from "react";
import { View, Text } from "react-native";

const RowText = (props) => {
    // sử dụng kỹ thuật props để truyền dữ liệu từ cha xuống con để hiển thị
    const {
        messageOne,
        messageTwo,
        containerStyles,
        messageOneStyles,
        messageTwoStyles,
    } = props;

    return (
        <View style={containerStyles}>
            <Text style={messageOneStyles}>{messageOne}</Text>
            <Text style={messageTwoStyles}>{messageTwo}</Text>
        </View>
    );
};

// const styles = StyleSheet.create({});

export default RowText;
