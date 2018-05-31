import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro, { Segundo } from './component'

//Os componentes do React devem ser agrupados pois a função render retorna apenas um componente
ReactDOM.render(
    <div> 
        <Primeiro />
        <Segundo />
    </div>
, document.getElementById("app"))