import React, { PureComponent } from 'react'

function enhanceProps(WrapperComponent) {
    return props => {
        return <WrapperComponent {...props} region={'中国'}/>
    } 
}


class Man extends PureComponent {
    render() {
        const { name, age, region } = this.props
        return (
            <div>{`姓名：${name}---年龄：${age}---国家:${region}`}</div>
        )
    }
}

class Women extends PureComponent {
    render() {
        const { name, age, region } = this.props
        return (
            <div>{`姓名：${name}---年龄：${age}---国家:${region}`}</div>
        )
    }
}

const NewMan = enhanceProps(Man)
const NewWomen = enhanceProps(Women)

class App extends PureComponent {
    render() {
        return (
            <div>
                <NewMan name={'小麻雀'} age={18} />
                <NewWomen name={'大天鹅'} age={28} />
            </div>
        )
    }
}

export default App

//  通过高阶组件 设定一个公共的 数据
//  只要某个组件需要使用到该公共数据，只需通过高阶组件封装成一个新的组件就可以了