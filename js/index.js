const palabras = ["arbol", "silla", "Casa", "función"];
const numero = 3;

const longitudPalabras = (palabras, numero) => {
  const longitud = palabras.filter(
    (palabra) => palabra.replaceAll(/[.,:;()_?¿!¡-\s]/g).length > numero
  ).length;
  console.log(`${longitud} palabras tienen mayor longitud a ${numero}`);
};

longitudPalabras(palabras, numero);
