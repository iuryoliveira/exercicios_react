import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './ClassComponent'

//Os componentes do React devem ser agrupados pois a função render retorna apenas um componente
ReactDOM.render(
    <ClassComponent value='Componente da classe' />
, document.getElementById("app"))