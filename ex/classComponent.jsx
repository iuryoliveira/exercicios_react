import React, { Component } from 'React'

export default class ClassComponent extends Component{
    render() {
        return (
            <div>
                <h1>{this.props.value}</h1>
                <p>Isto é incrível</p>
            </div>
        )
    }
}
