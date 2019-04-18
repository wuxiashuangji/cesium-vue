<template>
  <div id="cesiumContainer">
  </div>
</template>

<script>
  import Cesium from 'cesium/Cesium';
  import widgets from 'cesium/Widgets/widgets.css';
  import czml from './children/data.js'
  import ImagerLayers from './children/imagerLayers.js'
  const defaulOptions = {
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
    fullscreenButton: false //是否显示全屏
  }

  export default {
    name: 'cesiumContainer',
    mounted() {
      var viewer = new Cesium.Viewer('cesiumContainer', defaulOptions);
      // 开启fps监控, 了解动画帧性能
      viewer.scene.debugShowFramesPerSecond = true;
      //设置homebutton的位置
      Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(112.15, 24.54, 112.25, 24.56); //Rectangle(west, south, east, north)
      //设置初始位置
      viewer.camera.setView({
        // destination: Cesium.Cartesian3.fromDegrees(110.20, 34.55, 10000000)
        destination: Cesium.Cartesian3.fromDegrees(112.5, 23.5, 200), // 广州
      });
      // 添加卫星图
      viewer.imageryLayers.addImageryProvider(ImagerLayers.googleWeixing);
      // 添加标注图
      viewer.imageryLayers.addImageryProvider(ImagerLayers.googleTitle);
      // 加载模型json数据, 丢入实体
      var dataSourcePromise = Cesium.CzmlDataSource.load(czml);

      viewer.dataSources.add(dataSourcePromise);
      viewer.zoomTo(dataSourcePromise);
      const {
        imageryLayers,
        camera,
        clock,
        canvas,
        scene,
      } = viewer
      // imageryLayers.raiseToTop(tdtNoteLayer); //将注记图层置顶
      // imageryLayers.alpha = 0.3; //改变透明度
      // imageryLayers.brightness = 1.5; //改变亮度
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>