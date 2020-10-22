import React, { Component } from 'react'

export default class App extends Component {
    render() {
         //  官方要求返回的东西：
         //  React元素 、 数组 、  fragments 、字符串 、 数字 、 boolean 、null 、 Portals
         
         //  React元素： 通常通过 JSX 创建 ， 例如： <div/> 或 <Mycomponent/> 都是react元素，
         //  <Mycomponent/> 会被React渲染成为自定义组件
         //  <div/> 会被 React 渲染为 DOM节点

         //  数组或fragments：使得 render 方法可以返回 多个元素
         //  字符串或数值类型： 他们在DOM中会被渲染成  文本节点
         //  Portals(入口、大门， 这种返回方式，可以渲染子节点到不同DOM子树中)
         //  booleanl类型： 什么都不渲染
        return (
            <div>
                
            </div>
        )
    }
}
