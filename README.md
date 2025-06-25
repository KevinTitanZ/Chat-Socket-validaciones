#  Chat en Tiempo Real con Sockets

**Estudiante:** _Ordoñez Cabrera Kevin Lenin_  
**Fecha de entrega:** _01/06/2025_

---

##  Resumen
En este laboratorio se implementó y mejoró un chat en tiempo real utilizando Socket.IO, con el objetivo principal de mostrar una lista dinámica de usuarios conectados, similar a aplicaciones de mensajería como WhatsApp o Telegram. Para lograrlo, se utilizó la gestión de cookies para identificar a cada usuario y se sincronizó esta información entre el servidor y los clientes en tiempo real. Se desarrolló la lógica necesaria tanto en el servidor como en el cliente para manejar eventos de conexión, desconexión y actualización de la lista de usuarios activos. La implementación permitió una experiencia interactiva y dinámica, donde los usuarios pueden visualizar quiénes están conectados al instante. Durante el proceso se aprendieron conceptos importantes sobre el manejo de sockets, eventos y cookies, así como la actualización del DOM de forma eficiente. Se concluyó que la sincronización en tiempo real es fundamental para aplicaciones colaborativas y de comunicación, y que el manejo correcto de los estados de conexión mejora la experiencia del usuario.

**Palabras Claves:** Socket.IO, usuarios conectados, chat en tiempo real.


##  Introducción

La presente práctica de laboratorio tiene como propósito fortalecer el desarrollo de aplicaciones en tiempo real mediante la implementación de un sistema de chat interactivo utilizando `Socket.IO`. A diferencia de la versión anterior, en esta ocasión se incorporó una sección visual donde se muestra la lista de usuarios conectados en tiempo real. Esta funcionalidad busca replicar el comportamiento de plataformas modernas de mensajería como WhatsApp o Telegram. Durante el desarrollo se enfatizó el trabajo en equipo, el orden en la estructura del código y la comprensión del flujo de datos entre el cliente y el servidor.


##  Objetivos
- Implementar una sección de usuarios conectados en un sistema de chat utilizando Socket.IO.

- Comprender el uso de cookies para la identificación y persistencia de usuarios.

- Sincronizar eventos de conexión y desconexión entre múltiples clientes en tiempo real.

- Mejorar la interfaz del chat para brindar una experiencia similar a aplicaciones de mensajería modernas.


##  Marco Teórico

Socket.IO es una biblioteca de JavaScript que permite establecer una comunicación bidireccional y en tiempo real entre clientes web y servidores. Utiliza WebSockets como tecnología base, aunque puede recurrir a otras alternativas si el entorno lo requiere. Una de sus características más potentes es la facilidad para emitir y escuchar eventos personalizados.

Por otro lado, las cookies son pequeños fragmentos de datos almacenados en el navegador del usuario que permiten identificarlo en futuras interacciones sin necesidad de iniciar sesión repetidamente. En este laboratorio se utilizaron para guardar el nombre de usuario y enviarlo al servidor con cada conexión de socket.

El manejo del DOM (Document Object Model) fue fundamental para actualizar en tiempo real la interfaz del chat y la lista de usuarios, sin necesidad de recargar la página. Gracias al uso de eventos, cada cliente puede recibir información del servidor y reflejarla visualmente de manera inmediata, cumpliendo así los objetivos de interacción dinámica esperados en aplicaciones modernas.


## Descripción del Procedimiento

Para el desarrollo de esta práctica se utilizó el entorno Node.js junto con la biblioteca Socket.IO para la comunicación en tiempo real entre el servidor y los clientes. Se partió de una base funcional del chat creada en la tarea anterior. Los materiales empleados fueron:

- Editor de código: Visual Studio Code

- Servidor local: Node.js + Express

- Cliente web: HTML, CSS, JS

- Dependencias: Socket.IO, cookie-parser

**Pasos realizados**

**1.** Se creó una nueva rama en el repositorio de Git llamada laboratorio-2 para trabajar de forma aislada.

**2.** Se modificó el archivo del servidor (realTimeServer.js) para mantener un registro de los usuarios conectados mediante un Map.

**3.** Se obtuvo el nombre de usuario desde las cookies en el cliente y en el servidor.

**4.** Se agregó un nuevo evento users para emitir la lista de usuarios conectados cada vez que uno entra o sale del chat.

**5.** En el lado del cliente (script.js), se agregó una sección en el HTML para mostrar los usuarios y se actualizó su contenido dinámicamente con los datos recibidos desde el servidor.

**6.** Se probaron múltiples conexiones desde diferentes pestañas/navegadores para validar la actualización en tiempo real de los usuarios conectados.

## Análisis de Resultados

Durante la práctica se comprobó que la funcionalidad de usuarios conectados funciona correctamente. Al ingresar desde diferentes navegadores o pestañas, el sistema actualiza en tiempo real la lista de usuarios en cada cliente conectado.

![analisis](https://i.imgur.com/uDxmXEB.png)


Esta interacción permite reflejar con fidelidad el estado del sistema y demostrar que los eventos connection y disconnect están correctamente gestionados. Además, se confirmó que las cookies permiten identificar con precisión al usuario, y que la interfaz es capaz de reflejar los cambios sin recargar la página.

## Gráficos
- Abrimos tres pestañas del navegador para simular la conexión de tres usuarios diferentes al chat.

![grafico1](https://i.imgur.com/9rC4l7S.png)

![grafico3](https://i.imgur.com/BRkS9hT.png)

![grafico4](https://i.imgur.com/Ivj1kqz.png)

- Se muestra correctamente la presencia de los tres usuarios conectados en tiempo real, cada uno identificado por su nombre en la lista de usuarios activos.

![grafico5](https://i.imgur.com/9zJPy9v.png)

- A continuación, se procede a cerrar una de las pestañas del navegador, simulando la desconexión de uno de los usuarios.

![grafico6](https://i.imgur.com/Tr4cEEf.png)

- Posteriormente, se cierra una segunda pestaña del navegador, simulando la desconexión de otro usuario.

![grafico7](https://i.imgur.com/7CLUKpE.png)

La interfaz vuelve a actualizarse automáticamente, reflejando únicamente a los usuarios que permanecen activos en el chat. Este comportamiento evidencia que el sistema es capaz de gestionar dinámicamente las conexiones en tiempo real mediante Socket.IO."

## Discución
Durante el desarrollo del laboratorio se implementó una funcionalidad adicional al sistema de chat en tiempo real, enfocada en mostrar los usuarios conectados, de forma dinámica, al estilo de aplicaciones como WhatsApp. Este componente se logró gracias al uso de Socket.IO, que permite emitir y recibir eventos en tiempo real entre el cliente y el servidor.
La lógica de control de usuarios se integró en el servidor mediante el almacenamiento de los socket.id y sus respectivos nombres de usuario. Al conectarse o desconectarse un cliente, el servidor actualiza la lista y la transmite a todos los navegadores conectados.
Comparando con el marco teórico, se evidencia cómo Socket.IO permite manejar múltiples conexiones y sincronizar interfaces de usuario en tiempo real. La implementación de cookies también fue clave para mantener la identidad del usuario sin necesidad de sesiones más complejas.

## Conclusiones
- Se cumplió el objetivo de mostrar los usuarios conectados en tiempo real en una sección visible del chat.

- Se aplicaron conceptos fundamentales de Socket.IO, manejo de cookies y actualización dinámica del DOM.

- La estructura y estilo visual de la interfaz fueron mejorados, brindando una experiencia similar a sistemas de mensajería populares.

- La práctica refuerza la utilidad de los eventos personalizados en Socket.IO para compartir estados en tiempo real entre usuarios.


