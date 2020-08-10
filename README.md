## Ejercicio evaluación final módulo 3

### Buscador de personajes de Rick and Morty

El ejercicio consiste en desarrollar en React una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje.

Las partes del ejercicio son las siguientes:

1. Listado de personajes:
La información de los personajes la devuelve el siguiente servicio: https://rickandmortyapi.com/documentation/#get-all-characters
En origen nos devolverá los 20 primeros personajes.

2. Filtrado de personajes:
Se ha añadido un input al a interfaz que actuará como buscador filtrando los personajes.

3. Componentes del listado:
El proyecto se divide en 6 componentes (App, Card, Detail, List, ListWithFilter, Filter)

4. Detalles del personaje:
Al hacer clic sobre la tarjeta de un personaje aparece la información relacionada (foto, nombre, especie, planeta de origen, estado y número de episodios en los que aparece)

5. Detalles de calidad:
El input está recubierto por una etiqueta <form/>.
Se evita que al pulsar intro en el campo de filtrado el navegador navegue o cambie la ruta sin querer.
Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se muestra un mensaje "No hay ningún personaje que coincida con la palabra XXX".
El filtro filtra independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.

6. Mejoras visuales:
Los estados y especies de los personajes van acompaados de unas imágenes relacionadas.
Se ha usado un sistema de grid para mostrar listado de personajes.
La web es responsive.

7. URL compatible: 
La URL del personaje es compatible, al navegar directamente a la URL del personaje se ve el detalle del mismo. Por otro lado, si el personaje no existe, aparecerá un mensaje de aviso y una imagen.

8. Ordenación: 
El listado de personajes se carga en orden alfabético.


![alt text](https://images3.alphacoders.com/812/thumb-1920-812062.png "Rick and Morty")
