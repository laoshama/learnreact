import React, { Component } from 'react'

class Cpn extends Component {
    render() {
        return (
            <h2>我是Cpn组件</h2>
        )
    }
    componentWillUnmount() {
        console.log('执行了Cpn组件的componentWillUnmount方法')
    }
}

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            isShow: true
        }
        console.log('执行了constructor');
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    changeCpn() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        console.log('执行了render函数')
        return (
            <div>
                <h2>我是App组件</h2>
                <h2>当前计数器： {this.state.count}</h2>
                <button onClick={e => this.increment()}>+1</button>
                <button onClick={e => this.changeCpn()}>切换</button>
                <hr />
                { this.state.isShow && <Cpn />}
            </div>
        )
    }

    componentDidMount() {
        console.log('执行了组件的componentsDidMount方法')
    }

    componentDidUpdate() {
        console.log('执行了组件的componentDidUpdate方法')
    }
}