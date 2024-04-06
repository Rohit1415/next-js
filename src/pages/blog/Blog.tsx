"use client";

import React from "react";
import Image from "next/image";
import { BlogTypes, blogs } from "@/data/blogs";
import style from "../../style/blog.module.scss";

const Blog = () => {
  const handleShowBlog = (id: string) => {
    window.location.href = `/blogs/${id}`;
  };
  return (
    <div className={style.blog_wrapper}>
      <div className={style.blog}>
        {blogs.map((blog: BlogTypes) => {
          return (
            <div key={blog.author} onClick={() => handleShowBlog(blog.id)}>
              <img src={blog.img} alt="blog-1" />
              <p className={style.blog_title}>{blog.title}</p>
              <p className={style.blog_subtitle}>{blog.subtitle}</p>
              <p className={style.blog_author}>
                {blog.author} {"•"}
                <span>&nbsp;{blog.date_and_time}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
