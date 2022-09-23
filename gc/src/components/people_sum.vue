<template>
    <div class="people_sum-container">
        <div class="tou">
            <div class="user_sum">
              <p class="p1">总用户数</p>
              <p class="p2">4837</p>
            </div>
            <div class="tie_sum">
              <p class="p1">总帖子数</p>
              <p class="p2">2401</p>
            </div>
            <p class="p3">过去10天的新增用户数量</p>
        </div>

        <div class="zhong" :id="ids" @click="show" :key="key">
        
        </div>
        
      
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  export default {
  props:{
    ids:{
      type:String,
      required:true,
    } 
  },
    
  data() {
      return {
       data: [4, 5, 6, 7,4, 5, 6, 7,4, 5],
       myChart:null,
       option:null,
       key:0,
      };
    },
    mounted() {
      this.option = {
        title: [
         {
          text: ''
         }
        ],
        polar: {
          radius: [30, '80%'],
          polarIndex:5
        },
        radiusAxis: {
          max: 10
        },
        angleAxis: {
          type: 'category',
          data: ['day1', 'day2', 'day3', 'day4','day5','day6','day7','day8','day9','day10'],
          startAngle: 90
        },
        tooltip: {},
        series: {
          type: 'bar',
          data: this.data,
          coordinateSystem: 'polar',
          label: {
            show: false,
            position: 'middle',
            formatter: '{b}: {c}'
          }
        },
        animation: true
      };
      this.myChart = echarts.getInstanceByDom(document.getElementById(this.ids))
      if (this.myChart == null) {
        this.myChart = echarts.init(document.getElementById(this.ids));
      }
      this.myChart.setOption(this.option)
    },
    methods:{
      show(){
        // this.option.animation=false
        // setTimeout(() => {
        //   this.option.animation=true
        //   console.log(this.option.animation);
        // }, 1000);
        // console.log(this.option.animation);
      }
    }
  
  }
  </script>
  
  <style lang="less" scoped>
  .people_sum-container{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-sizing: border-box;
    border: 1px solid rgba(220, 219, 219, 0.744);
    border-radius: 10px;
    user-select: none;
  }
  p{
    margin: 0px;
  }
  .people_sum-container::-webkit-scrollbar{
    width: 0 !important;
    height: 0;
  }//隐藏滚动条
  .tou{
    position: absolute;
    top: 0px;
    left: 2.5%;
    width: 95%;
    height: 70px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(220, 219, 219, 0.46);
  }
  .user_sum{
    position: absolute;
    left: 0px;
    width: 50%;
    height: 100%;
  }
  .tie_sum{
    position: absolute;
    right: 0px;
    width: 50%;
    height: 100%;
  }
  .p1{
    position: absolute;
    left: 10px;
    top: 5px;
  }
  .p2{
    position: absolute;
    left: 10px;
    bottom: 0px;
    font-size: 30px;
  }
  .zhong{
    position: absolute !important;
    bottom: 0px;
    width: 100%;
    height: 280px;
  }
  .p3{
    position: absolute;
    bottom: -25px;
    left: 12px;
    z-index: 100;
  }
  </style>