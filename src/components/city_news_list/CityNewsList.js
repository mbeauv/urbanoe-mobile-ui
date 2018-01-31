// @flow

import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { List } from 'react-native-elements';
import type { CityNews } from 'urbanoe-model';
import type { Style } from '../../common';
import CityNewsBrief from '../../components/city_news_brief/CityNewsBrief';

type Props = {
  onItemChevronClicked: (string, number) => void,
  onItemAuthorClicked: (string, number) => void,
  onEndReached: (void) => void,
  cityNews: Array<CityNews>,
  textStyle: Style,
  authorStyle: Style,
  dateStyle: Style,
  width: number,
  buttonIconColor: string,
  buttonBackgroundColor: string,
};

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
});

type State = {
  selectedId: number,
};

class CityNewsList extends Component<Props, State> {
  state = {
    selectedId: -1,
  };

  onClick = (newsId: number) => {
    const newSelectedId = this.state.selectedId === newsId ? -1 : newsId;
    this.setState({ selectedId: newSelectedId });
  }

  render() {
    return (
      <List containerStyle={styles.outerContainer}>
        <FlatList
          data={this.props.cityNews}
          extraData={this.state}
          renderItem={
            ({ item }) =>
              (<CityNewsBrief
                key={item.id}
                news={item}
                expanded={item.id === this.state.selectedId}
                onClick={this.onClick}
                textStyle={this.props.textStyle}
                authorStyle={this.props.authorStyle}
                dateStyle={this.props.dateStyle}
                onChevronClicked={this.props.onItemChevronClicked}
                onAuthorClicked={(name, id) => this.props.onItemAuthorClicked(name, id)}
                width={this.props.width}
                buttonBackgroundColor={this.props.buttonBackgroundColor}
                buttonIconColor={this.props.buttonIconColor}
              />)}
          keyExtractor={item => item.id.toString()}
          onEndReached={this.props.onEndReached}
        />
      </List>
    );
  }
}

export default CityNewsList;
