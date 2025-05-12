// app/api/login/route.js
import prisma from '../../../lib/prisma'
import { cookies } from 'next/headers'

export async function POST(req) {
  const body = await req.json()
  const { username, password, role, tahunPengisian } = body

  const user = await prisma.user.findFirst({
    where: { username, password, role },
  })

  if (!user) {
    return new Response(JSON.stringify({ error: 'Login gagal' }), {
      status: 401,
    })
  }

  // Simpan session ke cookie
  const cookieStore = cookies()
  cookieStore.set('user', JSON.stringify({
    username: user.username,
    role: user.role,
    tahunPengisian: tahunPengisian || null,
  }), { path: '/' })

  return new Response(JSON.stringify({ success: true }), { status: 200 })
}
