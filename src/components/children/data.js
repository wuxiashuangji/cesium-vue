import Cesium from 'cesium/Cesium';

var czml = [{
    id: 'document',
    name: 'box',
    version: '1.0'
  },
  {
    id: 'shape2',
    name: 'Red box with black outline',
    position: {
      cartographicDegrees: [113.270832, 23.135077, 20.0]
    },
    box: {
      dimensions: {
        cartesian: [4000.0, 3000.0, 5000.0]
      },
      material: {
        solidColor: {
          color: {
            rgba: [255, 6, 6, 100]
          }
        }
      }, // 填充物材质
      fill: false, // 不填充
      outline: true, // 边框
      // outlineColor: Cesium.Color.YELLOW , // 边框颜色
      outlineColor: {
        rgba: [222, 222, 222, 255]
      }, // 边框颜色
    }
  },
  {
    id: 'shape3',
    name: 'Red box with black outline',
    position: {
      cartographicDegrees: [112.0, 24.5, 0.0]
    },
    box: {
      dimensions: {
        cartesian: [40000.0, 30000.0, 50000.0]
      },
      material: {
        solidColor: {
          color: {
            rgba: [100, 100, 255, 124]
          }
        }
      },
      fillColor: 'green',
      outline: true,
      outlineColor: {
        rgba: [222, 222, 222, 255]
      }
    }
  },
];
export default czml;
