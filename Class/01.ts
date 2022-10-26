(function () {
    //ts中接口的定义与使用
    /**
     * 接口中所有的属性都不能有实际值
     * 接口只定义对象的结构，而不考虑实际值
     * 接口中所有方法都是抽象方法
     */
    interface myInter {
        name: string;
        handle(): number;
    }
    class Test implements myInter {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        handle(): number {
            console.log(this.name);
            return 1
        }
    }
    let test = new Test('lisa', 12);
    console.log(test.handle())
    //属性的封装
    class Person {
        /**
         * 属性的修饰符的使用
         * public 修饰的属性可以在任意位置被访问(修改)，默认值
         * private 修饰的属性只可以在类内部(修改)，默认值
         * protected 受保护的属性，只能在当前类和子类中访问
         */
        private _name: string;
        private _age: number;
        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }
        /**
         * getter 读取属性
         * setter 设置属性
         */
        // getName(){
        //     return this._name;
        // }
        // setName(value: string) {
        //     this._name = value;
        // }
        // getAge(){
        //     return this._age;
        // }
        // setAge(value: number) {
        //     console.log('我的值被修改了')
        //     if(value > 0){
        //         this._age = value;
        //     }
        // }
        //TS中getter , setter 方法使用
        get name() {
            return this._name;
        }
        set name(value: string) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value: number) {
            this._age = value;
        }
    }
let per = new Person('lisa', 12);
// console.log(per.getName())
// per.setName('wangwu')
// per.setAge(-10)
// console.log(per)
// console.log(per.name)
// per.name = 'wangwu'
// console.log(per)

//一下两个类等价
class Class {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class ClassA {
    constructor(public name: string, public age: number) {

    }
}
let a = new ClassA('lisa', 12)
console.log(a)

})()