import React from 'react'
import ReactDOM from 'react-dom'
import Component from './component'

//Precisa iniciar novamente o servidor - npm run dev
ReactDOM.render(<Component value="Show"/>, document.getElementById('app')) //Gera o conteúdo dinamicamente
