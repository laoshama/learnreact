import React, { PureComponent } from 'react'

class App extends PureComponent {
    render() {
        return (
            <div>
                App: {this.props.name}
            </div>
        )
    }
}

function enhanceComponent(WrappedComponent) {
    class NewComponent extends PureComponent {
        render() {
            return (
                <div>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
    //  可以修改组件在 浏览器开发工具中显示的名称
    NewComponent.displayName = 'Laosha'
    return NewComponent
}

function enhanceComponent2(WrappedComponent) {
    function NewComponent(props) {
            return <WrappedComponent {...props}/>
    }
    //  可以修改组件在 浏览器开发工具中显示的名称
    NewComponent.displayName = 'Laosha'
    return NewComponent
}

const EnhanceComponent = enhanceComponent2(App)

export default EnhanceComponent