import React, { memo, PureComponent } from 'react'

//  Heacer
function Header() {
    console.log('Header函数式组件被调用')
    return <h2>我是Header组件</h2>
}

const MemoHeader = memo(Header)

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
                <MemoHeader />
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

// memo 高阶组件 可以操作其他组件
// 把它当成函数, 接收一个 函数组件
// 浅层比较 props，决定是否 重新渲染函数式组件