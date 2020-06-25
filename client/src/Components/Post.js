import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Disqus from '../Components/Disqus';

const Post = props => {
  const data = props.location.state;
  return (
    <div className="post">
      <h1 className="p-title">{data.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.body}} />

      <hr />
      <div className="author">
        <img src={data.author.profile_image} alt="Author" className="author-image"/>
        <div>
          Published by
          {' '}
          <strong>
            {data.author.first_name} {data.author.last_name}
          </strong>
          <p>{data.author.linkedin_url}</p>

          {' '} on {' '}
          {moment(data.published).format("MMMM Do, YYYY")}
        </div>
      </div>
      <hr />
      <hr />
      <Link to="/blog">&larr; Back to the posts list</Link>
      <Disqus />



    </div>
  );
}

export default Post;