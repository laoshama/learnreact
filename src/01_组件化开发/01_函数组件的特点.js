import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <h2>hello react</h2>
        <div>{}</div>
      </div>
    )
  }
}

// export default function App() {
//   return (
//     <div>
//       我是一个App组件
//       <h2>你是一个呆瓜</h2>
//     </div>
//   )
// }

/* 
  函数式组件特点：  
    1、 没有 this 对象
    2、 没有内部状态（state）  （hooks解决了这个问题）
    3、 用function定义
    4、 返回和类组件中render函数相同的内容
    5、 没有生命周期和生命周期函数， 也会被热更新并挂载
    
 */
