/**
 * Esta closure es una function factory:
 * Permite crear funciones que se pueden usar después
 * @param {Info, Warning, Error o Success} type 
 * @param {color de background y texto} styles 
 * @returns una función nueva
 */

function createConsoleMessage (styles) {
  return function (message) {
    console.log(`%c ${message} `, styles)
  }
}

export const log = {
  info: createConsoleMessage('background:blue;color:white;'),
  warning: createConsoleMessage('background:orange;color:black;'),
  error: createConsoleMessage('background:red;color:white;'),
  success: createConsoleMessage('background:green;color:white;'),
}
