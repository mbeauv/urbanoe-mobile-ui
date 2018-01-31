// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Table, Rows } from 'react-native-table-component';
import _ from 'lodash';

const styles = StyleSheet.create({
  table: { flex: 1 },
  text: { color: 'white', fontSize: 12 },
  row: { },
});

type Props = {
  labels: Array<string>,
  values: Array<number>,
  colors: Array<string>,
};

function getTableData(labels, colors, values) {
  const percent = (value, total) => `${_.round((100 * value) / total)}%`;
  const total = _.sum(values);
  const icon = value => <Icon type='font-awesome' name='circle' color={value} size={14} />;
  return _.map(labels, (label, index) => (values[index] === 0 ?
    null : [icon(colors[index]), label, values[index], percent(values[index], total)]));
}

const PieChartLegend = ({ labels, colors, values }: Props) => (
  <View>
    <Table style={styles.table} borderStyle={{ borderWidth: 0 }}>
      <Rows
        data={getTableData(labels, colors, values)}
        style={styles.row}
        textStyle={styles.text}
        flexArr={[4, 7, 4, 4]}
      />
    </Table>
  </View>
);

export default PieChartLegend;
