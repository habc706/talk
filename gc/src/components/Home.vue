<template>
  <div class="home-container">
    <!-- 左边头部区域 -->
    <div class="tou_left">
      <div :class="['d1',tui_or_guan?'blue':'']" @click="tuijian">
        <p :class="[tui_or_guan?'blue':'']">推荐</p>
      </div>
      <div :class="['d1',tui_or_guan?'':'blue']" @click="guanzhu">
        <p :class="[tui_or_guan?'':'blue']">关注</p>
      </div>
      <div class="send" @click="send">
        <p>发帖</p>
      </div>
    </div>
    <!-- 左边中后区域-->
    <div class="tui_or_guan">
       <Tuijian v-show="tui_or_guan"></Tuijian>
       <Guanzhu v-show="!tui_or_guan"></Guanzhu>
    </div>
    <!-- 右边个人主页区域 -->
    <div class="right">
       <User ids="home"></User>
    </div>
  </div>
</template>

<script>
import Tuijian from './tuijian.vue'
import Guanzhu from './guanzhu.vue'
import User from './user.vue'
import bus from '../util/bus.js'
export default {
  components:{
    Tuijian,
    Guanzhu,
    User,
  },
  data(){
        return{
          tui_or_guan:true,//TRUE表示推荐
        }
    },

    methods:{
      tuijian(){
        this.tui_or_guan=true
      },

      guanzhu(){
        this.tui_or_guan=false
      },

      send(){
         
      },
        
    },
    created(){
      bus.emit('setCurrentIndex_to_tab_left',0) 
    },
    activated(){
      bus.emit('setCurrentIndex_to_tab_left',0) 
    },

}
</script>

<style lang="less" scoped>
.home-container{
  position: relative;
  width: 100%;
}
p{
  margin: 0px;
}
//左边头部区域start
.tou_left{
  position: absolute;
  top: 0px;
  left: 10px;
  width: 636px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items:flex-start;
}
.d1,.send{
  box-sizing: border-box;
  width: 64px;
  height: 32px;
  padding: 0px 12px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.d1 p{
  font-weight: 600;
  cursor:default;
}
.send p{
  cursor:default;
}
.blue{
  background-color: rgb(219 234 254);
  color: rgb(59 130 246);
}
.send{
  position: absolute;
  top: 4px;
  right: 0px;
  width: 60px !important;
  height: 28px !important;
  padding: 0px 10px;
  background-color:  rgb(59 130 246);
  color: aliceblue;
}
//左边头部区域end

//左边中后区域start
.tui_or_guan{
  position: absolute;
  top: 40px;
  left: 10px;
  width: 636px;
  height: 90%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
}
//左边中后区域end

//右边个人主页区域start
.right{
  position: absolute;
  left: 660px;
  width: 300px;
  height: 95%;
}
//右边个人主页区域end


</style>