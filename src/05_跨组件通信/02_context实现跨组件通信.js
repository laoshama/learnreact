//  1、通过 React 对象 调用 createContext 方法 创建一个需要共享的Context对象

//  2、如果一个组件订阅了Context，那么这个组件会从离自身最近的那个匹配的 Provider 中读取到 当前的 context 的值

//  3、defualtValue 是组件在顶层查找过程中没有找到对应的Provider，那么就使用默认值

//  4、每个 Context对象 都会返回一个 Provider React组件 ，它允许消费组件订阅 context变化

//  5、Provider 接收一个 value 属性 ，传递给消费组件

//  6、一个 provider 可以和多个 消费组件 有对应关系

//  7、多个 Provider 可以嵌套使用， 里层的会覆盖外层的数据

//  8、当 Provider 的 value 值发生变化时， 它内部的所有消费组件都会重新渲染


//  Context 相关 API

//  Class.contextType
//      - 挂载在 class上的 contextType 属性，会被重新赋值为一个由 React.createContext() 创建的 Context 对象
//      - 这能让你使用 this.context 来消费最近 Context 上的那个值
//      - 你可以在 任何生命周期中 访问到它， 包括 render函数中


//  Context.Consumer
//      - 这里，React组件 也可以订阅到 context 变更， 这能让你在 函数式组件 中完成订阅 context
//      - 这里需要 函数作为子元素（function as child） 这种做法
//      - 这个函数接收当前的 context值 ，返回一个 React 节点

import React, { Component } from 'react'


//  1、创建 Context 对象
//  设置默认值的作用， 当类组件 向上逐层都找不到Provider的时候， 就会使用默认值
const UserContext = React.createContext({
    name: "默认值",
    age: 55

})

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            name: '飞机',
            age: 23
        }
    }
    render() {
        return (
            <div>
                <UserContext.Provider value={this.state}>
                    <Profile />
                </UserContext.Provider>
            </div>
        )
    }
}

function Profile() {
    return (
        <div>
            <ProfileHeader />
            <hr />
        </div>
    )
}

// function ProfileHeader() {
//     return (
//         <div>
//             <h2>姓名：</h2>
//             <h2>年龄：</h2>
//         </div>
//     )
// }
class ProfileHeader extends Component {
    render() {
        console.log(this.context);
        return (
            <div>
                <h2>姓名：{this.context.name}</h2>
                <h2>年龄：{this.context.age}</h2>
            </div>
        )
    }
}
ProfileHeader.contextType = UserContext