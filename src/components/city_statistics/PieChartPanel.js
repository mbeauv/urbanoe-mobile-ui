// @flow

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import _ from 'lodash';
import Pie from 'react-native-pie'
import PieChartLegend from './PieChartLegend';
import type { StatisticsState } from '../../reducers/city_statistics_reducer';

type Props = {
  name: string,
  statistics: StatisticsState,
  backgroundColor: string,
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    flex: 1,
    flexDirection: 'column',
    fontSize: 16,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 12,
    color: 'white',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

function renderChart(state: StatisticsState, chartName: string, backgroundColor) {
  const report = state[chartName];
  if (report && report.chart) {
    const { title, subTitle, data } = report.chart;
    const total = _.sumBy(data, item => item.value);
    const colors = _.map(data, item => item.color);
    const values = _.map(data, item => item.value);
    const percentages = _.map(data, item => _.round(100 * (item.value / total)));
    const labels = _.map(data, item => item.label);
    return (
      <View style={[styles.outerContainer, { backgroundColor }]}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        <View style={styles.innerContainer}>
          <View style={{ flex: 2, marginRight: 10 }}>
            <Pie radius={60} series={percentages} colors={colors} />
          </View>
          <View style={{ flex: 4, justifyContent: 'flex-start' }}>
            <PieChartLegend labels={labels} colors={colors} values={values} />
          </View>
        </View>
      </View>
    );
  }

  return <View />;
}

const PieChartPanel = ({ name, statistics, backgroundColor } : Props) => {
  if (statistics && statistics[name]) {
    return (
      <View>
        { renderChart(statistics, name, backgroundColor) }
      </View>
    );
  }

  return <View />;
};

export default PieChartPanel;
