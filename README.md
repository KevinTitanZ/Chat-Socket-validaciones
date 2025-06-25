#  Chat en Tiempo Real con Sockets y Manejo de Errores

**Estudiante:** _Ordoñez Cabrera Kevin Lenin_  
**Fecha de entrega:** _27/06/2025_

---

##  Introducción
El manejo de errores en aplicaciones web es un componente esencial para garantizar la estabilidad, seguridad y una buena experiencia del usuario. En el contexto de aplicaciones desarrolladas con Node.js y el framework Express, la centralización del tratamiento de errores permite gestionar de manera eficiente los problemas que puedan surgir en tiempo de ejecución. El presente informe detalla la implementación de un mecanismo de captura y respuesta de errores utilizando un middleware personalizado, incluyendo la creación de una ruta dedicada para la simulación controlada de fallos.


**Palabras Claves:** Fallos simulados, Node.js y manejo de errores.



## Objetivo General
* Implementar un sistema de manejo de errores centralizado en una aplicación construida con Express, que permita detectar, controlar y responder de manera adecuada ante errores provocados manualmente o surgidos en tiempo de ejecución.

## Objetivos Específicos
* Crear una clase personalizada de error (CustomError) para definir excepciones controladas.

* Desarrollar un middleware global para la captura y gestión de errores en el servidor.

* Implementar una ruta específica que genere un error de forma intencional para probar el sistema.




## Desarrollo

__Paso 1: Creación de la clase CustomError__

En la carpeta utils, se implementó una clase denominada CustomError, la cual hereda de la clase base Error de JavaScript. Esta clase permite definir errores con mensajes personalizados y códigos de estado HTTP específicos, facilitando su uso en rutas y middleware.


![grafico1](https://i.imgur.com/49202RM.png)


__Paso 2: Implementación del middleware de errores__

Se creó un middleware en la carpeta middlewares, el cual se encarga de recibir los errores propagados desde cualquier parte del sistema mediante next(err). Este componente detecta el código de estado definido por el error (si existe) y genera una respuesta JSON clara para el cliente. También registra el error en la consola utilizando console.error.

![grafico2](https://i.imgur.com/31NaDvq.png)

__Paso 3: Integración del middleware en el servidor principal__

En el archivo index.js, se integró el middleware de errores justo después de todas las rutas y controladores. También se añadió una ruta genérica para capturar errores 404 cuando no se encuentra el recurso solicitado.

__Paso 4: Creación de una ruta para provocar errores__

En el archivo routes/index.js, se definió la ruta /provocar-error, la cual lanza de forma controlada una instancia de CustomError. Esta ruta sirve como prueba para verificar que el sistema detecta, procesa y responde ante errores definidos por el desarrollador.

![grafico3](https://imgur.com/tIc8HAf.png)


__Paso 5: Verificación en el navegador__

Al acceder a http://localhost:3000/provocar-error, el servidor responde con un objeto JSON que informa del error y su mensaje. Simultáneamente, el error es registrado en la consola del servidor. Esto confirma que el flujo de captura y manejo de errores está funcionando correctamente.

![grafico4](https://imgur.com/uNk1Tjm.png)


## Conclusiones
* La implementación de un middleware centralizado de errores mejora significativamente la capacidad de diagnóstico y respuesta del sistema frente a fallos.

* El uso de una clase personalizada para lanzar errores facilita la definición de respuestas claras y controladas según el tipo de situación.

* Probar el sistema con rutas simuladas permite garantizar que el entorno está preparado para responder ante errores tanto previstos como inesperados.

## Recomendaciones
* La implementación de un middleware centralizado de errores mejora significativamente la capacidad de diagnóstico y respuesta del sistema frente a fallos.

* El uso de una clase personalizada para lanzar errores facilita la definición de respuestas claras y controladas según el tipo de situación.

* Probar el sistema con rutas simuladas permite garantizar que el entorno está preparado para responder ante errores tanto previstos como inesperados.

