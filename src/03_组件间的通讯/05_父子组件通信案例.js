import React, { Component } from 'react'

import './component.css'

// //  单个组件
// class Item extends Component {
//     constructor() {
//         super()
//         this.state = {
//             itemClassName: ''
//         }
//     }
//     render() {
//         const { tem, inde } = this.props
//         return (
//             <div className={this.state.itemClassName} index= {inde}>{ tem }</div>
//         )
//     }
//     componentWillUnmount() {
//         console.log('执行');
//         this.setState({
//             itemClassName: ''
//         })
//     }
// }

class TabBar extends Component {
    render() {
        const { tabBarDatas, itemClick, tabbarItemIndex } = this.props
        const a = 10
         //(index) => this.itemClick(index)
        return (
            <div className="contain">
                {tabBarDatas.map((item, index) => {
                    return (
                        <div
                            className={index === tabbarItemIndex ? 'item' : ''}
                            key={index}
                            onClick={() => itemClick(index)}>
                            {item}
                        </div>
                    )
                })}
            </div>
        )
    }
}

//  主题内容
class Content extends Component {
    render() {
        const { tabBarDatas, indey } = this.props
        const mainContent = tabBarDatas[indey]
        return (
            <div>
                {mainContent}
            </div>
        )
    }
}


export default class App extends Component {
    constructor() {
        super()
        this.state = {
            tabBarDatas: ['流行', '新款', '精选'],
            tabbarItemIndex: 0
        }
    }

    itemClick(index) {
        this.setState({
            tabbarItemIndex: index
        })
    }

    render() {
        return (
            <div className="home">
                <TabBar
                    tabBarDatas={this.state.tabBarDatas}
                    itemClick={(index) => this.itemClick(index)}
                    tabbarItemIndex={this.state.tabbarItemIndex}
                />
                <hr />
                <Content tabBarDatas={this.state.tabBarDatas} indey={this.state.tabbarItemIndex} />
            </div>
        )
    }
}
