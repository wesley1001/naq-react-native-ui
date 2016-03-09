"use strict";

import React from "react-native";

/* Parent component: source/field_group.js */

export default class Component extends React.Component {
    render() {
        return (
            <React.View style={styles.container}>
                <React.Text style={styles.title}>
                    {this.props.title}
                </React.Text>
                <React.TextInput style={styles.text} multiline={true} {...this.props}/>
            </React.View>
        );
    }
}

const styles = React.StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10
    },
    text: {
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 14,
        backgroundColor: '#F8F8F9',
        textAlign: 'center',
        height: 140,
        borderColor: 'gray',
        borderWidth: 1
    }
});
