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
            </div>
        )
    }

    increment() {
        this.setState({ count: this.state.count + 1 })
        console.log(this.state.count)
    }
}

//  setState （（（（（数据）））））合并
//  源码中： Object.assign({}, this.state, {count: this.state.count + 1})
//  这个方法会把后面的 数据拷贝到 第一个参数指定的 对象中， 
//  若合并的对象中， 有相同的 key， 那么后面对象的 key 的值 会覆盖前面的 key的值
//  按参数的   从左到右的顺序  开始合并（相同key， 对应key的后面value会覆盖前面的value）
//  合并的对象中 key 是唯一的
