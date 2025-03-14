import { Player } from 'video-react'

import Title from "@/components/title"
import Banner from '@/components/banner'
import { store } from '../redux/store'
import styles from '@/styles/porcess.module.scss'
import "node_modules/video-react/dist/video-react.css";
const {common} = store.getState()

export default function Process(){
  const iconData = [
    {icon:common.imgURL+'process/icon1-1.png',text1:'多种规格',text2:'种类丰富齐全'},
    {icon:common.imgURL+'process/icon1-2.png',text1:'质量可靠',text2:'用心选材质量好'},
    {icon:common.imgURL+'process/icon1-3.png',text1:'厂家直销',text2:'无中间商赚差价'},
    {icon:common.imgURL+'process/icon1-4.png',text1:'交期准时',text2:'按期交货 售后及时'},
    {icon:common.imgURL+'process/icon1-5.png',text1:'支持定制',text2:'来图来样定制'}
  ]
  const process2Data = [
    {img:common.imgURL+'process/2-1-1.png',title:'行业经验丰富',en:'Rich industry experience',li1:'研发团队:具备一直强大的技术团队，加工经验均具备10多年生产经验沉淀，满足行业的不同需求',li2:'经验丰富:多年加工定制经验，解决多个待业加工定制需求，在技术上不断创新提升，得到客户认可'},
    {img:common.imgURL+'process/2-2-1.png',title:'机器设备精良',en:'Excellent machinery and equipment',li1:'工厂实力:设备配套完善，多台数控加工设备数控钻孔机、大型锯床、冲床等，供货能力大大提高',li2:'应用范围广泛:主营铝合金型材挤压、异型材数控加工、工业型材加工、新能源电池托盘(外壳)汽车零配件精加工等'},
    {img:common.imgURL+'process/2-3-1.png',title:'严格把控质量',en:'Control product quality from details',li1:'专业检测:批量生产时，原材料进行10%检测，首件加工完成后，质检立即对产品进行全面测量，产品达标才出库',li2:'诚信共赢:公司以合理的价格，完善的售后服务:可靠的产品质量赢得了广大客户的的信任和合作'},
    {img:common.imgURL+'process/2-4-1.png',title:'一站式加工定制',en:'One-stop processingcustomization',li1:'专业定制:集开模、挤压、深加工表面处理等一站式铝合金非标定制服务',li2:''}
  ]
  const videoList =[
    {
      title:'铝板切割',
      src:'https://www.yangdong.co:443/video/%E9%93%9D%E6%9D%BF%E5%88%87%E5%89%B2.mp4'},
    {
      title:'铝卷分切',
      src:'https://www.yangdong.co:443/video/%E5%88%86%E5%88%87.mp4'
    },{
      title:'铝卷分条',
      src:'https://www.yangdong.co:443/video/%E5%88%86%E6%9D%A1.mp4'
    },{
      title:'机械加工-铣',
      src:'https://www.yangdong.co:443/video/%E6%9C%BA%E6%A2%B0%E5%8A%A0%E5%B7%A5-%E9%93%A3.mp4'
    },{
      title:'激光切割',
      src:'https://www.yangdong.co:443/video/%E6%BF%80%E5%85%89%E5%88%87%E5%89%B2.mp4'
    },{
      title:'挤压',
      src:'https://www.yangdong.co:443/video/%E6%8C%A4%E5%8E%8B.mp4'
    },{
      title:'剪板',
      src:'https://www.yangdong.co:443/video/%E5%89%AA%E6%9D%BF.mp4'
    },{
      title:'铝板分切',
      src:'https://www.yangdong.co:443/video/%E9%93%9D%E6%9D%BF%E5%88%86%E5%88%87.mp4'
    },{
      title:'铝板覆膜',
      src:'https://www.yangdong.co:443/video/%E9%93%9D%E6%9D%BF%E8%A6%86%E8%86%9C.mp4'
    },{
      title:'铝板整平',
      src:'https://www.yangdong.co:443/video/%E9%93%9D%E6%9D%BF%E6%95%B4%E5%B9%B3.mp4'
    },{
      title:'铝棒切割',
      src:'https://www.yangdong.co:443/video/%E9%93%9D%E6%A3%92%E5%88%87%E5%89%B2.mp4'
    },{
      title:'铝件锻造',
      src:'https://www.yangdong.co:443/video/%E9%93%9D%E4%BB%B6%E9%94%BB%E9%80%A0.mp4'
    },{
      title:'喷涂',
      src:'https://www.yangdong.co:443/video/%E5%96%B7%E6%B6%82.mp4'
    },{
      title:'水刀切割',
      src:'https://www.yangdong.co:443/video/%E6%B0%B4%E5%88%80%E5%88%87%E5%89%B2.mp4'
    },{
      title:'锯切',
      src:'https://www.yangdong.co:443/video/%E9%94%AF%E5%88%87.mp4'
    }
  ]
  const process4Data = [
    {text:'需求沟通'},
    {text:'选材试样'},
    {text:'方案确定'},
    {text:'详细报价'},
    {text:'签订合同'},
    {text:'加工定制'},
    {text:'物流配送'}
  ]
  const process2Ffdata =[
    {img:common.imgURL + 'process/3-1.png',text:'切铝板 | 切铝棒 | 切铝管 | 切铝型材 | 单件切割 | 批量切割 | 定尺切割 | 损耗小'},
    {img:common.imgURL + 'process/3-2.png',text:'铝板裁剪 | 定尺剪板 | 定尺生产 | 精准数控 | 高效率 | 零损耗成本低'},
    {img:common.imgURL + 'process/3-3.png',text:'铝卷开平 | 定尺开平 | 少量开平 | 精准数控 | 尾料少 | 零损耗 | 成本低'},
    {img:common.imgURL + 'process/3-4.png',text:'铝带分条 | 定尺宽度 | 少量分条 | 精度0.02 | 损耗少 | 成本低'},
    {img:common.imgURL + 'process/3-5.png',text:'拉丝 | 抛光 | 覆膜 | 阳极氧化铝板 | 铝棒 | 铝管 | 铝型材均可'}
  ]
  return <div>
    <Banner url='process.png'/>
    <div className='upwards' id='process1'></div>
    {/* <Title EN='ALUMINUM EXTRUSION' CH1='CNC' TIP='加工中心'/> */}
    {/* <section className={[styles.process1,'main'].join(' ')}>
      <div className={styles.process1L}>
        <h6>什么是CNC精密加工？</h6>
        <p>精密数控加工CNC（计算机数控）是指通过使用已编程为执行任意数量命令的计算机来实现机器仪器的自动化生产。 CNC精密 加工能够创建复杂零件而无需额外的进一步加工处理。通常精密数控加工可以在一台机器上制造出合格的成品零件。机加工过程去除多余的金属材料并使用各种切削工具来生成零件的最终形状，有时候形状非常复杂。通过使用计算机数控 (CNC) 可以显著的提高加工精度水平。</p>
        <div className={styles.imgBox}>
          <img src={common.imgURL+'process/1-1.png'}/>
          <img src={common.imgURL+'process/1-2.png'}/>
          <img src={common.imgURL+'process/1-3.png'}/>
        </div>
      </div>
      <img className={styles.process1R} src={common.imgURL+'process/1-4.png'} style={{width:'44%'}}/>
    </section>
    <div className={styles.process1B}>
      <div className={[styles.process1BC,'main'].join(' ')}>
        <div className={styles.process1BCL}>
          <b>严格生产<br></br>多年经验</b>
          <p>专注质量与服务</p>
        </div>
        <div className={styles.process1BCR}>
          {iconData.map((item,i)=>{
            return <div key={i}>
              <img src={item.icon}/>
              <span>{item.text1}</span>
              <p>{item.text2}</p>
            </div>
          })}
        </div>
      </div>
    </div> */}
    <div className='upwards' id='process2'></div>
    <Title EN='OUR ADVANTAGES' CH1='选择我们的' TIP='优势'/>
    <section>
      <div className={[styles.process2,'main'].join(' ')}>
        {process2Data.map((item,i)=>{
          // if(i % 2 ==0) 
          return <div key={i} className={[styles.process2C,styles.process2CL].join(' ')}>
            <img src={item.img}/>
            <div className={styles.processtext}>
              <h6>{item.title}<span>0{i+1}</span></h6>
              <b>{item.en}</b>
              <p><span>&oplus;</span>{item.li1}</p>
              {item.li2 && <p><span>&oplus;</span>{item.li2}</p>}
            </div>
          </div>
          // else return <div key={i} className={[styles.process2C,styles.process2CR].join(' ')}>
          //   <div>
          //     <h6><span>0{i+1}</span>{item.title}</h6>
          //     <b>{item.en}</b>
          //     <p><span>&oplus;</span>{item.li1}</p>
          //     {item.li2 && <p><span>&oplus;</span>{item.li2}</p>}
          //   </div>
          //   <img src={item.img}/>
          // </div>
        })}
      </div>
    </section>
    <div className={styles.process2F}>
      <div className={[styles.process2FC,'main'].join(' ')}>
      <p>我们的宗旨是做全国最全的铝材现货分销商。</p>
      <p>为了降低各个领域新客户的开发成本和四处找货的问题，节省采购铝材多重环节,</p>
      <p>大大提高铝材品种配备、少量生产、各种加工、央速交货的一站式服务。</p>
        <div className={styles.process2FItemC}>
          {process2Ffdata.map((item,i)=>{
            return <div key={i} className={styles.process2FItem}>
              <img src={item.img}/>
              <p>{item.text}</p>
            </div>
          })}
        </div>
      </div>
        
    </div>
    <div className='upwards' id='process3'></div>
    <Title EN='VIDEO PROCESSING' CH1='中库' TIP='加工' CH2='视频'/>
    <section className={[styles.process3,'main'].join(' ')}>
      {videoList.map((item,i)=>{
        return <div className={styles.videoItem} key={i}>
          <Player playsInline src={item.src}/>
          <div className={styles.videoTitle}>{item.title}</div>
        </div>
      })}
    </section>
    <div className='upwards' id='process4'></div>
    <section className={styles.process4}>
      <Title EN='PROCESS' CH1='定制' TIP='流程' />
      <div className={[styles.process4C,'main'].join(' ')}>
        {process4Data.map((item,i)=>{
          return <div key={i} className={styles.process4CI}><p>{item.text}</p></div>
        })}
      </div>
    </section>
  </div>
}