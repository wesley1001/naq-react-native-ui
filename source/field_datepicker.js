'use strict';

import React from 'react-native';

// Component "working as intented"
// nicklockwood commented on Jan 14
//  @marcshilling you can safely ignore this warning. It's because we convert to
//  a number to send to the underlying component prop, which uses the same validation.
//  We'll fix it at some point.

export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date,
            pickerState: false,
            visible: true,
            transparent: true,
            animated: true,
            lastW: 0
        }
    }

    togglePicker() {
        this.setState({pickerState: !this.state.pickerState})
    }

    closeModal(event) {
        if(event.nativeEvent.layout.width !== this.state.lastW) {
            this.setState({pickerState: false})
        }
        this.setState({
            lastW: event.nativeEvent.layout.width
        })
    }

    render () {

        return (
            <React.View style={styles.container} onLayout={this.closeModal.bind(this)}>

                <React.Text style={styles.title}>{this.props.title}</React.Text>
                <React.Text style={styles.dateButton} onPress={this.togglePicker.bind(this)}>
                    {this.state.date.toDateString()}
                </React.Text>


                    <React.Modal
                        visible={this.state.pickerState}
                        transparent={this.state.transparent}
                        animated={this.state.animated} >

                        <React.View style={styles.innerDateModal}>
                            <React.DatePickerIOS
                            style={styles.datePicker}
                            date={this.state.date}
                            mode="date"
                            onDateChange={ (date) => { this.setState({date: date})} }
                            />
                            <React.Text style={styles.dateClose} onPress={this.togglePicker.bind(this)}>Close</React.Text>
                        </React.View>

                    </React.Modal>

            </React.View>
        )
    }
}

let styles = React.StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 12,
        marginTop: 20,
        textAlign: "center",
    },
    dateButton: {
        backgroundColor: '#F8F8F9',
        textAlign: "center",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: 'gray',
        height: 60,
        fontSize: 14,
        padding: 3,
        flex: 1,
    },
    innerDateModal: {
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        flex: 1
    },
    datePicker: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        top: React.Dimensions.get('window').height * 0.20
    },
    dateClose: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: 4,
        backgroundColor: "#CCE6FF",
        color: "black",
        fontSize: 30,
        paddingLeft: 25,
        paddingRight: 21,
        position: "absolute",
        overflow: "hidden",
        right: 3,
        top: React.Dimensions.get('window').height * 0.08,
    },

})
