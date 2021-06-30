const faker = require("faker");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const test1 = await prisma.user.create({
    data: {
      id: faker.random.uuid(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      fullName: faker.name.findName(),
      npm: faker.random.number({ min: 1000000, max: 10000000 }).toString(),
      clientId: faker.random.alphaNumeric(6),
      clientSecret: faker.random.alphaNumeric(8),
      scope: "identify",
    },
  });
  const test2 = await prisma.user.create({
    data: {
      id: faker.random.uuid(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      fullName: faker.name.findName(),
      npm: faker.random.number({ min: 1000000, max: 10000000 }).toString(),
      clientId: faker.random.alphaNumeric(6),
      clientSecret: faker.random.alphaNumeric(8),
      scope: "identify",
    },
  });
  const test3 = await prisma.user.create({
    data: {
      id: faker.random.uuid(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      fullName: faker.name.findName(),
      npm: faker.random.number({ min: 1000000, max: 10000000 }).toString(),
      clientId: faker.random.alphaNumeric(6),
      clientSecret: faker.random.alphaNumeric(8),
      scope: "identify",
    },
  });
  console.log(test1);
  console.log(test2);
  console.log(test3);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
