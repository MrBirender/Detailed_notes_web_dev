import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [showForm, setShowForm] = useState(false); // ✅ State to toggle form visibility

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
      setShowForm(false); // ✅ Hide form after submission
    }
  };

  const canSave = Boolean(userId) && Boolean(title) && Boolean(content);

  return (
    <div className="max-w-3xl mx-auto pt-10 p-6 bg-slate-600 rounded-lg">
      {/* ✅ Show 'Create Post' button when form is hidden */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md"
        >
          Create Post
        </button>
      )}

      {/* ✅ Show form when 'Create Post' is clicked */}
      {showForm && (
        <>
          <h1 className="text-2xl font-bold mb-4 text-center">Add New Post</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title Field */}
            <div className="text-white">
              <label htmlFor="title" className="block text-xl font-medium">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter the post title"
                className="mt-1 block text-black placeholder:text-gray-600 w-full bg-white px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
              />
            </div>

            {/* Author Select */}
            <select
              value={userId}
              onChange={(e) => setUserId(Number(e.target.value))}
              className="mt-1 block text-black w-full bg-white px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select Author</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>

            {/* Content Field */}
            <div className="text-white">
              <label htmlFor="content" className="block text-xl font-medium">
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your post content"
                className="mt-1 block text-black w-full bg-white placeholder:text-gray-600 px-3 py-2 border border-gray-300 rounded-lg h-24"
              />
            </div>

            {/* Submit Button */}
            <button
              disabled={!canSave}
              type="submit"
              className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg shadow-md disabled:bg-gray-300"
            >
              Add Post
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default AddPostForm;
