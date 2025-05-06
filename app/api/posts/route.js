// app/api/posts/route.js
import { prisma } from '@/lib/prisma';

export async function GET() {
  const posts = await prisma.post.findMany({ orderBy: { id: 'desc' } });
  return Response.json(posts);
}

export async function POST(req) {
  const { title, content } = await req.json();
  const post = await prisma.post.create({ data: { title, content } });
  return Response.json(post);
}

export async function PUT(req) {
  const { id, title, content } = await req.json();
  const updated = await prisma.post.update({
    where: { id },
    data: { title, content }
  });
  return Response.json(updated);
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = parseInt(searchParams.get('id'));
  await prisma.post.delete({ where: { id } });
  return Response.json({ success: true });
}
