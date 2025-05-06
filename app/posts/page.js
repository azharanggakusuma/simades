"use client";

import { useEffect, useState } from 'react';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => deletePost(post.id)}>Delete</button>
            <button onClick={() => updatePost(post.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function deletePost(id) {
  const res = await fetch(`/api/posts?id=${id}`, {
    method: 'DELETE',
  });

  if (res.ok) {
    alert('Post deleted successfully');
    location.reload();
  } else {
    alert('Failed to delete post');
  }
}

async function updatePost(id) {
  const newTitle = prompt('Enter new title');
  const newContent = prompt('Enter new content');

  if (newTitle && newContent) {
    const res = await fetch(`/api/posts`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, title: newTitle, content: newContent }),
    });

    if (res.ok) {
      alert('Post updated successfully');
      location.reload();
    } else {
      alert('Failed to update post');
    }
  }
}
