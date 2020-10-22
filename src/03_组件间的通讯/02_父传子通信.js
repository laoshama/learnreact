import React, { Component } from 'react'

class ChildCpn extends Component {
    render() {
        const { man } = this.props
        return (
            <div>
                <h2>子组件展示数据：</h2>
                <h2>姓名：{ man.name }</h2>
                <h2>年龄{ man.age }</h2>
            </div>
        )
    }
}

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            man: {
                name: 'laosha',
                age: '18'
            }
        }
    }
    render() {
        return (
            <div>
                <ChildCpn man = { this.state.man }/>
            </div>
        )
    }
}
