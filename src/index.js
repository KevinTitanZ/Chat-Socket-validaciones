const express = require('express');
const { createServer } = require('http');
const realTimeServer = require('./realTimeServer');
const path = require('path');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const httpServer = createServer(app);

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(cookieParser());

// Rutas
app.use(require('./routes'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta no encontrada
app.use((req, res, next) => {
  const err = new Error('Ruta no encontrada');
  err.statusCode = 404;
  next(err);
});

// Middleware de manejo de errores
app.use(errorHandler);

// Iniciar servidor
httpServer.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
});

// Inicializar socket.io
realTimeServer(httpServer);
