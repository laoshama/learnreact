import React, { PureComponent } from 'react'
import { EventEmitter } from 'events'

const eventBus = new EventEmitter()

class Home extends PureComponent {
    render() {
        return (
            <div>
                Home
            </div>
        )
    }

    handleSend(args, a, b) {
        console.log(args, a, b);
    }

    componentDidMount() {
        eventBus.addListener('send', this.handleSend)
    }
    componentWillUnmount() {
        eventBus.removeListener('send', this.handleSend)
    }
}

class Profiler extends PureComponent {
    render() {
        return (
            <div>
                Profiler
                <button onClick={e => this.send()}>点击Profiler按钮</button>
            </div>
        )
    }
    send() {
        const msg = '你好呀'
        eventBus.emit('send', msg, 123, '小飞机')
    }
}

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home />
                <Profiler />
            </div>
        )
    }
}

//  事件总线： event bus
//  react 需要依赖 events库 来实现事件总线功能