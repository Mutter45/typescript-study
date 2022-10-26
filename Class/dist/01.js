"use strict";
(function () {
    class Test {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        handle() {
            console.log(this.name);
            return 1;
        }
    }
    let test = new Test('lisa', 12);
    console.log(test.handle());
    //属性的封装
    class Person {
        constructor(name, age) {
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
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
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
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class ClassA {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    let a = new ClassA('lisa', 12);
    console.log(a);
})();
