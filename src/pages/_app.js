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
