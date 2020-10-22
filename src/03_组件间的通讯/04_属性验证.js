import React, { Component } from 'react'
import PropType from 'prop-types'

class ChildCpn extends Component {
    render() {
        const { man, age } = this.props
        return (
            <div>
                <h2>子组件展示数据：</h2>
                <h2>姓名：{man.name}</h2>
                <h2>年龄{man.age}</h2>
                <h2>{age}</h2>
            </div>
        )
    }
}

//  propTypes 名字不可改变
ChildCpn.propTypes = {
    name: PropType.string,
    age: PropType.number.isRequired,
    man: PropType.object
}
//  设置默认值
ChildCpn.defaultProps = {
    age: 666
}

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            man: {
                name: 'laosha',
                age: '18'
            }
        }
    }
    render() {
        return (
            <div>
                <ChildCpn man={this.state.man} />
            </div>
        )
    }
}
