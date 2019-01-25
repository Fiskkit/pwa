import React from 'react';
import Sentence from './sentence';

export default (props: { para: ISentence [] }) => {
  const { para } = props;
  return (
    <div className="paragraph">
      {para.map((sentence: ISentence) => <Sentence {...sentence} />)}
    </div>
  )
};