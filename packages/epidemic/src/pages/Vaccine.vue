<template>
  <div>
    <p class="card-title">世界累计确诊与疫苗接种人数</p>
    <div class="card-content">
      <canvas id="world-vaccine-chart" />
    </div>
  </div>
</template>

<script>
import F2 from '@antv/f2';
import axios from 'axios';
export default {
  name: 'vaccine',
  mounted() {
    axios.post('/pneumonia/queryWorldVaccinesCountList').then(({ data }) => {
      if (data.resultCode === '0') {
        const { dataList } = data.result;
        // Step 1: 创建 Chart 对象
        const chart = new F2.Chart({
          id: 'world-vaccine-chart',
          pixelRatio: window.devicePixelRatio // 指定分辨率
        });

        // Step 2: 载入数据源
        chart.source(dataList);

        chart.scale('date', {
          type: 'timeCat',
          tickCount: 3
        });

        chart.axis('date', {
          label: function label(text, index, total) {
            // 只显示每一年的第一天
            const textCfg = {};
            if (index === 0) {
              textCfg.textAlign = 'left';
            } else if (index === total - 1) {
              textCfg.textAlign = 'right';
            }
            return textCfg;
          }
        });

        chart.scale('vaccinesCount', {
          tickCount: 5
        });

        // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
        chart.line().position('date*vaccinesCount').color('type');

        // Step 4: 渲染图表
        chart.render();
      }
    });
  }
};
</script>
