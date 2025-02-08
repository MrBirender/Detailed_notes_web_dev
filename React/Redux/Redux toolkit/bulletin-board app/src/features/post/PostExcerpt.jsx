import React from 'react'
import Author from "./Author";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";


const PostExcerpt = ({post}) => {
  return (
    <article
    className=" flex flex-col justify-between gap-2 border-2 border-white  px-8 py-8 rounded-xl"
  >
    <h3 className="text-4xl font-semibold capitalize">{post.title}</h3>
    <p className="text-2xl capitalize">{post.body.substring(0, 100)}</p>
    <p className="text-2xl font-mono">
      by <Author userId={post.userId} />
    </p>
    <p className="text-2xl font-mono">
      <TimeAgo timeStamp={post.date} />
    </p>
    <ReactionButtons post={post} />
  </article>
  )
}

export default PostExcerpt
