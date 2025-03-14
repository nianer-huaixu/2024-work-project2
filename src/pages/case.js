// import React from 'react'

import Banner from '@/components/banner'
import CaseSlick from '@/components/caseSlick'
import { store } from '@/redux/store'

import styles from '@/styles/case.module.scss'
import { useState } from 'react'

export default function Case(){
  const {common} = store.getState()
  const data = [
    {id:1,label:'医疗产品配件',img:common.imgURL+'case/1/1.png'},
    {id:2,label:'数控车加工',img:common.imgURL+'case/2/1.png'},
    {id:3,label:'医疗产品配件',img:common.imgURL+'case/3/1.png'},
    {id:4,label:'医疗产品配件',img:common.imgURL+'case/4/1.png'},
    {id:5,label:'数控加工配件',img:common.imgURL+'case/5/1.png'},
    {id:6,label:'数控车加工',img:common.imgURL+'case/6/1.png'},
    {id:7,label:'医疗产品配件',img:common.imgURL+'case/7/1.png'},
    {id:8,label:'医疗产品配件',img:common.imgURL+'case/8/1.png'},
    {id:9,label:'电子产品加工',img:common.imgURL+'case/9/1.png'},
    {id:10,label:'汽车配件',img:common.imgURL+'case/10/1.png'},
    {id:11,label:'医疗产品配件',img:common.imgURL+'case/11/1.png'},
    {id:12,label:'汽车配件',img:common.imgURL+'case/12/1.png'},
    {id:13,label:'医疗产品配件',img:common.imgURL+'case/13/1.png'},
    {id:14,label:'医疗产品配件',img:common.imgURL+'case/14/1.png'},
    {id:15,label:'CNC数控铝加工非标螺丝',img:common.imgURL+'case/15/1.png'},
    {id:16,label:'非标SUS304外六角螺丝',img:common.imgURL+'case/16/1.png'},
    {id:17,label:'数控加工中心加工',img:common.imgURL+'case/17/1.png'},
    {id:18,label:'CNC走心机铝车销加工',img:common.imgURL+'case/18/1.png'},
    {id:19,label:'医疗产品配件',img:common.imgURL+'case/19/1.png'},
    {id:20,label:'医疗产品配件',img:common.imgURL+'case/20/1.png'},
    {id:21,label:'医疗产品配件',img:common.imgURL+'case/21/1.png'},
    {id:22,label:'精密零件加工',img:common.imgURL+'case/22/1.png'},
    {id:23,label:'数控车床五轴加工',img:common.imgURL+'case/23/1.png'},
    {id:24,label:'不锈钢航空零件加工',img:common.imgURL+'case/24/1.png'},
    {id:25,label:'汽车配件',img:common.imgURL+'case/25/1.png'},
    {id:26,label:'数控加工配件',img:common.imgURL+'case/26/1.png'},
    {id:27,label:'医疗产品配件',img:common.imgURL+'case/27/1.png'},
    {id:28,label:'医疗产品配件',img:common.imgURL+'case/28/1.png'},
    {id:29,label:'钣金加工配件',img:common.imgURL+'case/29/1.png'},
    {id:30,label:'医疗产品配件',img:common.imgURL+'case/30/1.png'}
  ]
  const [show,setShow] = useState(false)
  const [caseId,setCaseId] = useState(null)
  function seleceCase(index){
    setCaseId(index)
    setShow(true)
  }
  function onCloseShow(e){
    if(e.target?.className == styles.caseSlickWrap){
      setShow(false)
      setCaseId(null)
    }
  }
  return (
    <main>
			<Banner url='case.png'/>
      <div className={[styles.caseMain,'main'].join(' ')}>
        {data.map((item,i)=>{
          return <div key={item.id} className={styles.caseItem} onClick={()=>seleceCase(item.id)}>
            <div className={styles.imgWrap}><img src={item.img}/></div>
            <p>{item.label}</p>
          </div>
        })}
      </div>
      {show && <div className={styles.caseSlickWrap} onClick={(e)=>onCloseShow(e)}><CaseSlick id={caseId}/></div>}
    </main>
  )
}