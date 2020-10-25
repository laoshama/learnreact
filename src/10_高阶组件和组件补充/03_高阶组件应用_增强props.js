import React, { PureComponent, createContext } from 'react'

//  创建 Context
const UserContext = createContext({
    name: '呆瓜',
    age: 10,
    region: '杨树'
})

function enhanceProps(WrapperComponent) {
    return props => {
        return (
            <UserContext.Consumer>
                { user => <WrapperComponent {...props} {...user} /> }
            </UserContext.Consumer>
        )
    }
}


class Man extends PureComponent {
    static contextType = UserContext
    render() {
        return <div>{`Man:姓名：${this.props.name}---年龄：${this.props.age}---国家:${this.props.region}`}</div>
    }
}

class Women extends PureComponent {
    static contextType = UserContext
    render() {
        return <div>{`Women:姓名：${this.props.name}---年龄：${this.props.age}---国家:${this.props.region}`}</div>
    }
}

//  新增用户， 显示方式不一样， 但是显示数据是一样的
class NewPerson extends PureComponent {
    static contextType = UserContext
    render() {
        return (
            <ul>
                <li>NewPerson</li>
                <li>姓名：{this.props.name}</li>
                <li>年龄：{this.props.age}</li>
                <li>国家：{this.props.region}</li>
            </ul>
        )
    }
}

const NewMan = enhanceProps(Man)
const NewWomen = enhanceProps(Women)
const NewNewPerson = enhanceProps(NewPerson)

class App extends PureComponent {
    render() {
        return (
            <div>
                <UserContext.Provider value={{name: '飞鸟', age: 20, region:'非洲'}}>
                    <NewWomen />
                    <NewMan />
                    <NewNewPerson />
                </UserContext.Provider>s
            </div>
        )
    }
}

export default App

//  数据来源于 Context
//  封装一个高级组件 来管理 Context数据的分配
//  好处： 以后需要使用到相同数据的 组件 直接调用高级组件生成一个新的组件就可以了