const express = require("express");
const router = express.Router();
const path = require("path");
const CustomError = require("../utils/CustomError");
const isLoggedIn = require("../middlewares/isLoggedIn");

const views = path.join(__dirname, "/../views");

router.get("/", isLoggedIn, (req, res, next) => {
  res.sendFile(views + "/index.html", (err) => {
    if (err) next(err);
  });
});

router.get("/register", (req, res, next) => {
  res.sendFile(views + "/register.html", (err) => {
    if (err) next(err);
  });
});

// 🚨 Ruta para probar el middleware de errores
router.get("/provocar-error", (req, res, next) => {
  try {
    throw new CustomError("Este es un error de prueba", 400);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
