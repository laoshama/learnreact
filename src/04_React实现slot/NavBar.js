import React, { Component } from 'react'
import './navbar.css'

export default class NavBar extends Component {
    render() {
        const { Left, Center, Right } = this.props

        // const Left = this.props.children[0]
        // const Center = this.props.children[1]
        // const Right = this.props.children[2]
    
        return (
            <div className="nav_bar">
                <div className="left">
                    {Left || null}
                </div>
                <div className="center">
                    {Center || null}
                </div>
                <div className="right">
                    {Right || null}
                </div>
            </div>
        )
    }
}
