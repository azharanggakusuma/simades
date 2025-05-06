import PostsClient from './PostsClient';

export default function PostsPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Posts</h1>
      <PostsClient />
    </div>
  );
}
