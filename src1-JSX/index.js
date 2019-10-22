import React from 'react';
import ReactDOM, {render} from 'react-dom'; //->从REACT-DOM中导入一个ReactDOM，逗号后面的内容是把ReactDOM这个对象进行解构 《=》 import {render} from 'react-dom'
import './3-self-jsx.js'
/*
   ReactDOM.render([JSX], [Container], [callback]): 把JSX元素渲染到页面中;
      JSX：react虚拟元素
      Container：容器，我们想把元素放到页面中的哪个容器中
      callback: 当把内容放到页面中呈现触发的回调函数

   JSX: javascript + xml(html) 
   1. 不建议将JSX元素直接渲染到body中，而是放到自己创建的容器中，一般我们都放在一个ID为root的DIV中即可。
   2. 在JSX中出现的{}是存放JS的，但是要求JS代码执行完成有返回结果(JS表达式)
         ->不能直接放一个对象数据类型的值；（对象(除了给style赋值)、数组(数组中如果没有对象，都是基本值或者是JSX元素这样是可以的)、函数都不行）
         ->可以是基本类型的值（布尔类型什么都不显示，null、undefined也是JSX元素，代表的是空）
         ->循环判断的语句都不支持，但是支持三元运算符；
   3. 循环数组创建JSX元素（一般都是基于数组的map方法完成迭代），需要给创建的元素设置唯一的key值（当前本次循环内唯一即可）
   4. 只能出现一个根元素
   5. 给元素设置样式类用的是className而不是class;
   6. style中不能直接的写样式字符串，需要基于一个样式对象来遍历赋值。 style={{...]}}

      
*/


/*  1.
let data = 'react的世界'
ReactDOM.render(<div id="box">hello world! {data}</div>,document.querySelector('#root'),()=>{
    let oBox = document.querySelector('#box');
    console.log(oBox.innerHTML);
});
*/


/*2.
let data = [
    {
        "name":'zhangsan',
        "age": 8
    },
    {
        "name": 'lisi',
        "age": 8
    }
]
ReactDOM.render( < div id = "box" > 
           hello world!
           <ul>
           {
               data.map((item,index)=>{
                   let{ name,age } = item;
                   return <li key={index}>
                       <span>{name} </span>
                       <span>{age}</span>
                   </li>
               })
            }
           </ul> 
           </div>,document.querySelector('#root'));

*/

// 3.
// ReactDOM.render(<div id="box" className="box" style={{color:'red'}}><h1>我是标题</h1><ul></ul></div>, document.querySelector('#root'))

//4.
// React.createElement(type,props,children)

// let styleObj = {
//     color: 'red'
// };
// render( < h1 id = "titileBox" className = "title" style = {styleObj} > 我是小仙女 </h1>,document.querySelector('#root'))