const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const ErrorInvalidRequest = require("./ErrorHandler").ErrorInvalidRequest;
const ErrorInvalidToken = require("./ErrorHandler").ErrorInvalidToken;

const validate = (cb) => {
  return async function (req, res, next) {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      return ErrorInvalidRequest(res);
    }
    const headTemp = authHeader.split(" ");
    const tokenType = headTemp[0];
    const token = headTemp[1];
    if (tokenType !== "Bearer") {
      return ErrorInvalidToken(res);
    }

    const accessToken = await prisma.accessToken.findFirst({
      where: {
        accessToken: token,
      },
    });

    if (!accessToken) {
      return ErrorInvalidToken(res);
    }
    var startDate = new Date();
    const expires =
      (accessToken.expiresIn.getTime() - startDate.getTime()) / 1000;
    if (expires < 0) {
      return res.status(401).json({
        error: "invalid_token",
        error_description: "Masa Access Token sudah habis",
      });
    }

    cb(req, res, next, token);
  };
};

module.exports = validate;
