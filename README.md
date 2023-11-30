# Ejercicio

1. Realizar una página web en base a los diseños que enviamos adjuntos.

2. Respetá el diseño lo más fielmente posible.

3. El ancho máximo del contenido será de 960px.

4. Ambas imágenes muestran cómo se acomoda el diseño en pantallas grandes y pequeñas.

5. El diseño para pantallas chicas aplica en medidas de 740px, o menores.

6. Al hacer click en cada botón de canal, deberá cargarse en el bloque superior la información de ese contenido.

7. La actualización de la información debe realizarse sin recargar la página.

8. Disponés de un archivo "movies.json" con toda la información de cada película y botón.

9. La información a mostrar debe ser levantada del archivo JSON.

10. Tenés las imágenes de los canales y posters dentro de la carpeta "img".

Los nombres de los archivos de imágenes corresponden a los datos id y channel>number del JSON.

11. La tipografía es "Open Sans Condensed". Link: https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700


# Resolución

Para poder realizar el challange presentado se utilizó el framework React. Se incorporó la librería redux y bootstrap.
------
Como primer paso se incorporó un Store global, mediante el uso de Redux, el cual se cargara con la información del movies.json al ingresar en la aplicación. 
Esto se podrá corroborar en el archivo App.js. 
Se realizó de esta manera dando a entender que dicha información debería estar siendo obtenida de una base de datos.
Al poseer la data en formato global, se podrá utilizar en otros componentes sin necesidad de generar un get por cada componente que necesite data.
------
El siguiente paso fue crear los componentes necesarios para poder realizar el challange. 
Para ello existen dos componentes importantes.
El primero es Card, el cual esperará por parametros los datos de una movie, y cargará la data necesaria. Esto es necesario para poder reutilizar el componente.
El segundo es Cards, gracias al anterior mencionado, solo realizará un map de la data del json, e incorporará el componente Child por cada una de las movies.
Este último posee un evento click, el cual llamará a la función handleSelectedMovie() el cual se encargará de cambiar el estado local por la información de la nueva movie.
------
El siguiente paso fue crear el componente que mostrará la información detallada de la movie. 
Para ello es necesario obtener la data mediante un selector, y un store local, el cual almacenará la data de la movie por cada interacción que el usuario realice.
Una vez que la data esta cargada el componente renderizará la nueva data obtenida, sin necesidad de refrescar la página, solo cambiara la información del componente.
------
Por último se realizaron los estilos correspondientes a desktop. Para finalizar con el trabajo de responsive.