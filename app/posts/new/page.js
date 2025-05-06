import { useState } from 'react';

export default function NewPostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  async function createPost(e) {
    e.preventDefault();

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      alert('Post created successfully');
      setTitle('');
      setContent('');
    } else {
      alert('Failed to create post');
    }
  }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={createPost}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
