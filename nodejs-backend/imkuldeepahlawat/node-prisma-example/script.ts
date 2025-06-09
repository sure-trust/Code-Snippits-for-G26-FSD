const { PrismaClient } = require('./generated/prisma')


const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.findMany()

  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })