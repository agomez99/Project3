import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

var butter = require('buttercms')('09b8d584815fd5b2e86f3b0932a066afebd020ed');

butter.tag.retrieve('hooks', {
  "include": "hooks"
}).then(function(resp) {
  console.log(resp.data)
}).catch(function(resp) {
  console.log(resp)
});

const Post = props => {
  const data = props.location.state;
  return (
    <div className="post">
      <h1>{data.title}</h1>
      <h1>{data.slug.tags}</h1>
      <hr />
      <div className="author">
        <img src={data.author.profile_image} alt="Author" className="p-image"/>
        <div>
          Published by
          {' '}
          <strong>
            {data.author.first_name} {data.author.last_name}
          </strong>
          {' '} on {' '}
          {moment(data.published).format("MMMM Do, YYYY")}
        </div>
      </div>
      <hr />
      <div dangerouslySetInnerHTML={{__html: data.body}} />
      <hr />
      <Link to="/blog">&larr; Back to the posts list</Link>



      
    </div>
  );
}

export default Post;