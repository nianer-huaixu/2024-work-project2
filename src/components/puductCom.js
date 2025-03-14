import { store } from '@/redux/store'
import styles from '@/styles/product.module.scss'

const {common} = store.getState()
export default function ProductCom(){
  const data1 = {
    adv:[
      '我们采用先进的预拉伸工艺，消除内应力，加工过程不变形',
      '表面抛光拉丝处理，亮面有光泽，可无需铣面直接使用',
      '材料均质化处理，阳极氧化后漂亮无色差',
      '回火工艺精湛，延展性好，使用中高粘性PE膜无气泡，冲压不易脱落',
      '采用先进淬火及时效处理，保证铝材性能的强度硬度，加工效率高，精度高，光洁度好',
      '我们的原料全部采用先进超声波探伤检测，保证了产品无气孔无裂纹等缺陷',
      '我们铝材表面会形成一层抗氧化膜，可以长年抗腐蚀和抗氧化',
      '我们铝材出厂前都要通过专业人员三道质检，有合作十年以上的物流，运输快捷，保证货物的品质和安全',
      '我们随货附带原厂质保书，又有专业进口光谱仪、硬度计等设备，可免费提供来样分析和检测',
      '来图来样我们可以免费图纸设计及拿样'
    ],
    nor:[
      '加工过程中生产变形',
      '表面灰暗无光泽',
      '阳极氧化后有黑线、花斑、明显色差等 ',
      '冲压加工铝板开裂和脱膜现象',
      '机加工粘刀，车铣加工精度差',
      '加工后有砂眼、气孔、裂纹缺陷',
      '易氧化腐蚀，产生白斑等，长期使用有风险',
      '表面有划痕划伤等，运输造成二次伤害等',
      '无质保，无售后，无法溯源',
      '没有图纸无法接单'
    ]
  }
  const data2 = [
    {
      title:'实力厂家 任意切割',
      text1:'支持多种方式订单，可整批成吨购买也可以单个切割定制',
      text2:'可按客户需求切割2000MM以内，厚度0.5~100MM的任意尺寸'
    },
    {
      title:'库存充足 交货神速',
      text1:'现货供应，支持开具发票，现货秒发，送货上门',
      text2:'仓库面积大，常规铝材海量库存品类众多，规格齐全，1~7系列铝材及各类规格，均有常备库存'
    },
    {
      title:'工艺先进 技术一流',
      text1:'地处全球制造业中心城市江苏，制造业发达，技术积累深厚',
      text2:'采用先进铝板设备，加工精度好，产品性能优越'
    },
    {
      title:'专业团队 服务高配',
      text1:'核心人员平均工龄10年以上，“骨灰级”铝板从业者，保证能对客户360度服务',
      text2:'公司配有专业的工程师，在精密加工，阳极氧化方面有丰富经验可提供专业的铝材解决方案'
    }
  ]
  return <div className={styles.productCom}>
    <div className='upwards' id='ouradvantage'></div>
    <div className={styles.productCom1}>
      <div className={[styles.productCom1M,'main'].join(' ')}>
        <div className={styles.productCom1L}>
          <h4>我们的优势</h4>
          <p>
            <b>实力雄厚不惧竞争<br></br>
            比过才知道<br></br>
            ————</b>
          </p>
          <p>苛求品质/严格把关质量</p>
        </div>
        <div className={styles.productCom1C}>
          <h4>中库“铝材”</h4>
          {data1.adv.map((item,i)=>{
            return <p key={i}>{item}</p>
          })}
        </div>
        <div className={styles.productCom1R}>
          <h4>普通“铝材”</h4>
          {data1.nor.map((item,i)=>{
            return <p key={i}>{item}</p>
          })}
        </div>
      </div>
    </div>
    <div className='upwards' id='strength'></div>
    <div className={[styles.productCom2,'main'].join(' ')}>
      {data2.map((item,i)=>{
        return <div key={i} className={styles.productCom2Item}>
          <img src={common.imgURL + 'product/'+(i+1)+ '.png'}/>
          <div>
            <p>{item.text1}</p>
            <p>{item.text2}</p>
          </div>
        </div>
      })}
    </div>
  </div>
}