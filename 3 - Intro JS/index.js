// VARIABLES
let variable = 2;
const constante = 5;


// LISTAS
let array = ['algo', 2, { name: 'Pepe', edad: 52 }, true];

console.log(array.length);
console.log(array);


// CONDICIONALES
if (!isNaN(variable)) {
    console.log(`la variable es el numero: ${variable}`);
} else {
    console.log(`la variable es del tipo: ${typeof (variable)}`);
}


isNaN(variable) ? console.log(`LA VARIABLE ES DEL TIPO: ${typeof (variable)}`) : console.log(`LA VARIABLE ES EL NUMERO: ${variable}`);


// EJERCICIO
/*
 *  Crear una lista de artículos para el supermercado de mínimo 5 items. Con el método prompt() pedile al usuario que ingrese un artículo para agregar a la lista.
 *  Si el artículo ya está en la lista (método: array.includes()) avisarle al usuario que el artículo ya está. 
 *  Si no, agregar el artículo a la lista y mostrarle al usuario la lista de todo lo que tiene que comprar.
 * 
 */

/*
let lista_supermercado_2 = ['papa', 'lentejas', 'desodorante', 'arbejas'];

let articulo_2 = prompt(`Ingrese un articulo:`);

if (lista_supermercado_2.includes(articulo_2)) {
    alert(`El articulo ${articulo_2} ya existe.`);
} else {
    lista_supermercado_2.push(articulo_2);
}

console.log(lista_supermercado_2);
*/

/*
let lista_supermercado = [];
const cantidad_producto = 5;
const intentos_maximos  = 10;
let i = 0;
let articulo;

while (lista_supermercado.length < cantidad_producto && i < intentos_maximos) {
    i ++;
    articulo = prompt(`Ingrese el articulo ${lista_supermercado.length + 1} de ${cantidad_producto}:`);

    if (lista_supermercado.includes(articulo)) {
        alert(`El articulo ${articulo} ya existe.\nPor favor ingrese otro`);
        continue;
    }

    lista_supermercado.push(articulo);
}

console.log(lista_supermercado);
*/



// EJERCICIO 2
/*
 * Usando el método  prompt pedile al usuario que ingrese un número.
 * Definí 3 caminos:
 *  Si el número es mayor a 10.
 *  Si el número es menor o igual a 10.
 *  Si no es un número.
 * En cada camino, usá el método document.write para dejar un mensaje según la elección. 
 * 
 */

/*
number = prompt(`Ingrese un numero`);

if(number > 10){
    document.write(`El numero es mayor que 10`);
} else if( number <= 10){
    document.write(`El numero es menor o igual a 10`);
} else{
    document.write(`No es un número`);
}
*/



// EJERCICIO 3
/*
 * Mariana nos dice que para ella un número es de la suerte si cumple con las siguientes tres condiciones:
 *  ese número es positivo
 *  ese número es múltiplo de 2 o de 3
 *  ese número no es el 15
 * Escribí un algoritmo que le diga a Mariana si es un número de la suerte (el número debe cumplir con las tres condiciones antes mencionadas).
 * 
 */

/*
function esNumeroDeLaSuerte(number){
    if(number >= 0 &&
       (number % 2 == 0 || number % 3 == 0) &&
       number != 15 )
        return true;

    return false;
}

number_2 = prompt(`Ingrese un numero`);
if (esNumeroDeLaSuerte(number_2)){
    console.log(`El numero es de la suerte`);
}else{
    console.log(`El numero NO es de la suerte`);
}
*/



// EJERCICIO 4

/*
 * Usando el bucle while y el método document.write() mostrá por línea cuántos pasos que quedan por caminar, partiendo del paso 100 hasta llegar al paso 1.
 */

/*
let i = 100;
while ( i > 0 ){
    document.write(`Solo te quedan ${i} pasos por caminar <br>`);
    i --;
}
*/


// EJERCICIO 5
/*
 * Crear una función que tome un array de arrays de dos números y me devuelva la suma total de la multiplicación de los dos números.
 * Nota: usando el operador de asignación de adición(+=) podemos re-asignar el valor de una variable sumando el valor anterior.
 */

/*
function sumarArrayDeArray(array){
    let resultado = 0;

    for (let i = 0; i < array.length; i++) {
        let numeros = array[i];
        
        resultado += numeros[0] * numeros[1];
    }
    return resultado;
}


let lista = [
    [18,32],
    [58,15],
    [12,57],
    [5,12]
];

let sumaTotal = sumarArrayDeArray(lista); 

document.write(`La suma total es ${sumaTotal}`);
*/



// EJERCICIO 6
/*
 * Recorrer un array de números con el método .map() y crear un nuevo array que indique el número y si el número es par o impar.
 */
/*
let lista = [25,8,45,92];

let lista_2 = lista.map((elemento) => [elemento, elemento % 2 == 0]);

console.log(lista_2);
*/



// EJERCICIO 7 (Funciones)
/*
 * Clase 8: FUNCIONES Crear una función que reciba el parámetros nombre, apellido y serie favorita y que devuelva un saludo:
 * Un nombre
 * Apellido
 * Serie favorita
 * Hola, nombre + apellido, tu serie favorita es serieFavorita
 * Invocar la función con los parámetros requeridos.
 */
/*
function saludar(nombre, apellido, serieFavorita){
    alert(`Hola, ${nombre} ${apellido}, tu serie favorita es ${serieFavorita}`);
}

saludar('Martin','Ruggeri','Doctor House');
*/



// EJERCICIO 8 (Funciones)
/*
 * Ejercicio 2: Crear una función que reciba el parámetro nombre y que devuelva el largo de ese nombre.
 * Guardar el valor de retorno en una variable y mostrarlo en consola.
 * Por ejemplo: si ingresamos “Ana”. El resultado debería ser 3.
 */
/*
function length(nombre){
    return nombre.length;
}

alert(length('Martin'));
*/



// EJERCICIO 9 (DOM)
/*
Creá en un archivo un esqueleto HTML básico.
Incluí la etiqueta <h1> y <p>
Asignale un ID o CLASS a la etiqueta <p>
Enlazá tu archivo JS al HTML
Usando el método querySelector mostrá tu h1 y tu ID o CLASS en consola.
Mostrá en consola el texto dentro de la etiqueta h1.
*/

let titulo = document.querySelector("#titulo");

let parrafo = document.querySelector(".text");

console.log(titulo.innerText);

console.log(parrafo.innerHTML);