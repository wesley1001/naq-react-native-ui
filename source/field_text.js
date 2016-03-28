"use strict";

import React from "react-native";

/* Parent component: source/field_group.js */

export default class Component extends React.Component {
    constructor(props){
        super(props);
        this.onChangeText = props.onChangeText;
        this.state = { val: props.defaultValue||"" }
    }

    onValChange() {
        this.props.onValChange({
            realmType: this.props.realmType,
            key: this.props.title,
            value: this.state.val
        })
    }

    render() {
        return (
            <React.View style={styles.container}>
                <React.Text style={styles.title}>
                    {this.props.title}
                </React.Text>
                <React.TextInput {...this.props}
                    onChangeText={this.onChangeText?this.onChangeText:((val)=> this.setState({val}))}
                    onBlur={this.props.onValChange?this.onValChange.bind(this):void(0)}
                    style={styles.text}/>
            </React.View>
        );
    }
}

const styles = React.StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10
    },
    text: {
        backgroundColor: '#F8F8F9',
        textAlign: 'center',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
});
