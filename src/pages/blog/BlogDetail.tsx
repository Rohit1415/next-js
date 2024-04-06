"use client";
import React, { useEffect, useState } from "react";
import style from "../../style/blog.module.scss";
import { blogs, BlogTypes } from "@/data/blogs";
import Loader from "@/component/Loader";

interface BlogStateType {
  isLoading: boolean;
  isError: boolean;
  data: BlogTypes;
}
const initialBlog = {
  id: "",
  img: "",
  title: "",
  subtitle: "",
  author: "",
  date_and_time: "",
  description: {
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    paragraph4: "",
    paragraph5: "",
    paragraph6: "",
    paragraph7: "",
    paragraph8: "",
  },
};

const BlogDetail = ({ id }: any) => {
  const [blog, setblog] = useState<BlogStateType>({
    isLoading: false,
    isError: false,
    data: initialBlog,
  });

  useEffect(() => {
    const getData = async () => {
      setblog((prev) => ({ ...prev, isLoading: true }));
      const resulte: any = await blogs.find(
        (item: BlogTypes) => item.id === id
      );
      setblog((prev) => ({ ...prev, data: resulte }));
      setblog((prev) => ({ ...prev, isLoading: false }));
    };

    getData();
  }, [id]);

  return (
    <React.Fragment>
      {blog.isLoading ? (
        <Loader />
      ) : (
        <>
          <div
            className={style.blog_detail_bg_wrapper}
            style={{ backgroundImage: `url("${blog.data?.img}")` }}
          >
            <div className={style.blog_detail_bg_overlay}></div>
            <div className={style.blog_detail_bg_content}>
              <h1>{blog.data?.title}</h1>
              <h2>{blog.data?.subtitle}</h2>
            </div>
          </div>
          <div className={style.blog_detail_content_warapper}>
            <div className={style.blog_detail_content}>
              <p> {blog.data?.description?.paragraph1} </p>
              <p> {blog.data?.description?.paragraph2} </p>
              <p> {blog.data?.description?.paragraph3} </p>
              <p> {blog.data?.description?.paragraph4} </p>
              <p> {blog.data?.description?.paragraph5} </p>
              <p> {blog.data?.description?.paragraph6} </p>
              <p> {blog.data?.description?.paragraph7} </p>
              <p> {blog.data?.description?.paragraph8} </p>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default BlogDetail;
