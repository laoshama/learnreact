import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super()
        this.state = {
            username: ''
        }
        this.usernameRef = createRef()
    } 
    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="username">
                        用户：<input type='text' 
                        id='username'
                        ref={this.usernameRef} />
                    </label>
                    <input type="submit" value='提交'/>
                </form>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.usernameRef.current.value);
    }
}

//  非受控组件
//  直接操作 DOM ， 不建议使用