import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family' //O nome do componente deve ser sempre maiúsculo
import Member from './member'

//Os componentes do React devem ser agrupados pois a função render retorna apenas um componente
ReactDOM.render(
    <Family>
        <Member name='Iury' lastName='Oliveira' />
    </Family>
, document.getElementById("app"))