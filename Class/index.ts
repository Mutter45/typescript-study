//ts中类的定义与使用
class Person {
    //定义实例属性, 需要通过实例去访问
    // readonly表示只读属性，无法修改
    // name: string = 'John';
    // readonly age: number = 1;
    // //使用static定义静态属性（类属性），可以直接通过类去访问
    // static readonly sex: string = 'man'
    // say() {
    //     alert('222')
    // }
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    say() {
        //this表示当前实例对象
        console.log(this)
    }
}
class Student extends Person {
    grade: string
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }
    say() {
        //this表示当前实例对象
        console.log(`我是${this.name},我现在${this.grade}`)
    }
}
let person = new Person('lisa', 23)
console.log(person)
// console.log(Person)
person.say()
let student = new Student('lisi', 23, '大一')
student.say()
//抽象类的使用
/**
 * abstract关键字只能被继承，而不能创建实例
 */
abstract class Animal {
    name: string
    constructor(name: string) {
        this.name = name
    }
    //abstract用来建立抽象方法，抽象方法只能在抽象类中使用
    abstract say(): void
}
class Cat extends Animal {
    age: number
    constructor(name: string, age: number) {
        super(name)
        this.age = age
    }
    say() {
        console.log(this.age)
    }
}
let cat = new Cat('猫', 12)
cat.say()