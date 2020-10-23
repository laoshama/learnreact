import React, { Component } from 'react'

import './navbaritem.css'

export default class NavBarItem extends Component {
    render() {
        const { Contain } = this.props
        return (
            <div className="nav_bar_item">
                { Contain && Contain }
            </div>
        )
    }
}
