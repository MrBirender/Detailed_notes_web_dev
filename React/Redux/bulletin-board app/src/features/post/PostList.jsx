import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";


const PostList = () => {
  const posts = useSelector(selectAllPosts);

  return (
    <section className="ml-20 pt-10 text-white ">
      <h1 className="mb-5 text-5xl">Posts</h1>
      <div className="flex flex-col gap-5 ">
      {posts.map((post, index) => (
        <article className="flex flex-col gap-4 border-2 border-white max-w-[500px] h-40 px-10 py-8 rounded-xl" key={index}>
          <h3 className="text-4xl font-semibold">{post.title}</h3>
          <p className="text-2xl ">{post.content}</p>
        </article>
      ))}
      </div>
    </section>
  );
};

export default PostList;
