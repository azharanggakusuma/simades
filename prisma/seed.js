// script/seed.js
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Admin
  await prisma.user.create({
    data: {
      username: 'admin',
      password: 'admin123',
      role: 'admin',
    },
  })

  // Desa (gunakan kode desa sebagai username)
  await prisma.user.create({
    data: {
      username: '32.09.06.2011',
      password: 'desa123',
      role: 'desa',
    },
  })

  // Kecamatan (gunakan nama kecamatan sebagai username)
  await prisma.user.create({
    data: {
      username: 'WALED',
      password: 'kecamatan123',
      role: 'kecamatan',
    },
  })

  console.log('Akun berhasil dibuat!')
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect())
