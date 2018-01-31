// @flow
import React from 'react';
import { ScrollView } from 'react-native';
import type { StatisticsState } from 'urbanoe-communications';
import PieChartPanel from './PieChartPanel';

type Props = {
  cityStatistics: StatisticsState,
  backgroundColor: string,
};

const CityStatistics = ({ cityStatistics, backgroundColor } : Props) => (
  <ScrollView>
    <PieChartPanel
      statistics={cityStatistics}
      name='issue_distribution'
      backgroundColor={backgroundColor}
    />
    <PieChartPanel
      statistics={cityStatistics}
      name='city_relationships'
      backgroundColor={backgroundColor}
    />
  </ScrollView>
);

export default CityStatistics;
