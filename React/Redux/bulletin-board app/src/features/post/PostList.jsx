import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";


const PostList = () => {
  const posts = useSelector(selectAllPosts);

  return (
    <section className="mx-20 py-10 text-white  ">
      <h1 className="mb-5 text-5xl">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 ">
      {posts.map((post, index) => (
        <article className="flex flex-col gap-1 border-2 border-white max-w-[500px] px-10 py-8 rounded-xl" key={index}>
          <h3 className="text-4xl font-semibold">{post.title}</h3>
          <p className="text-3xl font-mono">{post.userId}</p>
          <p className="text-2xl ">{post.content.substring(0, 100)}</p>
        </article>
      ))}
      </div>
    </section>
  );
};

export default PostList;
