const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async (req, res, _, token) => {
  const user = await prisma.user.findFirst({
    where: {
      AccessToken: {
        accessToken: token,
      },
    },
  });

  console.log(user);

  return res.json(user);
};
