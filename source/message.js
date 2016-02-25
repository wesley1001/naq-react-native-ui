"use strict";

import React from "react-native";

export default class Component extends React.Component {
    render() {
        if (!this.props.message) {
            return <React.View ></React.View>;
        } else {
            return (
                <React.View style={[ styles.container, this.props.style ]}>
                    <React.Text style={[ styles.message, this.props.styleMessage ]}>
                        {this.props.message}
                    </React.Text>
                </React.View>
            );
        }
    }
}

const styles = React.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    message: {
        marginTop: 8,
        marginBottom: 8,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    }
});
