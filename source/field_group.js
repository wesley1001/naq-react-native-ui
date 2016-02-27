"use strict";

import React from "react-native";
import FieldText from "./field_text.js"
import FieldLabel from "./field_label.js"
import FieldEmpty from "./field_empty.js"
import FieldPicker from "./field_picker.js"

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

    renderFields(fields, begin, end) {
        return fields.slice(begin, end).map((field, i) => {
            if (field.fieldType === "FieldText") {
                return (
                    <React.View key={field.name} style={styles.field}>
                        <FieldText title={field.display}/>
                    </React.View>
                );
            }
            if (field.fieldType === "FieldSelect") {
                return (
                    <React.View key={field.name} style={styles.pickerField}>
                        <FieldPicker title={field.display} pickerData={field.values}/>
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
            if (field.fieldType === "FieldEmpty") {
                return (
                    <React.View key={`empty_${begin + i}`} style={styles.field}>
                        <FieldEmpty/>
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
    pickerField: {
        flex: 1,
        height: 100,
        marginLeft: 10,
        marginRight: 10
    }
});
