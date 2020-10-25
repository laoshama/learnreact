import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super()
        this.state = {
            username: ''
        }
    } 
    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="username">
                        用户：<input type='text' 
                        id='username' 
                        onChange={e=>this.handleChaneg(e)}
                        value={this.state.username}/>
                    </label>
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
//  当前的 input 就是受控组件