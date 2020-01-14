# var/let/const区别解析
- var将会引起变量提升，即仅声明未定义时，会出现undefined。
- 块作用域影响
- 严格模式下的解决全局污染问题
- 函数作用域与块作用域
- let 不会将变量增加到window对象中。所以不会影响window的属性。
- let\const在同一个作用域中防止变量重复定义，var无法

- 变量冻结

    使用object.freeze()进行变量冻结，防止const声明的引用类型被意外修改。
在严格模式下`use strict`会产生一个提示: *Uncaught TypeError: Cannot assign to read only property 'Post' of object '#<Object>'*