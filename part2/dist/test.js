System.register("a", [], function (exports_1, context_1) {
    "use strict";
    var dd;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("default", dd = {
                name: 'lisa',
                age: 18,
            });
        }
    };
});
System.register("test", ["a"], function (exports_2, context_2) {
    "use strict";
    var a_1, str;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (a_1_1) {
                a_1 = a_1_1;
            }
        ],
        execute: function () {
            str = 'hello world';
            console.log(str);
            console.log(a_1.default.name);
        }
    };
});
