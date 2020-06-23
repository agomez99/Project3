import React from 'react';
import NewBlog from '../Components/NewBlog/NewBlog'
import Comments from '../Components/Comments/Comments';
import AuthOptions from '../Components/AuthOptions';


const BlogsPage = () => {
  return (
    <div>
      <AuthOptions />
      <NewBlog />
      <Comments />
    </div>
  );
};

export default BlogsPage;