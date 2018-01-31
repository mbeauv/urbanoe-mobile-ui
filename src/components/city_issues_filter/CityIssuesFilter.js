// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import type { CityIssuesFilterData } from 'urbanoe-model';
import Button from '../button/Button';
import CheckBox from '../checkbox/CheckBox';
import DividerHeader from '../divider_header/DividerHeader';

type Props = {
  visible: bool,
  cityIssuesFilter: CityIssuesFilterData,
  backgroundColor: string,
  onCheck: (string, string) => void,
  onCancel: void => void,
  onApply: void => void,
  onClear: void => void,
};

const BUTTON_WIDTH = 80;

const styles = StyleSheet.create({
  outerContainer: {
    width: '80%',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

const CityIssuesFilter = ({
  visible,
  onCancel,
  onApply,
  onClear,
  cityIssuesFilter,
  backgroundColor,
  onCheck } : Props) => (
    <Modal isVisible={visible}>
      <View style={[styles.outerContainer, { backgroundColor }]}>
        <DividerHeader title='Status' />
        <CheckBox title='Fixed' checked={cityIssuesFilter.statuses.fixed} onPress={() => onCheck('statuses', 'fixed')} />
        <CheckBox title='Not Fixed' checked={cityIssuesFilter.statuses.notFixed} onPress={() => onCheck('statuses', 'notFixed')} />
        <DividerHeader title='Types' />
        <CheckBox title='Pothole' checked={cityIssuesFilter.types.pothole} onPress={() => onCheck('types', 'pothole')} />
        <CheckBox title='Graffiti' checked={cityIssuesFilter.types.graffiti} onPress={() => onCheck('types', 'graffiti')} />
        <CheckBox title='Lost Pet' checked={cityIssuesFilter.types.lostPet} onPress={() => onCheck('types', 'lostPet')} />
        <CheckBox title='Garbage Can' checked={cityIssuesFilter.types.garbageCan} onPress={() => onCheck('types', 'garbageCan')} />
        <CheckBox title='Broken Light' checked={cityIssuesFilter.types.brokenLight} onPress={() => onCheck('types', 'brokenLight')} />
        <CheckBox title='Other' checked={cityIssuesFilter.types.other} onPress={() => onCheck('types', 'other')} />
        <View style={styles.buttonContainer}>
          <Button label='Cancel' onPress={onCancel} width={BUTTON_WIDTH} />
          <Button label='Clear' onPress={onClear} width={BUTTON_WIDTH} />
          <Button label='Apply' onPress={onApply} width={BUTTON_WIDTH} />
        </View>
      </View>
    </Modal>
);

export default CityIssuesFilter;
