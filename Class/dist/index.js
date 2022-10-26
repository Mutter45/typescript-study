"use strict";
//ts中类的定义与使用
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        //this表示当前实例对象
        console.log(this);
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    say() {
        //this表示当前实例对象
        console.log(`我是${this.name},我现在${this.grade}`);
    }
}
let person = new Person('lisa', 23);
console.log(person);
// console.log(Person)
person.say();
let student = new Student('lisi', 23, '大一');
student.say();
//抽象类的使用
/**
 * abstract关键字只能被继承，而不能创建实例
 */
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Cat extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    say() {
        console.log(this.age);
    }
}
let cat = new Cat('猫', 12);
cat.say();
