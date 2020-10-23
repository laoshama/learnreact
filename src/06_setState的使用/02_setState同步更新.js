import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            i: 0
        }
    }

    render() {
        return (
            <div>
                <h2>当前计数：{this.state.count}</h2>
                <button onClick={e => this.increment()}>+1</button>
                <button id='btn'>原生DOM监听事件</button>
            </div>
        )
    }
    componentDidMount() {
        const btn = document.getElementById('btn')
        btn.addEventListener('click', () => {
            this.setState({ count: this.state.count + 1 })
            console.log(this.state.count)
        })
    }

    increment() {
        // this.setState({count: this.state.count + 1})
        setTimeout(() => {
            this.setState({ count: this.state.count + 1 })
            console.log(this.state.count)
        }, 10)
    }
}

//  setState 同步更新情况

//  情况一、将 setState 放入定时器中执行
//  情况二、在使用 （DOM原生事件） 的回调函数中调用 setState

//  react中的事件 是 合成的事件，事件对象也是 合成的事件对象
//  合成对象的好处， 可以根据不同的平台 合成不同的事件对象

//  源码中： 根据 setState所在的不同的上下文情况 决定是同步更新 还是  异步更新
