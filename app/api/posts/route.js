import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const posts = await prisma.post.findMany();
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching posts' }), { status: 500 });
  }
}

export async function POST(request) {
  const { title, content } = await request.json();
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
      },
    });
    return new Response(JSON.stringify(post), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error creating post' }), { status: 500 });
  }
}
