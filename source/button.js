"use strict";

import React from "react-native";

const DEFAULT_COLOR_UNDER = "#1A95C9";
const DEFAULT_COLOR = "#48BBEC";

export default class Component extends React.Component {
    render() {
        return (
            <React.View style={styles.container}>
                <React.View>
                    <React.TouchableHighlight style={styles.button} underlayColor={DEFAULT_COLOR_UNDER} {...this.props}>
                        <React.Text style={styles.title}>{this.props.title}</React.Text>
                    </React.TouchableHighlight>
                </React.View>
            </React.View>
        );
    }
}

const styles = React.StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 18,
        color: "white",
        alignSelf: "center"
    },
    button: {
        height: 44,
        width: 200,
        flexDirection: "row",
        backgroundColor: DEFAULT_COLOR,
        alignSelf: "stretch",
        justifyContent: "center"
    }
});
