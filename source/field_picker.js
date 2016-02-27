'use strict';

import React from 'react-native';

export default class Component extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.pickerData[1],
            fields: props.pickerData
        }
    }

    renderPickerItems() {
        return this.state.fields.map((field) => {
            return <React.Picker.Item key={field} label={field} value={field} />
        })
    }

    render() {
        return (
            <React.View style={styles.container}>
                <React.Text style={styles.title}>{this.props.title}</React.Text>
                <React.Picker style={styles.picker}
                    itemStyle={styles.pickerItems}
                    selectedValue={this.state.value}
                    onValueChange={(val) => { this.setState({value: val}) }}>
                    {this.renderPickerItems()}
                </React.Picker>
            </React.View>
        );
    }
}

const styles = React.StyleSheet.create({
    container: {
        // backgroundColor: "yellow",
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        textAlign: 'center'
    },
    picker: {
        // backgroundColor: "magenta"
    },
    pickerItems: {
        color: 'green',
        height: 70,
        fontSize: 16,
        marginTop: -12
    }
})
