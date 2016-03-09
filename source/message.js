"use strict";

import React from "react-native";

export default class Component extends React.Component {
    render() {
        if (!this.props.message) {
            return <React.View ></React.View>;
        } else {
            return (
                <React.View style={[styles.container, this.props.style]}>
                    <React.Text style={[styles.message, this.props.styleMessage]}>
                        {this.props.message}
                    </React.Text>
                    <React.View style={styles.innerShadow1}/>
                    <React.View style={[styles.innerShadow1,styles.innerShadow2]}/>
                </React.View>
            );
        }
    }
}

const styles = React.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b5b5b5",
        overflow: "hidden"
    },
    innerShadow1: {
        position: "absolute",
        top: -3,
        left: -10,
        right: -10,
        bottom: -3,
        backgroundColor: "transparent",
        borderColor: "black",
        shadowColor: "black",
        borderWidth: 3,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 0.8
    },
    innerShadow2: {
        shadowOffset: {
            width: 0,
            height: -3
        },
        shadowOpacity: 0.1
    },
    message: {
        marginTop: 8,
        marginBottom: 8,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    }
});
