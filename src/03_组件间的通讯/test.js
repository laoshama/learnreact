function Fa() {
    this.itemClick = () => {
        console.log(this)
    }
    this.itemClick()
}

const obj = {
    name: '小鸡'
}
let fa = new Fa()

fa.itemClick()

fa.itemClick.call(obj)
fa.itemClick(undefined)
