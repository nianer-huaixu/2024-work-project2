import { useRef, useState, useEffect } from 'react';

function IndexMapComponent() {
	const mapRef = useRef(null)
	const [amapLoaded, setAmapLoaded] = useState(false)
	
	useEffect(() => {
		if (typeof window !== "undefined") {
		import('@amap/amap-jsapi-loader').then(AMapLoader => {
			AMapLoader.load({
			key: '84fa12c1392c9297e95ed96684eacd07',
			version: '2.0',
			}).then(() => {
				setAmapLoaded(true)
				mapRef.current = new AMap.Map('container1', {
					// 设置地图容器id
					viewMode: '3D', // 是否为3D地图模式
					zoom: 5.1, // 初始化地图级别
					center: [104.04306,32.0282920], // 初始化地图中心点位置
				});
				const icon = 'https://www.yangdong.co:8443/zhongku/index/map.png'
				const icon1 = 'https://www.yangdong.co:8443/zhongku/index/map1.png'
				const icon2 = 'https://www.yangdong.co:8443/zhongku/index/map2.png'
				const icon3 = 'https://www.yangdong.co:8443/zhongku/index/map3.png'
				const icon4 = 'https://www.yangdong.co:8443/zhongku/index/map4.png'
				const icon5 = 'https://www.yangdong.co:8443/zhongku/index/map5.png'
				const icon6 = 'https://www.yangdong.co:8443/zhongku/index/map6.png'
				const icon7 = 'https://www.yangdong.co:8443/zhongku/index/map7.png'
				const markers = [
					{icon: icon1,position: [120.585294,31.299758]}, 
					{icon: icon1,position: [121.473667,31.230525]}, 
					{icon: icon1,position: [118.796624,32.059344]}, 
					{icon: icon1,position: [120.980795,31.385476]}, 
					{icon: icon1,position: [120.121288,30.222724]}, 
					{icon: icon1,position: [121.62454,29.860258]},
					{icon: icon1,position: [120.311889,31.491064]},
					{icon: icon1,position: [118.333439,32.255904]},
					{icon: icon1,position: [120.284794,31.921642]},
					{icon: icon1,position: [119.974092,31.811313]},
					{icon: icon1,position: [120.755623,30.746814]},
					{icon: icon1,position: [120.312724,36.064831]},
					{icon: icon1,position: [117.120128,36.652069]},
					{icon: icon1,position: [117.283752,34.204224]},
					{icon: icon1,position: [115.857972,28.682976]},
					{icon: icon1,position: [116.587116,35.415117]},
					{icon: icon2,position: [117.201509,39.085318]},
					{icon: icon2,position: [115.464523,38.874476]},
					{icon: icon2,position: [116.683546,39.538304]},
					{icon: icon2,position: [108.939645,34.343207]},
					{icon: icon2,position: [116.838715,38.304676]},
					{icon: icon3,position: [123.464675,41.677576]},
					{icon: icon3,position: [121.614786,38.913962]},
					{icon: icon3,position: [122.219148,40.625027]},
					{icon: icon3,position: [110.200162,20.046316]},
					{icon: icon4,position: [114.304569,30.593354]},
					{icon: icon4,position: [113.658097,34.745795]},
					{icon: icon4,position: [113.022354,34.748207]},
					{icon: icon4,position: [112.938882,28.228304]},
					{icon: icon5,position: [106.258889,38.472273]},
					{icon: icon5,position: [103.834228,36.060798]},
					{icon: icon5,position: [101.777795,36.616621]},
					{icon: icon5,position: [106.230977,38.487783]},
					{icon: icon6,position: [106.551787,29.56268]},
					{icon: icon6,position: [104.066301,30.572961]},
					{icon: icon7,position: [113.751884,23.021016]},
					{icon: icon7,position: [114.057939,22.543527]},
					{icon: icon7,position: [108.366407,22.8177]},
					{icon: icon7,position: [110.200162,20.046316]}
				];
				markers.forEach(function(marker) {
					new AMap.Marker({
						map: mapRef.current,
						icon: marker.icon,
						position: [marker.position[0], marker.position[1]],
						offset: new AMap.Pixel(-13, -30)
					});
				});
				mapRef.current.add(markers);
			})
		})
	}
}, [])
	return (<div id="container1" style={{width: "100%",height: "700px",}}/>);
}

export default IndexMapComponent;