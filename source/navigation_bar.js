"use strict";

import React from "react-native";

const routeMapper = {
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <React.TouchableHighlight underlayColor="transparent" onPress={() => navigator.pop()}>
                    <React.Text style={styles.leftNavButtonText}>Back</React.Text>
                </React.TouchableHighlight>
            );
        } else {
            return null;
        }
    },
    RightButton(route, navigator, index, navState) {
        if (route.onPress) {
            return (
                <React.TouchableHighlight onPress={() => route.onPress()}>
                    <React.Text style={styles.rightNavButtonText}>
                        {route.rightText}
                    </React.Text>
                </React.TouchableHighlight>
            );
        }
    },
    Title(route, navigator, index, navState) {
        return (
            <React.Text style={styles.title}>
                {route.name}
            </React.Text>
        );
    }
};

export default function() {
    return (<React.Navigator.NavigationBar style={styles.nav} routeMapper={routeMapper}/>);
}

const styles = React.StyleSheet.create({
    nav: {
        height: 60
    },
    title: {
        marginTop: 4,
        fontSize: 16
    },
    leftNavButtonText: {
        marginTop: 4,
        marginLeft: 13,
        fontSize: 16
    },
    rightNavButtonText: {
        marginTop: 4,
        marginRight: 13,
        fontSize: 16
    }
});
