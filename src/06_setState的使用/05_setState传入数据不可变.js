import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super()

        this.state = {
            friends: [
                { name: '领克1', age: 10 },
                { name: '领克2', age: 20 },
                { name: '领克3', age: 30 }
            ]
        }
    }

    // shouldComponentUpdate(newProps, nextState) {
    //     if(newProps.friends !== this.state.friends) {
    //         return true
    //     }
    //     return false
    // }

    render() {
        return (
            <div>
                <h2>好友列表</h2>
                <ul>
                    {this.state.friends.map((item,index) => {
                        return (
                            <li key={item.name}>
                                姓名：{item.name}--年龄：{item.age}
                                <button onClick={e=>this.addAge(index)}>age+1</button>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={e => this.addFriend()}>添加好友</button>
            </div>
        )
    }
    addFriend() {
        const newData = { name: 'Dom', age: 40 }
        // this.state.friends.push(newData)

        const newFriends = [...this.state.friends]
        newFriends.push(newData)

        console.log(newFriends);
        this.setState({
            friends: newFriends
        })

        console.log('添加好友');
    }
    addAge(index) {
        const newFriends = [...this.state.friends]
        newFriends[index].age++

        this.setState({
            friends: newFriends
        })
    }
}

// 引用类型
// 在使用SCU优化的情况下， 如果没有保持 state数据的不可变性，
// 那么就会导致SCU优化出现混乱的情况
// 所以建议state数据要保持不可变性