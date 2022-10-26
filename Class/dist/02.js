"use strict";
(function () {
    /**
     * 泛型
     * 在定义函数或是类时，如果遇到的类型不明确就可以使用泛型
     */
    function fn(a) {
        return a;
    }
    //可以直接调用具有泛型的函数
    let res = fn(2);
    let res1 = fn('lll');
    //泛型可以同时指定多个
    function fn1(a, k) {
        return a;
    }
    let result = fn1(2222, 'kkk');
    console.log(result);
    function fn2(a) {
        return a;
    }
    console.log(fn2('22'));
    class MyClass {
        constructor(name) {
            this.name = name;
        }
    }
    let test = new MyClass('lisi');
    console.log(test);
})();
