import { useState } from 'react'
import Link from 'next/link'
import { store } from '../redux/store'
import MapComponent from './map';
export default function Footer(){
  const {common} = store.getState()
  const list = [
    // {img:common.imgURL+'footer/weixin-1.png',label:'黄经理',tel:'18852996299'},
    {img:common.imgURL+'footer/erweima.jpg',label:'杨小姐',tel:'18896965770'},
    // {img:common.imgURL+'footer/weixin-3.png',label:'朱小姐',tel:'18963650984'},
  ]
  const Item = list.map((item,i)=>{
    return <div key={i} className='contactWrap'>
      <img src={item.img} width={128} height={128}/>
      <div>
        <p>{item.label}</p>
        <p><a href={`tel:${item.tel}`} target='_blank'>{item.tel}</a></p>
      </div>
    </div>
  })
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
  return <footer>
    <div className="footerWrap main">
      <div className="footerL">
        <div className='footerL-l'>
          <img src={common.imgURL +'footer/logo-white.png'} width={240}/>
          <p style={{fontSize:'14px'}}>中库铝业(江苏)有限公司(简称“中库铝业”品牌)是中国铝行业一家真正意义的铝材现货库存大型企业，现有铝卷、铝板、铝棒、铝管、铝型材五大板块，各板块相互结合相互补充，精准判断市场态势，发挥“互联网+铝材”优势，积极开拓海外市场，大力发展跨境电商，在消化过剩产能的前提下提高产业链附加价值，带动铝材产业链升级、完善和发展，中库努力打造全产业链一体化商业模式。</p>
          <div className='map-wrap'><MapComponent/></div>
        </div>
        <p className='copyright'>
          江苏中库铝业集团有限公司 版权所有
          <br/>
          <a href='https://beian.mps.gov.cn/#/query/webSearch' target='_blank'>苏公网安备32059002005041号</a> &nbsp;
          <a href='https://beian.miit.gov.cn' target='_blank'>苏ICP备19073843号-1</a>
        </p>
        <div className='footerL-r'>
          {Item}
          <div className='footerR-list'>
            <div>
              <img src={common.imgURL+'footer/icon8.png'}/>
              <p><a href='/download' target='_blank'>资料下载</a></p>
            </div>
            <div>
              <img src={common.imgURL+'footer/icon7.png'}/>
              <p><a href='about' target='_blank'>走进中库</a></p>
            </div>
            <div>
              <img src={common.imgURL+'footer/icon9.png'}/>
              <p><a  target='_blank' href='https://b2b.baidu.com/shop?name=%E4%B8%AD%E5%BA%93%E9%93%9D%E4%B8%9A%E5%8F%91%E5%B1%95%28%E6%B1%9F%E8%8B%8F%29%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&xzhid=30558200&iswapurl=0&tpath=index&pi=b2b.c.dist-factory-desc...6243371654365578&category=%E5%8E%82%E5%AE%B6&fid=67567616%2C1737361272862&jid=5356132269453862&prod_type=92'>实力厂家</a></p>
            </div>
          </div>
          <div className='contact-text'>
            <p>地址：苏州工业园区唯亭镇双灯路2号</p>
            <p>销售热线：0512-62522398 0512-69158821</p>
            <p>业务传真：0512-62388198</p>
            <p>技术咨询：0512-62388298</p>
          </div>
        </div>
      </div>
      <div className="footerR">
        <h5>铝合金材料库存查询</h5>
        <p style={{margin:'10px 0'}}>*铝合金材料库存都是实时更新，具体以电话咨询为准</p>
        <div className='search'>
          <input type="search" maxLength='10'
            placeholder='请输入具体型号' 
            value={filed}
            onChange={e=>{changeField(e.target.value)}}
            onFocus={()=>setTips(true)}
            onBlur={()=>setTips(false)}
          />
          <input type="submit" value='搜索' onClick={()=>onSearch()}/>
          {istips && <p className="tips" style={{fontSize:'12px',color:'#bb030f',paddingLeft:'10px'}}>仅支持输入中文和数字</p>}
          {data.length > 0 && <div className="searchResult">
            {data.map((item,i)=>{
              return <p key={i}>
                <Link onClick={()=>setData([])} href={{pathname:'/product/detail',query:{detail:item.name}}} target='_blank'>{item.name}</Link>
              </p>
            })}
          </div>}
        </div>
        <div className='tagBox'>
          <img src={common.imgURL +'footer/tag1.png'} width={200}/>
          <img src={common.imgURL +'footer/tag2.png'} width={200}/>
          <img src={common.imgURL +'footer/tag3.png'} width={200}/>
          <img src={common.imgURL +'footer/tag4.png'} width={200}/>
          <img src={common.imgURL +'footer/tag5.png'} width={200}/>
        </div>
        <p className='copyright'>
          江苏中库铝业集团有限公司 版权所有
          <br/>
          <a href='https://beian.mps.gov.cn/#/query/webSearch' target='_blank'>苏公网安备32059002005041号</a> 
          <br/>
          <a href='https://beian.miit.gov.cn' target='_blank'>苏ICP备19073843号-1</a>
        </p>
      </div>
    </div>
    <p className='copyright-b'>
      江苏中库铝业集团有限公司 版权所有 &nbsp;
      <a href='https://beian.mps.gov.cn/#/query/webSearch' target='_blank'>苏公网安备32059002005041号 </a>
      <a href='https://beian.miit.gov.cn' target='_blank'>苏ICP备19073843号-1</a>
    </p>
    <div className='mobile-footer'>
      <div>
        <img src={common.imgURL + 'footer/home.png'} alt="首页"/>
        <p>首页</p>
        <a href={"/"}></a>
      </div>
      <div>
        <img src={common.imgURL + 'footer/intro.png'} alt="公司简介"/>
        <p>简介</p>
        <a href={"/about"}></a>
      </div>
      <div>
      <img src={common.imgURL + 'footer/product.png'} alt="产品中心"/>
        <p>产品</p>
        <a href={"/product"}></a>
      </div>
      <div>
        <img src={common.imgURL + 'footer/call.png'} alt="拨打电话"/>
        <p>拨打</p>
        <a href="tel:0512-62522398"></a>
      </div>
      <div>
        <img src={common.imgURL + 'footer/server.png'} alt="联系客服"/>
        <p>客服</p>
        <a target="_blank" href='https://html.ecqun.com/kf/sdk/openwin.html?corpid=11627559&cstype=rand&mode=0&cskey=kkd1a23CLKZMWrHPzz&scheme=0&source=100'></a>
      </div>
    </div>
  </footer>
}