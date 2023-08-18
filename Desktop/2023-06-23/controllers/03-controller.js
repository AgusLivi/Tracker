const utils = require("../utils");

/*⚠️ No modificar nada arriba de esta línea ⚠️
  3️⃣ * EJERCICIO 3 * - updatePersonaje 3️⃣:
 
  🟢 Debes buscar por ID un personaje recibido por parámetro dentro del array de utils.personajes y actualizar las propiedades: nombre y numeroEpisodio. También agrégale una nueva propiedad llamada "casa".
  🟢 Si no encuentras el personaje debes arrojar un error que diga: "No se encontró el personaje solicitado".
  🟢 Si alguna de las propiedades {nombre, numeroEpisodio o casa} del personaje es undefined, debe arrojar un error que diga: "Faltan datos a completar".

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recuerda que el mensaje de error debe ser exactamente como lo pide el enunciado.
  2) Recuerda agregar la nueva propiedad "casa", ésta no se encuentra en examples.js
*/

const updatePersonaje = (personaje) => {
  // Tu código aquí
  const indexEncontrado = utils.personajes.findIndex(personajeUtils => personajeUtils.id === personaje.id)
  if(indexEncontrado === -1) throw new Error("No se encontró el personaje solicitado")
  if(!personaje.nombre || !personaje.numeroEpisodio || !personaje.casa) throw new Error("Faltan datos a completar")
  utils.personajes[indexEncontrado] = {
    ...utils.personajes[indexEncontrado],
    nombre: personaje.nombre,
    numeroEpisodio: personaje.numeroEpisodio,
    casa: personaje.casa,
  }
  return utils.personajes[indexEncontrado]
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = updatePersonaje;
