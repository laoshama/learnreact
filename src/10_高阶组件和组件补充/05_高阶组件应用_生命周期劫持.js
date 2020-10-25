import React, { PureComponent } from 'react'

function withRenderTime(WrappedComponnet) {
    return class extends PureComponent {
        //  即将render 获取 beginTime
        UNSAFE_componentWillMount() {
            this.beginTime = Date.now()
        }
        //  渲染完成 获取 endTime
        componentDidMount() {
            this.endTime = Date.now()
            const interval = this.endTime - this.beginTime
            console.log(WrappedComponnet.name + ':' + interval);
        }

        render() {
            return <WrappedComponnet {...this.props} />
        }
    }
}

class Home extends PureComponent {
    render() {
        return <div>Home</div>
    }
}

class About extends PureComponent {
    render() {
        return <div>About</div>
    }
}

const HomeTime = withRenderTime(Home)
const AboutTime = withRenderTime(About)

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <HomeTime/>
                <hr/>
                <AboutTime/>
                <hr/>
            </div>
        )
    }
    isShow() {
        this.setState({flag:!this.state.flag})
    }
}

//  获取组件渲染花费时间
//  所有 类都有名字
//  class Person{...}   Person.name // 就是类名 Person