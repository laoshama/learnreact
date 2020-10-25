import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super()
        this.state = {
            fruits: 'banana'
        }
    } 
    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <select name='fruits'
                    value={this.state.fruits}
                    onChange={e => this.handleChaneg(e)}>
                        <option value="apple">苹果</option>
                        <option value="banana">香蕉</option>
                        <option value="orange">橘子</option>
                    </select>
                    <input type="submit" value='提交'/>
                </form>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.username);
    }

    handleChaneg(e) {
        console.log(e.target.value);
        this.setState({
            username: e.target.value
        })
    }
}
//  受控组件 单向数据流
//  当前的 select 就是受控组件
//  在select标签上 添加一个 value属性 value属性的值 就是默认选中的值
//  onChange事件监听 添加在 select 标签上