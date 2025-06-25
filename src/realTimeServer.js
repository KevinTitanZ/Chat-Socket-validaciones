// src/realtimeServer.js
const cookie = require('cookie');

module.exports = (httpServer) => {
  const { Server } = require("socket.io");
  const io = new Server(httpServer);
  const connectedUsers = new Map();

  io.on("connection", (socket) => {
    try {
      const cookiesHeader = socket.handshake.headers.cookie;

      if (!cookiesHeader) {
        socket.emit("error-message", "No se encontraron cookies.");
        return;
      }

      const cookies = cookie.parse(cookiesHeader);
      const username = cookies.username;

      if (!username) {
        socket.emit("error-message", "Usuario no identificado.");
        return;
      }

      // Guardar el usuario conectado
      connectedUsers.set(socket.id, username);
      io.emit("users", Array.from(connectedUsers.values()));

      // Manejo de mensajes
      socket.on("message", (message) => {
        try {
          if (!message || typeof message !== "string") {
            throw new Error("Mensaje inválido.");
          }

          io.emit("message", {
            user: username,
            message,
          });
        } catch (err) {
          console.error("Error al procesar mensaje:", err.message);
          socket.emit("error-message", "Hubo un problema al enviar el mensaje.");
        }
      });

      // Manejo de desconexión
      socket.on("disconnect", () => {
        connectedUsers.delete(socket.id);
        io.emit("users", Array.from(connectedUsers.values()));
      });

    } catch (err) {
      console.error("Error en conexión socket:", err.message);
      socket.emit("error-message", "Error en la conexión.");
    }
  });
};
