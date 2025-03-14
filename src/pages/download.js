import { store } from '../redux/store'
import styles from '@/styles/download.module.scss'
import Banner from '@/components/banner'

export default function Download(){
  const {common} = store.getState()
  const data = [
    {title:'1050铝板（AL≥99.5%纯铝）'},
    {title:'6082精拉铝棒（Al+Mg+Si合金）'},
    {title:'6082六角铝棒（Al+Mg+Si合金）'},
    {title:'1050铝板（AL≥99.5%纯铝）'},
    {title:'6082精拉铝棒（Al+Mg+Si合金）'},
    {title:'6082六角铝棒（Al+Mg+Si合金）'},
    {title:'1050铝板（AL≥99.5%纯铝）'},
    {title:'6082精拉铝棒（Al+Mg+Si合金）'},
    {title:'6082六角铝棒（Al+Mg+Si合金）'}
  ]
  return <div>
    <Banner url='download.png'/>
    <div className={[styles.download,'main'].join(' ')}>
      <div className={styles.downloadT}>资料下载</div>
      <div className={styles.downloadC}>
        {data.map((item,i)=>{
          return <div key={i} className={styles.downloadCI}>
            <div className={styles.img}></div>
            <div className={styles.downloadCIR}>
              <p>{item.title}</p>
              <div>
                <span>直接下载</span>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  </div>
}