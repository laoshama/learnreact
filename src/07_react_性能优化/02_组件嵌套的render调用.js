import React, { Component } from 'react'

//  Heacer
function Header() {
    console.log('Header被调用')
    return <h2>我是Header组件</h2>
}

//  Main
class Main extends Component {
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

export default class App extends Component {
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

//  当 App组件中的 state发生改变， 
//  就会重新执行 render函数 生成新的虚拟DOM
//  render函数中 所有的组件都会被重新渲染 
//  render函数 返回的 JSX对象中 用到的所有 组件对象中的render函数都会被执行
//  这很浪费性能