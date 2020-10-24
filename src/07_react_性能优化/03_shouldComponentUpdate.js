import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super()
        this.state = {
            count: 0,
            msg: 'hello world'
        }
    }
    render() {
        console.log('App的render被调用');
        return (
            <div>
                <h2>计数器：{this.state.count}</h2>
                <button onClick={() => this.increment()}>+1</button>
                <button onClick={() => this.changeText()}>改变文本</button>
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        //  生命周期函数
        //  源码中默认都会执行， 表示只要state发生改变，就会执行 render()
        //  我们可以在这个函数中返回一个boolean值来控制 是否执行 render函数

        if(this.state.count !== nextState.count) {
            return true
        }
        return false
        
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }
msg
    changeText() {
        this.setState({
            msg: '你好， 李银河'
        })
    }
}
