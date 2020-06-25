import React from 'react';
import NewBlog from '../Components/NewBlog/NewBlog'
import Disqus from '../Components/Disqus';


const BlogsPage = () => {
  return (
    <div>
      <NewBlog />
      <Disqus />
    </div>
  );
};

export default BlogsPage;