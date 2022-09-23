<template>
    <div class="shoucang-container">
      <div class="left">
        <!-- 头部 -->
        <div class="tou">
          <div :class="['back',this.isback?'hui1':'']" @mousemove="this.isback=true" @mouseleave="this.isback=false">
            <i class="iconfont icon-xitongfanhui fanhui" @click="this.$router.back();this.isback=false"></i>
          </div>
          <p>收藏夹</p>
        </div>
        <!-- 底部 -->
        <div class="bottom">

        </div>

      </div>
      <div class="right">
        <User ids="shoucang"></User>
      </div>
    </div>
</template>
  
<script>
import bus from '../util/bus.js'
import User from './user.vue'
export default {
  components:{
    User,
  },
  computed:{
    
  },
  mounted(){
    
  },
  data() {
      return {
        a:null,
        isback:false,
      };
    },
  created(){
    bus.emit('setCurrentIndex_to_tab_left',1) 
  },
  activated(){
    bus.emit('setCurrentIndex_to_tab_left',1) 
  },
  
}
</script>
  
<style lang="less" scoped>
//头部start
.tou{
  position: absolute;
  top: 0px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid rgba(175, 175, 175, 0.416);
}
.back{
  position: absolute;
  left: 10px;
  top: 10px;
  width: 35px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid rgba(220, 219, 219, 0);
  border-radius: 8px;
}
.fanhui{
  font-size: 20px;
  font-weight: 600;
  color: rgb(59 130 246);
}
.hui1{
  background-color: rgba(177, 177, 177, 0.285);
}
.tou p{
  margin-top: 5px;
  font-size: 19px;
  font-weight: 600;
  color: black;
  letter-spacing: 1px;
}
//头部end
//底部start
.bottom{
  position: absolute;
  width: 100%;
  top: 41px;
  min-height: 545px;
}
//底部end
.shoucang-container{
  position: relative;
  width: 100%;
  height: 100%;
}
p{
  margin: 0px;
}
.shoucang-container::-webkit-scrollbar{
    width: 0 !important;
    height: 0;
}//隐藏滚动条
.left{
  position: absolute;
  top: 0px;
  left: 10px;
  width: 636px;
  height: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
}
.right{
  position: absolute;
  left: 660px;
  width: 300px;
  height: 95%;
  overflow: hidden;
}
</style>