import React from 'react';
import BlogDetail from '@/pages/blog/BlogDetail';

const page = ({ params }:any) => {
  return (
    <BlogDetail id={params.blogState} />
  );
};

export default page;