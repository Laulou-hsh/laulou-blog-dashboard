<template>
  <div class="chart">
    <div :id="id" class="chart-canvas" :style="{height: height + 'px'}"></div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  id: {
    type: String,
    default: 'line-chart',
  },
  height: {
    type: [Number, String],
    default: '170',
  },
  chart: {
    type: Object,
    required: true,
    xAxislDatas: Array,
    datasets: {
      label: String,
      data: Array,
    },
  },
})

const chart = ref(props.chart)

const {xAxislDatas} = chart.value
const {data} = chart.value.datasets
const {label} = chart.value.datasets

const option = {
  grid: {
    left: '10',
    right: '20',
    bottom: '8%',
    top: '12%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    textStyle: {
      color: '#fff',
    },
    borderWidth: 0,
    axisPointer: {
      type: 'none',
    },
  },
  xAxis: {
    type: 'category',
    data: xAxislDatas,
    boundaryGap: false, // 坐标轴两边留白策略
    axisLine: {
      show: false, // 隐藏X轴线
    },
    axisTick: {
      show: false, // 隐藏X轴刻度线
    },
    axisLabel: {
      color: '#f8f9fa',
      margin: 20,
      padding: 2,
      fontSize: 14,
      fontWeight: 300,
      fontFamily: 'Roboto',
      lineHeight: 2,
    },
    splitLine: {
      show: false, // 显示X轴网格线
      lineStyle: {
        color: 'rgba(255, 255, 255, .2)',
        type: 'dashed',
      },
    },
  },
  yAxis: {
    type: 'value',
    splitNumber: 3, // Y轴分段数
    axisLine: {
      show: false, // 隐藏Y轴线
    },
    axisTick: {
      show: false, // 隐藏Y轴刻度线
    },
    axisLabel: {
      color: '#fff',
      padding: 0,
      fontSize: 14,
      fontWeight: 300,
      fontFamily: 'Roboto',
      lineHeight: 2,
    },
    splitLine: {
      show: true, // 显示Y轴网格线
      lineStyle: {
        color: 'rgba(255, 255, 255, .4)',
        type: 'dashed',
      },
    },
    min: 0,
    max: Math.max(...data) < 100 ? Math.max(...data) + 10 : (Math.ceil(Math.max(...data) / 100) + 1) * 100,
  },
  series: [
    {
      name: label,
      data: data,
      type: 'line',
      barMaxWidth: 6,
      symbolSize: 10,
      itemStyle: {
        color: 'rgba(255, 255, 255)',
        opacity: 0.8,
      },
      lineStyle: {
        color: 'rgba(255, 255, 255)',
        opacity: 0.8,
        width: 4,
      },
      areaStyle: {
        color: 'transparent',
      },
      emphasis: {
        scale: 0.8, // 鼠标移动到数据点时，将数据点缩小为初始大小的90%
      },
    },
  ],
}

onMounted(() => {
  const chartDom = document.getElementById(props.id)
  const echart = echarts.init(chartDom)
  setTimeout(echart.resize, 200)
  option && echart.setOption(option)
  window.addEventListener('resize', () => setTimeout(echart.resize, 200))
})
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}

.chart-canvas {
  width: 100%;
  transition: all 0.2s ease-in-out;
}
</style>
