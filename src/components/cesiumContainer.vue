<template>
  <div id="cesiumContainer">
  </div>
</template>

<script>
  import Cesium from 'cesium/Cesium';
  import widgets from 'cesium/Widgets/widgets.css';
  export default {
    name: 'cesiumContainer',
    mounted() {
      var viewer = new Cesium.Viewer('cesiumContainer', {
        animation: false, //是否显示动画控件
        baseLayerPicker: false, //是否显示图层选择控件
        geocoder: true, //是否显示地名查找控件
        timeline: false, //是否显示时间线控件
        sceneModePicker: true, //是否显示投影方式控件
        navigationHelpButton: false, //是否显示帮助信息控件
        infoBox: true, //是否显示点击要素之后显示的信息
        contextOptions: {
          webgl: {
            alpha: true
          }
        },
        selectionIndicator: false,
        homeButton: true,
        animation: false, //是否显示动画控件
        baseLayerPicker: false, //是否显示图层选择控件
        geocoder: false, //是否显示地名查找控件
        timeline: false, //是否显示时间线控件
        sceneModePicker: false, //是否显示投影方式控件
        navigationHelpButton: false, //是否显示帮助信息控件
        infoBox: false, //是否显示点击要素之后显示的信息
        fullscreenButton: false //是否显示全屏
      });
      viewer.scene.debugShowFramesPerSecond = true;
      //设置homebutton的位置
      Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(110.15, 34.54, 110.25, 34.56); //Rectangle(west, south, east, north)
      //设置初始位置
      viewer.camera.setView({
        // destination: Cesium.Cartesian3.fromDegrees(110.20, 34.55, 10000000)
        destination: Cesium.Cartesian3.fromDegrees(113.20, 23.55, 2000000), // 广州
      });
      // 添加卫星图
      viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
        url: "https://webst{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&style=6",
        subdomains: ["01", "02", "03", "04"], //多域名请求
      }));
      // 添加标注图
      viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
        url: "https://webst{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=8",
        subdomains: ["01", "02", "03", "04"], //多域名请求
      }));
      //
      const {
        imageryLayers,
        camera,
        clock,
        canvas,
        scene,
      } = viewer
      // imageryLayers.raiseToTop(tdtNoteLayer); //将注记图层置顶
      imageryLayers.alpha = 0.3; //改变透明度
      imageryLayers.brightness = 1.5; //改变亮度
      console.log(viewer, '=viewer=')





    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>