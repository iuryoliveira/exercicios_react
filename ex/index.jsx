import './estilo.css'
import React from 'react'
import ReactDOM from 'react-dom'
//import ClassComponent from './ClassComponent'
import Field from './field'

//Os componentes do React devem ser agrupados pois a função render retorna apenas um componente
/*ReactDOM.render(
    <ClassComponent label="Calcular" initialValue={10} />
, document.getElementById("app"))*/

ReactDOM.render(
    <Field initialValue="teste"/>
, document.getElementById("app"))