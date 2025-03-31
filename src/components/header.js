import Link from 'next/link';
import { store } from '../redux/store'
import { useState,useEffect } from 'react';
import ProductList from './productList';
export default function Header(props){
  const [isTop,setTop] = useState(false) // 回到顶部组件状态
  const {path} = props
  // console.log(path,props,'path');
  const {common} = store.getState()
  useEffect(()=>{
    BaiduStatistics()
    window.addEventListener('scroll',function(e){
      // 滚动条滚动高度
      const scrollTop = document.documentElement.scrollTop
      if(scrollTop>1000){
        setTop(true)
      }else{
        setTop(false)
      }
    })
  },[])
  var _hmt = _hmt || [];
  function BaiduStatistics() {
      var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?7be846a03ac4bafb4b100bcd1b8d4f41";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  };
  const data = [
    {label:'铝材总览',link:'/'},
    {label:'产品中心',link:'/product'},
    {label:'铝材库存',link:'/inventory',ischildren:true,children:[
      {label:'库存分类',link:'/inventory'},
      {label:'现货规格表',link:'/inventory/spec'}
    ]},
    {label:'行业案例',link:'/case'},
    {label:'加工中心',link:'/process'},
    {label:'走进中库',link:'/about'},
    {label:'联系我们',link:'/contact'},
    {label:'下载中心',link:'/download'}
  ]
  const Menu = data.map((item,i)=>{
    return <li key={i} className={[('/'+path.split('/')[1]) == item.link?'activeLi':''].join('')}>
      <Link href={item.link} target='_blank'>{item.label}</Link>
      {item.ischildren && <div className='liItem'>
        {item.children.map((li,l)=>{
          return <p key={l}><Link href={li.link} target='_blank'>{li.label}</Link></p>
        })}
      </div>}
    </li>
  })
  const [isMenu,setMenu] = useState(false)
  const [isList,setList] = useState(false)
  function showList(){
    isList ? setList(false) : setList(true)
  }
  return <header>
    <div className='headerWrap main'>
      <div className='headerL'>
        <a href='/' target='_blank'><img src={common.imgURL+'header/logo.png'}/></a>
        {path !=='/' && <div className='cate'><p onClick={()=>showList()}>产品分类</p></div>}
        <p className='phone'><img src={common.imgURL + 'header/mti-phone.png'}/>0512-62522398</p>
      </div>
      <ul className='menuUl'>{Menu}</ul>
    </div>
    {isList && <div className='main'><ProductList isShow={isList} path={path} onSend={showList}/></div>}
    <div className='m-header main'>
      <a href='/' className='logo' target='_blank'><img src={common.imgURL+'header/logo.png'}/></a>
      <div className='m-header-r'>
        <div onClick={()=>{isMenu? setMenu(false):setMenu(true)}}>
          {isMenu && <img src={common.imgURL+'header/menu-blue.png'} />}
          {!isMenu && <img src={common.imgURL+'header/menu-black.png'} />}
        </div>
        <ul className='m-header-list' style={{height:isMenu ? '288px' : '0'}}>
        <li onClick={()=>{setMenu(false)}}><Link target='_blank' href='/product'>产品中心</Link></li>
        <li onClick={()=>{setMenu(false)}}><Link target='_blank' href='/inventory'>库存分类</Link></li>
          <li onClick={()=>{setMenu(false)}}><Link target='_blank' href='/inventory/spec'>现货规格表</Link></li>
          <li onClick={()=>{setMenu(false)}}><Link target='_blank' href='/process'>加工中心</Link></li>
          <li onClick={()=>{setMenu(false)}}><Link target='_blank' href='/about'>走进中库</Link></li>
          <li onClick={()=>{setMenu(false)}}><Link target='_blank' href='/contact'>联系我们</Link></li>
          <li onClick={()=>{setMenu(false)}}><Link target='_blank' href='/download'>下载中心</Link></li>
        </ul>
      </div>
    </div>
    <div className='up' style={{display:isTop?'block':'none'}} onClick={()=>window.scrollTo(0,0)}></div>
  </header>
} 