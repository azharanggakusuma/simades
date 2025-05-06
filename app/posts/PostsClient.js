'use client';

import { useEffect, useState } from 'react';

export default function PostsClient() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch('/api/posts');
    const data = await res.json();
    setPosts(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify(form),
    });
    setForm({ title: '', content: '' });
    fetchPosts();
  };

  const handleDelete = async (id) => {
    await fetch(`/api/posts?id=${id}`, { method: 'DELETE' });
    fetchPosts();
  };

  const handleUpdate = async (post) => {
    const title = prompt('New title', post.title);
    const content = prompt('New content', post.content);
    if (!title || !content) return;

    await fetch('/api/posts', {
      method: 'PUT',
      body: JSON.stringify({ id: post.id, title, content }),
    });
    fetchPosts();
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border px-3 py-2 w-full rounded"
          required
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="border px-3 py-2 w-full rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Post
        </button>
      </form>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.content}</p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleUpdate(post)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
