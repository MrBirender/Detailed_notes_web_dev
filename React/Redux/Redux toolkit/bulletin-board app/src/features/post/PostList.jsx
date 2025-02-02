import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import Author from "./Author";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts.slice().sort((a, b)=> b.date.localeCompare(a.date))


  const renderedPosts = orderedPosts.map((post, index) => (
    <article
      className=" flex flex-col justify-between gap-2 border-2 border-white  px-8 py-8 rounded-xl"
      key={index}
    >
      <h3 className="text-4xl font-semibold capitalize">{post.title}</h3>
      <p className="text-2xl capitalize">{post.content.substring(0, 100)}</p>
      <p className="text-2xl font-mono">
        by <Author userId={post.userId} /> 
      </p>
      <p className="text-2xl font-mono"><TimeAgo timeStamp={post.date} /></p>
      <ReactionButtons post={post}/>
    </article>
  ));

  return (
    <section className="mx-20 py-10 text-white ">
      <h1 className="mb-5 text-5xl">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5  ">
        {renderedPosts}
      </div>
    </section>
  );
};

export default PostList;
