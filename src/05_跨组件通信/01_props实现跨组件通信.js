import React, { Component, Profiler } from 'react'

//  继承类型 传递数据 无法实现响应式
export default class App extends Component {
    constructor() {
        super()
        this.state = {
            name: '老沙',
            age: 18,
            la: '我是实例上的数据'
        }
    }
    render() {
        return (
            <div>
                <Profile />
                <button onClick={e => this.change()}>改变数据</button>
            </div>
        )
    }
    change() {
        this.setState({name: '飞鸟'})
        console.log(this.state.name);
    }
    giveNameToSon() {
        return this.state.name
    }
    giveAgeToSon() {
        return this.state.age
    }
}

class Profile extends App {
    render() {
        return (
            <div>
                <h2>姓名：{super.giveNameToSon()}</h2>
                <h2>实例上的数据：{null}</h2>
                <Age />
            </div>
        )
    }
}

class Age extends App {
    render() {
        return (
            <div>
                <h2>年龄：{super.giveAgeToSon()}</h2>
            </div>
        )
    }
}