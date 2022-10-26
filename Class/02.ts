(function() {
    /**
     * 泛型
     * 在定义函数或是类时，如果遇到的类型不明确就可以使用泛型
     */
    function fn<T>(a:T):T{
        return a
    }
    //可以直接调用具有泛型的函数
    let res = fn<number>(2)
    let res1 = fn<string>('lll')
    //泛型可以同时指定多个
    function fn1<T, K>(a:T, k:K):T {
        return a
    }
    let result = fn1<number, string>(2222, 'kkk')
    console.log(result)

    interface inter{
        length: number
    }
    function fn2<T extends inter>(a:T):T {
        return a
    }
    console.log(fn2('22'))
    class MyClass<T> {
        name:T;
        constructor(name:T) {
            this.name = name;
        }
    }
    let test = new MyClass<string>('lisi')
    console.log(test)
})()