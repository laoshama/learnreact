import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super()
        this.state = {
            movies: ['大话西游', '盗梦空间', '星际穿越']
        }
    }
    render() {
        return (
            <div>
                { this.state.movies.map(item => <h2 key={item}>{item}</h2>) }
                <button onClick={ e => this.increment()}>添加电影</button>
            </div>
        )
    }
    increment() {
        this.setState({
            movies: ['海王', ...this.state.movies]
        })
    }
}
