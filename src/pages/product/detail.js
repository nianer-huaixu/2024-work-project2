import { useState,useEffect } from 'react'
import { useRouter } from "next/router"
import Link from 'next/link'
import Banner from '@/components/banner'
import ProductSearch from "@/components/productSearch"
import ProductCom from '@/components/puductCom'
import styles from "@/styles/product.module.scss"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function ProductDetail(props){
	const {data,product} = props
	// console.log(data,product,'props');
	const lastDigitIndex = product.search(/\d(?=\D*$)/);
	let imgListArr = []
	for(let i = 1;i<=data.amount;i++){
		imgListArr.push(`https://www.yangdong.co:443/${product.slice(lastDigitIndex + 1)}/${product.slice(0, lastDigitIndex + 1)}/${i}.jpg`)
	}
	// console.log(imgListArr);
	const [currImg,setImg] = useState(0)
	// console.log(currImg);
	let small_div = document.getElementById("small_div")
	let move_div = document.getElementById("move_div")
	let big_img = document.getElementById("big_img")

	function onmousemove(e){
		if(e.view.innerWidth>=1400){
			let x = e.pageX - small_div.offsetWidth - move_div.offsetWidth / 2 + 400;
			let y = e.pageY - small_div.offsetHeight - move_div.offsetHeight / 2 - 300;

			if (x > small_div.offsetWidth - move_div.offsetWidth) {
				x = small_div.offsetWidth - move_div.offsetWidth;
			} else if (x < 0) {
				x = 0;
			}
			// 处理上下边界
			if (y > small_div.offsetHeight - move_div.offsetHeight) {
				y = small_div.offsetHeight - move_div.offsetHeight;
			} else if (y < 0) {
				y = 0;
			}
			// 放大镜移动
			move_div.style.left = x + "px";
			move_div.style.top = y + "px";
			
			// 被放大的图片移动，放大镜右移时图片左移
			// x : 450 = ? : 800
			big_img.style.left = -x * big_img.offsetWidth / small_div.offsetWidth + "px";
			big_img.style.top = -y * big_img.offsetHeight / small_div.offsetHeight + "px";
		}else{
			setIsDivShow(false)
		}
	}
	const [isDivShow, setIsDivShow] = useState(false)
	const smallImgMouseOver = () => {
		setIsDivShow(true)
	}
	const smallImgMouseLeave = () => {
		setIsDivShow(false)
	}
	// 点击选中图片
	function selectImg(index){
		setImg(index)
	}
	const settings = {
		dots: false,
		infinite: true,
		autoplay:false,//禁止主动播放
		// speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows:imgListArr.length == 4 ? false :true,
	};
	useEffect(()=>{
		setImg(0)//对每次产品切换，图片索引重置为
	},[product])
	return (
		<div className={styles.productDetail1}>
			<div className={styles.productImgWrap}>
				<div id='box'>
					<div id='small_div'
						onMouseMove={(event)=>onmousemove(event)}
						onMouseOver={()=>smallImgMouseOver()}
						onMouseOut={()=>smallImgMouseLeave()}>
						<div id='small_id'>
							<img src={imgListArr[currImg]} id='small_img'/>
							<div id='move_div' style={{display: (isDivShow) ? 'block' : 'none'}}></div>
						</div>
					</div>
					<div id='big_div' style={{display: (isDivShow) ? 'block' : 'none'}}>
						<img src={imgListArr[currImg]} id='big_img'/>
					</div>
				</div>
				<div className={styles.productImgList}>
					<div>
						<div className='slider-container product-slider'>
						<Slider {...settings}>
							{imgListArr.map((item,i)=>{
								return <div key={i} 
								className={currImg == i? 'active' :' '}
								// style={{border:currImg == i ?'1px solid #bb030f' :'1px solid #ccc'}}
									onClick={()=>selectImg(i)}
								>
									<img src={item}/>
								</div>
							})}
						</Slider>
						</div>
					</div>
				</div>
		</div>

		<div className={styles.produceParamWrap}>
			<h6>{data?.name + " " + data?.classes}</h6>
			{data?.old_name!=='null' && <h6 style={{lineHeight:'.225rem',margin:0}}>{data?.old_name}</h6>}
			<p style={{marginTop:'.0625rem'}}>铝材类别：{data?.classes}</p>
			<p>{data?.refer1}</p>
			{data?.refer2 != 'null' && <p>{data?.refer2}mm</p>}
			{data?.refer3 != 'null' && <p>长度: {data?.refer3}mm</p>}
			<p>硬度: {data?.stiffness}（不同规格及状态数值会有差异）</p>
			<p>全国库存量: ≈100000KG</p>
			<p>优势: 大存量，全国送，闪电发，保质量，价格低</p>
			<p>物流: 当天发货，送货上门</p>
			<p>加工: 按客户需求加工定制</p>
			<p className={styles.productParamList1}>
					{/* <a><Image src={pdfIcon} alt='icon'/>产品手册</a>
					<a><Image src={videoIcon} alt='icon'/>视频介绍</a>
					<a><Image src={badgeIcon} alt='icon'/>服务与支持</a> */}
			</p>
			<p className={styles.productParamBtnGroup}>
					<button className='redBtn'><a  target="_blank" href='https://html.ecqun.com/kf/sdk/openwin.html?corpid=11627559&cstype=rand&mode=0&cskey=kkd1a23CLKZMWrHPzz&scheme=0&source=100'>立即询价</a></button>
					<button className='whiteBtn' style={{marginLeft:'.125rem'}}><Link href='/contact'>联系我们</Link></button>
			</p>
		</div>
	</div>
)}
function Introduction(props){
	const {kinds,criterion,status} = props.data
	return <div className={styles.introduction}>
		<table border={0} className={styles.productTableW}>
		<tbody>
			<tr>
				<th>产品种类</th>
				{kinds && kinds.split(',').map((item,i)=>{return <td key={i}>{item}</td>})}
			</tr>
			<tr>
				<th>生产标准</th>
				{criterion && criterion.split(',').map((item,i)=>{return <td key={i}>{item}</td>})}
			</tr>
			<tr>
				<th>供货状态</th>
				{status && status.split(',').map((item,i)=>{return <td key={i}>{item}</td>})}
			</tr>
		</tbody>
	</table>
	<div className={styles.introductionDiv}>
			<ul>
				<p>产品种类</p>
				{kinds && kinds.split(',').map((item,i)=>{return <li key={i}>{item}</li>})}
			</ul>
			<ul>
				<p>生产标准</p>
				{criterion && criterion.split(',').map((item,i)=>{return <li key={i}>{item}</li>})}
			</ul>
			<ul>
				<p>供货状态</p>
				{status && status.split(',').map((item,i)=>{return <li key={i}>{item}</li>})}
			</ul>
		</div>
	</div>
}
function Chemical(props){
	const {data} = props
	return <div>
		<table border={0} className={styles.productTableW}>
			<thead>
				<tr>
					<th colSpan={2}>合金牌号</th>
					<th>硅Si</th>
					<th>铁Fe</th>
					<th>铜Cu</th>
					<th>锰Mn</th>
					<th>镁Gg</th>
					<th>铬Cr</th>
					<th>锌Zn</th>
					<th>钛Ti</th>
					<th>锆Zr</th>
					<th>镍Ni</th>
					<th colSpan={2}>其他</th>
					<th>铝Al</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>新牌号</td>
					<td>旧牌号</td>
					<td rowSpan={2}>{data.si}</td>
					<td rowSpan={2}>{data.fe}</td>
					<td rowSpan={2}>{data.cu}</td>
					<td rowSpan={2}>{data.mn}</td>
					<td rowSpan={2}>{data.gg}</td>
					<td rowSpan={2}>{data.cr}</td>
					<td rowSpan={2}>{data.zn}</td>
					<td rowSpan={2}>{data.ti}</td>
					<td rowSpan={2}>{data.zr}</td>
					<td rowSpan={2}>{data.ni}</td>
					<td>每个</td>
					<td>总量</td>
					<td rowSpan={2}>{data.al}</td>
				</tr>
				<tr>
				<td>{data.new_mark}</td>
				<td>{data.old_mark}</td>
				<td>{data.each}</td>
				<td>{data.amount}</td>
				</tr>
			</tbody>
		</table>
		<table border={0} className={styles.productTableM}>
			<tbody>
				<tr>
					<th rowSpan={2}>合金牌号</th>
					<td>新牌号</td>
					<td>旧牌号</td>
				</tr>
				<tr>
					<td>{data.new_mark}</td>
					<td>{data.old_mark}</td>
				</tr>
				<tr>
					<th>硅Si</th>
					<td colSpan={2}>{data.si}</td>
				</tr>
				<tr>
					<th>铁Fe</th>
					<td colSpan={2}>{data.fe}</td>
				</tr>
				<tr>
					<th>铜Cu</th>
					<td colSpan={2}>{data.cu}</td>
				</tr>
				<tr>
					<th>锰Mn</th>
					<td colSpan={2}>{data.mn}</td>
				</tr>
				<tr>
					<th>镁Gg</th>
					<td colSpan={2}>{data.gg}</td>
				</tr>
				<tr>
					<th>铬Cr</th>
					<td colSpan={2}>{data.cr}</td>
				</tr>
				<tr>
					<th>锌Zn</th>
					<td colSpan={2}>{data.zn}</td>
				</tr>
				<tr>
					<th>钛Ti</th>
					<td colSpan={2}>{data.ti}</td>
				</tr>
				<tr>
					<th>锆Zr</th>
					<td colSpan={2}>{data.zr}</td>
				</tr>
				<tr>
					<th>镍Ni</th>
					<td colSpan={2}>{data.ni}</td>
				</tr>
				<tr>
					<th rowSpan={2}>其他</th>
					<td>每个</td>
					<td>总量</td>
				</tr>
				<tr>
					<td>{data.each}</td>
					<td>{data.amount}</td>
				</tr>
				<tr>
					<th>铝Al</th>
					<td colSpan={2}>{data.al}</td>
				</tr>
			</tbody>
		</table>
	</div>
}
function Physical(props){
	const {data} = props
	return <div>
		<table border={0} className={styles.productTableW}>
			<thead>
				<tr>
					<th>铝合金牌号及状态<br></br>(参考值)</th>
					<th>热膨胀系数<br></br>(20-100°C)μm/m·k </th>
					<th>熔点范围<br></br>(°C)</th>
					<th>电导率<br></br>20°C(68°F)(%IACS)</th>
					<th>电阻率<br></br>20°C(68*F) Ωmm2/m</th>
					<th>密度<br></br>(20°C)(g/cm3)</th>
				</tr>
		</thead>
		<tbody>
			<tr>
				<td>{data.refer}</td>
				<td>{data.coefficent}</td>
				<td>{data.melting}</td>
				<td>{data.conductance}</td>
				<td>{data.electrical}</td>
				<td>{data.density}</td>
			</tr>
			</tbody>
		</table>
		<table border={0} className={styles.productTableM}>
			<tbody>
				<tr>
					<th>铝合金牌号及状态(参考值)</th>
					<td>{data.refer}</td>
				</tr>
				<tr>
					<th>热膨胀系数(20-100°C)μm/m·k</th>
					<td>{data.coefficent}</td>
				</tr>
				<tr>
					<th>熔点范围(°C)</th>
					<td>{data.melting}</td>
				</tr>
				<tr>
					<th>电导率20°C(68°F)(%IACS)</th>
					<td>{data.conductance}</td>
				</tr>
				<tr>
					<th>电阻率20°C(68*F) Ωmm2/m</th>
					<td>{data.electrical}</td>
				</tr>
				<tr>
					<th>密度(20°C)(g/cm3)</th>
					<td>{data.density}</td>
				</tr>
			</tbody>
		</table>
	</div>
}
function Mechanical(props){
	const {data} = props
	return <div>
		<table border={0} className={styles.productTableW}>
			<thead>
				<tr>
					<th>铝合金牌号及状态<br></br>（参考值）</th>
					<th>抗拉强度<br></br>Rm/Mpa</th>
					<th>屈服强度<br></br>Rp0.2/Mpa</th>
					<th>延伸率/%</th>
					<th>硬度/HBWa</th>
				</tr>
		</thead>
		<tbody>
				<tr>
					<td>{data.refer}</td>
					<td>{data.resist}</td>
					<td>{data.surrender}</td>
					<td>{data.extend}</td>
					<td>{data.hardness}</td>
				</tr>
			</tbody>
		</table>
		<table border={0} className={styles.productTableM}>
			<tbody>
				<tr>
					<th>铝合金牌号及状态(参考值)</th>
					<td>{data.refer}</td>
				</tr>
				<tr>
					<th>抗拉强度Rm/Mpa</th>
					<td>{data.resist}</td>
				</tr>
				<tr>
					<th>屈服强度Rp0.2/Mpa</th>
					<td>{data.surrender}</td>
				</tr>
				<tr>
					<th>延伸率/%</th>
					<td>{data.extend}</td>
				</tr>
				<tr>
					<th>硬度/HBWa</th>
					<td>data.hardness</td>
				</tr>
			</tbody>
		</table>
	</div> 
}
function Typical(props){
	const {data} = props
	return <div className={styles.typical}>
		<span>{data.title}，主要特征及应用范围：</span>
		<p>{data.introduce}</p>
		<span>典型用途：</span>
		<p>{data.typeuse}</p>
	</div>
}
function Product(){
	const router = useRouter();
	// console.log(router.query);
	const {detail} = router.query
	// console.log(detail,'detail');
	const [data,setData] = useState({productMain:{},intro:{},chemical:{},physics:{},mechanical:{},use:{}})
	useEffect(() => {
			fetchData()
	}, [detail])
	const fetchData = async () => {
		try {
			const response = await fetch('/api/productAPI',{
				method:'POST',
				headers:{'Content-Type':'application/json'},
				body:JSON.stringify({name:detail})
			})
			const res = await response.json()
			// console.log(res)
			setData(res)
			// console.log(data);
		} catch (err) {
			console.error(err)
		}
	}
	return (
		<main>
			<Banner url='product.png'/>
			<div className={[styles.productMain,'main'].join(' ')}>
				<div className={styles.productC}>
					<div className={styles.productBox}>
						<ProductSearch/>
						<h3 className={styles.productBoxTitle}>
							<b>产品参数</b>
						</h3>
						<ProductDetail data={data.productMain} product={detail}/>
						<p className={styles.anchorBox}>
							<a href='#productintro'>产品简介</a>
							<a href='#chemical'>化学成分</a>
							<a href='#physical'>物理性能</a>
							<a href='#property'>机械性能</a>
							<a href='#typical'>典型用途</a>
							<a href='#ouradvantage'>我们的优势</a>
							<a href='#strength'>公司实力</a>
						</p>
						<div className='upwards' id='productintro'></div>
						<h5 className={styles.anchor}>产品简介 Product Brief Introduction</h5>
						<Introduction data={data.intro}/>
						<div className='upwards' id='chemical'></div>
						<h5 className={styles.anchor}>化学成分 Chemical Composition </h5>
						<Chemical data={data.chemical}/>
						<div className='upwards' id='physical'></div>
						<h5 className={styles.anchor}>物理性能 Physical Properties</h5>
						<Physical data={data.physics}/>
						<div className='upwards' id='property'></div>
						<h5 className={styles.anchor}>机械性能 Mechanical Property</h5>
						<Mechanical data={data.mechanical}/>
						<div className='upwards' id='typical'></div>
						<h5 className={styles.anchor}>典型用途 Typical Use</h5>
						<Typical data={data.use}/>
						<div className='upwards' id='ouradvantage'></div>
					</div>
				</div>
			</div>
			<ProductCom/>
		</main>
	)
}
// 用于解决动态路由刷新丢失bug
Product.getInitialProps = async () => {
    return {};
}
export default Product