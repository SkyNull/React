/*
   1. 创建一个对象（默认有四个属性：type/props/ref/key），最后把这个对象返回
   2. 根据传递的值修改这个对象
       type => 传递的type
       props 需要做一些处理：大部分传递props中的属性都赋值给对象的props,有一些比较特殊
       -> 如果是ref或者key,我们需要把传递的props中的这两个属性值，给创建对象的两个属性，而传递的props中把这两个值删掉
       -> 把传递的children作为新创建对象的props中的一个属性；

*/
function createElement(type, props, children) {
    props = props || {};
    //创建一个对象，设置一些默认属性值；
    let obj = {
        type: null,
        props: {
            children: ''
        },
        ref: null,
        key: null
    };
    //=> 用传递的type和props覆盖原有的默认值
    // obj = {...obj, type,props};//{type:type,props:props}
    obj = {
        ...obj,
        type,
        props: {
            ...props,
            children
        }
    };
    //=> 把ref和key提取出来（并且删除props中的属性）
    'key' in obj.props ? (obj.key = obj.props.key, obj.props.key = undefined) : null; //eslint-disable-line
    'ref' in obj.props ? (obj.ref = obj.props.ref, obj.props.ref = undefined) : null; //eslint-disable-line
    return obj;
}
let obj = createElement("h1", {
    id: "titileBox",
    className: "title",
    ref: "AA",
    key: '12'
}, " \u6211\u662F\u5C0F\u4ED9\u5973 ");

/*

{
    type:'h1',
    props:{
           id: "titileBox",
           className: "title",
           style: styleObj,
           children: '\u6211\u662F\u5C0F\u4ED9\u5973'
    },
    ref:null,
    key:null;
    __proto__:Object.prototype
}

*/

// render 方法：把创建的对象生成DOM元素，最后插入到页面中
function render(obj, container, callback) {
    let {
        type,
        props
    } = obj || {};
    let newElement = document.createElement(type);
    for (let attr in props) {
        if (!props.hasOwnProperty(attr)) break; //=>不是私有的直接结束遍历
        if (!props[attr]) continue; //=>如果当前属性没有值，直接不处理即可

        let value = props[attr];
        //=> calssName的处理
        if (attr === 'className') {
            newElement.setAttribute('class', value);
            continue;
        }
        //=> style的处理
        if (attr === 'style') {
            if(value === '') continue;
            for (let styKey in value){
                if (value.hasOwnProperty(styKey)){
                    newElement['style'][styKey] = value[styKey]
                }
            }
            continue;
        }
        // children的处理
        if (attr === 'children'){
            if(typeof value === 'string'){
                let text = document.createTextNode(value);
                newElement.appendChild(text);
            }
            continue;
        }

        //=>基于setAttribute可以让设置的属性表现在HTML结构上
        newElement.setAttribute(attr, value);

    }
    container.appendChild(newElement);
    callback && callback();

}
render(obj, document.querySelector('#root'), () => {
    console.log('ok');
})