---------------------------------------------------------------------------------
------------------------------       NODE JS       ------------------------------
---------------------------------------------------------------------------------
Para instalar node en un proyecto, utilizaremos 'npm' que ya viene por defecto con node


Para iniciar un proyecto con node, abriremos la consola en la carpeta del proyecto y ejecutaremos:
 - npm init -y
El -y es para que inicie por defecto con todo default; si no ponemos -y al ejecutar npm init nos preguntaria algunas cosas la cual podemos poner yes para que cargue por defecto.


Para instalar alguna libreria o framework, se debe ejecutar en la consola: 
 - npm install "name framawork"                        . Ej: npm install express
 - npm i "name framework"                              . Ej: npm i express
 - npm i "name framework 1" "name framework 2" ...     . Ej: npm i express mysql2


En caso de que nos bajemos un proyecto ya existente que utilzia node, se deben descargar las librerias necesarias, para ello se debe ejecutar:
 - npm install
 Este comando instalara todas las librerias que se hayan definido en package.json
 

Para ejecutar un proyecto con node, se debe ejecutar el siguiente comando:
 - node "nombre archivo iniciailazaor"                  . Ej: node index.js


Para eliminar un framework (o libreria), se debe ejecutar el siguiente comando:
 - npm uninstall "name framework"                       . Ej: npm uninstall express
 - npm un "name framework"                              . Ej: npm un express


--------------------------------------------------------------------------------
------------------------------  Libreria Nodemon  ------------------------------
--------------------------------------------------------------------------------
Libreria nodemon: Nos ayudara a que los cambios que realicemos se vayan cargando en caliente, y no tener que volver a levantar node.
 - npm install -g nodemon
El -g lo instala en global, por lo que no es necesario ejecutarlo por cada proyecto sino una sola vez. Para esta libreria se recomienda installar global el resto no.

Para ejecutar una aplicacion con nodemon, se debe ejecutar:
 - nodemon "nombre archivo iniciailazaor"               . Ej: nodemon index.js

 