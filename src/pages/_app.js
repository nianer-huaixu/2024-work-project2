import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store'

import Header from '../components/header'
import Footer from '../components/footer'

import '@/styles/globals.scss'

// EC

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [curPath,setCurPath] = useState(router.asPath)
  useEffect(()=>{
    setCurPath(router.asPath)
    if(typeof document !== 'undefined'){
      BaiduStatistics()
      EC(window, document)
    }
  },[router.asPath])
  
  function EC(W, D){
    W.ec_corpid = '11627559';
    W.ec_cskey = 'kkd1a23CLKZMWrHPzz';
    W.ec_scheme = '0';
    var s = D.createElement('script');
    s.charset = 'utf-8';
    s.src = '//1.staticec.com/kf/sdk/js/ec_cs.js';
    s.setAttribute('defer', 'defer');
    D.getElementsByTagName('head')[0].appendChild(s);
  }
  var _hmt = _hmt || [];
  function BaiduStatistics() {
      var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?7be846a03ac4bafb4b100bcd1b8d4f41";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  };

  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Header path={curPath}/>
      <Component {...pageProps}/>
      <Footer/>
    </PersistGate>
  </Provider>
  )
}
