## Buscador de personajes de Rick y Morty

Página web con un listado de personajes de Rick y Morty, que podemos filtrar por el nombre del personaje.

Las partes de la web son las siguientes:

1. Listado de personajes: la información de los personajes la devuelve el siguiente servicio, https://rickandmortyapi.com/documentation/#get-all-characters
En origen nos devolverá los 20 primeros personajes.

2. Filtrado de personajes: se ha añadido un input a la interfaz que actuará como buscador filtrando los personajes.

3. Componentes del listado: el proyecto se divide en 6 componentes (App, Card, Detail, List, ListWithFilter, Filter).

4. Detalles del personaje: al hacer clic sobre la tarjeta de un personaje aparece la información relacionada (foto, nombre, especie, planeta de origen, estado y número de episodios en los que aparece)

5. Detalles de calidad: el input está recubierto por una etiqueta de formulario. Se evita que al pulsar intro en el campo de filtrado el navegador navegue o cambie la ruta sin querer. Si se busca por un texto inexistente, se muestra un mensaje "No hay ningún personaje que coincida con la palabra XXX". Se filtra independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.

6. Mejoras visuales: los estados y especies de los personajes van acompañados de unas imágenes relacionadas. Se ha usado un sistema de grid para mostrar el listado de personajes. La web es responsive.

7. URL compatible: la URL del personaje es compatible, al navegar directamente a la URL del personaje se ve el detalle del mismo. Por otro lado, si el personaje no existe, aparecerá un mensaje de aviso y una imagen.

8. Ordenación: el listado de personajes se carga en orden alfabético.

Wubba Lubba Dub Dub!!

![alt text](https://images3.alphacoders.com/812/thumb-1920-812062.png "Rick y Morty")
