# Primeros pasos en NodeJS

Reescriba los apuntes realizados en la [Práctica: Tareas Iniciales](https://github.com/ULL-ESIT-DSI-1617/tareas-iniciales-alejandro-carlos-samuel-1) para seguir una estructura de directorios diferente, simplificando el despliegue en gh-pages.

# Basic Usage

1. Una vez realizado el `git clone` del repositorio, se debe ejecutar: `npm install`, para crear el directorio `node_modules` con las dependencias necesarias.

2. Los ficheros en formato `.md` deben guardarse en el directorio txt siguiendo la estructura deseada.

3. Para generar el libro, se deberá ejectuar: `gulp build`.

4. Para desplegar el libro en `gh-pages`se deberá ejectuar: `gulp deploy`.

5. Para actualizar el fichero `MAINTAINERS` y que se actualicen los contribuidores del repositorio, se debe ejecutar: `node ./scripts/contributors.js`.

6. Para modificar el fichero `VERSION`, se debe ejectuar: `node ./scripts/version.js option`, donde `option` puede ser cualquiera de los siguientes argumentos:
      * `--major | -M`: Aumentar el major y establecer el minor y patch a 0.
      * `--minor | -m`:Aumentar el minor y establecer el patch a 0.
      * `--patch | -p`: Aumentar el patch.



# Miembros del equipo

* [Alejandro Arzola](http://aleag.github.io)
* [Carlos de Armas](http://alu0100816167.github.io)
* [Samuel Valcárcel](http://cosaca.github.io)

# Página de la asignatura en el campus virtual:
https://campusvirtual.ull.es/1617/course/view.php?id=1136

# URL de la descripción de la práctica:

https://casianorodriguezleon.gitbooks.io/ull-esit-1617/practicas/practicatareasiniciales2.html

# GitHub pages:

https://ull-esit-dsi-1617.github.io/primeros-pasos-en-nodejs-alejandro-carlos-samuel-35l2/

# GitBook:

https://aleag.gitbooks.io/prct02-primeros-pasos-nodejs/content/

# Despliegue en [iaas.ull.es](iaas.ull.es):
Recuerde que es necesario conectarse a la vpn de la ULL si está accediendo desde fuera de la red de la ULL.

[Enlace a la aplicación corriendo en el servidor iaas](http://10.6.129.242:8080)


# URL del repositorio git de la organización:
https://github.com/ULL-ESIT-DSI-1617/primeros-pasos-en-nodejs-alejandro-carlos-samuel-35l2
