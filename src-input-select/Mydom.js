import React from 'react';
import ReactDOM from 'react-dom';

class Mydom extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const ele = document.getElementById('div-id');
    // console.log(ele, 'aaa', ele.nodeType);

    // const input = document.getElementById('input');
    // console.log(input, 'bbb', input.nodeType);

    // 1. DOM节点的创建
    // const attr = document.createElement('input');
    // console.log(attr, 'ccc', attr.nodeType);


    // 2. DOM节点的查询 id 和 className  获取的区别
    // const divs = document.getElementsByClassName('class');
    // divs 是一个伪数组，log出一个HTMLCollection,数组重的每一项都要想拿的属性；如果想要像数组一样操作，需要Array.from(divs) 或者 Array.prototype.slice.call(divs, 2) 这样调用一下。
    //divs[0] 是一个 节点 log出 <span id="span-id" className="class">这是span</span>
    // console.log(divs, 'divs', divs[0]);

    //  返回当前文档中第一个类名为 "class" 的元素
    // const divFirst = document.querySelector('class');
    // 返回一个文档中所有的class为"note"或者 "alert"的div元素
    // document.querySelectorAll("div.note, div.alert");

    // 3.获取父元素和父节点
    // 你会发现log出来的父元素和父节点一样；那么引发一个疑惑，元素和节点的区别是什么呢？？？
    // const ele = document.getElementsByClassName('div-class')[0];
    // const parentElement = ele.parentElement;
    // const parentNode = ele.parentNode;
    // console.log(parentElement, 'parentElement');
    // console.log(parentNode, 'parentNode');

    // 4. 添加节点  appendChild 和 innerHTML 区别：
    // appendChild 它会将child追加到parent的子节点的最后面。
    // 另外，如果被添加的节点是一个页面中存在的节点，则执行后这个节点将会添加到新的位置，其原本所在的位置将移除该节点，
    // 也就是说不会同时存在两个该节点在页面上，且其事件会保留。
    // innerHTML 会直接将 ele节点里面的内容整个代替掉。
    const li = document.createElement('li');
    ele.appendChild(li);
    // ele.innerHTML = ('<div id="div" className="div-class">这是后添加的div</div>');

    // 删除li节点
    // li.parentNode.removeChild(li);
  
  }

  render() {
    return (
      <>
        <div id="content-id1" className="content-class1">
          这是content1
          <span id="span-id" className="class">这是span</span>
          <div id="div-id" className="div-class">这是div</div>
        </div>
        <div id="content-id2" className="content-class2">
          这是content2
        </div>
      </>
    )
  }
}

export default Mydom;