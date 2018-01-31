// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
import type { IssueDetailsData } from 'urbanoe-model';
import CityIssueMarker from '../city_issue_marker/CityIssueMarker';

const MAP_HEIGHT = 200;

type Props = {
  issue: IssueDetailsData,
};

type State = {
  mapLoaded: bool,
}

class IssueDetailsMap extends Component<Props, State> {
  state = { mapLoaded: false };

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  render() {
    const { coordinates } = this.props.issue;
    if (this.state.mapLoaded) {
      return (
        <MapView
          style={{ flex: 1, height: MAP_HEIGHT }}
          initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.018022,
            longitudeDelta: 0.018021,
          }}
        >
          <CityIssueMarker issue={this.props.issue} useCallout={false} />
        </MapView>
      );
    }

    return <View />;
  }
}

export default IssueDetailsMap;
