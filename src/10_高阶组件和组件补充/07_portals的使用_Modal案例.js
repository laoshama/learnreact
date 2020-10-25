import React, { PureComponent } from 'react'
//  1、导入 ReactDOM
import ReactDOM from 'react-dom'

class Modal extends PureComponent {
    render() {
        //  2、调用 createPortal    //  需要挂载的元素      挂载到哪个对象
        //  返回的必须是 portal 对象， 否则就会默认挂载到父级元素上
        return ReactDOM.createPortal(this.props.children, document.getElementById('modal'))
    }
}

class Home extends PureComponent {
    render() {
        return (
            <div>
                <div>Home</div>
                <Modal>
                    <h2>title</h2>
                    <p>Model模块，改变挂载对象</p>
                </Modal>
            </div>
        )}
}

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home/>
            </div>
        )
    }
}
