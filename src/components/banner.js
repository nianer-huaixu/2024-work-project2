import { store } from "../redux/store"
import { useState,useEffect } from "react"
export default function Banner(props){

  const [windowSize,setWindowSize]  = useState(getWindowSize())
  function getWindowSize(){
    const {innerWidth} = window
    return {innerWidth}
  }
  useEffect(()=>{
    // 处理屏幕宽度变化
    function handleWindowResize(){
      setWindowSize(getWindowSize())
    }
    window.addEventListener('resize',handleWindowResize)
    return ()=>{
      window.removeEventListener('resize',handleWindowResize)
    }
  })
  const {common} = store.getState()
  const {url} = props
  return <div className="bannerWrap">
    {windowSize.innerWidth > 680 && <img src={common.imgURL + '/banner/pc/' + url}/>}
    {windowSize.innerWidth < 680 && <img src={common.imgURL + '/banner/mobile/' + url}/>}
  </div>
}