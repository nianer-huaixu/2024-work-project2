import { useState } from 'react'
import Link from 'next/link'
import { store } from '../redux/store'

import styles from '../styles/product.module.scss'

export default function ProductSearch(){
	const [data,setData] = useState([])
	const [filed,setField] = useState('')
	const [istips,setTips] = useState(false)

	const getData = async()=>{
		try{
			const response = await fetch('/api/searchAPI',{
				method:'POST',
				headers:{'Content-Type':'application/json'},
				body:JSON.stringify({field:filed})
			})
			const res = await response.json()
			// console.log(res);
			setData(res.data)
		}catch(err){}
	}
	function onSearch(){
		getData()
	}
// 验证输入field是否合法
function changeField(value){
	if(value){
		setField(value.replace(/[^\w\u4E00-\u9FA5]/g,''))
	}else{
		setField('')
		setData([])
	}
}
return <div className={styles.productTopBox}>
	<div className={styles.productTop}>
		<p className={styles.prompt}>
			<span>快速查找：</span>
			{
				store.getState().common.prompt.map((item,i)=>{
					return <Link key={i} href={{pathname:'/product/detail',query:{detail:item}}}>{item}</Link>
				})
			}
		</p>
		<div className={styles.search}>
			<input type="search" maxLength='10'
				placeholder='请输入具体型号' 
				value={filed}
				onChange={e=>{changeField(e.target.value)}}
				onFocus={()=>setTips(true)}
				onBlur={()=>setTips(false)}
			/>
			<input type="submit" value='搜索' onClick={()=>onSearch()}/>
			{istips && <p className={styles.tips} style={{fontSize:'12px',color:'#bb030f',paddingLeft:'10px'}}>仅支持输入中文和数字</p>}
			{data.length > 0 && <div className={styles.searchResult}>
				{data.map((item,i)=>{
					return <p key={i}>
						<Link onClick={()=>setData([])} href={{pathname:'/product/detail',query:{detail:item.name}}}>{item.name}</Link>
					</p>
				})}
			</div>}
		</div>
	</div>
</div>
}