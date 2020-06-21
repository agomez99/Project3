import React from 'react';

import NewBlog from '../Components/NewBlog/NewBlog'
import Comments from '../Components/Comments';


const BlogsPage = () => {
  return (
    <div>
      <NewBlog />
      <Comments />
    </div>
  );
};

export default BlogsPage;