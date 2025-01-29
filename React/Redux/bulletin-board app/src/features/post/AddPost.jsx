import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import {selectAllUsers } from "../users/usersSlice";
const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState('');
  const dispatch = useDispatch()
  const users = useSelector(selectAllUsers)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
        dispatch(postAdded(title,content, userId))
    }
    setContent('')
    setTitle('')
  };

  return (
    <div className=" max-w-3xl  pt-10 p-6 bg-slate-600  rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Add New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div className="text-white">
          <label
            htmlFor="title"
            className="block text-xl font-medium "
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the post title"
            className="mt-1 block text-black  placeholder:text-gray-600 w-full bg-white px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Author: */}
        <select onChange={(e) => setUserId(e.target.value)} className="mt-1 block text-black w-full bg-white px-3 py-2 border border-gray-300 rounded-lg " >
          <option  value="">Select Author</option>
          {users.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
        {/* Content Field */}
        <div className="text-white">
          <label
            htmlFor="content"
            className="block text-xl font-medium "
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your post content"
            className="mt-1 block text-black w-full bg-white placeholder:text-gray-600 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-24"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg shadow-md  focus:outline-none"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
