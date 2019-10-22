import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './component/Dialog';

let root =document.querySelector('#root');

ReactDOM.render(<div>
    {/* 注释：JSX中调取组件，只需要把组件当作一个标签调取使用即可（单闭合和双闭合均可） */}
    <Dialog con='哈哈哈' style={{color:'red'}}/>
    <Dialog con = '呐呐呐' lx={2}>
        <span> 1</span>
        <span>2</span>
    </Dialog>
    {/* 属性值不是字符串，我们需要使用大括号包起来 */}

</div>,root);