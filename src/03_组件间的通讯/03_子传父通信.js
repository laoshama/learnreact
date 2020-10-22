import React, { Component } from 'react'

class ChildCpn extends Component {
    render() {
        const { func } = this.props
        return (
            <div>
                <button onClick={e => func('333')}>点击</button>
            </div>
        )
    }
}

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    giveToSon = (datas) => { 
        this.setState({
            name: datas
        })
    }
    
    render() {
        return (
            <div>
                <ChildCpn func={this.giveToSon} />
                <h2>{this.state.name}</h2>
            </div>
        )
    }
}
