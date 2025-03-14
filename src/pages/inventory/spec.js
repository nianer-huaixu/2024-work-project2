import { useEffect, useState } from 'react'
import { store } from '../../redux/store'
import styles from '@/styles/spec.module.scss'
import Banner from '@/components/banner'
import Link from 'next/link'
const {common} = store.getState()
// console.log(common);

function SpecTable(props){
  const {title,content,color,bgc} = props.data
  return <div className={[styles.inventoryT,'main'].join(' ')}>
    <h4 style={{color:color,borderColor:color}}>{title?.cate}<span>{title?.text}</span></h4>
    {content?.map((item,i)=>{
      return <div key={i}>
        <div className={styles.inventoryTW2}>
          <div className={styles.inventoryTW2C}>
            <div className={styles.inventoryTW2CL} style={{backgroundColor:bgc}}>
              <div className={styles.inventoryTWI1} >
                <span>{item.span}</span>
                <img src={common.imgURL+item.img}/>
              </div>
              <p>{item.spec}</p>
              <div className={styles.inventoryTWI1B}><span>{item.sizeText}</span></div>
              </div>
            <div className={styles.inventoryTW2CR}>
              <div className={styles.inventoryTWI2} style={{backgroundColor:bgc}}>
                <div className={styles.inventoryTWI2L}>
                  <p>常用材质</p>
                  <p>主营提供</p>
                </div>
                <div className={styles.inventoryTWI2R}>
                  <p style={{backgroundColor:bgc}}>{item.texture.split('、').map((span,s)=>{
                    return common.disable.includes(span) ? <span>{span} </span> : <Link key={s} href={{pathname:'/product/detail',query:{detail:span+item.span}}}>{span}</Link>
                  })}</p>
                  <p style={{backgroundColor:bgc}}>{item.label}</p>
                </div>
              </div>
              <ul>{item.numerical.spec.map((item,i)=>{
                return <li key={i}>{item}</li>
              })}</ul>
              {item.numerical.size.map((list,u)=>{
                return <ul key={u}>{Array.from(list).map((li,l)=>{
                  return <li key={i}>{li}</li>
                })}</ul>
              })}
            </div>
          </div>
        </div>
      </div>
    })}
  </div>
}
export default function Spes(){
  const [data,setData] = useState({lvban:{},lvbang:{},lvguan:'',lvjuan:'',lvxingcai:{}})
  const data1 = [
    {img:common.imgURL+'inventory/icon1.png',text1:'货源真实，放心采购',text2:'可提供质量保证书!'},
    {img:common.imgURL+'inventory/icon2.png',text1:'海量现货库存',text2:'1000万真实现货库存数据!'},
    {img:common.imgURL+'inventory/icon3.png',text1:'采购服务 批量询价',text2:'快速报价、定制服务!'},
    {img:common.imgURL+'inventory/icon4.png',text1:'支持打样和小批量订单',text2:'明码放心价!'},
  ]
  const fetchData = async()=>{
    try{
      const response = await fetch('../../api/spec')
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
    <div className={[styles.inventoryM,'main'].join(' ')}>
      <div className={styles.inventory1}>{data1.map((item,i)=>{
        return <div key={i}>
          <img src={item.img}/>
          <p>
            {item.text1}
            <br></br>
            {item.text2}
          </p>
        </div>
      })}
      </div> 
      <div className='upwards' id='lvban'></div>
      <SpecTable data={data.lvban}/>
      <div className='upwards' id='lvbang'></div>
      <SpecTable data={data.lvbang}/>
      <div className='upwards' id='lvjuan'></div>
      <SpecTable data={data.lvjuan}/>
      <div className='upwards' id='lvguan'></div>
      <SpecTable data={data.lvguan}/>
      <div className='upwards' id='lvxingcai'></div>
      <SpecTable data={data.lvxingcai}/>
    </div>
  </div>
}