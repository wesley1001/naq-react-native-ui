"use strict";

import React from "react-native";
import FieldText from "./field_text.js"
import FieldLabel from "./field_label.js"
import FieldEmpty from "./field_empty.js"
import FieldPicker from "./field_picker.js"
import FieldDate from './field_datepicker.js'
import FieldMultiLine from './field_multiline.js'
import FieldLatlng from './latlng.js'

export default class Component extends React.Component {
    constructor(props) {
        super(props);

        const numberOfColumns = props.columns || 5;

        let rowsInEachColumn = props.fields.length / numberOfColumns;
        if (rowsInEachColumn % 1) {
            rowsInEachColumn = Math.ceil(rowsInEachColumn);
        }

        this.state = {
            numberOfColumns: numberOfColumns,
            rowsInEachColumn: rowsInEachColumn
        };
    }

    renderColumns(fields) {
        return Array.from({
            length: this.state.numberOfColumns
        }, (v, k) => k).map((i) => {
            const begin = i * this.state.rowsInEachColumn;
            const end = begin + this.state.rowsInEachColumn;
            return (
                <React.View key={`column${i}`} style={styles.column}>
                    {this.renderFields(fields, begin, end)}
                </React.View>
            );
        });
    }

    findValue(key, featureGroup){
        if(!featureGroup || !this.props.defaultValues) { return; }
        let found = this.props.defaultValues.filter((kv) => key === kv.key && featureGroup === kv.type);
        if(found.length) { return found[0]; }
        return "";
    }

    renderFields(fields, begin, end) {
        return fields.slice(begin, end).map((field, i) => {
            let foundValue = this.findValue(field.name, field.featureGroup);
            if(field.name === "Latitude, Longitude") {
                return (
                    <React.View key={`empty_${begin + i}`} style={styles.field}>
                        <FieldLatlng title={field.display}/>
                    </React.View>
                );
            }
            if (field.fieldType === "FieldText") {
                return (
                    <React.View key={field.name} style={styles.field}>
                        <FieldText title={field.display}/>
                    </React.View>
                );
            }
            if (field.fieldType === "FieldSelect") {
                let {title, ...other} = this.props
                return (
                    <React.View key={field.name} style={styles.field}>
                        <FieldPicker {...other} title={field.name} foundValue={foundValue}
                            pickerData={field.values} />
                    </React.View>
                );
            }
            if (field.fieldType === "FieldDate") {
                return (
                    <React.View key={field.name} style={styles.field}>
                        <FieldDate title={field.display} date={new Date()}/>
                    </React.View>
                );
            }
            if (field.fieldType === "FieldLabel") {
                return (
                    <React.View key={`empty_${begin + i}`} style={styles.field}>
                        <FieldLabel title={field.display}/>
                    </React.View>
                );
            }
            if (field.fieldType === "FieldMultiLine") {
                return (
                    <React.View key={field.name} style={styles.multiLine}>
                        <FieldMultiLine title={field.display}/>
                    </React.View>
                );
            }
            if (field.fieldType === "FieldEmpty") {
                return (
                    <React.View key={`empty_${begin + i}`} style={styles.field}>
                        <FieldEmpty/>
                    </React.View>
                );
            }
            if (field.fieldType === "FieldValue") {
                return (
                    <React.View key={field.name} style={styles.field}>
                        <FieldText title={field.display} defaultValue={field.value} {...this.props}/>
                    </React.View>
                );
            }
            if (field.fieldType === "FieldMultiValue") {
                return (
                    <React.View key={field.name} style={styles.multiLine}>
                        <FieldMultiLine title={field.display} defaultValue={field.value} {...this.props}/>
                    </React.View>
                );
            }
        });
    }

    render() {
        return (
            <React.View style={styles.container}>
                {this.renderColumns(this.props.fields)}
            </React.View>
        );
    }
}

const styles = React.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    column: {
        flex: 1,
    },
    field: {
        flex: 1,
        height: 70,
        marginLeft: 10,
        marginRight: 10
    },
    multiLine: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    }
});
