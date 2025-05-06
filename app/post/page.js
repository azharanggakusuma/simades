export default async function PostsPage() {
  try {
    const res = await fetch('http://localhost:3000/api/posts');
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts = await res.json();

    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
}
