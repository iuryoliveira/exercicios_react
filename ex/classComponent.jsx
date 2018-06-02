import React, { Component } from 'React'

export default class ClassComponent extends Component{

    constructor(props){
        super(props)
        this.state = { value : props.initialValue } //Seta o valor inicial ao valor do estado
    }

    sum(delta){
        this.setState({ value: this.state.value + delta }) //Evolui o estado do value
    }

    multiplicar(valor){
        this.setState({ value: this.state.value * valor})
    }

    dividir(valor){
        this.setState({ value: this.state.value / valor})
    }

    render() {
        return (
            <div>
                <h1>{ this.props.label }</h1>
                <h2>{ this.state.value }</h2> 

                <button onClick={ () => this.sum(-1) }> Desc </button>
                <button onClick={ () => this.sum(1) }> Acr </button>
                <br /><br />
                <button onClick={ () => this.multiplicar(2) }> Multiplicar </button>
                <button onClick={ () => this.dividir(2) }> Dividir </button>

                <br /><br />
                <input type='text'/><br/><br />
            </div>
        )
    }
}
