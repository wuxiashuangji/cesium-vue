import Cesium from 'cesium/Cesium';
/******************************/
// 添加卫星图
const gaodeWeixing = new Cesium.UrlTemplateImageryProvider({
  url: 'https://webst{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&style=6',
  subdomains: ['01', '02', '03', '04'] //多域名请求
});
// 添加标注图
const gaodeTitle = new Cesium.UrlTemplateImageryProvider({
  url: 'https://webst{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=8',
  subdomains: ['01', '02', '03', '04'] //多域名请求
});

/******************************/

//google 地图
// 谷歌交通地图地址： http: //www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i380072576!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0，

// 平面图地址2： http: //www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}，

// 影像图地址： http: //www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}，

// 影像注记层地址： http: //www.google.cn/maps/vt?lyrs=h@189&gl=cn&x={x}&y={y}&z={z}，

// 地形图层： http: //www.google.cn/maps/vt?lyrs=t@189&gl=cn&x={x}&y={y}&z={z}

/********************** */
const googleWeixing = new Cesium.UrlTemplateImageryProvider({
  url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
})
const googleTitle = new Cesium.UrlTemplateImageryProvider({
  url: 'http://www.google.cn/maps/vt?lyrs=h@189&gl=cn&x={x}&y={y}&z={z}'
})

/********************** */
const ImagerLayers = {
  gaodeWeixing,
  gaodeTitle,
  googleWeixing,
  googleTitle,
};
export default ImagerLayers;
