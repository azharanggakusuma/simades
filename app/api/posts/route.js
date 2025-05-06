import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// CREATE: Menambah Post
export async function POST(request) {
  const { title, content } = await request.json();

  if (!title || !content) {
    return new Response('Title and content are required', { status: 400 });
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
      },
    });

    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response('Failed to create post', { status: 500 });
  }
}

// READ: Mendapatkan Semua Post
export async function GET() {
  try {
    const posts = await prisma.post.findMany();
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch posts', { status: 500 });
  }
}

// UPDATE: Memperbarui Post Berdasarkan ID
export async function PUT(request) {
  const { id, title, content } = await request.json();

  if (!id || !title || !content) {
    return new Response('ID, title, and content are required', { status: 400 });
  }

  try {
    const updatedPost = await prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
        content,
      },
    });

    return new Response(JSON.stringify(updatedPost), { status: 200 });
  } catch (error) {
    return new Response('Failed to update post', { status: 500 });
  }
}

// DELETE: Menghapus Post Berdasarkan ID
export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return new Response('ID is required', { status: 400 });
  }

  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id: parseInt(id),
      },
    });

    return new Response(JSON.stringify(deletedPost), { status: 200 });
  } catch (error) {
    return new Response('Failed to delete post', { status: 500 });
  }
}
