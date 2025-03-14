'use client' // 客户端渲染时

import React from 'react'
import Link from 'next/link';

import { useState,useEffect } from 'react'
import { store } from '@/redux/store'
import { changeCategory } from '@/redux/common'
import Banner from '@/components/banner'
import ProductSearch from "@/components/productSearch"

import styles from '@/styles/product.module.scss'
export default function Products(){
  // console.log(store.getState().common.cate);
  // console.log(store);
  
  const {common} = store.getState()
  // const cate = common.cate
  const list = [
    {label:'铝板',index:0},
    {label:'铝棒',index:1},
    {label:'铝管',index:2},
    {label:'铝卷',index:3},
    {label:'铝型材',index:4},
    {label:'铝锻件',index:5}
  ]
  const [cateIndex,setIndex] = useState(0) 
  const [data,setData] = useState({list:[],prompt:[],title:{}})
  const fetchProductData = async ()=>{
		const categoryIndex = 0
		const typeIndex = cateIndex
		const req = {categoryIndex,typeIndex}
		try{
			await fetch('/api/productData',{
				method:'POST',
				headers:{'Content-Type':'application/json'},
				body:JSON.stringify(req)
			}).then((res)=>{
				if(res.ok){return res.json()}
				throw new Error('network response was not ok')
			}).then(res=>{
				const arr = res.list.reverse()
				// console.log(arr);
				setData(res)
			}).catch(err => console.error(err))
		}catch{
				// 请求错误处理
		}
	}
  function selectCage(index){
    // console.log(index);
    // store.dispatch(changeCategory(index))
    // console.log(store.getState().common.cate,'change');
    setIndex(index)
  }
  useEffect(() => { 
		fetchProductData()
	}, [cateIndex])
  return (
    <main>
			<Banner url='product.png'/>
      <div className={[styles.productMain,'main'].join(' ')}>
        <div className={[styles.productC,styles.productAll].join(' ')}>
					<div className={styles.productBox}>
						<ProductSearch/>
            <div className={styles.productCate}>
              {list.map((item,i)=>{
                return <div key={i} className={cateIndex==i?styles.selectCate:' '} onClick={()=>(selectCage(i))}>
                  <img src={cateIndex == i ? common.imgURL+'product/icon-w-'+(i+1)+'.png':common.imgURL+'product/icon-b-'+(i+1)+'.png'}/>
                  {item.label}
                </div>
              })}
            </div>
            <div className={styles.productList}>
              {data.list.map((serie,s)=>{
                return <div key={s} className={styles.productSerise}>
                  <p className={styles.productSeriseTitle}><b>{serie.serise}</b><span>{data.title.e_t}</span> series</p>
                  <div className={styles.productSeriseBox}>
                    {serie.product.map((item,i)=>{
                      return <div key={i} className={styles.productSeriseItem}>
                        <div className={styles.imgWrap}>
                          <Link href={{pathname:'/product/detail',query:{detail:item.name+data.title.c_t}}}>
                            <img src={`https://www.yangdong.co:443/${data.title.c_t}/${item.name}/1.jpg`}/>
                          </Link>
                        </div>
                        <div className={styles.itemIntro}>
                          <p className={styles.productName}>{item.name}<span>{serie.serise}</span>-<span>{item.texture}</span></p>
                          <p className={styles.productPly2}>
                            {item.ply.map((plyI,p)=>{
                              return <i key={p}>· {item.name}-{plyI}{data.title.c_t}</i>
                            })}
                          </p>
                          <Link href={{pathname:'/product/detail',query:{detail:item.name+data.title.c_t}}}>查看更多</Link>
                        </div>
                      </div>
                    })}
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}