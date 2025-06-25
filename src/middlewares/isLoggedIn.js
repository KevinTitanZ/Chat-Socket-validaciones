module.exports = (req, res, next) => {
  const username = req.cookies.username;
  if (!username) {
    return res.redirect("/register");
  }
  next();
};
