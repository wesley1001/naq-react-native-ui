"use strict";

import React from "react-native";
import FieldText from "./field_text.js"

export default class Component extends React.Component {
    constructor(props) {
        super(props);

        const numberOfRows = props.rows || 12;
        const numberOfCols = props.fields.length / numberOfRows;

        this.state = {
            id: props.id,
            numberOfRows: numberOfRows,
            numberOfCols: numberOfCols
        };
    }

    onValChange(kv) {
        this.props.onValChange && (kv.id = this.state.id)
        this.props.onValChange && this.props.onValChange(kv)
    }

    renderColumns(fields) {
        return Array.from({
            length: this.state.numberOfCols
        }, (v, k) => k).map((i) => {
            const begin = i * this.state.numberOfRows;
            const end = begin + this.state.numberOfRows;
            return (
                <React.View key={`column${i}`} style={styles.column}>
                    {this.renderFields(fields, begin, end)}
                </React.View>
            );
        });
    }

    renderFields(fields, begin, end) {
        return fields.slice(begin, end).map((field, i) => {
            if (field.fieldType === "FieldValue") {
                return (
                    <React.View key={field.name+i} style={styles.field}>
                        <FieldText {...this.props}
                            onValChange={this.onValChange.bind(this)}
                            title={field.display}
                            defaultValue={field.value}
                        />
                    </React.View>
                );
            }
        });
    }

    render() {
        return (
            <React.View>
                {this.renderColumns(this.props.fields)}
            </React.View>
        );
    }
}

const styles = React.StyleSheet.create({
    column: {
        flex: 1,
    },
    field: {
        height: 60,
        width: 120,
        marginLeft: 10,
        marginRight: 10
    }
});
