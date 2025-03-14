import { useState,useEffect } from "react"
import Link from "next/link"
import { store } from "../redux/store"

const {common} = store.getState()
// console.log(common);

function ListContent(props){
  const {data} = props
  // console.log(data);
  return <div className="productItem">
    <div className="productItemL">
      <h4>{data?.title}</h4>
      <ul>
        {data?.list.map((item,i)=>{
          return <li key={i}>
            {common.disable.includes(item.model)? <span>{item.model+item.text}</span>
            :
            <Link href={{pathname:'/product/detail',query:{detail:item.model+data?.label}}}>{item.model+item.text}</Link>
            }
            </li>
        })}
      </ul>
    </div>
    <img src={common.imgURL+data?.img}/>
  </div>
}

export default function ProductList(props){
  // console.log(props);
  
  const [data,setData] = useState([])
  const fetchData = async()=>{
    try{
      const response = await fetch('/api/product')
      const res = await response.json()
      // console.log(res)
      setData(res)
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
      fetchData()
  }, [])
  const [index,setIndex] = useState(null)
  function mouseEnter(i){
    setIndex(i)
  }
  function mouseOver(i){
    setIndex(i)
  }
  // 鼠标离开组件
  function mouseLeved(){
    if(props.path == '/'){
      setIndex(null)
    }else{
      setIndex(null)
      props?.onSend()
    }
  }
  return <div className="productList" onMouseLeave={()=>mouseLeved()} style={{height: (props.isShow || props.path == '/') ? '3.8rem' : '0'}}>
    <div className='productCate'>
      <h4>产品分类</h4>
      <ul>
        {data.map((item,i)=>{
          return <li key={i} onMouseOver={()=>mouseOver(i)} onClick={()=>mouseEnter(i)} className={index == i ?'selectLi':''}>
            <span onMouseEnter={()=>mouseEnter(i)}>{item.title}</span>
            </li>
        })}
      </ul>
    </div>
    {(index != null || props.isShow) && <ListContent data={(props.isShow&&index==null)?data[0]:data[index]}/>}
  </div>
}