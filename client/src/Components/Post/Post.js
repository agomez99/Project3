import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Disqus from '../Disqus/Disqus';
import Chip from '@material-ui/core/Chip';

import './styles.css'

const Post = props => {
  const data = props.location.state;
  console.log(data.tags)
  return (
    <div className="post">
      <h1 className="p-title">{data.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.body}} />
      <Chip 
            label={data.tags[0].name}
          />
          <Chip 
            label={data.tags[1].name}
          />
          <Chip 
            label={data.tags[2].name}
          />
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