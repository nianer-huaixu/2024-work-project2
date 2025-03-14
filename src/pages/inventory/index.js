import { useEffect, useState } from 'react'
import { store } from '../../redux/store'
import Banner from '@/components/banner'
import styles  from '@/styles/inventory.module.scss'
import Link from 'next/link'
const {common} = store.getState()
function Invent(props){
  const {cate,img,list,color,content,spec,standard,service,label} = props.data
  
  return <section className={[styles.inventroyM,'main'].join(' ')}>
    {props.direction =='l' && <div className={styles.inventroyML}>
      <img src={common.imgURL+img}/>
      <h4 style={{color}}>{cate}</h4>
      <p>主营</p>
      {list?.map((item,i)=>{
        return <p key={i}>{i+1}.{item}</p>
      })}
    </div>}
    <div className={styles.tableWrap}>
      <table className={styles.inventroyMR}>
      <colgroup>
          <col style={{width:'170px'}} />
          <col style={{width:'260px'}} />
          <col style={{width:'200px'}} />
        </colgroup>
        <thead>
          <tr>
            <th>系列</th>
            <th>牌号</th>
            <th>交货状态</th>
          </tr>
        </thead>
        <tbody>
          {content?.map((item,i)=>{
            return <tr key={i}>
              <td style={{whiteSpace:'nowrap'}}>{item.serise}</td>
              <td>{item.mark.split('、').map((link,l)=>{
                return common.disable.includes(link) ? <span>{link} </span>: <Link key={l} href={{pathname:'/product/detail',query:{detail:link+label}}}>{link} </Link>
              })}</td>
              <td>{item.status}</td>
            </tr>
          })}
          
        </tbody>
      </table>
      <table className={styles.inventroyMR}>
        <colgroup>
          <col style={{width:'180px'}} />
          <col style={{width:'170px'}} />
          <col style={{width:'210px'}} />
        </colgroup>
        <thead>
        <tr>
            <th>产品规格</th>
            <th>执行标准</th>
            <th>提供服务</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={content?.length}>{spec?.map((item,i)=>{
                return <p key={i}><b>{item.cate}</b><br></br>
                {item.val.map((valI,v)=>{
                  return <i key={v}>{valI.label && <span>{valI.label}:<br></br></span>}
                  <span>{valI.value}<br></br></span></i>
                })}
                </p>
              })}</td>
              <td rowSpan={content?.length}>{standard}</td>
              <td rowSpan={content?.length}>{service}</td>
            </tr>
        </tbody>
      </table>
    </div>
    
    {props.direction =='r' && <div className={styles.inventroyML}>
      <img src={common.imgURL+img}/>
      <h4 style={{color}}>{cate}</h4>
      <p>主营</p>
      {list?.map((item,i)=>{
        return <p key={i}>{i+1}.{item}</p>
      })}
    </div>}
  </section>
}
export default function Inventory(){
  const [data,setData] = useState({lvban:{},lvbang:{},lvguan:'',lvjuan:'',lvxingcai:{}})
  const fetchData = async()=>{
    try{
      const response = await fetch('../api/inventory')
      const res = await response.json()
      setData(res)
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
      fetchData()
  }, [])
  return <div>
    <Banner url='inventory.png'/>
    <Invent data={data.lvban} direction='l'/>
    <Invent data={data.lvbang} direction='r'/>
    <Invent data={data.lvjuan} direction='l'/>
    <Invent data={data.lvguan} direction='r'/>
    <Invent data={data.lvxingcai} direction='l'/>
  </div>
}