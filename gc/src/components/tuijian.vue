<template>
    <div class="tuijian-container" ref="tie">
        <div class="tou" ref="tou">

            <div class="tou_left">
               <div :class="['d1',this.currentIndex==0?'hui':'']" @click="setindex(0)">
                 <p :class="[this.currentIndex==0?'blue':'']">热门</p>
               </div>
               <div :class="['d1',this.currentIndex==1?'hui':'']" @click="setindex(1)">
                 <p :class="[this.currentIndex==1?'blue':'']">最新</p>
               </div>
               <div :class="['d1',this.show_hua?'hui':'']" @click="this.show_hua=!this.show_hua">
                 <p :class="[this.show_hua?'blue':'']">话题</p>
               </div>
            </div>
            <div class="tou_right">
               <div :class="['d2',this.xiang_or_lie?'hui':'']" @click="this.xiang_or_lie=true">
                 <i class="iconfont icon-16 icon"></i>
               </div>
               <div :class="['d2',this.xiang_or_lie?'':'hui']" @click="this.xiang_or_lie=false">
                 <i class="iconfont icon-daliebiao icon"></i>
               </div>
            </div>

        </div>
        <div class="zhong">
          <Tie :data="data[index]" :ids="'tie'+index" v-for="(it,index) in data" :key="it"></Tie>
        </div>
    </div>
  
</template>

<script>
import Tie from './lun_tie.vue'
export default {
  components:{
    Tie
  },
  data(){
        return{
          currentIndex:0,
          show_hua:false,
          xiang_or_lie:true,//用来控制帖子的展示形式
          data:[
            {title:'今天天气真不错',text:'嗯，真的不错',pics:['https://img0.baidu.com/it/u=148949568,4166927370&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500','https://img0.baidu.com/it/u=4060973165,1863006183&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500?w=290&h=499']},

            {title:'凡人修仙传好看不好看',text:'当然好看啦',pics:['https://img1.baidu.com/it/u=4248055985,1658539414&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=359','https://img2.baidu.com/it/u=2724602763,1337367591&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=403','https://img1.baidu.com/it/u=916491844,556938268&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=427','https://img1.baidu.com/it/u=994074686,1600151225&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=360']},
          ],
        }
    },

  methods:{
    setindex(index){
       this.currentIndex=index
    },
    scrollEvent(){
      const tou=this.$refs['tou']
      const tie=this.$refs['tie']
      var scrolltop=tie.scrollTop

      if(scrolltop==0){
          tou.style.cssText='position: absolute;'
      }else if(scrolltop>0){
          tou.style.cssText='position: sticky;top: 0px;z-index:2000;'
      }
    }
        
  },

  mounted(){
    const Tieview=this.$refs['tie']
    Tieview.addEventListener('scroll',this.scrollEvent, true)//加true是让鼠标拖动滚动条也能监听到滚动 
  },

}
</script>

<style lang="less" scoped>
.tuijian-container{
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
}
.tuijian-container::-webkit-scrollbar{
    width: 0 !important;
    height: 0;
}//隐藏滚动条
p{
    margin: 0px;

}
.tou{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid rgba(220, 219, 219, 0.744);
  border-radius: 10px;
}
.tou_left,.tou_right{
    margin: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.d1{
    width: 60px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default ;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 15px;
}
.d1 p{
  color: black;
  font-size: 15px;
  font-weight: 600;
}
.hui{
    background-color: rgb(241 245 249);
}
.d2{
    width: 40px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 10px;
}
.blue{
  color: rgb(59 130 246) !important;
}
.icon{
  font-size: 18px;
}
.zhong{
  position: absolute;
  top: 70px;
  width: 100%;
  min-height: 470px;
}
</style>