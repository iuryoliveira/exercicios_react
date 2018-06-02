import React, { Component } from 'React'

export default class ClassComponent extends Component{

    constructor(props){
        super(props)
        this.state = { value : props.initialValue } //Seta o valor inicial ao valor do estado
    }

    sum(delta){
        this.setState({ value: this.state.value + delta }) //Evolui o estado do value
    }

    render() {
        return (
            <div>
                <h1>{ this.props.label }</h1>
                <h2>{ this.state.value }</h2> 

                <input type='text'/><br/><br />

                <button onClick={ () => this.sum(-1) }> Desc </button>
                <button onClick={ () => this.sum(1) }> Acr </button>
            </div>
        )
    }
}
