"use strict";

import React from "react-native";

export default class Component extends React.Component {
    render() {
        return (
            <React.View style={styles.container}>
                <React.Text style={styles.title}>
                    {this.props.title}
                </React.Text>
            </React.View>
        );
    }
}

const styles = React.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
