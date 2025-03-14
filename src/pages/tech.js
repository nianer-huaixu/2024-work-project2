import { useState,useEffect } from 'react'
import { useRouter } from "next/router"
import Link from 'next/link'
import Banner from "@/components/banner"
import styles from "@/styles/tech.module.scss"
function Tech(){
  const router = useRouter();
  const [data,setData] = useState({detail:{}})
  
  useEffect(() => {
    fetchData()
  }, [router.query])//监听路由变化可以出发数据请求
  const fetchData = async () => {
    const req ={id:Number(router.query.id)}
    try{
      await fetch('/api/tech',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(req)
      }).then((res)=>{
        if(res.ok){return res.json()}
        throw new Error('network response was not ok')
      }).then(res=>{
        setData({...res})
      }).catch(err => console.error(err))
    }catch{
      // 请求错误处理
    }
  }
  return <div>
    <Banner url='about.png'/>
    <div className={styles.newDetail}>
      <h5>{data.detail.title}</h5>
      <hr></hr>
      <img src={data.detail.img}/>
      {data.detail.content?.map((item,i)=>{
        return <p key={i}>{item}</p>
      })}
      <hr></hr>
      <div className={styles.linkBox}>
        {router.query.id != 0 && <Link href={{pathname:'/tech',query:{id:Number(router.query.id)-1}}}>上一篇：{data.detail.prec}</Link>}
        {data.detail.next !='' && <Link href={{pathname:'/tech',query:{id:Number(router.query.id)+1}}}>下一篇：{data.detail.next}</Link>}
      </div>
    </div>
  </div>
}

Tech.getInitialProps = async () => {
  return {};
}
export default Tech