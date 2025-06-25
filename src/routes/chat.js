// src/routes/chat.js (ejemplo)
const express = require('express');
const router = express.Router();
const CustomError = require('../utils/CustomError');

router.post('/send', async (req, res, next) => {
  try {
    const { message } = req.body;
    if (!message) throw new CustomError("Mensaje vacío", 400);
    // lógica de envío...
    res.json({ status: 'ok' });
  } catch (err) {
    next(err); // delega al middleware de errores
  }
});

module.exports = router;
