// function Fa() {
//     this.itemClick = () => {
//         console.log(this)
//     }
//     this.itemClick()
// }

// const obj = {
//     name: '小鸡'
// }
// let fa = new Fa()

// fa.itemClick()

// fa.itemClick.call(obj)
// fa.itemClick(undefined)


// const obj1 = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// const obj2 = {
//     name: '小花',
//     age: 18,
//     hobbies:{
//         run: '200米',
//         book: {
//             name: '老人与海',
//             author: {
//                 name: '海明威',
//                 age: 18,
//                 hobbies:{
//                     a: '打麻将'
//                 }
//             }
//         }
//     }
// }

// const obj3 = {
//     name: '小妹',
//     a: 20
// }

// const newObj = Object.assign({}, obj1, obj3, obj2)
// console.dir(newObj.hobbies.book.author.hobbies);

class People {
    constructor() {
        this.msg = '你子啊干什么'
    }
    fun() {
        console.log(construtor);
    }
}

const fn = new People()

// fn.fun()
console.log(People.prototype)