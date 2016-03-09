"use strict";

import React from "react-native";
import Message from "./message.js";

export default class Component extends React.Component {
    render() {
        return <Message style={styles.container} styleMessge={styles.message} {...this.props}/>
    }
}

const styles = React.StyleSheet.create({
    container: {
        backgroundColor: '#f94a27'
    },
    message: {
        color: 'white'
    }
});
