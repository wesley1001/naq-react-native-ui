"use strict";

import React from "react-native";

/* Parent component: source/field_group.js */

export default class Component extends React.Component {
    render() {
        return (
            <React.View style={styles.container}></React.View>
        );
    }
}

const styles = React.StyleSheet.create({
    container: {
        height: 80
    }
});
