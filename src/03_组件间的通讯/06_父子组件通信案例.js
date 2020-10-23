import React, { Component } from 'react'

import './component.css'

class TabBar extends Component {
    constructor() {
        super()
        this.state = {
            currentIndex: 0
        }
    }
    render() {
        const { tabBarDatas } = this.props
        const { currentIndex } = this.state
        return (
            <div className="contain">
                {tabBarDatas.map((item, index) => {
                    return (
                        <div key={index}
                            className={index === currentIndex ? 'item' : ''}
                            onClick={e => this.btnClick(index)}>
                            {item}
                        </div>
                    )
                })}
            </div>
        )
    }
    btnClick(index) {
        this.setState({ currentIndex: index })
        this.props.itemClick(index)
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

        this.titles = ['流行', '新款', '精选']

        this.state = {
            currentIndex: 0
        }
    }

    // itemClick(index) {
    //     this.setState({
    //         tabbarItemIndex: index
    //     })
    // }
    itemClick = (index) => {
        this.setState({
            currentIndex: index
        })
    }

    render() {
        const { currentIndex } = this.state
        return (
            <div className="home">
                <TabBar tabBarDatas={this.titles} itemClick={this.itemClick}/>
                <hr />
                <Content tabBarDatas={this.titles} indey={currentIndex} />
            </div>
        )
    }
}
