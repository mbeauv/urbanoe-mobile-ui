// @flow
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import _ from 'lodash';
import type { Comment } from 'urbanoe-model';
import type { Style } from '../../common';
import IssueDetailsCommentItem from './IssueDetailsCommentItem';

type Props = {
  comments: Array<Comment>,
  headerStyle: Style,
  authorStyle: Style,
  descriptionStyle: Style,
  dateStyle: Style,
  onCommentReporterClicked: (string, number) => void,
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'column',
  },
  noComment: {
    fontSize: 12,
    color: '#1F0D3E',
  },
});

function renderComments(
  comments,
  authorStyle,
  dateStyle,
  descriptionStyle,
  onCommentReporterClicked,
) {
  if (comments === null || comments.length === 0) {
    return <Text style={descriptionStyle}>No comment for this issue</Text>;
  }

  return _.map(
    comments,
    comment =>
      (<IssueDetailsCommentItem
        key={comment.id}
        comment={comment}
        authorStyle={authorStyle}
        descriptionStyle={descriptionStyle}
        dateStyle={dateStyle}
        onCommentReporterClicked={() =>
          onCommentReporterClicked(comment.author.userName, comment.author.userId)}
      />),
  );
}

const IssueDetailsComments = ({
  comments,
  headerStyle,
  authorStyle,
  descriptionStyle,
  dateStyle,
  onCommentReporterClicked,
}: Props) => (
  <View style={styles.outerContainer}>
    <Text style={headerStyle}>Comments</Text>
    { renderComments(comments, authorStyle, dateStyle, descriptionStyle, onCommentReporterClicked) }
  </View>
);

export default IssueDetailsComments;
