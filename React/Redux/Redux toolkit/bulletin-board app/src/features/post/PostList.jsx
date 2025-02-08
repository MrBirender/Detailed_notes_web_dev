import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "./postSlice";
import { useEffect } from "react";
import PostExcerpt from "./PostExcerpt";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  /* preparing content based on status */
  let content;
  if(postStatus === 'loading'){
    content = <p>Loading...</p>

  }else if(postStatus === 'succeeded'){
    const orderedPosts = posts.slice().sort((a, b)=> b.date.localeCompare(a.date));
    content = orderedPosts.map((post)=> <PostExcerpt key={post.id} post={post}/>)
  }else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section className="mx-20 py-10 text-white ">
      <h1 className="mb-5 text-5xl">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {content}
      </div>
    </section>
  );
};

export default PostList;
