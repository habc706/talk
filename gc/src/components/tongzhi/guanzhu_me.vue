<template>
  <div class="guanzhu_me-container">
      <div :class="['back',this.isback?'hui1':'']" @mousemove="this.isback=true" @mouseleave="this.isback=false">
        <i class="iconfont icon-xitongfanhui fanhui"></i>
      </div>
      
      <div class="tou">
          <p class="p1">关注我的</p>
      </div>
      <div class="zhong">
          <div class="none">
              <div class="none1">
                  <p class="shang">没有任何通知</p>
              </div>
              <div class="none1">
                  <p class="xia">在这里看到相关通知内容</p>
              </div>
              
              
          </div>

      </div>
    
  </div>
</template>

<script>
import bus from '../../util/bus.js'
export default {
data() {
    return {
      isback:false,
    };
  },
  mounted() {
    
  },
  created(){
    
  },
  activated(){
    
  },

}
</script>

<style lang="less" scoped>
.none{
  position: absolute;
  top: 25%;
  width: 100%;
}
.none1{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shang{
  font-size: 17px;
  font-weight: 600;
  color: black;
}
.xia{
  font-size: 15px;
  font-weight: 600;
  color: rgb(100 116 139);
}
.tou{
  position: absolute;
  top: -2px;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.zhong{
  position: absolute;
  top: 50px;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid rgba(220, 219, 219, 0.744);
  border-radius: 10px;
  min-height: 200px;
  max-height: 100%;
  overflow: auto;
}
.p1{
  font-size: 18px;
  color: black;
  font-weight: 600;

}
.back{
position: absolute;
left: 5px;
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
.guanzhu_me-container{
position: relative;
width: 100%;
height: 100%;
}
p{
margin: 0px;
}
.guanzhu_me-container::-webkit-scrollbar{
  width: 0 !important;
  height: 0;
}//隐藏滚动条
</style>