import { useRef, useState, useEffect } from 'react';

function MapComponent() {
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
                mapRef.current = new AMap.Map('container', {
                    // 设置地图容器id
                    viewMode: '3D', // 是否为3D地图模式
                    zoom: 19, // 初始化地图级别
                    center: [120.74306,31.352920], // 初始化地图中心点位置
                });
                const marker = new AMap.Marker({
                    position: new AMap.LngLat(120.74253,31.353105),
                    offset: new AMap.Pixel(-10, -10),
                    icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png", //添加 icon 图标 URL
                });
                var text = new AMap.Text({
                    text: "中库铝业发展(江苏)有限公司", //标记显示的文本内容
                    anchor: "center", //设置文本标记锚点位置
                    draggable: false, //是否可拖拽
                    cursor: "pointer", //指定鼠标悬停时的鼠标样式。
                    style: {
                      //设置文本样式，Object 同 css 样式表
                        "border-radius": "5px",
                        "background-color": "#f34234",
                        "width": "260px",
                        "border-width": 0,
                        "text-align": "center",
                        "font-size": "20px",
                        "color": "#fff",
                    },
                    position: [120.74260, 31.353080], //点标记在地图上显示的位置
                    });
                mapRef.current.add(marker);
                mapRef.current.add(text);
            })
        })  
        
    }
}, [])

    return (<div id="container" style={{width: "800px",height: "410px",}}/>);
}

export default MapComponent;