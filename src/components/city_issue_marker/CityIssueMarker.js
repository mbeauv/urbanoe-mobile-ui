// @flow

import React from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
import type { IssueCommonData } from 'urbanoe-model';
import IssueTypeIcon from '../issue_type_icon/IssueTypeIcon';
import CityIssueMarkerCallout from './CityIssueMarkerCallout';

type Props = {
  useCallout?: bool,
  onCalloutSelected?: number => void,
  onSelect?: number => void,
  selected?: bool,
  issue: IssueCommonData,
};

function renderCallout(issue, useCallout, selectedFunction) {
  if (useCallout) {
    return (
      <CityIssueMarkerCallout issue={issue} onClicked={cid => selectedFunction(cid)} />
    );
  }

  return <View />;
}

const CityIssueMarker = ({ issue, onSelect, selected, onCalloutSelected, useCallout }: Props) => {
  const { issueType, fixed, coordinates, id } = issue;
  return (
    <MapView.Marker
      coordinate={coordinates}
      onSelect={() => onSelect(id)}
      zIndex={selected ? 999 : 0}
    >
      <IssueTypeIcon issueType={issueType} fixed={fixed} />
      { renderCallout(issue, useCallout, onCalloutSelected) }
    </MapView.Marker>
  );
};

CityIssueMarker.defaultProps = {
  useCallout: true,
  onCalloutSelected: () => {},
  onSelect: () => {},
  selected: false,
};

export default CityIssueMarker;
