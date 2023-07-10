import React from "react";
import { View, Text } from "react-native";

const OurChild = (props) => {
    // sử dụng kỹ thuật props để truyền dữ liệu từ cha xuống con để hiển thị
    const { message } = props;
    return (
        <View style={{ height: 200, width: 200, backgroundColor: "red" }}>
            <Text>{message}</Text>
        </View>
    );
};

export default OurChild;
