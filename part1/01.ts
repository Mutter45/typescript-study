//也可以直接使用字面量进行类型声明
let d: [1, 3, 4, 5]
d = [1, 3, 4, 5]
// 可以使用 |来连接多个类型(联合类型)
let x: number | boolean | object
x = [1, 3, 4, 5]
x = true
// any为任意类型
let y: any
y = 'hello'
y = true
y = [1, 2]

// unknown为安全类型的any
let z: unknown
z = 'kk'
z = true

let s:string

s = 'hello'
// s = y 不报错，any会影响其他变量的类型

z = 'hello'
// s = z 报错，不会影响其他变量的类型
// if(typeof z === 'string') {
//     s = z // 不报错
// }
/**
 * 类型断言
 * 变量 as 类型
 * <类型> 变量
 * 
 */
s = z as string
s = <string>z
// void用于函数返回空值
function fn():void {
    console.log(11)
    // return 11 报错
    return undefined //可以返回undefined，但没意义
    // return null //ts版本不同，低版本支持返回null
}
// never表示永远不返回值
function fn2():never {
   throw new Error('报错了')
}
// 声明对象
/**
 * {}用来表示对象具有哪些属性
 * {key：type, key：type, ...}
 * 在属性名后加？,表示属性是可选的
 */
let obj:{name:string, age?:number}
obj = {
    name:'lisa',
    // age:12,
}
//可以添加任意属性
let obj1:{name:string, [prop:string]:any}
obj1 = {
    name:'lisi',
    gender:'male'
}
//对方法传参个数不加限制
let fnc:(a:string, ...params:number[]) => number
fnc = function(num1, num2, num3) {
    return num3 + num2
}
//声明数组
/**
 * 类型[]
 * Array<类型>
 * 
 */
let ss: number[]
ss = [1, 3, 4, 5, ]
let dd: Array<string>
dd = ['kk', 'dd', 'seo']
// let dd: Array<any> 对数组内数据类型不做限制
/**
 * 元祖 固定长度的数组
 * [类型,类型,...]
 */
/**
 * 枚举
 */
enum Gender {
    Male = 0,
    Female = 1
}
let i:{name:string, gender: Gender}
i = {
    name:'lisa',
    gender:Gender.Female
}
// 类型别名的使用
// type Num = 1 | 2 | 3 | 4
// let num:Num
// num = 3