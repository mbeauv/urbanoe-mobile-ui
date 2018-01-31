// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
import type { Coordinates, IssueSummaryData } from 'urbanoe-model';
import CityIssueMarker from '../city_issue_marker/CityIssueMarker';

type Props = {
  onMapCalloutSelected: number => void,
  townCenter: Coordinates,
  cityIssues: Array<IssueSummaryData>,
};

type State = {
  selectedIssueId: number,
  mapLoaded: bool,
}

class CityIssuesMap extends Component<Props, State> {
  static defaultProps = {
    cityIssues: [],
  };

  state = {
    selectedIssueId: -1,
    mapLoaded: false,
  };

  componentDidMount() {
    this.setState({ ...this.state, mapLoaded: true });
  }

  onSelect(id : number) {
    this.setState({ ...this.state, selectedIssueId: id });
  }

  renderIssueMarkers() {
    return this.props.cityIssues.map(issue =>
      (<CityIssueMarker
        key={issue.id}
        issue={issue}
        onSelect={id => this.onSelect(id)}
        selected={this.state.selectedIssueId === issue.id}
        onCalloutSelected={id => this.props.onMapCalloutSelected(id)}
      />));
  }

  render() {
    const { townCenter } = this.props;

    if (this.state.mapLoaded) {
      return (
        <MapView.Animated
          style={{ flex: 1 }}
          initialRegion={{
            latitude: townCenter.latitude,
            longitude: townCenter.longitude,
            latitudeDelta: 0.018022,
            longitudeDelta: 0.018021,
            }}
        >
          { this.renderIssueMarkers() }
        </MapView.Animated>
      );
    }

    return <View />;
  }
}

export default CityIssuesMap;
