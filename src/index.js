import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {

  //List of comment text
  let comment = ['Nice blog post!', 'Awesome!', 'Great to hear!']

  //Returns a random number
  const randomNum = () => {
    return Math.floor(Math.random() * 3)
  }

  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" comment={comment[randomNum()]} timeAgo="Today at 4:45PM" avatar={faker.image.avatar()}/>
      <CommentDetail author="Alex" comment={comment[randomNum()]} timeAgo="Today at 2:45PM" avatar={faker.image.avatar()}/>
      <CommentDetail author="Jane" comment={comment[randomNum()]} timeAgo="Yesterday at 8:45PM" avatar={faker.image.avatar()}/>
    </div>
  )
};

ReactDOM.render(<App/>, document.querySelector('#root'));