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
        // setTimeout(() => {
        //     this.setState({ count: this.state.count + 1 })
        //     this.setState({ count: this.state.count + 1 })
        //     this.setState({ count: this.state.count + 2 })
        //     this.setState({ count: this.state.count + 1 })
        // })

        this.setState({ count: this.state.count + 1 })
        this.setState({ count: this.state.count + 3 })
        this.setState({ count: this.state.count + 1 })
        this.setState({ count: this.state.count + 2 })
        console.log(this.state.count);
    }
}

//  （（（（（setState本身）））））合并, 存在于（异步更新中）， 同步更新不会进行    setState本身   合并
//  源码中： 多个setState会  通过do..while循环  进行合并

/*
    1、合并时，值不会累加
*/

//  上面的操作，在源码中：
//  Object.assign({}, prevState(永远对应未改变的count，count:0), partialState（对应一次加count加1操作，count:1))
//  每在链表中 遇到一个 setSatet， 就会执行一次上面的合并， 
//  直到链表中所有的 steState 被执行完后， 才会更新 count 的值
//  注意： 链表中 （（最后一个setState））的执行决定了 最终更新的 count 的值
//  比如上面的执行结果： 最终 count 会被修改为 2


/*
    2、setState合并时， 让值进行累加的方法

    playload.call(instance, prevState, nextProps) //    playload就是我们传入的 回调函数
    源码中： 会对 setState 传入的 参数进行判断， 如果传入的是一个函数
    那么，就会把前一次的state（此处拿count为例，state.count:0),传回到
    setState的回调函数中。
    然后我们在 回调函数中 自己对值进行累加 ，然后把累加好的值 放到对象中 返回给源码中的 partialState
    然后再通过Object.assign进行 state中数据对象{count：*}的合并

    this.setState((prevState, props) => {
    return {
        count: prevState.count + 1
    }
    })

    this.setState((prevState, props) => {
        return {
            count: prevState.count + 1
        }
    })

    this.setState((prevState, props) => {
        return {
            count: prevState.count + 1
        }
    })
*/