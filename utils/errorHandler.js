const ErrorInvalidRequest = (res) => {
  res.status(400);
  return res.json({
    error: "invalid_request",
    error_description: "ada kesalahan masbro!",
  });
};

const ErrorInvalidToken = (res) => {
  res.status(401);
  return res.json({
    error: "invalid_token",
    error_description: "Token Salah masbro",
  });
};

module.exports = { ErrorInvalidRequest, ErrorInvalidToken };
