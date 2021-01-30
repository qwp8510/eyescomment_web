import React from 'react';
import _ from 'lodash';

const sentimentStatisticGroup = (scores) => {
  const {pos_score, neu_score, neg_score} = scores
  return (
    <div class="ui statistics">
      <div class="statistic">
        <div class="value">
          {pos_score}%
        </div>
        <div class="label">
          Positive
        </div>
      </div>
      <div class="statistic">
        <div class="value">
          {neu_score}%
        </div>
        <div class="label">
          Neutral
        </div>
      </div>
      <div class="statistic">
        <div class="value">
          {neg_score}%
        </div>
        <div class="label">
          Negative
        </div>
      </div>
    </div>)
}

export default function GetSentimentStatisticGroup(comments) {
  function getScore() {
    let totalLength = 0;
    let positiveLength = 0;
    let neutralLength = 0;
    let negativeLength = 0;
    for (var idx in comments) {
      totalLength = totalLength + 1;
      if (_.get(comments[idx], 'sentimentScore') >= 0.7) {
        positiveLength = positiveLength + 1;
      } else if (_.get(comments[idx], 'sentimentScore') < 0.7, _.get(comments[idx], 'sentimentScore') > 0.3) {
        neutralLength = neutralLength + 1;
      } else if (_.get(comments[idx], 'sentimentScore') <= 0.3) {
        negativeLength = negativeLength + 1;
      };
    };
    const pos_score = ((positiveLength / totalLength) * 100).toFixed(0);
    const neu_score = ((neutralLength / totalLength) * 100).toFixed(0);
    const neg_score = ((negativeLength / totalLength) * 100).toFixed(0);
    return {pos_score, neu_score, neg_score}
  }
  return sentimentStatisticGroup(getScore());
}