"use strict";

import React from "react-native";
import FieldText from "./field_text.js"

export default class Component extends React.Component {
    constructor(props) {
        super(props);

        const numberOfRows = props.rows || 12;
        const numberOfCols = props.fields.length / numberOfRows;

        console.log("Rows: ", numberOfRows);
        console.log("Cols: ", numberOfCols);
        this.state = {
            numberOfRows: numberOfRows,
            numberOfCols: numberOfCols
        };
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
            if (field.fieldType === "FieldText") {
                return (
                    <React.View key={field.name+i} style={styles.field}>
                        <FieldText title={field.display}/>
                    </React.View>
                );
            }

            if (field.fieldType === "FieldValue") {
                return (
                    <React.View key={field.name+i} style={styles.field}>
                        <FieldText title={field.display} defaultValue={field.value}/>
                    </React.View>
                );
            }
        });
    }

    render() {
        return (
            <React.ScrollView
                contentContainerStyle={styles.scrollContainer}
                style={styles.container}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={false}>
                {this.renderColumns(this.props.fields)}
            </React.ScrollView>
        );
    }
}

const styles = React.StyleSheet.create({
    container: {
        flex: 4,
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: "wrap",
        marginTop: 30,
        height: 745,
    },
    scrollContainer: {
        flexDirection: 'row',
        flexWrap: "wrap"
    },
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