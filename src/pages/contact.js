import { store } from '../redux/store'
import styles from '@/styles/contact.module.scss'
import Banner from '@/components/banner'

export default function Contact(){
  const {common} = store.getState()
  const contactData1 = [
    {icon:common.imgURL+'/contact/icon1.png',text:'公司地址',text1:'江苏省苏州市唯亭镇工业园区中库铝业'},
    {icon:common.imgURL+'/contact/icon2.png',text:'销售热线一',text1:'0512-62522398'},
    {icon:common.imgURL+'/contact/icon2.png',text:'销售热线二',text1:'0512-62521178'},
    {icon:common.imgURL+'/contact/icon3.png',text:'业务传真',text1:'0512-62388198'}
  ]
  return <div>
    <Banner url='contact.png'/>
    <div className={[styles.contactW,'main'].join(' ')}>
      <div className={styles.contact1}>
        <div className={styles.contact1L}>
          <h4>中库铝业（江苏）有限公司</h4>
          {contactData1.map((item,i)=>{
            return <div key={i} className={styles.contact1I} style={{gridColumnStart:i==0?'1':'',gridColumnEnd:i==0?'4':'',}}>
              <div>
                <img src={item.icon}/>
                <span>{item.text}</span>
              </div>
              <p>{item.text1}</p>
            </div>
          })}
          <button className='redBtn'>
            <a target="_blank" href='https://html.ecqun.com/kf/sdk/openwin.html?corpid=11627559&cstype=rand&mode=0&cskey=kkd1a23CLKZMWrHPzz&scheme=0&source=100'>立即咨询</a>
          </button>
        </div>
        <div className={styles.contact1R}>
          <h4>杨小姐</h4>
          <p style={{marginBottom:'.125rem'}}>技术总监 / Technical Director</p>
          <p>电话：188-9696-5770</p>
          <p>传真：0512-62522398</p>
          <p>网址：www.china-zhongku.com</p>
          <img src={common.imgURL + 'contact/erweima.jpg'}/>
        </div>
      </div>
      <div className={styles.contact2}>
        <div className={styles.contact2L}></div>
        <div className={styles.contact2R}></div>
      </div>
    </div>
    <div className={styles.contact3}>
      <div className='main'>
        <p>集全铝，大资源-让你在制造行业中游刃有余</p>
        <p>Set all aluminum,big resources-alows you to operate in the manufactring industry</p>
      </div>
      </div>
  </div>
}