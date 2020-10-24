import React, { Component, PureComponent } from 'react'

//  Heacer
function Header() {
    console.log('Header函数式组件被调用')
    return <h2>我是Header组件</h2>
}

//  Main
class Main extends PureComponent {
    render() {
        console.log('Main的render被调用');
        return (
            <div>
                <h3>我是Main组件</h3>
                <ProductList />
            </div>
        )
    }
}

function ProductList() {
    console.log('ProductList被调用');
    return (
        <ul>
            <li>商品列表1</li>
            <li>商品列表2</li>
            <li>商品列表3</li>
        </ul>
    )
}

export default class App extends PureComponent {
    constructor(props) {
        super()
        this.state = {
            count: 0
        }
    }
    render() {
        console.log('App的render被调用');
        return (
            <div>
                <h2>计数器：{this.state.count}</h2>
                <button onClick={() => this.increment()}>+1</button>
                <Header />
                <Main />
            </div>
        )
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }
}
// PureComponent 在源码中 会对当前组件中的 props 和 state 分别进行浅层比较
// 如果其中一个或多个发生了变化， 那么就会执行 render函数， 如果都没有发生变化
// 则不执行 render 函数
// 官方建议不要在shouldComponentUpdate中做深层比较
// 或者JSON.stringifiy()，这种操作会很影响效率，且会损坏性能