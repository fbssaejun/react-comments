import faker from 'faker';

export default function CommentDetail({author}) {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div classNName="text">Nice blog post!</div>
      </div>
    </div>
  );
}
