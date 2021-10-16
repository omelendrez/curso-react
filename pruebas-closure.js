// Global scope
/**
 * Variables o funciones definidas en el global scope
 * son accesibles en todas las funciones
 * 
 */

const miContador = function () {
  // Function scope o local scope
  let _contador = 0;
  /**
   * La variable _contador en este caso
   * Sólo accesible para esta función y sus hijas
   */

  function incrementar () {
    /**
     * La variable definida acá
     * Sólo accesible para esta función y sus hijas
     * Por ejemplo, no se puede ver fuera de esta función
     */
    return _contador++
  }

  function decrementar () {
    return _contador--
  }

  function valor () {
    return _contador
  }

  return {
    incrementar,
    decrementar,
    valor,
  }
}

const cont1 = miContador()
const cont2 = miContador()
console.log(cont1.valor())
console.log(cont2.valor())

cont1.incrementar()
cont1.incrementar()
cont1.incrementar()
console.log(cont1.valor())
console.log(cont2.valor())


cont2.incrementar()
cont2.incrementar()
cont2.incrementar()
cont2.incrementar()
cont2.incrementar()
console.log(cont1.valor())
console.log(cont2.valor())

cont1.decrementar()
cont1.decrementar()
console.log(cont1.valor())
console.log(cont2.valor())

cont2.decrementar()
console.log(cont1.valor())
console.log(cont2.valor())

cont1.decrementar()
cont1.decrementar()
console.log(cont1.valor())
console.log(cont2.valor())
