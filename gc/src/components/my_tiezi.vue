<template>
    <div class="my_tiezi-container">
        <div class="tabs">
            <div :class="['tab',this.currentIndex==0||this.index==0?'hui':'',this.currentIndex==0?'blue':'']" @mouseenter="this.index=0" @mouseleave="this.index=3" @click="setIndex(0)">
              <p>帖子</p>
            </div>
            <div :class="['tab',this.currentIndex==1||this.index==1?'hui':'',this.currentIndex==1?'blue':'']" @mouseenter="this.index=1" @mouseleave="this.index=3" @click="setIndex(1)">
              <p>回复</p>
            </div>
            <div :class="['tab',this.currentIndex==2||this.index==2?'hui':'',this.currentIndex==2?'blue':'']" @mouseenter="this.index=2" @mouseleave="this.index=3" @click="setIndex(2)">
              <p>浏览记录</p>
            </div>
        </div>
        <div class="neirong">
            <div class="tie" v-show="this.currentIndex==0">
              <p>暂时没有发布的帖子</p>
            </div>
            <div class="fu" v-show="this.currentIndex==1">
              <p>暂时还没有回复</p>
            </div>
            <div class="liu" v-show="this.currentIndex==2">
              <p>暂时还没有浏览记录</p>
            </div>
        </div>
        
    </div>
</template>
  
<script>
import bus from '../util/bus.js'
export default {
  data() {
      return {
        currentIndex:0,
        index:3,
      };
    },
    mounted() {
      
    },
    methods:{
        setIndex(index){
          this.currentIndex=index 
        },   
    },
    created(){
      
    },
    activated(){
      
    },
  
}
</script>
  
<style lang="less" scoped>
//内容start
.neirong{
    position: absolute;
    width: 100%;
    top: 50px;
    height: 450px;
    overflow-y: auto;
    user-select: none;
}
//内容end
.my_tiezi-container{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
p{
  margin: 0px;
}
.my_tiezi-container::-webkit-scrollbar{
    width: 0 !important;
    height: 0;
}//隐藏滚动条
.tabs{
  position: absolute;
  width: 95%;
  left: 2.5%;
  top: 0px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(220, 219, 219, 0.693);
}
.tab{
  margin-right: 5px;
  display: flex;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid rgba(220, 219, 219, 0);
  border-radius: 10px;
  cursor: default;
  user-select: none;
}
.hui{
    background-color: rgba(213, 211, 211, 0.567);
}
.blue{
    background-color: rgba(213, 211, 211, 0.567);
    color: rgb(59 130 246);
}
</style>