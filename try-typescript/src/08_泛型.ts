/**
function fn(a:any):any{
    return a
}
 */

/**
 * 在定义函数或是类时，如果遇到类型不明确就可以使用泛型
 */

function fn<T>(a: T): T{
    return a
}

// 可以直接调用具有泛型的函数
let result = fn(10) // 不指定泛型，TS可以自动对类型进行推断
let result2 = fn<string>('hellow')// 指定泛型

// 泛型可以同时指定多个
function fn2<T,K>(a:T,b:K){
    console.log(b)
    return a
}

fn2(123,'hellow')
fn2<number,string>(123,'hellow')

interface Inter{
    name:'我是一个接口'
}

// T extends Inter 表示泛型T必须是Inter实现类(子类)
function fn3<T extends Inter>(a: T):string{
    return a.name
}


class MyClass<T>{
    name:T
    constructor(name:T){
        this.name = name
    }
}

const mc = new MyClass<string>('孙悟空哈哈哈')