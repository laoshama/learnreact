import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <h2>Hello React</h2>
            </div>
        )
    }
}

// 在类组件上使用 ref 获得的 是类组件对象
//  当 ref 属性用于自定义 class组件时， ref对象接收 组件的挂载实例 作为其 current 属性

// 官方： 不能在 函数组件 上使用ref属性， 因为函数式组件没有实例

//  获得组件对象之后， 我们可以 直接在父组件对象中 操控子组件

//  但是： 我们可以通过 React。forwardRef 获取到函数组件中的某个DOM元素