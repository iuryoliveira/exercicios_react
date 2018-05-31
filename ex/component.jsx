import React from 'react'

//Ao exportar com default é possível retornar vários componentes ao mesmo tempo
export default props => (
    <h1> Primeiro Componente </h1>
)

export const Segundo = props => (
    <h2> Segundo Componente </h2>
)

//export { Primeiro, Segundo }
