import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family' //O nome do componente deve ser sempre maiúsculo
import Member from './member'

//Os componentes do React devem ser agrupados pois a função render retorna apenas um componente
ReactDOM.render(
    <Family lastName='Silva'>
        <Member name='Iury' />
        <Member name='Rafael' />
        <Member name='Julia' />
    </Family>
, document.getElementById("app"))