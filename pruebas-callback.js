console.log('inicio')

const fetch = (id, resultOk, resultError) => {
  if (id !== 0) {
    setTimeout(() => resultOk({ mensaje: 'todo ok', id }), 10000)
  }
  if (id === 0) {
    setTimeout(
      () => resultError({ error: true, mensaje: 'Id no puede ser 0' }),
      10000
    )
  }
}

fetch(
  1,
  (v) => console.log('ok', v),
  (v) => console.log('error', v)
)

console.log('ejecución')
console.log('inicio fetch')

console.log('se ejecutó todo')
console.log('se ejecutó todo 1')
console.log('se ejecutó todo 2')
console.log('se ejecutó todo 3')
