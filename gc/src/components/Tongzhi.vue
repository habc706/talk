<template>
    <div class="home-container">
      <div class="left">
        <p class="p1">通知</p>
        <ul>
          <li :class="[this.currentIndex==0?'hui':'',this.index==0?'border-left':'']" @click="setindex(0)" @mouseenter="this.currentIndex=0" @mouseleave="this.currentIndex=4">
            <p :class="[this.index==0?'pp':'']">评论和回复</p>
          </li>
          <li :class="[this.currentIndex==1?'hui':'',this.index==1?'border-left':'']" @click="setindex(1)" @mouseenter="this.currentIndex=1" @mouseleave="this.currentIndex=4">
            <p :class="[this.index==1?'pp':'']">赞和收藏</p>
          </li>
          <li :class="[this.currentIndex==2?'hui':'',this.index==2?'border-left':'']" @click="setindex(2)" @mouseenter="this.currentIndex=2" @mouseleave="this.currentIndex=4">
            <p :class="[this.index==2?'pp':'']">关注我的</p>
          </li>
          <li :class="['li',this.currentIndex==3?'hui':'',this.index==3?'border-left':'']" @click="setindex(3)" @mouseenter="this.currentIndex=3" @mouseleave="this.currentIndex=4">
            <p :class="[this.index==3?'pp':'']">系统通知</p>
          </li>
        </ul>
      </div>
      <div class="right">
        <router-view v-slot="{ Component }">
              <keep-alive>
                 <component :is="Component" />
              </keep-alive>
        </router-view>   
      </div>
    </div>
</template>
  
<script>
import bus from '../util/bus.js'
export default {
  data() {
      return {
        currentIndex:null,
        index:0,
      };
    },
    methods:{
      setindex(index){
         this.index=index
         switch (this.index) {
                case 0: this.$router.push('/tab/tongzhi/comment'); break;
                case 1: this.$router.push('/tab/tongzhi/zan'); break;
                case 2: this.$router.push('/tab/tongzhi/guanzhu_me'); break;
                case 3: this.$router.push('/tab/tongzhi/system_notice'); break;
                default:
                    break;
            }
      },
    },
    mounted() {
      
    },
    created(){
      bus.emit('setCurrentIndex_to_tab_left',3) 
    },
    activated(){
      bus.emit('setCurrentIndex_to_tab_left',3) 
    },
  
}
</script>
  
<style lang="less" scoped>
  //右边区域start
.right{
  position: absolute;
  left: 326px;
  width: 650px;
  height: 100%;
}
//右边区域end
//左边区域start
.left{
  position: absolute;
  left: 10px;
  width: 316px;
  height: 100%;
}
.p1{
  position: absolute;
  left: 20px;
  top: 5px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  color: black;
}
ul{
  margin: 0;
  margin-top: 50px;
  padding: 0px;
  width: 95%;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid rgba(220, 219, 219, 0.744);
  border-radius: 10px;
  overflow: hidden;
}
.hui{
    background-color: rgb(241 245 249);
}
.border-left{
  border-left: 2px solid red;
}
li{
  position: relative;
  list-style: none;
  text-align: left;
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(220, 219, 219, 0.744);
  user-select: none;
}
.li{
  border-bottom: 0px !important;
}
.pp{
  left: 8px !important;
}
li p{
  position: absolute;
  left: 10px;
  letter-spacing: 0.5px;
  cursor: default;
}
//左边区域end
.home-container{
  position: relative;
  width: 100%;
  height: 100%;
}
p{
  margin: 0px;
}
.home-container::-webkit-scrollbar{
    width: 0 !important;
    height: 0;
}//隐藏滚动条
</style>