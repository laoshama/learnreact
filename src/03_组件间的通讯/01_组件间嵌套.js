import React, { Component } from 'react'

function Header() {
    return <h3>头部</h3>
}

function Body() {
    return <h3>内容</h3>
}

function Footer() {
    return <h3>尾部</h3>
}


export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <hr/>
                <Body/>
                <hr/>
                <Footer/>
            </div>
        )
    }
}
