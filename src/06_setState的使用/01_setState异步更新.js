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
                <button onClick= {e => this.increment() }>+1</button>
            </div>
        )
    }
    increment() {
        this.setState({count: this.state.count + 1}, () => console.log(this.state.count))
        this.setState({count: this.state.count + 1})
        this.setState({count: this.state.count + 1})
        this.setState({count: this.state.count + 1})
        // console.log(this.state.count);
    }
}

//  setState 是 异步更新 的

//  为什么设置为异步：
//      1、可以显著提高性能， 项目中会使用很多的 setState, 
//        每次调用都会 执行 render函数重新渲染界面。效率会很低

//      2、最好的办法应该是 获取到多个更新， 然后进行批量更新

//      3、如果同步更新了state， 但是还没执行render函数， 那么state和props不能保持同步
//          state 和 props 如果不能保持一致性， 开发过程中会产生很多问题

//  获取异步更新后的数据：
//  方式一： 通过回调函数获取state中的数据
//  方式二： 在 componentDidUpdate 中获取state中的数据
//  源码中:  先执行 componentDidUpdate ， 后执行 setState 中的回调函数

