// @flow
import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import type { Comment } from 'urbanoe-model';
import { formatDateYYYYMMDD } from 'urbanoe-common';
import type { Style } from '../../common';

type Props = {
  comment: Comment,
  authorStyle: Style,
  dateStyle: Style,
  descriptionStyle: Style,
  onCommentReporterClicked: void => void,
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'column',
  },
  innerContainer: {
    flexDirection: 'row',
    paddingBottom: 7,
    paddingTop: 7,
  },
  divider: {
    height: 0.5,
  },
  dataContainer: {
    flexDirection: 'column',
    paddingLeft: 7,
  },
  metaContainer: {
    flexDirection: 'row',
    paddingBottom: 4,
  },
  commentDate: {
    fontSize: 13,
    color: 'grey',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});

const IssueDetailsCommentItem = ({
  comment,
  authorStyle,
  dateStyle,
  descriptionStyle,
  onCommentReporterClicked,
}: Props) => (
  <View style={styles.outerContainer}>
    <View style={styles.innerContainer}>
      <TouchableOpacity onPress={() => onCommentReporterClicked()}>
        <Image style={styles.image} source={{ uri: comment.author.avatarUrl }} />
      </TouchableOpacity>
      <View style={styles.dataContainer}>
        <View style={styles.metaContainer}>
          <TouchableOpacity onPress={() => onCommentReporterClicked()}>
            <Text style={authorStyle}>{comment.author.userName}</Text>
          </TouchableOpacity>
          <Text style={dateStyle}>{` on ${formatDateYYYYMMDD(comment.commentedOn)}`}</Text>
        </View>
        <Text style={descriptionStyle}>{comment.message}</Text>
      </View>
    </View>
    <Divider style={styles.divider} />
  </View>
);

export default IssueDetailsCommentItem;
