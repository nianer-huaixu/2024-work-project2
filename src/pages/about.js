import Link from 'next/link'
import { store } from '../redux/store'
import Banner from '@/components/banner'
import Title from '@/components/title'
import styles from "@/styles/about.module.scss"

const {common} = store.getState()

function Cyc(){
  const cycData = [
    {id:0,img:common.imgURL+'/about/cyc0.png',title:'7075铝管无缝铝管的生产和注意事项大家知道多少？',content:' 7075铝管是普通民用铝合金管中硬度和强度最高的，机械加工性能好，广泛用于各种机械零部件、压力管道、户外用品、体育用品、夹具、五金产品、电子、电器等。本文简要介绍了7075无缝铝管的加工技术及加工过程中的考虑因素。',
      content2:'7075铝管是光滑铝管，一般采用穿孔挤压方法，因为光滑铝管比重小，容易加工，机械强度大，实际上光滑铝管的制作过程要求比较严格和细致。但是制作时要注意几个问题，才能生产出质量过关的光滑铝管。我将与大家分享在顺利制作铝管过程中需要注意的问题和一些成功的实际经验。'},
    {id:1,img:common.imgURL+'/about/cyc1.png',title:'到底是什么因素影响了7075铝棒的价格',content:'7075铝棒是广泛使用的超高强度航空铝棒材料，7075铝棒规格范围一般为4毫米-500毫米，可分为7075-T6铝棒、7075-T6511铝棒、7075-O铝棒...'},
    {id:2,img:common.imgURL+'/about/cyc2.png',title:'今天来看一下锻打7075铝棒的性能特点及其使用',content:' 锻炼7075铝棒，其状态为T652，其规格一般在200毫米以上，相应的是挤压7075铝棒，其状态为T6511和T6。量子化学成分基本一致...'},
    {id:3,img:common.imgURL+'/about/cyc3.png',title:'今天咱们来看看处理铝板不着色的原因及方法',content:'伴随着生产技术的未来发展趋势，铝棒用来大家在日常生活中的分量变得越来越高，色彩层面也并不像之前那样简单了。即使近年...'},
    {id:4,img:common.imgURL+'/about/cyc4.png',title:'铝及铝合金性能的突出特点',content:'物质的用途在很大程度上取决于物质的性质。因为铝有多种优良性能，所以铝有着极为广泛的用途...'},
    {id:5,img:common.imgURL+'/about/cyc5.png',title:'铝型材精益管表面的凹凸波纹是如何产生的以及消除方法',content:'随着工业自动化的出现，行业对生产材料的精度要求也越来越高，铝型材精益管的诞生，将生产工序和材料同时达到简化，符合现代工业对精益生产的严格要求...'},
    {id:6,img:common.imgURL+'/about/cyc6.png',title:'5052铝板实现汽车“高能耗”向“低排放”的转变',content:'汽车轻量化的大幕已经拉开，铝合金汽车零部件的渗透率不断扩大。相关数据显示，在2015年，汽车车身和覆盖件中铝合金的市场渗透率仅为...'},
    {id:7,img:common.imgURL+'/about/cyc7.png',title:'无缝铝管和组合模挤压铝管有何区别？',content:'市面上的铝管大部都是采用常规组合模焊合挤压工艺生产，无法完全避免焊合线，特别是氧化后容易有暗线。挤压生产中采用短圆棒、高温、慢速的挤压工艺...'},
    {id:8,img:common.imgURL+'/about/cyc8.png',title:'6061合金铝板在汽车底盘的应用',content:'底盘即车辆的车底主框架。所有车辆的动力部分，包括引擎、车轴、变速箱、差动器等以及悬挂系统都安装于底盘上...'}
  ]
  const CycItem = cycData.map((item,i)=>{
    if(i>0) return <div key={i} className={styles.cycItem}>
      <img src={item.img}/>
      <div>
        <h6>{item.title}</h6>
        <p>{item.content}</p>
        <Link href={{pathname:'/tech',query:{id:item.id}}} target='_blank'>详情 »</Link>
      </div>
    </div>
  })
  return <div className={[styles.cycMain,'main'].join(' ')}>
    <Link  href={{pathname:'/tech',query:{id:0}}} className={styles.cycFirst} target='_blank'>
      <img src={common.imgURL+'/about/cyc0.png'}/>
      <div>
        <h6>{cycData[0].title}</h6>
        <p>{cycData[0].content}</p>
        <p>{cycData[0].content2}</p>
      </div>
    </Link>
    <div className={styles.cycItemWrap}>{CycItem}</div>
  </div>
}
export default function About(){
  const intoData = [
    {b:'130',span:'亩',p:'库存总占地面积'},
    {b:'14',span:'亿',p:'全围库存总投资额'},
    {b:'40',span:'个',p:'库存直销分点'},
    {b:'300',span:'台',p:'设备超300台'},
    {b:'300',span:'名',p:'在职销售人员300名'},
    {b:'12',span:'万吨',p:'年出货量12万吨'}
  ]
  return <div>
    <Banner url='about.png'/>
    <div className={styles.anchor}>
    <p>
      <a href='#inzhongku'>走进中库</a>
      <a href='#strength'>强大实力</a>
      <a href='#partners'>合作伙伴</a>
      <a href='#cyc'>技术百科</a>
    </p>
    </div>
    <div className='upwards' id='into'></div>
    <section className={[styles.into,'main'].join(' ')}>
      <div className={styles.intoL}>
        <h6>公司介绍</h6>
        <p>
          中库铝业(江苏)有限公司(简称“中库铝业”品牌)是中国铝行业一家真正意义的铝材现货库存大型企业，现有铝卷、铝板、铝棒、铝管、铝型材五大板块，各板块相互结合相互补充，精准判断市场态势，发挥“互联网+铝材”优势，积极开拓海外市场，大力发展跨境电商，在消化过剩产能的前提下提高产业链附加价值，带动铝材产业链升级、完善和发展，中库努力打造全产业链一体化商业模式。<br></br>
          顺应现代铝材、工业制造和全球化采购发展大趋势，中库以“中库铝业ZKLY”为发展战略，将“中库铝业”作为餐慧铝材和工业应用的载体，实现企业对内与对外的全球化应用与服务。
        </p>
        <img src={common.imgURL +'about/1-2.png'}/>
        <p>
          我们的宗旨是做全国最全的铝材现货直销商，为了降低各个领域新客户的开发成本和四处找货的问题，节省采购铝材多重环节，大大提高铝材品种配备、少量生产、各种加工、快速交货的一站式服务。“中库铝业”铝材现货通过开展深入营销和服务，短短几年的时间聚集了行业内最庞大的供需用户群和最专业的技术论坛专家，成为铝材行业最有价值的营销平台和最高人气、最高水准的交流平台，得到国内外众多供应商、采购商的关注和重视。<br></br>
          中库铝业汇集了一批长期奋战在铝商一线的英才，每天与铝厂、铝贸商和终端用户保持密切联系，确保方便能够为铝材用户提供优质的产品服务。享誉全国的现代综合性全铝服务企业，拥有“裁剪、分条、开平、切割、表面处理、机加工”6大加工平台。<br></br>
          中库铝业铝合金材料库存资源达3万余吨:常备现货:铝卷、铝板、花纹铝板、铸造铝板、锻造铝板,铝圆棒、铝六角棒、铝方棒、铝排、铝圆管、铝方管、无缝铝管、角铝、槽铝、铝型材等...
        </p>
      </div>
      <img className={styles.intoR} src={common.imgURL +'about/1-1-1.png'}/>
    </section>
    <div className={[styles.intoF,'main'].join(' ')}>
      {intoData.map((item,i)=>{
        return <div key={i}>
          <img src={common.imgURL + 'about/icon-' + (i+1)+'.png'}/>
          <p><b>{item.b}</b><span>{item.span}</span></p>
          <p>{item.p}</p>
        </div>
      })}
    </div>
    <div className={styles.visionWrap}>
      <div className='main'>
        <h6>我们的愿景</h6>
        <p>让全球工业都用上中国质造的中库产品，致力于成为业界尊重的中国库存分销企业，中库将为全国制造业发展贡献自己的力量，集全铝，大资源让你在制造行业中游刃有余！</p>
      </div>
    </div>
    <div className='upwards' id='strength'></div>
    <Title EN='POWERFUL STRENGTH' CH1='强大' TIP='实力'/>
    <section className={[styles.strength,'main'].join(' ')}>
      <div className={styles.facilityGrid1}>
        <div>
          <img src={common.imgURL+'about/2-1.png'}/>
          <span>金相显微镜</span>
        </div>
        <div>
          <img src={common.imgURL+'about/2-2.png'}/>
          <span>大型数控切割铝棒带锯床</span>
        </div>
        <div>
          <img src={common.imgURL+'about/2-3.png'}/>
          <span>表面检测仪</span>
        </div>
      </div>
      <div className={styles.facilityGrid2}>
        <div>
          <img src={common.imgURL+'about/2-4.png'}/>
          <span>铝板切割加工</span>
        </div>
        <div>
          <img src={common.imgURL+'about/2-5.png'}/>
          <span>切割车间</span>
        </div>
        <div>
          <img src={common.imgURL+'about/2-6.png'}/>
          <span>铝卷开平</span>
        </div>
        <div>
          <img src={common.imgURL+'about/2-7.png'}/>
          <span>液压切割</span>
        </div>
      </div>
      <div className={[styles.strengthBottom,'main'].join(' ')}>
        <h6>我们的产品荣获多项权威检验资质认证</h6>
        <ul>
          <li>ROHS认证</li>
          <li>SGS检测</li>
          <li>IS09001认证</li>
        </ul>
        <img src={common.imgURL+'about/2-8-1.png'}/>
      </div>
    </section>
    <div className='upwards' id='partners'></div>
    <Title EN='STRATEGIC PAPTNER' CH1='战略' TIP='合作伙伴'/>
    <section className={styles.partnersWrap}>
      <div className={[styles.partners,'main'].join(' ')}>
        <h6>部分战略合作伙伴展示</h6>
        <span>PRESENTATION OFSOME STRATEGIC PARTNERS</span>
        <div className={styles.partnersBow}>
          <img src={common.imgURL+'about/partner1.png'}/>
          <img src={common.imgURL+'about/partner2.png'}/>
          <img src={common.imgURL+'about/partner3.png'}/>
          <img src={common.imgURL+'about/partner4.png'}/>
          <img src={common.imgURL+'about/partner5.png'}/>
          <img src={common.imgURL+'about/partner6.png'}/>
          <img src={common.imgURL+'about/partner7.png'}/>
          <img src={common.imgURL+'about/partner8.png'}/>
          <img src={common.imgURL+'about/partner9.png'}/>
          <img src={common.imgURL+'about/partner10.png'}/>
          <img src={common.imgURL+'about/partner11.png'}/>
        </div>
        <p><i>———&nbsp;&nbsp;&nbsp;&nbsp;</i>我们不仅仅是工厂&nbsp;&nbsp;&nbsp;&nbsp;更是您身后强大的源头供应链<i>&nbsp;&nbsp;&nbsp;&nbsp;———</i></p>
      </div>
    </section>
    <div className='upwards' id='cyc'></div>
    <Title EN='TECHNIGAL ENCYCLOPEDIA' CH1='技术' TIP='百科 '/>
    <section className={styles.cycWrap}><Cyc/></section>
  </div>
}