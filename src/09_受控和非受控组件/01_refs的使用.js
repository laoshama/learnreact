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

//  获取 ref 三种方式

//  <h2 ref=字符串/对象/函数></h2>

//  所有类组件都有一个 refs 属性， 
//  当我们在 JSX 中的某个标签上 添加了ref 属性， 那么该属性值会被添加到
//  类组件的 refs对象中

//  使用方式一：    传入的 是字符串(不推荐)
//  获取： this.refs.myrefName

//  使用方式二：    传入的是对象（React 推荐）
//  一般在构造器中，通过 React 提供的 createRef 函数来创建 ref对象 this.myRefName = createRef()
//  把创建好的 ref对象放到 标签的ref属性上,  该Dom元素对象会被放到 这个ref对象的current属性中
//  获取：  this.myRefName.current

//  使用方式三：    传入的是一个函数（会被回调，回调时会传来一个参数（DOM元素对象））
//  this.myRefName = null ;  <h2 ref={ args => this.myRefName = args}></h2>
//  获取：  this.myRefName