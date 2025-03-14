'use client' // 客户端渲染时
import { store } from '../redux/store'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from '@/styles/index.module.scss'
import Title from '@/components/title'
import ProductList from '@/components/productList'
import IndexMapComponent from '@/components/indexMap'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const {common} = store.getState()
// console.log(common);

function HotProduct(){
  const data =[
    {title:'航空航天超硬铝',leble:'厚度零切 | 厂家现货 | 开平分条',product:['7075','7050','7A04','7A09'],cate:'铝板',serise:'7系列超硬铝合金'},
    {title:'交通运输精密加工',leble:'现货资源 | 批发零售 | 品质保障',product:['6061','6063','6082'],cate:'铝棒',serise:'6系列铝镁硅合金'},
    {title:'船舶装备汽车制造',leble:'轻质高强 | 容易加工 | 较耐腐蚀',product:['5052','5754','5083','5A05','5A06'],cate:'铝管',serise:'5系列铝镁合金'},
    {title:'建筑工程汽车制造',leble:'防腐保温 | 供应零切 | 支持定制',product:['3003','3A21'],cate:'铝型材',serise:'3系列铝锰合金'},
    {title:'军工装备汽车智造',leble:'厂家直发 | 量大优惠 | 多种规格',product:['2A12','2024','2017'],cate:'铝板',serise:'2系列航空铝'},
    {title:'工业纯铝环保防锈',leble:'坚固耐用 | 精工细作 | 品质保证',product:['1050','1060'],cate:'铝板',serise:'1系列纯铝'},
    {title:'军工品质中国质造',leble:'常备现货 | 任意定制 | 专业检测',product:['LC4','LC9','LF5','LF6','LY12'],cate:'铝型材',serise:'进口铝材系列'}
  ]
  const Item = data.map((item,i)=>{
    return <div key={i} className={styles.hotItem}>
      <h5>{item.title}</h5>
      <p>{item.leble}</p>
      <p className={styles.linkBox}>{item.product.map((list,l)=>{
        return <Link key={l} href={{pathname:'/product/detail',query:{detail:list+item.cate}}} target='_blank'>{list}</Link>
      })}</p>
      <span>{item.serise}</span>
      <img src={common.imgURL+'index/hot-'+(i+1)+'.png'}/>
    </div>
  })
  return <div className={[styles.hotProduct,'main'].join(' ')}>
    <div className={styles.hotFirst}>
      <p>ADVANTAGE----SHOW</p>
      <p>INDUSTRY EXPERIENCED</p>
      <p>厂家供应<br/>行业经验丰富</p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    {Item}
  </div>
}

function HotBottom(){
  const data =[
    {title:'海 量 数 据 ',list:['涵盖铝材所有类目','多维度产品技术参数','全品类产品技术手册']},
    {title:'便 捷 搜 索',list:['支持手机、平板移动搜索','提供个性化定制查找服务','实现参数、型号精准搜索']},
    {title:'实 时 数 据',list:['实时同步库存','每天更新新数据','即搜即得，毫秒搜索品技术手册']},
    {title:'一 站 式 采 购 ',list:['品类齐全 一站采购','原厂授权 正品保障','应用领域全品类覆盖']}
  ]
  const Item = data.map((item,i)=>{
    return <div key={i} className={styles.hotBottomI}>
      <img src={common.imgURL+'index/icon1-'+(i+1)+'.png'}/>
      <div>
        <b>{item.title}</b>
        {item.list.map((text,t)=>{
          return <p key={t}>{text}</p>
        })}
      </div>
    </div>
  })
  return <div className={styles.hotBottomWrap}>
    <div className={[styles.hotBottomM,'main'].join(' ')}>{Item}</div>
  </div>
}

function HotCate(){
  const data =[
    {hot:'热度前 7 的',cate:'铝板',link:'/inventory/spec#lvban',list:['超硬铝板','超宽铝板','特厚铝板','预拉伸铝板','亮面铝板','贴膜铝板','花纹铝板等'],color:'#31A1C2',bgc:'#F4FAFC'},
    {hot:'热度前 8 的',cate:'铝棒',link:'/inventory/spec#lvbang',list:['工业铝棒','挤压铝棒','合金铝棒','精拉铝棒','超硬铝棒','锻造铝棒','大直径铝棒','超国标铝棒'],color:'#0D09BA',bgc:'#F3F5FD'},
    {hot:'热度前 9 的',cate:'铝卷',link:'/inventory/spec#lvjuan',list:['超宽铝卷','保温铝卷','防锈铝卷','花纹铝卷','合金铝带','冲压铝带','拉伸铝带','铝卷开平','铝卷分条'],color:'#31A1C2',bgc:'#F4FAFC'},
    {hot:'热度前 8 的',cate:'铝管',link:'/inventory/spec#lvguan',list:['挤压铝管','无縫铝管','冷拔铝管','薄壁铝管','厚壁铝管','锻造铝管','大口径铝管','矩形方管'],color:'#0D09BA',bgc:'#F3F5FD'},
    {hot:'热度前 7 的',cate:'铝型材',link:'/inventory/spec#lvxingcai',list:['铝排','铝方棒','六角铝棒角铝','工业铝型材','支持来图来样','开模定制铝型材','可参观铝型材工厂'],color:'#016DCF',bgc:'#E3F0FC'},
  ]
  const Item = data.map((item,i)=>{
    return <div key={i} className={styles.cateItem} style={{backgroundImage:`url(${common.remoteURL}index/category${i+1}.png)`}}>
      <a href={item.link}  target='_blank'><div className={styles.cateItemT} style={{color:item.color}}>
        <span>{item.hot}</span>
        <h6>{item.cate}</h6>
      </div>
      <ul style={{backgroundColor:item.bgc}}>
        {item.list.map((row,r)=>{
          return <li key={r}>{r+1}. {row}</li>
        })}
      </ul>
      </a>
    </div>
  })
  return <div className={[styles.hotCate,'main'].join(' ')}>{Item}</div>
}

function Process(){
  const data = [
    {title:'大型切割加工锯床',li:'提供服务:中厚铝板、超厚铝板、花纹铝板、大直径铝棒、小直径铝棒、小口径铝管、大口径铝管、无缝铝管、矩形管、铝排、铝方棒、六角铝棒、角铝、铝槽、铝型材...'},
    {title:'分条开平加工设备',li:'提供服务:纯铝卷、合金铝卷、纯铝带合金铝带、超宽铝卷、超窄铝条、花纹铝卷、防锈铝卷、保温铝卷、铝板开平...'},
    {title:'激光切割加工设备',li:'提供服务:薄厚铝板、中厚铝板、花纹铝板、异形铝板、小口径铝管、大口径铝管、无缝铝管、矩形管、角铝、铝槽、铝型材...'},
    {title:'水刀切割加工设备',li:'提供服务:中厚铝板、超厚铝板、各种复杂异形铝板...'},
    {title:'大型铝件锻压设备',li:'提供服务:锻铝板、锻铝棒、锻铝饼、锻铝环、铝法兰、异型锻件、自由锻件、模锻件、碾环、大型铝锻件.'},
    {title:'精密加工设备',li:'提供服务:剪板加工、精切飞剪、!铝板覆膜、整平加工、变形校直、应力消除、精拉铝棒,精拉铝管、研磨铝棒、研磨铝管、冷拔铝棒、冷拔铝管、无缝轧制方管..'}
  ]
  const Item = data.map((item,i)=>{
    return <div key={i} className={styles.processItem}>
      <img src={common.imgURL+'index/icon2-'+(i+1)+'.png'}/>
      <div>
        <h6>{item.title}</h6>
        <p>{item.li}</p>
      </div>
    </div>
  })
  return <div className={[styles.processWrap,'main'].join(' ')}>{Item}</div>
}

function IndexMap(){
  const data = [
    {text:'24H',text2:'24小时内报价'},
    {text:'98%',text2:'复购率98%以上'},
    {text:'当天',text2:'现货直发'},
    {text:'95%',text2:'次日送达'},
    {text:'100%',text2:'合格率100%'},
    {text:'10000+家',text2:'全球客户数量'}
  ]
  const Item = data.map((item,i)=>{
    return <div key={i} className={styles.indexMapItem}>
      <img src={common.imgURL+'index/icon3-1-'+(i+1)+'.png'}/>
      <b>{item.text}</b>
      <p>{item.text2}</p>
    </div>
  })
  return <div className={[styles.indexMapMain,'main'].join(' ')}>
    <h4>弘扬工匠精神 · 打造东方品质</h4>
    <div className={styles.indexMapList}>{Item}</div>
  </div>
}

function Concert(){
  const item1 = [1,2,3,4,5,6,7,8,9,10].map((item,i)=>{
    return <div key={i} className={styles.concertItem}>
      <img src={common.imgURL+'index/partner'+item+'.png'} />
    </div>
  })
  const item2 = [11,12,13,14,15,16,17,18,19,20].map((item,i)=>{
    return <div key={i} className={styles.concertItem}>
      <img src={common.imgURL+'index/partner'+item+'.png'} />
    </div>
  })
  const item3 = [21,22,23,24,25,26,27,28,29,30].map((item,i)=>{
    return <div key={i} className={styles.concertItem}>
      <img src={common.imgURL+'index/partner'+item+'.png'} />
    </div>
  })
  return <div className={[styles.concertWrap,'main'].join(' ')}>
    <div className={[styles.concertList]}>
      <div className={[styles.concertRow,styles.rowRight].join(' ')}>
        {item1}{item1}
      </div>
    </div>
    <div className={styles.concertList}>
      <div className={[styles.concertRow,styles.rowLeft].join(' ')}>
        {item2}{item2}
      </div>
    </div>
    <div className={styles.concertList}>
      <div className={[styles.concertRow,styles.rowRight].join(' ')}>
        {item3}{item3}
      </div>
    </div>
  </div>
}
export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000
  };
  const [isShow,setShow] = useState(document.documentElement.clientWidth<1080?false:true)
  const [width,setWidth] = useState(document.documentElement.clientWidth)
  useEffect(()=>{
    window.addEventListener('resize',function(e){
      setWidth(document.documentElement.clientWidth)
      if(document.documentElement.clientWidth<1080){
        setShow(false)
      }else{
        setShow(true)
      }
    })
  },[width])
  const mapData =[
    {color:'#d81e06',text:'华东区域',list:['苏州','上海','南京','昆山','杭州','宁波','无锡','滁州','江阴','常州','嘉兴','青岛','济南','徐州','南昌','济宁']},
    {color:'#e16531',text:'华北区域',list:['天津','保定','廊坊','西安','沧州']},
    {color:'#efb336',text:'东北区域',list:['沈阳','大连','营口','长春']},
    {color:'#0e932e',text:'华中区域',list:['武汉','郑州','巩义','长沙']},
    {color:'#0b988f',text:'西北区域',list:['宁夏','兰州','西宁','银川']},
    {color:'#1195db',text:'西南区域',list:['重庆','成都']},
    {color:'#4f68b0',text:'华南区域',list:['东莞','深圳','南宁','海口']},
  ]
  return (
    <div className='content'>
      <div className={styles.bannerWrap}>
        <div className={[styles.bannerM,'main'].join(' ')}>
          {isShow && <ProductList path={'/'} />}
          <div className={styles.bannerC}>
            <div className="slider-container banner-container" >
              <Slider {...settings}>
                <div><img src={common.imgURL+'index/banner1-1.png'}/></div>
                <div><img src={common.imgURL+'index/banner2-1.png'}/></div>
                <div><img src={common.imgURL+'index/banner3-1.png'}/></div>
                <div><img src={common.imgURL+'index/banner4-1.png'}/></div>
                {/* <div><img src={common.imgURL+'index/banner5.png'}/></div> */}
              </Slider>
            </div>
            <div className={styles.bannerCMin}>
              <img src={common.imgURL+'index/banner-1.jpg'}/>
              <img src={common.imgURL+'index/banner-2.jpg'}/>
              <img src={common.imgURL+'index/banner-3.jpg'}/>
            </div>
          </div>
        </div>
      </div>
      <Title EN='HOT PRODUCTS' CH1='热门' TIP='铝材总览'/>
      <section> 
        <HotProduct/>
        <HotBottom/>
      </section>
      <Title EN='HOT CATEGORIES' CH1='热门' TIP='铝材类别'/>
      <section>
        <HotCate/>
      </section>
      <Title EN='ALUMINUM EXTRUSION' CH1='中库' TIP='加工中心'/>
      <section>
        <Process/>
      </section>
      <section className={styles.indexMapWrap}>
        <IndexMap/>
        <div className={styles.mapWrap}>
          <IndexMapComponent/>
          <div className={styles.mapListWrap}>
            <h4 style={{fontWeight:'bold'}}>全国库存网点分布图</h4>
            <p>中国内地已覆盖城市40+，服务范围不断扩展中...</p>
            {mapData.map((item,i)=>{
              return <div key={i} className={styles.textItem}>
                <h4 style={{color:item.color}}><span>-</span>{item.text}</h4>
                <p>{item.list.map((list,l)=>{
                  return <span key={l}>{list} </span>
                })}</p>
              </div>
            })}
          </div>
        </div>
        <div className=''></div>
      </section>
      <Title EN='GLOBAL STRATEGIC PAPTNER' CH1='全球' TIP='战略合作' CH2='伙伴'/>
      <Concert/>
    </div>
  )
}
