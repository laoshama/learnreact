import React, { Component } from 'react'

import NavBar from './NavBar'
import NavBarItem from './NavBarItem'

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar
                    Left={<NavBarItem Contain={'左边'} />}
                    // Center={<NavBarItem Contain={'中间'} />}
                    Right={<NavBarItem Contain={'右边'} />} />
                {/* <NavBar>
                    <NavBarItem Contain={'左边'} />
                    <NavBarItem Contain={'中间'} />
                    <NavBarItem Contain={'右边'} />
                </NavBar> */}
            </div>
        )
    }
}

