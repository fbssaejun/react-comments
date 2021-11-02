import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {

  let comment = ['Nice blog post!']

  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" comment={comment}/>
      <CommentDetail author="Alex" comment={comment}/>
      <CommentDetail author="Jane" comment={comment}/>
    </div>
  )
};

ReactDOM.render(<App/>, document.querySelector('#root'));