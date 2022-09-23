<template>
    <div class="pindao-container">
      <div class="tou_left">
         <p>最新帖子</p>
      </div>
      <div class="tou_right">
        <div class="d2">
            <i class="iconfont icon-shuaxin shuaxin"></i>
        </div>
      </div>
  
      <div class="zhong">
          <ul>
              <li v-for="it in data" :key="it.id">
                <img :src="it.pic">
                <p class="name">{{it.name}}</p>
              </li>
          </ul>
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
          data:[
              {id:1,name:'寒气又来了',pic:'https://img2.baidu.com/it/u=1111031032,1956894194&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
              {id:2,name:'寒气又来了',pic:'https://img2.baidu.com/it/u=1111031032,1956894194&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
              {id:3,name:'寒气又来了',pic:'https://img2.baidu.com/it/u=1111031032,1956894194&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
              {id:4,name:'寒气又来了',pic:'https://img2.baidu.com/it/u=1111031032,1956894194&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
              {id:5,name:'寒气又来了',pic:'https://img2.baidu.com/it/u=1111031032,1956894194&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
              {id:6,name:'寒气又来了',pic:'https://img2.baidu.com/it/u=1111031032,1956894194&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
              {id:7,name:'寒气又来了',pic:'https://img2.baidu.com/it/u=1111031032,1956894194&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
              {id:8,name:'寒气又来了',pic:'https://img2.baidu.com/it/u=1111031032,1956894194&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
          ]
        };
      },
      mounted() {
        
      },
    
  }
  </script>
    
  <style lang="less" scoped>
  // 中部区域start
  .zhong{
      position: absolute;
      width: 100%;
      height: 300px;
      top: 30px;
      overflow: hidden;
  }
  ul{
      width: 100%;
      height: 100%;
      overflow-y: auto;
      margin: 0;
      padding: 0;
  }
  ul::-webkit-scrollbar{
      width: 0 !important;
      height: 0;
  }//隐藏滚动条
  li{
      position: relative;
      left: 2.5%;
      width: 95%;
      height: 36px;
      list-style: none;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(220, 219, 219, 0.449);
  }
  li:last-child{
      border-bottom: 0px !important;
  }
  img{
      position: absolute;
      bottom: 3px;
      left: 5px;
      width: 25px;
      height: 25px;
      box-sizing: border-box;
      border: 1px solid rgba(220, 219, 219, 0);
      border-radius: 8px;
  }
  .name{
      position: absolute;
      top: 9px;
      left: 40px;
      font-size: 14px;
      color: rgb(15 23 42);
      letter-spacing: 0.5px;
  }
  
  // 中部区域end
  .pindao-container{
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
  .hui{
      background-color: rgb(241 245 249);
  }
  .pindao-container::-webkit-scrollbar{
      width: 0 !important;
      height: 0;
  }//隐藏滚动条
  .tou_left{
      position: absolute;
      left: 0px;
      top: 0px;
      width: 50%;
      height: 50px;
      cursor: default;
  }
  .tou_left p{
      position: absolute;
      top: 5px;
      left: 15px;
  }
  .tou_right{
      position: absolute;
      right: 10px;
      top: 0px;
      width: 50%;
      height: 50px;
      display: flex;
      justify-content: flex-end;
      align-items:flex-start;
  }
  .d2{
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      border: 1px solid rgba(0, 0, 0, 0);
      border-radius: 8px;
      cursor: pointer;
  }
  .d2:hover{
    background-color: rgb(241 245 249);
  }
  .shuaxin{
    font-size: 20px;
    color: rgb(59 130 246);
    font-weight: 600;
  }
  
  </style>