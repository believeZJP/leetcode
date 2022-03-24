# prototype

常规函数，有`prototype`属性，带有一个`constructor`属性的对象

箭头函数没有`prototype`属性

```js
function a() {}
b = () => {}
console.log(a.prototype)
// {constructor: ƒ}
console.log(b.prototype)
// undefined
```

## 静态方法

静态方法仅在创建它们的构造函数中存在，并不能传递给任何子级

```js
class  Chameleon {
    static colorChange(newColor) {
        this.newColor = newColor
    }
    constructor({newColor='green'} = {}) {
        this.newColor = newColor
    }
}
const freddie = new Chameleon({newColor: 'purple'})
freddie.colorChange('orange')
// TypeError
```

当值不是预期类型时就会抛出TypeErrors。

比如调用方法，实际是个字符串。

## Object.freeze对一个对象进行冻结。不能对属性进行添加修改删除

但是是仅对对象进行浅冻结，只有对象中的直接属性被冻结。如果属性是另一个object，仍可被修改

## Number(11) === Number('11')

Number返回的是数字， new Number()返回的是对象

```js
Number(11) === Number('11')
// true
new Number(11) === new Number('11')
// false

String('11') == new String('11')
// true, ==时做了隐式转换，调用了toString
String('11') === new String('11')
// false
```

