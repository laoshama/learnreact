import React, { PureComponent, createContext } from 'react'

const UserContext = createContext({
    hasCookie: false
})

class Cart extends PureComponent {
    render() {
        return <h2>我是购物车</h2>
    }
}

function IsLogin(WapperComponent) {
    return (props) => {
        return (
            <UserContext.Consumer>
                {user => user.flag ? <WapperComponent {...props} /> : <h2>请先登入</h2>}
            </UserContext.Consumer>
        )
    }
}

const NewCart = IsLogin(Cart)

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            peopleIsLogin: false
        }
    }
    render() {
        return (
            <UserContext.Provider value={{ flag: this.state.peopleIsLogin }}>
                <NewCart />
                <button onClick={e => this.userLogin(-1)}>退出</button>
                <button onClick={e => this.userLogin(1)}>登入</button>
            </UserContext.Provider>
        )
    }
    userLogin(mark) {

        const newFlag = mark === 1 ? true : false
        this.setState({
            peopleIsLogin: newFlag
        })
        console.log(newFlag);
    }
}
